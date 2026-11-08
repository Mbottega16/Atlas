#!/usr/bin/env node
/**
 * Atlas MCP Server
 * Exposes the 1,806-tool Atlas database to AI agents (Claude, Antigravity, Cursor, etc.)
 * via the Model Context Protocol (MCP) over stdio.
 */

import fs from "node:fs";
import path from "node:path";
import readline from "node:readline";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SEED_FILE = path.resolve(ROOT, "backend/seed/atlas-seed.json");

let SEED = [];
try {
  SEED = JSON.parse(fs.readFileSync(SEED_FILE, "utf8"));
} catch (err) {
  process.stderr.write(`Failed to load atlas-seed.json: ${err.message}\n`);
}

function searchAtlas({ query, category, limit = 10 }) {
  const terms = (query || "").toLowerCase().split(/\s+/).filter(Boolean);
  const targetCat = (category || "").toLowerCase().trim();

  let results = SEED.filter((item) => {
    if (targetCat && (item.category || "").toLowerCase() !== targetCat) {
      return false;
    }
    if (!terms.length) return true;
    const text = (
      (item.title || "") + " " +
      (item.link || "") + " " +
      (item.description || "") + " " +
      (item.use_case || "") + " " +
      (item.category || "") + " " +
      (item.tags || []).join(" ")
    ).toLowerCase();

    return terms.every((t) => text.includes(t));
  });

  results = results.slice(0, Math.min(limit, 50));

  return results.map((r) => ({
    title: r.title,
    link: r.link,
    category: r.category,
    description: r.description,
    use_case: r.use_case,
    tags: r.tags || [],
  }));
}

function listCategories() {
  const cats = {};
  for (const item of SEED) {
    const c = item.category || "uncategorized";
    cats[c] = (cats[c] || 0) + 1;
  }
  return Object.entries(cats)
    .sort((a, b) => b[1] - a[1])
    .map(([category, count]) => ({ category, count }));
}

function getTool({ name_or_url }) {
  const target = (name_or_url || "").toLowerCase().trim();
  if (!target) return null;

  const found = SEED.find(
    (item) =>
      (item.title || "").toLowerCase() === target ||
      (item.link || "").toLowerCase().includes(target)
  );

  return found || null;
}

const TOOLS = [
  {
    name: "atlas_search",
    description: "Search 1,806 curated tools, websites, services, and OSINT databases in Atlas by keyword, use-case, or category. Returns links, descriptions, and tags.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "Keyword, capability, or use-case (e.g. 'video editor', 'reverse phone lookup', 'remove vocal', 'diagram')",
        },
        category: {
          type: "string",
          description: "Optional category filter (e.g. 'audio & video', 'security & privacy', 'developer tools', 'ai tools')",
        },
        limit: {
          type: "number",
          description: "Maximum number of results to return (default: 10, max: 50)",
        },
      },
      required: ["query"],
    },
  },
  {
    name: "atlas_categories",
    description: "List all 20 categories in Atlas along with the count of curated tools in each category.",
    inputSchema: {
      type: "object",
      properties: {},
    },
  },
  {
    name: "atlas_get_tool",
    description: "Retrieve complete details, description, verified notes, and direct URL for a specific tool by exact name or URL.",
    inputSchema: {
      type: "object",
      properties: {
        name_or_url: {
          type: "string",
          description: "Name of the tool or URL (e.g. 'Shodan', 'Photopea', 'vocalremover.org')",
        },
      },
      required: ["name_or_url"],
    },
  },
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on("line", (line) => {
  if (!line.trim()) return;
  try {
    const msg = JSON.parse(line);
    handleMessage(msg);
  } catch (err) {
    sendError(null, -32700, "Parse error: " + err.message);
  }
});

function send(res) {
  process.stdout.write(JSON.stringify(res) + "\n");
}

function sendResult(id, result) {
  send({ jsonrpc: "2.0", id, result });
}

function sendError(id, code, message) {
  send({ jsonrpc: "2.0", id, error: { code, message } });
}

function handleMessage(msg) {
  const { id, method, params } = msg;

  if (method === "initialize") {
    sendResult(id, {
      protocolVersion: "2024-11-05",
      capabilities: {
        tools: {},
      },
      serverInfo: {
        name: "atlas-mcp",
        version: "1.0.0",
      },
    });
    return;
  }

  if (method === "notifications/initialized") {
    // Client acknowledgment, no response required
    return;
  }

  if (method === "ping") {
    sendResult(id, {});
    return;
  }

  if (method === "tools/list") {
    sendResult(id, { tools: TOOLS });
    return;
  }

  if (method === "tools/call") {
    const { name, arguments: args = {} } = params || {};
    try {
      if (name === "atlas_search") {
        const matches = searchAtlas(args);
        sendResult(id, {
          content: [
            {
              type: "text",
              text: JSON.stringify(matches, null, 2),
            },
          ],
        });
      } else if (name === "atlas_categories") {
        const cats = listCategories();
        sendResult(id, {
          content: [
            {
              type: "text",
              text: JSON.stringify(cats, null, 2),
            },
          ],
        });
      } else if (name === "atlas_get_tool") {
        const tool = getTool(args);
        sendResult(id, {
          content: [
            {
              type: "text",
              text: tool ? JSON.stringify(tool, null, 2) : "Tool not found in Atlas library.",
            },
          ],
        });
      } else {
        sendError(id, -32601, `Unknown tool: ${name}`);
      }
    } catch (err) {
      sendResult(id, {
        isError: true,
        content: [{ type: "text", text: `Error executing ${name}: ${err.message}` }],
      });
    }
    return;
  }

  if (id !== undefined) {
    sendError(id, -32601, `Method not found: ${method}`);
  }
}
