# Atlas — Master Tools & Links Catalog
*1717 curated websites and tools across 20 categories.*
Live site: https://atlas-library-znte.onrender.com

## Categories Index
- [Ai Engineering](#ai-engineering) (40 tools)
- [Ai Tools](#ai-tools) (74 tools)
- [Audio & Video](#audio-video) (50 tools)
- [Business & Marketing](#business-marketing) (44 tools)
- [College & Career](#college-career) (64 tools)
- [Design & Media](#design-media) (133 tools)
- [Developer Tools](#developer-tools) (141 tools)
- [Education](#education) (138 tools)
- [Entertainment & Social](#entertainment-social) (77 tools)
- [Everyday Life](#everyday-life) (79 tools)
- [File & Web Utilities](#file-web-utilities) (41 tools)
- [Game Dev](#game-dev) (64 tools)
- [Hosting & Ops](#hosting-ops) (25 tools)
- [Money & Markets](#money-markets) (23 tools)
- [Productivity](#productivity) (72 tools)
- [Reading & News](#reading-news) (25 tools)
- [Reference & Data](#reference-data) (217 tools)
- [Security & Privacy](#security-privacy) (347 tools)
- [Vfx & 3D](#vfx-3d) (35 tools)
- [Writing & Publishing](#writing-publishing) (28 tools)

## Ai Engineering
*40 tools.*

### Braintrust
- **URL**: https://braintrust.dev
- **Use Case**: Systematic prompt iteration with evals
- **Description**: Eval and observability platform for iterating on prompts with datasets, scorers, and diffs.
- **Tags**: datasets, evals, observability

### Chroma
- **URL**: https://trychroma.com
- **Use Case**: Local vector store for a RAG prototype
- **Description**: Lightweight open-source embedding database that runs in-process — common default for RAG prototypes.
- **Tags**: embeddings, rag, vector database

### Composio
- **URL**: https://composio.dev
- **Use Case**: Wiring an agent into real SaaS tools
- **Description**: Managed catalog of authenticated tool integrations (GitHub, Slack, Gmail…) for agents and MCP.
- **Tags**: agents, integrations, mcp

### CrewAI
- **URL**: https://crewai.com
- **Use Case**: Multi-agent workflows
- **Description**: Framework for orchestrating role-playing autonomous agents that collaborate on a task.
- **Tags**: agents, framework, multi-agent

### DSPy
- **URL**: https://dspy.ai
- **Use Case**: Optimizing prompts systematically
- **Description**: Programming model that compiles/optimizes prompts from typed signatures and a metric instead of hand-tuning.
- **Tags**: framework, prompt optimization, stanford

### E2B
- **URL**: https://e2b.dev
- **Use Case**: Letting an agent execute code safely
- **Description**: Open-source secure sandboxes for running LLM-generated code, with SDKs for agent use.
- **Tags**: agents, code execution, sandbox

### Firecrawl
- **URL**: https://firecrawl.dev
- **Use Case**: Feeding a website to an LLM
- **Description**: API that crawls a site and returns clean markdown/structured data ready for an LLM.
- **Tags**: crawler, markdown, scraping

### Guardrails AI
- **URL**: https://guardrailsai.com
- **Use Case**: Validating and correcting model output
- **Description**: Framework for adding input/output validation and structured-output guarantees around LLM calls.
- **Tags**: guardrails, safety, validation

### Haystack
- **URL**: https://haystack.deepset.ai
- **Use Case**: Production RAG pipelines
- **Description**: Open-source framework by deepset for building production RAG and search pipelines.
- **Tags**: framework, rag, search

### Helicone
- **URL**: https://helicone.ai
- **Use Case**: One-line request logging
- **Description**: Drop-in proxy that logs every LLM request with cost, latency, and caching; open source.
- **Tags**: logging, observability, proxy

### Inspect (UK AISI)
- **URL**: https://inspect.aisi.org.uk
- **Use Case**: Rigorous model/agent evaluations
- **Description**: Framework for large-model evaluations from the UK AI Security Institute — datasets, solvers, scorers.
- **Tags**: evals, framework, safety

### Instructor
- **URL**: https://python.useinstructor.com
- **Use Case**: Reliable structured output
- **Description**: Library that coerces LLM output into validated Pydantic models via function calling.
- **Tags**: pydantic, python, structured output

### Jina Reader
- **URL**: https://jina.ai/reader
- **Use Case**: Quick clean extract of one page
- **Description**: Prepend r.jina.ai to any URL to get back LLM-ready markdown of the page.
- **Tags**: api, markdown, scraping

### LanceDB
- **URL**: https://lancedb.com
- **Use Case**: File-based vector store, no infra
- **Description**: Embedded, serverless vector database on the Lance columnar format — no server to run.
- **Tags**: embedded, serverless, vector database

### LangChain (Python docs)
- **URL**: https://python.langchain.com
- **Use Case**: Building a multi-step LLM app
- **Description**: Framework for chaining LLM calls, tools, memory, and retrieval into applications.
- **Tags**: framework, orchestration, rag

### Langfuse
- **URL**: https://langfuse.com
- **Use Case**: Seeing what your LLM app actually did
- **Description**: Open-source LLM observability — traces, prompt management, evals, and cost tracking; self-hostable.
- **Tags**: evals, observability, open source, tracing

### LiteLLM
- **URL**: https://litellm.ai
- **Use Case**: Swapping providers without rewriting call sites
- **Description**: Call 100+ LLM APIs with one OpenAI-format interface; also a self-hostable proxy with logging and budgets.
- **Tags**: gateway, multi-provider, proxy

### llama.cpp
- **URL**: https://github.com/ggml-org/llama.cpp
- **Use Case**: Squeezing a model onto modest hardware
- **Description**: C/C++ inference engine for LLaMA-family models — the backend most local runners are built on.
- **Tags**: cpp, local inference, quantization

### LlamaIndex
- **URL**: https://llamaindex.ai
- **Use Case**: RAG over your own data
- **Description**: Data framework for connecting LLMs to your own documents and databases (indexing, retrieval, agents).
- **Tags**: framework, rag, retrieval

### LLM (CLI)
- **URL**: https://llm.datasette.io
- **Use Case**: Scripting LLM calls from the shell
- **Description**: Simon Willison's command-line tool and Python library for running prompts, with plugins and SQLite logging.
- **Tags**: cli, python, tooling

### LM Studio
- **URL**: https://lmstudio.ai
- **Use Case**: GUI for running local models
- **Description**: Desktop app for discovering, downloading, and chatting with local models; serves a local API.
- **Tags**: desktop, gguf, local inference

### Modal
- **URL**: https://modal.com
- **Use Case**: On-demand GPU without managing a box
- **Description**: Serverless platform for running Python (incl. GPU jobs) from code — batch inference, fine-tuning, cron.
- **Tags**: gpu, infra, serverless

### Model Context Protocol
- **URL**: https://modelcontextprotocol.io
- **Use Case**: Giving an assistant access to tools/data
- **Description**: Open standard (and SDKs) for connecting LLM apps to tools and data sources over a common protocol.
- **Tags**: mcp, standards

### Ollama
- **URL**: https://ollama.com
- **Use Case**: Local model for dev without API spend
- **Description**: Run open-weight models locally with one command and an OpenAI-compatible local API.
- **Tags**: cli, local inference, open weights

### OpenRouter
- **URL**: https://openrouter.ai
- **Use Case**: Trying many models through one key
- **Description**: Single API and account to route across models from many providers, with price/latency comparison.
- **Tags**: gateway, multi-provider, routing

### Outlines
- **URL**: https://dottxt-ai.github.io/outlines
- **Use Case**: Guaranteed-valid JSON from a local model
- **Description**: Constrained/structured text generation — force model output to match a regex, JSON schema, or grammar.
- **Tags**: constrained decoding, structured output

### pgvector
- **URL**: https://github.com/pgvector/pgvector
- **Use Case**: Adding vector search to an existing Postgres
- **Description**: Postgres extension adding a vector type and ANN indexes — keep embeddings in the DB you already run.
- **Tags**: extension, postgres, vector database

### Phoenix (Arize)
- **URL**: https://phoenix.arize.com
- **Use Case**: Local tracing + eval notebook
- **Description**: Open-source LLM tracing and evaluation with an OpenTelemetry-based instrumentation layer.
- **Tags**: evals, observability, open source, tracing

### Portkey
- **URL**: https://portkey.ai
- **Use Case**: Production reliability layer over LLM APIs
- **Description**: AI gateway with retries, fallbacks, caching, and observability in front of provider APIs.
- **Tags**: gateway, observability, reliability

### Prompt Engineering Guide
- **URL**: https://promptingguide.ai
- **Use Case**: Looking up a prompting technique
- **Description**: Comprehensive, vendor-neutral reference on prompting techniques with papers and examples.
- **Tags**: guide, prompting, reference

### promptfoo
- **URL**: https://promptfoo.dev
- **Use Case**: Regression-testing prompts in CI
- **Description**: CLI/library for testing and comparing prompts and models with assertions and red-team scans.
- **Tags**: cli, evals, testing

### Pydantic AI
- **URL**: https://ai.pydantic.dev
- **Use Case**: Type-safe LLM agents in Python
- **Description**: Agent framework from the Pydantic team — typed inputs/outputs, model-agnostic, built for production.
- **Tags**: agents, framework, python

### Qdrant
- **URL**: https://qdrant.tech
- **Use Case**: Production vector search with metadata filters
- **Description**: Open-source vector database in Rust with filtering, hybrid search, and a managed cloud.
- **Tags**: search, vector database

### Ragas
- **URL**: https://docs.ragas.io
- **Use Case**: Scoring a RAG system's quality
- **Description**: Metrics library for evaluating RAG pipelines (faithfulness, context precision/recall, answer relevancy).
- **Tags**: evals, metrics, rag

### Replicate
- **URL**: https://replicate.com
- **Use Case**: Calling an open model without hosting it
- **Description**: Run and fine-tune open models via API; package your own with Cog.
- **Tags**: fine-tuning, inference api, open models

### Tavily
- **URL**: https://tavily.com
- **Use Case**: Give AI agents live web search
- **Description**: Tavily is the real‑time search engine for AI agents — Fast and secure APIs for web search and content extraction.
- **Tags**: agents, search-api, tavily

### Unsloth
- **URL**: https://unsloth.ai
- **Use Case**: Fine-tuning an open model on one GPU
- **Description**: Library that makes LoRA/QLoRA fine-tuning of open models 2x+ faster with less memory.
- **Tags**: fine-tuning, lora, optimization

### Unstructured
- **URL**: https://unstructured.io
- **Use Case**: Ingesting messy documents for RAG
- **Description**: Libraries and API for turning PDFs, HTML, docs, and images into clean chunks for RAG.
- **Tags**: ingestion, parsing, rag

### vLLM
- **URL**: https://docs.vllm.ai
- **Use Case**: Self-hosting a model under real load
- **Description**: High-throughput inference/serving engine with paged attention and an OpenAI-compatible server.
- **Tags**: inference server, serving, throughput

### Weaviate
- **URL**: https://weaviate.io
- **Use Case**: Hybrid keyword + vector search
- **Description**: Open-source vector database with built-in hybrid search and modules for common embedding models.
- **Tags**: hybrid search, vector database

## Ai Tools
*74 tools.*

### Animated Drawings
- **URL**: https://sketch.metademolab.com/canvas
- **Use Case**: Bring a sketch to life with animation
- **Description**: Animates uploaded drawings and sketches.

### Beatoven.ai
- **URL**: https://beatoven.ai
- **Use Case**: Generate royalty-free background music
- **Description**: AI royalty-free music creation tool.
- **Tags**: ai, free

### Beautiful.AI
- **URL**: https://beautiful.ai
- **Use Case**: Build presentations with AI
- **Description**: Creates presentations using AI-powered templates.
- **Tags**: ai

### Blueprint.am
- **URL**: https://blueprint.am
- **Use Case**: Turn a hardware idea into a wiring diagram and parts list
- **Description**: An AI hardware-design tool that turns a project idea into wiring diagrams and a parts list.
- **Tags**: electronics, hardware

### Bolt.new
- **URL**: https://bolt.new
- **Use Case**: Fast full-stack prototypes before committing to the real stack.
- **Description**: AI tool that scaffolds and runs full-stack web apps in-browser.
- **Tags**: ai, full stack, prototyping

### Browse AI
- **URL**: https://browse.ai
- **Use Case**: Extract website data
- **Description**: Extracts website data and exports to documents.

### ChatGPT
- **URL**: https://chat.openai.com
- **Use Case**: Cross-check outputs or brainstorm with a second model.
- **Description**: OpenAI's conversational AI assistant.
- **Tags**: ai, chat

### ChatPDF
- **URL**: https://chatpdf.com
- **Use Case**: Ask questions about a long PDF instead of reading it
- **Description**: Upload a PDF and chat with an AI about its contents.
- **Tags**: chat, pdf

### Chef (Convex)
- **URL**: https://chef.convex.dev
- **Use Case**: Generate a full-stack app backend from a prompt
- **Description**: An AI app builder paired with Convex's backend, generating full-stack apps from a prompt.
- **Tags**: app-builder, backend

### Claude.ai
- **URL**: https://claude.ai
- **Use Case**: Quick chat-based research/drafting outside Claude Code.
- **Description**: Anthropic's chat interface for the Claude models.
- **Tags**: ai, chat

### Compose AI
- **URL**: https://compose.ai
- **Use Case**: Get AI suggestions while writing
- **Description**: AI writing assistant.
- **Tags**: ai

### Consensus
- **URL**: https://consensus.app
- **Use Case**: Get an answer backed by actual scientific papers
- **Description**: An AI search engine that answers questions by summarizing peer-reviewed research.
- **Tags**: ai-search, research

### Copy.ai
- **URL**: https://copy.ai
- **Use Case**: Generate marketing copy with AI
- **Description**: AI copywriting tool for content creation.
- **Tags**: ai

### Coze
- **URL**: https://coze.com
- **Use Case**: Build a custom AI chatbot without code
- **Description**: A platform for building and publishing custom AI chatbots without code.
- **Tags**: chatbot-builder, no-code

### Cursor
- **URL**: https://cursor.com
- **Use Case**: Alternative AI-assisted editor to compare against Claude Code.
- **Description**: AI-native code editor built on VS Code.
- **Tags**: ai, developer tools, editor

### Cutout.Pro
- **URL**: https://cutout.pro/remove-background
- **Use Case**: Remove backgrounds or enhance media
- **Description**: AI tool removing backgrounds and enhancing media.
- **Tags**: ai

### DeepL Translator
- **URL**: https://deepl.com/en/translator
- **Use Case**: Translate between languages
- **Description**: AI translation tool for texts and documents.
- **Tags**: ai

### DeepSite
- **URL**: https://enzostvs-deepsite.hf.space
- **Use Case**: Generate a website from a text prompt
- **Description**: A Hugging Face Space AI tool that generates a full website from a text prompt.
- **Tags**: app-builder, generative

### DoNotPay
- **URL**: https://donotpay.com
- **Use Case**: Get AI help drafting a consumer dispute
- **Description**: AI legal robot for disputes.
- **Tags**: ai

### Easy-Peasy.ai
- **URL**: https://easy-peasy.ai
- **Use Case**: Generate blog posts and marketing content
- **Description**: AI content generation platform.
- **Tags**: ai

### ElevenLabs
- **URL**: https://elevenlabs.io
- **Use Case**: Generate narration/voiceover for a game or book trailer.
- **Description**: AI voice generation and text-to-speech.
- **Tags**: ai, audio, voice

### Elicit
- **URL**: https://elicit.com
- **Use Case**: Summarize research on education/reading pedagogy.
- **Description**: AI research assistant for literature review and summarization.
- **Tags**: ai, research

### Emergent
- **URL**: https://app.emergent.sh
- **Use Case**: Describe an app in chat and get it built and deployed
- **Description**: An AI agent that builds and deploys full web apps from a conversation.
- **Tags**: agent, app-builder

### Flowith
- **URL**: https://flowith.io
- **Use Case**: Chain AI steps together into a visual workflow
- **Description**: An AI workspace that chains prompts, documents, and tools into visual workflows.
- **Tags**: agent, workflow

### Gamma
- **URL**: https://gamma.app
- **Use Case**: Draft pitch decks or investor/partner one-pagers quickly.
- **Description**: AI-assisted presentation/deck and document builder.
- **Tags**: ai, presentations

### Generated Photos
- **URL**: https://generated.photos/faces
- **Use Case**: Generate AI-created portrait headshots
- **Description**: Generates AI-created human faces.
- **Tags**: ai

### Genspark
- **URL**: https://genspark.ai
- **Use Case**: Get an AI-assembled summary page for a research question
- **Description**: An AI agent that researches a topic and assembles a custom results page.
- **Tags**: agent, research

### GitHub Copilot
- **URL**: https://github.com/features/copilot
- **Use Case**: Inline code completion alongside Claude Code sessions.
- **Description**: AI pair-programmer integrated into code editors.
- **Tags**: ai, coding, developer tools

### Glif
- **URL**: https://glif.app
- **Use Case**: Build a small AI workflow without code
- **Description**: A platform for building and sharing small AI-powered mini-apps and workflows.
- **Tags**: ai-apps, workflow

### GPT Excel
- **URL**: https://gptexcel.uk
- **Use Case**: Get a spreadsheet formula from a plain description
- **Description**: Generates Excel and Google Sheets formulas from a plain-English description.
- **Tags**: formulas, spreadsheets

### Hotpot.ai
- **URL**: https://hotpot.ai
- **Use Case**: Quick one-off image edits without Photoshop
- **Description**: AI image tools — background removal, photo restoration, object removal, upscaling, and simple graphic templates.
- **Tags**: ai, background removal, image editing

### Hume AI
- **URL**: https://hume.ai
- **Use Case**: Add emotion-aware voice AI to an app
- **Description**: An emotionally expressive voice AI API that reads tone and emotion in speech.
- **Tags**: api, voice

### Interior AI
- **URL**: https://interiorai.com
- **Use Case**: Get AI-powered interior design suggestions
- **Description**: AI interior design suggestions.
- **Tags**: ai

### Kimi
- **URL**: https://kimi.com
- **Use Case**: Chat with an AI about a very long document
- **Description**: Moonshot AI's chatbot, built for long-context reasoning and document analysis.
- **Tags**: chatbot, long-context

### Le Chat (Mistral)
- **URL**: https://chat.mistral.ai
- **Use Case**: Chat with Mistral's AI models directly
- **Description**: Mistral AI's own chat interface for its open and commercial language models.
- **Tags**: chatbot, llm

### Lovable
- **URL**: https://lovable.dev
- **Use Case**: Generate a working web app from a text prompt
- **Description**: An AI app builder that turns a text prompt into a working web app.
- **Tags**: app-builder, no-code

### Magic Studio
- **URL**: https://magicstudio.com
- **Use Case**: Remove objects and backgrounds with AI
- **Description**: AI tool removing objects and backgrounds.
- **Tags**: ai

### Midjourney
- **URL**: https://midjourney.com/home
- **Use Case**: Generate images from text descriptions
- **Description**: AI image generation from text.
- **Tags**: ai

### Midjourney
- **URL**: https://midjourney.com
- **Use Case**: Generate concept art or marketing imagery.
- **Description**: AI image generation via Discord/web.
- **Tags**: ai, image generation

### NightCafe
- **URL**: https://creator.nightcafe.studio/create
- **Use Case**: Generate images from text descriptions
- **Description**: AI image generation using text input.
- **Tags**: ai

### NotebookLM
- **URL**: https://notebooklm.google.com
- **Use Case**: Ask an AI questions grounded in your own documents
- **Description**: Google's AI research tool that answers questions grounded only in your uploaded documents.
- **Tags**: ai, research

### OpenAI Playground
- **URL**: https://platform.openai.com/playground
- **Use Case**: Experiment with AI text generation
- **Description**: AI text generation tool by OpenAI.
- **Tags**: ai

### Perchance
- **URL**: https://perchance.org
- **Use Case**: Find or build a random-content generator
- **Description**: A hub of community-built random generators, from AI image tools to text and name generators.
- **Tags**: community, generators

### Perplexity
- **URL**: https://perplexity.ai
- **Use Case**: Research with inline citations for factual claims.
- **Description**: AI-powered answer engine with cited sources.
- **Tags**: ai, research, search

### pfpmaker
- **URL**: https://pfpmaker.com
- **Use Case**: Create professional profile pictures
- **Description**: AI tool creating professional profile pictures.
- **Tags**: ai

### Phind
- **URL**: https://phind.com
- **Use Case**: Get a sourced, code-aware answer to a dev question
- **Description**: An AI search engine built for developers, pairing an answer with cited sources and code.
- **Tags**: developer, search

### Pictory.ai
- **URL**: https://pictory.ai
- **Use Case**: Turn articles or scripts into videos
- **Description**: Converts text to videos with AI.
- **Tags**: ai

### Pinokio
- **URL**: https://pinokio.computer
- **Use Case**: Install a local AI app with one click
- **Description**: A one-click launcher that installs and runs local AI apps and models without manual setup.
- **Tags**: launcher, local-ai

### Podcastle
- **URL**: https://async.com
- **Use Case**: Create and edit podcasts with AI
- **Description**: AI podcast creation and editing platform.
- **Tags**: ai

### Poe
- **URL**: https://poe.com
- **Use Case**: Try several AI chatbots from one place
- **Description**: A single chat interface that gives access to many different AI models side by side.
- **Tags**: chatbot, multi-model

### Ponder
- **URL**: https://ponder.chat
- **Use Case**: Talk through a decision with an AI
- **Description**: An AI chat tool for thinking through ideas and decisions in a structured way.
- **Tags**: chatbot, thinking

### Quick, Draw!
- **URL**: https://quickdraw.withgoogle.com
- **Use Case**: See if AI can identify your drawings
- **Description**: Neural network guesses your drawings.
- **Tags**: ai

### Rewind AI
- **URL**: https://rewind.ai
- **Use Case**: Search your computer activity
- **Description**: Records computer activity in searchable timeline.
- **Tags**: search

### Runway
- **URL**: https://runway.com
- **Use Case**: Generate or edit short promo/trailer video clips.
- **Description**: AI video generation and editing suite.
- **Tags**: ai, video

### Rytr
- **URL**: https://rytr.me
- **Use Case**: Generate blog posts and sales copy with AI
- **Description**: AI writing assistant for content creation.
- **Tags**: ai

### Same
- **URL**: https://same.new
- **Use Case**: Rebuild a website's design from a prompt or URL
- **Description**: An AI tool that clones or rebuilds a website's design from a URL or prompt.
- **Tags**: app-builder, generative

### Scalenut
- **URL**: https://scalenut.com
- **Use Case**: Plan and optimize content for SEO
- **Description**: AI content and SEO platform.
- **Tags**: ai

### Sembly
- **URL**: https://sembly.ai
- **Use Case**: Take meeting notes with AI
- **Description**: AI-powered meeting note-taking tool.
- **Tags**: ai

### Simplified
- **URL**: https://simplified.com
- **Use Case**: Create designs, videos, and copy with AI
- **Description**: Multi-purpose AI tool for creators.
- **Tags**: ai

### SMMRY
- **URL**: https://smmry.com
- **Use Case**: Summarize articles automatically
- **Description**: Summarizes articles and texts automatically.

### Socratic
- **URL**: https://search.google/ways-to-search/lens
- **Use Case**: Find homework help resources
- **Description**: AI tool by Google finding learning resources for academic problems.
- **Tags**: ai, google

### StockImg.AI
- **URL**: https://stockimg.ai
- **Use Case**: Generate book covers and illustrations
- **Description**: AI generator for book covers and illustrations.
- **Tags**: ai, generator

### Suno
- **URL**: https://suno.com
- **Use Case**: Generate placeholder or licensed background music tracks.
- **Description**: AI music generation from text prompts.
- **Tags**: ai, music

### Talk to Books
- **URL**: https://books.google.com/talktobooks
- **Use Case**: Discover books by asking questions
- **Description**: AI-powered tool discovering books through natural queries.
- **Tags**: ai

### Tome
- **URL**: https://tomeapp.ai
- **Use Case**: Build AI-powered presentations quickly
- **Description**: AI-powered presentation creation.
- **Tags**: ai

### Tutor AI
- **URL**: https://tutorai.me
- **Use Case**: Get tutored on any subject
- **Description**: AI assistant creating educational content on any topic.
- **Tags**: ai

### v0
- **URL**: https://v0.app
- **Use Case**: Generate quick UI scaffolds for a new frontend page.
- **Description**: Vercel's AI tool for generating React UI from prompts.
- **Tags**: ai, frontend, ui

### v0
- **URL**: https://v0.dev
- **Use Case**: Generate a React component from a description
- **Description**: Vercel's AI tool that generates React UI components from a text prompt.
- **Tags**: react, ui-generation

### Veed.io AI Video Editor
- **URL**: https://veed.io/tools/ai-video/ai-video-editor
- **Use Case**: Edit videos in your browser with AI
- **Description**: Browser-based AI video editor.
- **Tags**: ai, browser, editor

### Websim
- **URL**: https://websim.com
- **Use Case**: Generate a playable fake website from a prompt
- **Description**: An AI tool that generates an entire simulated website from a prompt, page by page.
- **Tags**: generative, simulation

### WellSaid Labs
- **URL**: https://wellsaid.io
- **Use Case**: Create natural-sounding voice-overs with AI
- **Description**: AI voice-over creation tool.
- **Tags**: ai

### Wordtune
- **URL**: https://wordtune.com
- **Use Case**: Improve your writing with AI suggestions
- **Description**: AI writing improvement tool.
- **Tags**: ai

### You.com
- **URL**: https://you.com
- **Use Case**: Search the web with privacy and AI
- **Description**: Privacy-focused AI search engine.
- **Tags**: ai, search

### Zoomscape
- **URL**: https://zoomscape.ai
- **Use Case**: Generate AI backgrounds for video calls
- **Description**: AI-generated backgrounds for Zoom meetings.
- **Tags**: ai

## Audio & Video
*50 tools.*

### Amazon Prime Video
- **URL**: https://watch.amazon.com
- **Use Case**: Find a movie or show to watch
- **Description**: Streaming service offering shows, movies, and content.
- **Tags**: audio

### Audible
- **URL**: https://audible.in
- **Use Case**: Listen to audiobooks and audio courses
- **Description**: Collection of audiobooks and quality audio courses.
- **Tags**: audio

### Biteable
- **URL**: https://biteable.com
- **Use Case**: Build a video with templates and animations
- **Description**: Video maker with templates and animations.
- **Tags**: audio

### Boil the Frog
- **URL**: https://boilthefrog.playlistmachinery.com
- **Use Case**: Build a playlist that gradually transitions between two artists
- **Description**: Builds a smooth Spotify playlist that transitions gradually between two chosen artists.
- **Tags**: playlist, spotify

### Clipchamp
- **URL**: https://clipchamp.com/en
- **Use Case**: Record your screen and edit the video
- **Description**: Screen recorder and video editor.
- **Tags**: audio, editor

### Descript
- **URL**: https://descript.com
- **Use Case**: Transcribe audio or clone a voice
- **Description**: Voice cloning and video transcription tool.
- **Tags**: audio

### Doratoon
- **URL**: https://doratoon.com
- **Use Case**: Create animated videos from scripts with AI
- **Description**: Animation video creation with AI.
- **Tags**: audio

### Genius
- **URL**: https://genius.com
- **Use Case**: Look up song lyrics and meanings
- **Description**: Community platform for deconstructing and discussing songs.
- **Tags**: audio

### HeyGen
- **URL**: https://heygen.com
- **Use Case**: Generate a talking AI avatar video from a script
- **Description**: Creates AI avatar videos from text, with lip-sync and voiceovers in many languages.
- **Tags**: ai-video, avatars

### IMDb
- **URL**: https://imdb.com
- **Use Case**: Look up cast and trivia for a movie
- **Description**: Database with movie facts, ratings, and trivia.
- **Tags**: audio

### InVideo
- **URL**: https://invideo.io
- **Use Case**: Build a video from templates and effects
- **Description**: Video creation with templates and effects.
- **Tags**: audio

### Jitter
- **URL**: https://jitter.video
- **Use Case**: Create a simple animated motion-design clip
- **Description**: A browser-based motion-design tool for creating simple animated graphics.
- **Tags**: animation, motion-design

### JustWatch
- **URL**: https://justwatch.com
- **Use Case**: Find where to stream a movie or show
- **Description**: Finds where movies and shows are available online.
- **Tags**: audio

### Last.fm
- **URL**: https://last.fm
- **Use Case**: Track your music taste and discover recommendations
- **Description**: Music platform with listening habit analysis and recommendations.
- **Tags**: audio

### Learning Synths
- **URL**: https://learningsynths.ableton.com
- **Use Case**: Learn how a synthesizer works, interactively
- **Description**: Ableton's free, interactive guide to how synthesizers work.
- **Tags**: interactive, synthesizers

### LinkedIn Learning
- **URL**: https://linkedin.com/learning
- **Use Case**: Learn job skills from video courses
- **Description**: Video courses on diverse topics by subscription.
- **Tags**: audio

### Livestream
- **URL**: https://vimeo.com/features/livestreaming
- **Use Case**: Broadcast live video and events
- **Description**: Broadcasts desktop screens and events live.

### LottieFiles
- **URL**: https://lottiefiles.com
- **Use Case**: Add a lightweight animation to an app or site
- **Description**: A hub for creating, editing, and shipping lightweight Lottie animations.
- **Tags**: animation, lottie

### Midomi
- **URL**: https://music.soundhound.com/soundhound
- **Use Case**: Identify a song by singing or humming
- **Description**: Identifies songs by humming.
- **Tags**: audio

### Mixcloud
- **URL**: https://mixcloud.com
- **Use Case**: Listen to DJ mixes and radio shows
- **Description**: Listen to radio stations and upload your own shows.
- **Tags**: audio

### Murf.ai
- **URL**: https://murf.ai
- **Use Case**: Convert text to speech or clone a voice
- **Description**: Text-to-speech and voice cloning tool.
- **Tags**: audio

### Music for Programming
- **URL**: https://musicforprogramming.net
- **Use Case**: Play an ambient mix while doing focused work
- **Description**: Hand-curated ambient mixes designed for focused, heads-down work.
- **Tags**: ambient, focus-music

### Music Map
- **URL**: https://music-map.com
- **Use Case**: Explore relationships between artists
- **Description**: Charts similar artists by relationship.

### myNoise
- **URL**: https://mynoise.net
- **Use Case**: Find sounds for focus and relaxation
- **Description**: Archive of sounds for focus and relaxation.
- **Tags**: archives

### Narakeet
- **URL**: https://narakeet.com
- **Use Case**: Turn presentations into video
- **Description**: Converts presentations to audio and video.
- **Tags**: audio

### Netflix
- **URL**: https://netflix.com/browse
- **Use Case**: Find something to watch tonight
- **Description**: Streaming service with TV shows and original productions.
- **Tags**: audio

### Noisli
- **URL**: https://noisli.com
- **Use Case**: Create sound environments for focus
- **Description**: Creates sound environments for productivity.
- **Tags**: audio

### Noteflight
- **URL**: https://noteflight.com
- **Use Case**: Write and edit music notation online
- **Description**: Online music notation and editing tool.
- **Tags**: audio

### OBS Studio
- **URL**: https://obsproject.com
- **Use Case**: Record clean gameplay footage for a trailer
- **Description**: Free, open-source screen capture, recording, and streaming — scenes, sources, filters; standard for game trailers and devlogs.
- **Tags**: edusystem, free, open source, screen recording, streaming, video

### Pandora
- **URL**: https://pandora.com
- **Use Case**: Listen to personalized radio stations free
- **Description**: Free personalized internet radio based on favorite artists.
- **Tags**: audio, free

### Panzoid
- **URL**: https://panzoid.com
- **Use Case**: Create animated intros and outros
- **Description**: Video intro and outro creator.
- **Tags**: audio

### Pika
- **URL**: https://pika.art
- **Use Case**: Generate a short AI video clip from text
- **Description**: An AI video platform that generates and edits short clips from text or images.
- **Tags**: ai-video, generative

### Radio Garden
- **URL**: https://radio.garden/live
- **Use Case**: Listen to radio stations worldwide
- **Description**: Listens to radio stations from any location.
- **Tags**: audio

### Radiooooo
- **URL**: https://radiooooo.com
- **Use Case**: Explore music from a specific country and decade
- **Description**: A musical time machine for exploring music by country and decade.
- **Tags**: music-discovery, radio

### Runway
- **URL**: https://runwayml.com
- **Use Case**: Generate a video clip from a text prompt
- **Description**: An applied AI research company whose models turn text and images into realistic video.
- **Tags**: ai-video, generative

### ScreenRant
- **URL**: https://screenrant.com
- **Use Case**: Read the latest movie and TV news
- **Description**: Latest and insightful TV and movie news.
- **Tags**: audio

### ScreenToGif
- **URL**: https://nicke.tech/n-studio
- **Use Case**: Capture a short gameplay GIF for a store page or social post
- **Description**: Free Windows tool to record the screen/webcam/sketchboard and edit frame-by-frame into optimized GIF/MP4/APNG.
- **Tags**: edusystem, free, gamedev, gif, screen recording

### Short of The Week
- **URL**: https://shortoftheweek.com
- **Use Case**: Discover independent short films
- **Description**: Hand-picked independent short films updated weekly.
- **Tags**: audio

### SoundCloud
- **URL**: https://soundcloud.com
- **Use Case**: Listen to emerging artists and remixes
- **Description**: Platform for downloading and uploading licensed music.
- **Tags**: audio

### SplitMySong
- **URL**: https://splitmysong.com
- **Use Case**: Split a song into separate instrument stems
- **Description**: An AI stem separator that splits a track into clean vocal, drum, bass, and instrumental layers.
- **Tags**: ai, audio-editing

### Spotify
- **URL**: https://spotify.com/us
- **Use Case**: Stream music across your devices
- **Description**: Music streaming accessible from mobile and PC.
- **Tags**: audio

### TED
- **URL**: https://ted.com
- **Use Case**: Learn from short talks on any topic
- **Description**: Short video lectures with educational lessons and inspirational talks.
- **Tags**: audio

### TuneIn
- **URL**: https://tunein.com
- **Use Case**: Find and listen to radio stations worldwide
- **Description**: Free internet radio service streaming 100,000+ stations.
- **Tags**: audio, free

### Udio
- **URL**: https://udio.com
- **Use Case**: Generate an original song from a text prompt
- **Description**: An AI music generator that composes original songs, including lyrics and vocals, from text prompts.
- **Tags**: ai-music, generative

### Unscreen
- **URL**: https://unscreen.com
- **Use Case**: Remove backgrounds from video clips
- **Description**: Removes video backgrounds.
- **Tags**: audio

### VideoScribe
- **URL**: https://videoscribe.co
- **Use Case**: Create animated explainer videos and GIFs
- **Description**: Animated GIF and video creator.
- **Tags**: audio

### Videvo
- **URL**: https://videvo.net
- **Use Case**: Download stock videos and music
- **Description**: Downloads stock videos and music.
- **Tags**: audio

### Vimeo
- **URL**: https://vimeo.com
- **Use Case**: Watch independent films and artist projects
- **Description**: Video platform featuring independent film industry content.
- **Tags**: audio

### Vocal Remover
- **URL**: https://vocalremover.org
- **Use Case**: Pull the vocals or instrumental out of a song
- **Description**: An AI tool that separates vocals from instrumentals in any song.
- **Tags**: ai, audio-editing

### YouTube Movies
- **URL**: https://youtube.com/movies
- **Use Case**: Watch free movies online
- **Description**: Decent collection of free movies to watch.
- **Tags**: audio, free

## Business & Marketing
*44 tools.*

### Ahrefs Free SEO Tools
- **URL**: https://ahrefs.com/free-seo-tools
- **Use Case**: Do quick SEO checks without a paid subscription
- **Description**: Free versions of Ahrefs' backlink checker, keyword generator, SERP checker, and website 'health' audit.
- **Tags**: audit, backlinks, keyword research, marketing & growth, seo

### Amazon KDP
- **URL**: https://kdp.amazon.com
- **Use Case**: Publish a children's book to Amazon print + Kindle
- **Description**: Self-publish ebooks and print-on-demand paperbacks to Amazon — royalties, cover/manuscript tools, and category/keyword setup.
- **Tags**: books, distribution, marketing & growth, publishing, self-publishing

### Buttondown
- **URL**: https://buttondown.com
- **Use Case**: Start a newsletter without Mailchimp bloat
- **Description**: Simple, privacy-respecting newsletter tool with a real free tier — Markdown emails, automations, and a hosted archive.
- **Tags**: email, free, marketing, marketing & growth, newsletter

### Canny
- **URL**: https://canny.io
- **Use Case**: Collect and prioritize user feature requests
- **Description**: Feature-request and feedback boards where users post and vote on ideas; ties into a public roadmap and changelog. Free tier.
- **Tags**: community, feedback, marketing & growth, product, roadmap

### Choose a License — Non-Software
- **URL**: https://choosealicense.com/non-software
- **Use Case**: License a dataset, art pack, or documentation correctly
- **Description**: GitHub's guide to Creative Commons and open licenses for data, art, and docs — which one to attach to non-code work.
- **Tags**: business & legal, creative commons, legal, licensing, reference

### Common Paper Standard Agreements
- **URL**: https://commonpaper.com/standards
- **Use Case**: Use a fair, readable contract instead of writing one
- **Description**: Free, plain-language, community-reviewed standard contracts (mutual NDA, cloud service agreement, design partner) meant to be signed as-is.
- **Tags**: business & legal, contracts, free, legal, templates

### Featurebase
- **URL**: https://featurebase.app
- **Use Case**: Run feedback, roadmap, and changelog in one place
- **Description**: Feedback boards, roadmap, changelog, and surveys in one tool with a free plan — a Canny alternative.
- **Tags**: changelog, feedback, marketing & growth, product, roadmap

### GameDiscoverCo
- **URL**: https://gamediscover.co
- **Use Case**: Understand game discoverability before launching
- **Description**: Newsletter and knowledge base on how players actually discover games — Steam algorithm, wishlists, platform mechanics.
- **Tags**: distribution, gamedev, marketing, marketing & growth, steam

### Google Keyword Planner
- **URL**: https://ads.google.com/home/tools/keyword-planner
- **Use Case**: Find what terms people actually search for in your niche
- **Description**: Free keyword research (search volume ranges, related terms, competition) via a Google Ads account — no spend required.
- **Tags**: free, google, keyword research, marketing & growth, seo

### Google Search Console
- **URL**: https://search.google.com/search-console/about
- **Use Case**: Understand and fix how Google sees your site
- **Description**: Free: see which queries bring people to your site, index coverage, crawl errors, Core Web Vitals, and submit sitemaps.
- **Tags**: analytics, essential, free, google, marketing & growth, seo

### Google Trends
- **URL**: https://trends.google.com/trends
- **Use Case**: Check if interest in a topic is rising or seasonal
- **Description**: Relative search interest over time and by region — spot seasonality, compare terms, find rising queries.
- **Tags**: free, marketing & growth, research, seo, trends

### Gumroad
- **URL**: https://gumroad.com
- **Use Case**: Sell digital products with a simple storefront
- **Description**: Start selling what you know, see what sticks, and get paid. Simple and effective.
- **Tags**: creators, gumroad, selling

### HealthCare.gov
- **URL**: https://healthcare.gov
- **Use Case**: Get health insurance as a self-employed person
- **Description**: The U.S. health-insurance marketplace — where self-employed people without employer coverage buy a plan and check subsidy eligibility.
- **Tags**: business & legal, government, health insurance, reference, self-employed

### Indie Hackers
- **URL**: https://indiehackers.com
- **Use Case**: Learn go-to-market tactics from similar solo builders
- **Description**: Community and interviews of people building profitable software solo or in small teams — tactics, revenue numbers, and forums.
- **Tags**: bootstrapping, community, marketing, marketing & growth, startup

### IRS EIN Application
- **URL**: https://irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online
- **Use Case**: Get an EIN for a new business entity
- **Description**: Get a free federal Employer Identification Number online in minutes — needed for a business bank account and many vendor signups.
- **Tags**: business & legal, formation, free, government, irs, taxes

### IRS Small Business & Self-Employed
- **URL**: https://irs.gov/businesses/small-businesses-self-employed
- **Use Case**: Figure out federal tax obligations as a solo operator
- **Description**: The IRS hub for sole proprietors and small businesses — EIN application, quarterly estimated taxes, self-employment tax, deductions.
- **Tags**: business & legal, government, irs, reference, self-employed, taxes

### itch.io Creator Docs
- **URL**: https://itch.io/docs/creators/faq
- **Use Case**: Sell a game or asset pack on itch.io
- **Description**: How to sell games, art, and tools on itch.io — pages, pricing (including pay-what-you-want), payouts, and jams.
- **Tags**: distribution, gamedev, marketing & growth, publishing, reference

### Later
- **URL**: https://later.com
- **Use Case**: Schedule a week of social posts in one sitting
- **Description**: Visual social scheduler (Instagram, TikTok, Pinterest, etc.) with a content calendar and link-in-bio page; small free plan.
- **Tags**: marketing, marketing & growth, scheduling, social media

### Loot Drop
- **URL**: https://loot-drop.io
- **Use Case**: Read a case study of why a startup failed
- **Description**: Catalogs failed startups as searchable case studies, so founders can learn from others' mistakes.
- **Tags**: case-studies, startups

### MailerLite
- **URL**: https://mailerlite.com
- **Use Case**: Run email campaigns and automations on a budget
- **Description**: Email marketing with a generous free tier — drag-and-drop campaigns, automations, landing pages, and signup forms.
- **Tags**: automation, email, marketing, marketing & growth, newsletter

### Metatags.io
- **URL**: https://metatags.io
- **Use Case**: Write the meta tags for a page's search and social preview
- **Description**: Edit and preview SEO/social meta tags with live previews for major platforms and copy-paste output.
- **Tags**: marketing & growth, meta tags, seo, social media

### Nolo Legal Encyclopedia
- **URL**: https://nolo.com/legal-encyclopedia
- **Use Case**: Get oriented on a legal topic before paying for advice
- **Description**: Large free library of plain-English legal articles on business formation, contracts, IP, taxes, and more.
- **Tags**: business, business & legal, contracts, legal, reference

### Open Collective
- **URL**: https://opencollective.com
- **Use Case**: Raise and manage money for a group transparently
- **Description**: Open Collective is a legal and financial toolbox for groups. It’s a fundraising + legal status + money management platform for your community. What do you want to do?
- **Tags**: fundraising, nonprofit, opencollective

### OpenGraph Preview
- **URL**: https://opengraph.xyz
- **Use Case**: Check a page's share-card before posting it
- **Description**: Paste a URL and see exactly how its link preview renders on Twitter/X, Facebook, LinkedIn, Slack, and Discord.
- **Tags**: marketing & growth, meta tags, seo, social media

### Pinterest for Business
- **URL**: https://help.pinterest.com/en/business/article/claim-your-website
- **Use Case**: Reach parents and educators through visual search
- **Description**: Pinterest skews toward planning and buying intent (crafts, kids' activities, education) — strong organic reach for the right niches.
- **Tags**: distribution, marketing, marketing & growth, seo, social media

### presskit()
- **URL**: https://presskit.partners
- **Use Case**: Give press and streamers everything they need in one link
- **Description**: Free hosted press kits for indie games and apps — the format games press expects (fact sheet, logos, screenshots, trailers).
- **Tags**: distribution, gamedev, marketing & growth, pr, press

### PrivacyPolicies.com
- **URL**: https://privacypolicies.com
- **Use Case**: Cross-check or generate legal policy text
- **Description**: Another privacy policy / terms / EULA / return policy generator with granular clauses for analytics, ads, and payment processors.
- **Tags**: business & legal, compliance, legal, privacy policy, terms

### Product Hunt
- **URL**: https://producthunt.com
- **Use Case**: Plan a launch day for a new product
- **Description**: Launch platform and community for new products — a well-run launch can drive a big first-day traffic and signup spike.
- **Tags**: community, distribution, launch, marketing & growth, startup

### Quarterly Estimated Taxes (guide)
- **URL**: https://freshbooks.com/hub/taxes/guide-quarterly-taxes
- **Use Case**: Avoid a penalty by paying estimated taxes on time
- **Description**: Explainer on who owes US quarterly estimated taxes, how to calculate them, the payment dates, and the underpayment penalty.
- **Tags**: business & legal, reference, self-employed, taxes

### Resend
- **URL**: https://resend.com
- **Use Case**: Send password-reset and receipt emails from an app
- **Description**: Developer-focused transactional email API (React email templates, good deliverability) with a free monthly allowance.
- **Tags**: api, developer tools, email, marketing & growth, transactional

### Rocket Lawyer Business Forms
- **URL**: https://rocketlawyer.com/start-a-business
- **Use Case**: Draft a first version of a standard business contract
- **Description**: Guided templates for common business documents — NDAs, service agreements, contractor agreements, LLC operating agreements (some free, most gated).
- **Tags**: business, business & legal, contracts, legal, templates

### SBA Business Guide
- **URL**: https://sba.gov/business-guide
- **Use Case**: Follow an official checklist for setting up a business
- **Description**: The U.S. Small Business Administration's step-by-step guide: choosing a structure, registering, licenses, taxes, funding.
- **Tags**: business, business & legal, formation, government, legal, reference

### Semrush
- **URL**: https://semrush.com
- **Use Case**: Research what's working for a competitor
- **Description**: Large SEO/marketing suite — keyword and competitor research, site audit, rank tracking, content and ad analysis. Limited free tier.
- **Tags**: ads, competitor research, marketing, marketing & growth, seo

### StatCounter
- **URL**: https://statcounter.com
- **Use Case**: Track website visitors with a free counter
- **Description**: A free yet reliable invisible web tracker, highly configurable hit counter and real-time detailed web stats.
- **Tags**: analytics, statcounter, web-traffic

### Steamworks Documentation
- **URL**: https://partner.steamgames.com/doc/home
- **Use Case**: Set up and launch a game's Steam page correctly
- **Description**: Valve's official docs for shipping on Steam — store page setup, wishlists, builds, pricing, launch checklist, and best practices.
- **Tags**: distribution, gamedev, marketing & growth, reference, steam

### Stripe Atlas
- **URL**: https://stripe.com/atlas
- **Use Case**: Incorporate a US company remotely if you go the startup route
- **Description**: Paid service that incorporates a Delaware C-corp (or LLC), gets an EIN and bank account, and includes founder-agreement templates and guides.
- **Tags**: business & legal, formation, incorporation, legal, startup

### Tally
- **URL**: https://tally.so
- **Use Case**: Put up a waitlist or survey form fast and free
- **Description**: Free, unlimited form builder that works like a doc — surveys, waitlists, order forms, quizzes — with logic and integrations.
- **Tags**: essential, forms, free, marketing & growth, surveys, waitlist

### Termly
- **URL**: https://app.termly.io
- **Use Case**: Add a compliant cookie banner and policies to a site
- **Description**: Policy generator plus a cookie consent banner and consent-management tool with a free tier — useful for GDPR/CCPA basics.
- **Tags**: business & legal, compliance, cookie consent, gdpr, privacy policy

### TermsFeed
- **URL**: https://termsfeed.com
- **Use Case**: Generate a privacy policy and terms for an app
- **Description**: Generator for privacy policies, terms & conditions, cookie policies, and disclaimers tailored by the features and jurisdictions you select.
- **Tags**: business & legal, compliance, essential, legal, privacy policy, terms

### Typeform
- **URL**: https://typeform.com
- **Use Case**: Build forms and surveys
- **Description**: Build AI-powered forms that get 3.5x more data — then trigger automated workflows to enrich leads, follow up, and grow revenue. No code. Start free.
- **Tags**: forms, surveys, typeform

### U.S. Copyright Office — Registration
- **URL**: https://copyright.gov/registration
- **Use Case**: Register copyright for a finished creative work
- **Description**: How to register a copyright for a book, game, illustration, or software, and why registration matters for enforcement.
- **Tags**: business & legal, copyright, ip, legal, publishing

### Ubersuggest
- **URL**: https://neilpatel.com/ubersuggest
- **Use Case**: Brainstorm content topics with difficulty estimates
- **Description**: Budget keyword and content-idea tool with limited free daily searches — volume, difficulty, and content suggestions.
- **Tags**: content, keyword research, marketing & growth, seo

### USPTO Trademark Basics
- **URL**: https://uspto.gov/trademarks/basics
- **Use Case**: Understand the trademark process before hiring a lawyer
- **Description**: Plain-language walkthrough of what a trademark is, what it costs, and how to file (TEAS), from the agency itself.
- **Tags**: business & legal, ip, legal, reference, trademark

### USPTO Trademark Search
- **URL**: https://tmsearch.uspto.gov
- **Use Case**: Check whether a name is already trademarked
- **Description**: The official U.S. trademark database — search existing marks before you commit to a product or company name.
- **Tags**: business & legal, essential, ip, legal, naming, trademark

## College & Career
*64 tools.*

### 7 Cups
- **URL**: https://7cups.com
- **Use Case**: Talk to someone anonymously when campus counseling is backed up
- **Description**: Free, anonymous emotional support from trained volunteer listeners via chat, plus low-cost online therapy options.
- **Tags**: chat, college & students, free, mental health, support

### 988 Suicide & Crisis Lifeline
- **URL**: https://988lifeline.org
- **Use Case**: Immediate help in a mental-health crisis
- **Description**: Free, confidential 24/7 U.S. crisis support by call, text, or chat — dial or text 988.
- **Tags**: college & students, crisis, essential, mental health, support

### Active Minds
- **URL**: https://activeminds.org
- **Use Case**: Join or start a campus mental-health advocacy chapter
- **Description**: The leading nonprofit for student mental-health advocacy — 600+ campus chapters that run peer awareness and stigma-reduction programs.
- **Tags**: advocacy, clubs, college & students, mental health, peer support

### AIESEC
- **URL**: https://aiesec.org
- **Use Case**: Do an international exchange through a student org
- **Description**: Student-run organization offering international volunteer and professional exchanges plus leadership roles in local chapters.
- **Tags**: clubs, college & students, internships, leadership, study abroad

### Amazon Prime Student
- **URL**: https://amazon.com/prime/student
- **Use Case**: Cheaper shipping and deals on textbooks and supplies
- **Description**: Six-month free trial then half-price Prime, with the usual shipping plus student-specific deals and textbook offers.
- **Tags**: college & students, saving money, shopping, student discounts

### Appily Scholarships (formerly Cappex)
- **URL**: https://appily.com/scholarships
- **Use Case**: Search scholarships and earn milestone-based awards
- **Description**: College search + scholarship platform (rebranded from Cappex, owned by EAB). Includes micro-scholarship style rewards for college-planning milestones.
- **Tags**: financial aid, scholarships, search

### Autodesk Education
- **URL**: https://autodesk.com/education/edu-software/overview
- **Use Case**: Get CAD and 3D software free for coursework
- **Description**: Free one-year (renewable) licenses for AutoCAD, Fusion, Maya, Revit, and more for students and educators.
- **Tags**: cad, college & students, design & media, free, student discounts

### Barry Goldwater Scholarship
- **URL**: https://goldwaterscholarship.gov
- **Use Case**: Apply as a STEM sophomore/junior aiming at a research PhD
- **Description**: The premier U.S. undergraduate award for sophomores and juniors in math, natural sciences, and engineering headed for research careers.
- **Tags**: financial aid, prestigious, research, scholarships, stem

### Benjamin A. Gilman International Scholarship
- **URL**: https://gilmanscholarship.org
- **Use Case**: Fund study abroad if you receive a Pell Grant
- **Description**: U.S. State Department award (up to $5,000) that makes study or interning abroad possible for Pell Grant recipients.
- **Tags**: federal, financial aid, pell, scholarships, study abroad

### BigFuture Scholarship Search (College Board)
- **URL**: https://bigfuture.collegeboard.org/scholarship-search
- **Use Case**: Search scholarships and enter no-essay college-planning drawings
- **Description**: College Board's scholarship database, plus the BigFuture monthly drawings that pay students just for completing college-planning steps.
- **Tags**: college board, financial aid, scholarships, search

### Bold.org
- **URL**: https://bold.org
- **Use Case**: Find vetted, often less-contested scholarships
- **Description**: Modern scholarship platform that works directly with donors to host exclusive scholarships (many low-competition, some no-essay). Profile-based applications.
- **Tags**: financial aid, no-essay, scholarships, search

### BookFinder
- **URL**: https://bookfinder.com
- **Use Case**: Find the cheapest copy or rental of a required textbook
- **Description**: Price-comparison search across new, used, rental, and international editions of a textbook by ISBN.
- **Tags**: college & students, price comparison, saving money, shopping, textbooks

### Boren Awards
- **URL**: https://borenawards.org
- **Use Case**: Fund intensive language study abroad
- **Description**: Federal scholarships/fellowships funding study of less-common languages in world regions critical to U.S. interests, with a federal-service commitment.
- **Tags**: federal, financial aid, language, scholarships, study abroad

### CareerBuilder
- **URL**: https://careerbuilder.com
- **Use Case**: Search for job openings and apply
- **Description**: Job search platform.
- **Tags**: career, search

### CareerOneStop Scholarship Finder
- **URL**: https://careeronestop.org/Toolkit/Training/find-scholarships.aspx
- **Use Case**: Search a government-maintained scholarship database
- **Description**: U.S. Department of Labor's searchable database of ~9,000 scholarships, fellowships, and grants, filterable by award type, level, and location.
- **Tags**: financial aid, government, grants, scholarships, search

### Chegg Scholarships
- **URL**: https://chegg.org
- **Use Case**: Browse scholarships without signing up
- **Description**: Free scholarship search with monthly Chegg-funded awards; no account required to browse.
- **Tags**: financial aid, scholarships, search

### Crisis Text Line
- **URL**: https://crisistextline.org
- **Use Case**: Get crisis support by text instead of a phone call
- **Description**: Free 24/7 crisis counseling by text — text HOME to 741741 in the U.S. to reach a trained volunteer.
- **Tags**: college & students, crisis, mental health, support, text

### Critical Language Scholarship (CLS)
- **URL**: https://clscholarship.org
- **Use Case**: Do a funded summer language immersion abroad
- **Description**: Fully-funded summer overseas intensive language institutes in 13+ languages for U.S. undergrad and grad students.
- **Tags**: financial aid, language, scholarships, study abroad, summer

### Enactus
- **URL**: https://enactus.org
- **Use Case**: Join or start an entrepreneurship-for-good campus team
- **Description**: Global network of campus teams running entrepreneurial social-impact projects and competing regionally/nationally.
- **Tags**: clubs, college & students, competition, entrepreneurship, leadership

### FAFSA (Federal Student Aid)
- **URL**: https://studentaid.gov/h/apply-for-aid/fafsa
- **Use Case**: File this first, every year, before chasing any other aid
- **Description**: The Free Application for Federal Student Aid — the single form that unlocks federal grants, work-study, and loans, and is used by most states and schools for their aid too.
- **Tags**: essential, federal, financial aid, grants, scholarships

### Fastweb
- **URL**: https://fastweb.com
- **Use Case**: Cast a wide net for scholarship matches
- **Description**: The original scholarship search engine (30+ years). Build a profile and it matches you to scholarships and part-time jobs. Watch for occasionally-stale listings.
- **Tags**: financial aid, scholarships, search

### Federal Grants Overview
- **URL**: https://studentaid.gov/understand-aid/types/grants
- **Use Case**: Figure out which federal grants you're eligible for
- **Description**: Plain-English rundown of Pell, FSEOG, TEACH, and Iraq/Afghanistan Service grants — who qualifies, how much, and how they're paid out.
- **Tags**: federal, financial aid, grants, pell

### Figma for Education
- **URL**: https://figma.com/education
- **Use Case**: Use Figma's paid tier free for design classes and projects
- **Description**: Free Figma and FigJam Professional plans for verified students and educators — full team features, not the free-tier limits.
- **Tags**: college & students, design & media, free, student discounts

### FinAid
- **URL**: https://finaid.org
- **Use Case**: Understand how financial aid actually works
- **Description**: The long-running independent guide to student financial aid — how aid formulas work, loan math, award-letter comparison, and scam warnings.
- **Tags**: financial aid, guide, loans, reference

### Fiverr
- **URL**: https://fiverr.com
- **Use Case**: Quick fixed-price freelance tasks (logos, voiceover, etc.).
- **Description**: Freelance services marketplace for fixed-scope gigs.
- **Tags**: career, freelance, hiring

### Forage
- **URL**: https://theforage.com
- **Use Case**: Try a career and get a resume credential for free
- **Description**: Free virtual job simulations built with real companies — short project-based tasks that show what a role is like and signal interest to recruiters.
- **Tags**: career, internships, job simulation, resume

### Fulbright U.S. Student Program
- **URL**: https://us.fulbrightonline.org
- **Use Case**: Fund a year abroad after undergrad
- **Description**: Fully-funded grants for a year of study, research, or English teaching abroad after graduation — the flagship U.S. international exchange award.
- **Tags**: fellowships, financial aid, prestigious, research, study abroad

### GitHub Student Developer Pack
- **URL**: https://education.github.com/pack
- **Use Case**: Get pro developer tools free while enrolled
- **Description**: Free bundle of dozens of paid developer tools and cloud credits (JetBrains, Namecheap, DigitalOcean, Copilot, and more) for verified students.
- **Tags**: college & students, developer tools, essential, free, student discounts

### Glassdoor
- **URL**: https://glassdoor.com/index.htm
- **Use Case**: Find jobs and read company reviews
- **Description**: Job search with company reviews.
- **Tags**: career, search

### Grants.gov
- **URL**: https://grants.gov
- **Use Case**: Find federal funding for a research project or student initiative
- **Description**: The catalog of every U.S. federal grant program. Mostly for research projects, nonprofits, and institutions rather than tuition, but essential if you're funding undergrad research or a student org project.
- **Tags**: federal, financial aid, funding, grants, research

### Handshake
- **URL**: https://joinhandshake.com
- **Use Case**: Primary place to find internships aimed at students
- **Description**: The dominant college recruiting platform — most U.S. schools use it as the official job/internship board and employers target students through it.
- **Tags**: career, internships, jobs, recruiting

### Harry S. Truman Scholarship
- **URL**: https://truman.gov
- **Use Case**: Apply as a junior headed for public service
- **Description**: Graduate-study funding plus leadership training for juniors committed to careers in public service and government.
- **Tags**: financial aid, graduate school, prestigious, public service, scholarships

### Idealist
- **URL**: https://idealist.org
- **Use Case**: Find volunteer work and mission-driven internships
- **Description**: Search engine for volunteer gigs, internships, nonprofit jobs, and social-impact grad programs.
- **Tags**: clubs, college & students, internships, nonprofit, volunteering

### Internships.com
- **URL**: https://internships.com
- **Use Case**: Browse a broad internship listings database
- **Description**: Large searchable internship listings board (part of the Chegg network) with location and industry filters.
- **Tags**: career, internships, jobs, search

### JetBrains Student License
- **URL**: https://jetbrains.com/community/education
- **Use Case**: Use professional IDEs for free as a student
- **Description**: Free access to all JetBrains IDEs (IntelliJ Ultimate, PyCharm Pro, etc.) with a school email or ISIC card.
- **Tags**: college & students, developer tools, free, student discounts

### Jobscan
- **URL**: https://jobscan.co
- **Use Case**: Check how well a resume matches a job posting
- **Description**: Scans a resume against a job description and scores how well it matches.
- **Tags**: ats, resume

### LinkedIn
- **URL**: https://linkedin.com
- **Use Case**: Networking and visibility for the solo business.
- **Description**: Professional networking and job platform.
- **Tags**: career, linkedin, networking, osint, socmint

### LitSolutions
- **URL**: https://litsolutions.org
- **Use Case**: Get step-by-step help on a homework problem
- **Description**: Step-by-step homework help and solutions across subjects.
- **Tags**: homework-help, solutions

### Meetup
- **URL**: https://meetup.com
- **Use Case**: Find an off-campus group around an interest
- **Description**: Find and join local interest groups and events — coding, language exchange, hiking, board games — useful where a campus club doesn't exist.
- **Tags**: clubs, college & students, community, events, networking

### Microsoft 365 Education
- **URL**: https://microsoft.com/en-us/education/products/office
- **Use Case**: Get Office free with your school email
- **Description**: Free Office web + desktop apps (Word, Excel, PowerPoint, OneNote) and 1TB OneDrive for students at eligible institutions.
- **Tags**: college & students, free, office, productivity, student discounts

### Modest Needs
- **URL**: https://modestneeds.org
- **Use Case**: Apply for a small emergency grant to avoid a financial spiral
- **Description**: Small emergency grants (typically under $1,000) for people one unexpected expense away from a financial crisis — includes a Self-Sufficiency grant for students and low-income workers.
- **Tags**: college & students, emergency, grants, support

### National Society of Leadership and Success
- **URL**: https://nsls.org
- **Use Case**: Join a structured campus leadership development program
- **Description**: The largest U.S. collegiate leadership honor society — chapter-based program with speaker broadcasts, coaching circles, and networking.
- **Tags**: clubs, college & students, honor society, leadership, networking

### Niche Scholarships
- **URL**: https://niche.com/colleges/scholarships
- **Use Case**: Enter quick no-essay scholarships
- **Description**: Dozens of Niche's own no-essay scholarships (monthly $25k, etc.) plus a broader searchable directory. Quick to enter.
- **Tags**: financial aid, no-essay, scholarships, search

### Notion for Education
- **URL**: https://notion.com/product/notion-for-education
- **Use Case**: Run notes, tasks, and databases on Notion's paid plan for free
- **Description**: Free Notion Plus plan (with unlimited AI in many cases) for students and faculty with a school email.
- **Tags**: college & students, free, notes, productivity, student discounts

### Parker Dewey
- **URL**: https://parkerdewey.com
- **Use Case**: Get paid short-term professional projects during the semester
- **Description**: Marketplace for 'micro-internships' — short, paid professional projects (5–40 hours) students can do around classes.
- **Tags**: career, freelance, internships, paid

### RaiseMe
- **URL**: https://raise.me
- **Use Case**: Bank incremental scholarship money from partner schools
- **Description**: Earn 'micro-scholarships' from partner colleges for concrete achievements (grades, activities, campus visits) that convert to real aid on enrollment/transfer.
- **Tags**: financial aid, micro-scholarships, scholarships, transfer

### Reactive Resume
- **URL**: https://rxresu.me
- **Use Case**: Build a clean, ATS-friendly resume for free
- **Description**: A free, open-source builder for clean, ATS-friendly resumes.
- **Tags**: open-source, resume

### RippleMatch
- **URL**: https://ripplematch.com
- **Use Case**: Get matched to entry-level roles instead of cold-applying
- **Description**: Recruiting platform that matches students and recent grads to entry-level and internship roles based on profile, with diversity-hiring focus.
- **Tags**: career, entry-level, internships, recruiting

### Robin
- **URL**: https://tryrobin.io
- **Use Case**: Optimize a resume for a specific job listing
- **Description**: An AI resume optimizer that tailors a resume to a specific job posting.
- **Tags**: ai, resume

### Scholarships.com
- **URL**: https://scholarships.com
- **Use Case**: Match to a large pool of scholarships by profile
- **Description**: Free scholarship matching against a database of 3.7M+ awards worth billions, plus college search and financial-aid guidance.
- **Tags**: financial aid, scholarships, search

### Skill-Lync Resources
- **URL**: https://resources.skill-lync.com
- **Use Case**: Find a roadmap for an engineering career path
- **Description**: Engineering career roadmaps and course resources.
- **Tags**: engineering, roadmaps

### Student Beans
- **URL**: https://studentbeans.com
- **Use Case**: Stack a second set of student discount codes
- **Description**: The other big student-ID verification network — different discount roster from UNiDAYS, so worth having both.
- **Tags**: college & students, saving money, shopping, student discounts

### Swipe Out Hunger
- **URL**: https://swipehunger.org
- **Use Case**: Find food assistance on or near campus
- **Description**: Nonprofit fighting college food insecurity — runs meal-swipe donation programs, campus pantries, and a directory of basic-needs resources by school.
- **Tags**: basic needs, college & students, food, nonprofit, support

### The Hope Center for Student Basic Needs
- **URL**: https://hope.temple.edu
- **Use Case**: Research and resources on student basic-needs security
- **Description**: Temple University research center on college students' housing, food, and financial security — reports, toolkits, and the #RealCollege survey work.
- **Tags**: basic needs, college & students, food, housing, research

### The Jed Foundation (JED)
- **URL**: https://jedfoundation.org
- **Use Case**: Learn about student mental-health resources and how to help a friend
- **Description**: Nonprofit protecting emotional health and preventing suicide for teens and young adults — campus programs, a mental-health resource center, and help-finding tools.
- **Tags**: college & students, mental health, nonprofit, prevention, support

### Toastmasters — Find a Club
- **URL**: https://toastmasters.org/find-a-club
- **Use Case**: Join a public-speaking club near campus
- **Description**: Locator for Toastmasters public-speaking clubs, including many on college campuses; low-cost way to practice presenting and leadership.
- **Tags**: clubs, college & students, leadership, public speaking

### UNiDAYS
- **URL**: https://myunidays.com
- **Use Case**: Verify once, then get student pricing everywhere
- **Description**: Student-verification service that unlocks discounts at hundreds of retailers and software brands (Apple, Samsung, Adobe, ASOS, etc.).
- **Tags**: college & students, saving money, shopping, student discounts

### Unigo Scholarships
- **URL**: https://unigo.com/scholarships
- **Use Case**: Find unusual essay-based scholarships
- **Description**: Scholarship directory known for quirky, creative-essay awards ('Zombie Apocalypse', 'Shout It Out') alongside standard matches.
- **Tags**: essays, financial aid, scholarships, search

### Upwork
- **URL**: https://upwork.com/freelance-jobs
- **Use Case**: Find or post freelance jobs
- **Description**: Freelance job platform.
- **Tags**: career, free

### Upwork
- **URL**: https://upwork.com
- **Use Case**: Hire freelance help (art, editing, dev) as needed.
- **Description**: Freelance marketplace for hiring contractors.
- **Tags**: career, freelance, hiring

### USAJOBS (Pathways for Students)
- **URL**: https://usajobs.gov
- **Use Case**: Apply for federal internships and entry-level government jobs
- **Description**: The federal government's official jobs site. Its Pathways Program has internship and recent-graduate tracks reserved for current students and new grads.
- **Tags**: career, financial aid, government, internships, jobs

### VolunteerMatch
- **URL**: https://idealist.org/volunteermatch
- **Use Case**: Find local volunteering to build a resume or club portfolio
- **Description**: Large database matching you to local and virtual volunteer opportunities by cause area.
- **Tags**: clubs, college & students, community, volunteering

### WayUp
- **URL**: https://wayup.com
- **Use Case**: Search internships and first jobs only
- **Description**: Job board focused specifically on internships and entry-level roles for students and recent grads.
- **Tags**: career, entry-level, internships, jobs

### ZipRecruiter
- **URL**: https://ziprecruiter.com
- **Use Case**: Search for jobs or post open positions
- **Description**: Job board for seekers and employers.
- **Tags**: career

## Design & Media
*133 tools.*

### 3D Logo Lab
- **URL**: https://3dlogolab.io
- **Use Case**: Turn a flat logo into a rotating 3D animation
- **Description**: Turns a flat logo into a shiny, rotating 3D animation without needing a dedicated 3D app.
- **Tags**: 3d, logos

### A Soft Murmur
- **URL**: https://asoftmurmur.com
- **Use Case**: Play ambient sounds while working
- **Description**: Ambient background sounds for working or studying.
- **Tags**: design

### Adioma
- **URL**: https://adioma.com
- **Use Case**: Turn data into an infographic
- **Description**: Creates infographics with icons and templates.
- **Tags**: design

### Adobe Color
- **URL**: https://color.adobe.com
- **Use Case**: Build color palettes and export as code
- **Description**: Color palette and code extraction tool.
- **Tags**: design

### Adobe Express
- **URL**: https://adobe.com/express
- **Use Case**: Edit images, videos, or PDFs online
- **Description**: Image, video, and PDF editing hub.
- **Tags**: design

### Adobe Express
- **URL**: https://adobe.com/products/express.html
- **Use Case**: Fast branded graphics without full Photoshop/Illustrator.
- **Description**: Adobe's quick-design app for social graphics and short videos.
- **Tags**: design, templates

### AI Image Enlarger
- **URL**: https://imglarger.com
- **Use Case**: Upscale images without quality loss
- **Description**: Increases image resolution without quality loss.
- **Tags**: design

### AmCharts
- **URL**: https://amcharts.com
- **Use Case**: Create interactive visualizations
- **Description**: Creates professional charts, maps, and timelines.

### Animista
- **URL**: https://animista.net
- **Use Case**: Get a ready CSS animation without hand-writing keyframes
- **Description**: Pick from a catalog of CSS animations, tune the parameters, and copy only the keyframes you use.
- **Tags**: animation, css

### Animoto
- **URL**: https://animoto.com
- **Use Case**: Turn a photo gallery into a video
- **Description**: Creates professional videos from images.
- **Tags**: design

### Auto Draw
- **URL**: https://autodraw.com
- **Use Case**: Sketch rough ideas and get suggestions
- **Description**: Google's drawing tool using machine learning to suggest shapes.
- **Tags**: design, google

### Awwwards
- **URL**: https://awwwards.com
- **Use Case**: See what's technically and visually possible on the web
- **Description**: Industry awards site showcasing cutting-edge (often experimental) web design and interaction.
- **Tags**: awards, inspiration, web design

### Azgaar's Fantasy Map Generator
- **URL**: https://azgaar.github.io
- **Use Case**: Generate a detailed fantasy world map
- **Description**: A free, detailed procedural generator for fantasy world maps.
- **Tags**: fantasy-maps, generator

### Blob Maker
- **URL**: https://blobmaker.app
- **Use Case**: Generate an organic blob shape for a design
- **Description**: Generates random, organic SVG blob shapes for backgrounds and decoration.
- **Tags**: shapes, svg

### Blush
- **URL**: https://blush.design
- **Use Case**: Customize hand-drawn illustrations for designs
- **Description**: Hand-drawn illustration customization tool.
- **Tags**: design

### Calligraphr
- **URL**: https://calligraphr.com/en
- **Use Case**: Turn handwriting into a font
- **Description**: Creates custom fonts from handwriting.

### Canva
- **URL**: https://canva.com
- **Use Case**: Quick book-cover drafts or social promo graphics.
- **Description**: Drag-and-drop design tool for social, print, and marketing graphics.
- **Tags**: design, marketing, templates

### Canva for Education
- **URL**: https://canva.com/education
- **Use Case**: Make a polished classroom handout or slide deck fast
- **Description**: Free Canva for teachers and students — templates for worksheets, slides, infographics, posters, and simple video.
- **Tags**: almanac, design, free, teaching, templates

### Cleanup.pictures
- **URL**: https://cleanup.pictures
- **Use Case**: Remove unwanted objects from photos
- **Description**: Removes unwanted objects from photos.
- **Tags**: design

### Clipdrop
- **URL**: https://clipdrop.co
- **Use Case**: Clean up or relight a photo with one AI tool
- **Description**: A suite of AI image tools: background removal, relighting, cleanup, and upscaling.
- **Tags**: ai, photo-editing

### CNN Lite
- **URL**: https://lite.cnn.com
- **Use Case**: Read news without ads or photos
- **Description**: Text-only CNN without ads or images.
- **Tags**: design

### Color Hunt
- **URL**: https://colorhunt.co
- **Use Case**: Browse trending color palettes for a design
- **Description**: A community-curated gallery of trendy color palettes.
- **Tags**: color, palette

### Cool Backgrounds
- **URL**: https://coolbackgrounds.io
- **Use Case**: Generate an abstract background image
- **Description**: Generates abstract gradient and pattern backgrounds for download.
- **Tags**: backgrounds, gradients

### Coolors
- **URL**: https://coolors.co
- **Use Case**: Generate a color palette in seconds
- **Description**: Fast palette generator — spacebar to cycle, lock swatches, export to CSS/PNG/SVG, check contrast.
- **Tags**: color, design, essential, free, palettes

### CSS Gradient
- **URL**: https://cssgradient.io
- **Use Case**: Build a CSS gradient visually
- **Description**: Visual gradient builder with a large inspiration gallery; outputs cross-browser CSS.
- **Tags**: color, css, gradients

### D-ID
- **URL**: https://d-id.com
- **Use Case**: Turn a photo into a talking avatar
- **Description**: Creates talking avatars from photos.
- **Tags**: design

### daisyUI
- **URL**: https://daisyui.com
- **Use Case**: Get pre-built themed components while staying in Tailwind
- **Description**: Component classes on top of Tailwind (btn, card, modal) with themes — less markup than raw utilities.
- **Tags**: components, css, tailwind, ui

### DiceBear
- **URL**: https://dicebear.com
- **Use Case**: Generate placeholder avatars for user profiles
- **Description**: Generates free, open-source avatar illustrations in many styles.
- **Tags**: avatars, illustration

### Dribbble
- **URL**: https://dribbble.com
- **Use Case**: Get a quick hit of visual direction
- **Description**: Designer portfolio community — quick visual inspiration for UI, branding, and illustration (aspirational, not always shippable).
- **Tags**: branding, inspiration, portfolio, ui

### Dungeon Scrawl
- **URL**: https://dungeonscrawl.com
- **Use Case**: Draw a dungeon map for a tabletop RPG session
- **Description**: A free browser tool for drawing tabletop RPG dungeon maps.
- **Tags**: map-making, tabletop-rpg

### Easings.net
- **URL**: https://easings.net
- **Use Case**: Pick the right easing curve for an animation
- **Description**: Reference (easings.net) of common easing curves with visual demos and the cubic-bezier / CSS values for each.
- **Tags**: animation, css, easing, reference

### Extract.pics
- **URL**: https://extract.pics
- **Use Case**: Extract images from websites
- **Description**: Extracts images from websites.
- **Tags**: design

### fffuel
- **URL**: https://fffuel.co
- **Use Case**: Generate a free SVG asset for a design
- **Description**: A collection of free SVG generators: gradients, blobs, patterns, waves, and more.
- **Tags**: generators, svg

### FigJam
- **URL**: https://figma.com/figjam
- **Use Case**: Sketch flows/wireframes alongside Figma design files.
- **Description**: Figma's collaborative whiteboard for brainstorming and diagrams.
- **Tags**: collaboration, design, whiteboard

### Figma
- **URL**: https://figma.com
- **Use Case**: Design app screens/mockups across all four projects.
- **Description**: Collaborative interface-design and prototyping tool.
- **Tags**: design, prototyping, ui

### Flourish
- **URL**: https://flourish.studio
- **Use Case**: Visualize data interactively
- **Description**: Transforms data into interactive charts and maps.

### Font Squirrel
- **URL**: https://fontsquirrel.com
- **Use Case**: Get a legit free font or convert one to webfont formats
- **Description**: Hand-picked free-for-commercial-use fonts plus a webfont generator for converting and subsetting.
- **Tags**: fonts, free, typography

### Fontjoy
- **URL**: https://fontjoy.com
- **Use Case**: Find a heading + body font combination
- **Description**: Generates font pairings (heading/subheading/body) using a similarity/contrast slider.
- **Tags**: design, fonts, pairing, typography

### Fontpair
- **URL**: https://fontpair.co
- **Use Case**: Find two fonts that pair well for a design
- **Description**: Curates Google Font pairings that work well together, ready to copy.
- **Tags**: fonts, typography

### Fontshare
- **URL**: https://fontshare.com
- **Use Case**: Find a distinctive free font beyond the usual set
- **Description**: Free, high-quality display and text typefaces (by Indian Type Foundry) licensed for commercial use.
- **Tags**: fonts, free, typography

### FontStruct
- **URL**: https://fontstruct.com
- **Use Case**: Design custom fonts from geometric shapes
- **Description**: Creates fonts using geometric shapes.

### Framer
- **URL**: https://framer.com
- **Use Case**: Design and publish a website without code
- **Description**: A no-code website builder with real design tools and built-in animation.
- **Tags**: no-code, website-builder

### FreeImages
- **URL**: https://freeimages.com
- **Use Case**: Find millions of royalty-free images
- **Description**: Downloads millions of royalty-free images.
- **Tags**: design, free

### Freepik
- **URL**: https://freepik.com
- **Use Case**: Source illustration elements for book covers/marketing.
- **Description**: Stock vectors, illustrations, and templates (free + premium tiers).
- **Tags**: design, illustration, stock

### Get Waves
- **URL**: https://getwaves.io
- **Use Case**: Add a wavy SVG divider between page sections
- **Description**: Generates SVG wave dividers for splitting page sections.
- **Tags**: svg, web-design

### Godly
- **URL**: https://recent.design
- **Use Case**: Find a high bar of web design for one section
- **Description**: Hand-picked gallery of exceptional website design, tagged by section (hero, pricing, footer) and vibe.
- **Tags**: gallery, inspiration, web design

### Google Fonts
- **URL**: https://fonts.google.com
- **Use Case**: Choose a free, self-hostable web font
- **Description**: 1500+ open-source font families, free for commercial use, with self-host download and pairing suggestions.
- **Tags**: design, essential, fonts, free, typography

### Haikei
- **URL**: https://app.haikei.app
- **Use Case**: Make an organic SVG background shape
- **Description**: Generates layered SVG backgrounds — blobs, waves, stacked peaks, low-poly grids — as ready-to-use assets.
- **Tags**: background, design, generator, svg

### Haikei
- **URL**: https://haikei.app
- **Use Case**: Generate an SVG background or divider asset
- **Description**: Generates SVG backgrounds, blobs, patterns, and shape dividers for design projects.
- **Tags**: generators, svg

### Happy Hues
- **URL**: https://happyhues.co
- **Use Case**: Pick a palette when you're unsure how to apply colors
- **Description**: Curated palettes shown in-context on a demo site, each swatch labeled by role (background, text, accent).
- **Tags**: color, design, palettes

### Hero Patterns
- **URL**: https://heropatterns.com
- **Use Case**: Add a subtle tiled background pattern
- **Description**: Repeatable SVG background patterns with adjustable color and opacity, copy as CSS or download.
- **Tags**: background, css, patterns, svg

### Homestyler
- **URL**: https://homestyler.com
- **Use Case**: Plan and visualize interior design changes
- **Description**: Online interior design tool.
- **Tags**: design

### Huemint
- **URL**: https://huemint.com
- **Use Case**: Generate color schemes for a design
- **Description**: Generates unique color schemes.
- **Tags**: design

### IconFinder
- **URL**: https://iconfinder.com
- **Use Case**: Find and search icons in all sizes
- **Description**: Searches icons in all sizes.
- **Tags**: design, search

### Iconify
- **URL**: https://icon-sets.iconify.design
- **Use Case**: Find one icon without committing to a whole set
- **Description**: Unified search and delivery across 200+ open icon sets (150k+ icons) with framework components and an API.
- **Tags**: icons, open source, search, svg

### Icons8
- **URL**: https://icons8.com
- **Use Case**: Find design elements and illustrations
- **Description**: Design elements including icons and illustrations.
- **Tags**: design

### Ideogram
- **URL**: https://ideogram.ai
- **Use Case**: Generate an AI image with readable text in it
- **Description**: An AI image generator known for rendering legible text inside generated images.
- **Tags**: ai, image-generation

### Imgur
- **URL**: https://imgur.com
- **Use Case**: Share and view images online
- **Description**: Photo-hosting platform for sharing and viewing images.
- **Tags**: design

### Infogram
- **URL**: https://infogram.com
- **Use Case**: Design interactive infographics
- **Description**: Creates infographics and visual reports.

### Instagram
- **URL**: https://instagram.com
- **Use Case**: Share photos and videos with friends
- **Description**: Visual communication platform for sharing images and videos.
- **Tags**: design, instagram, osint, socmint

### Khroma
- **URL**: https://khroma.co
- **Use Case**: Generate a color palette matched to your taste
- **Description**: An AI color tool that learns your taste and generates palettes you'd actually use.
- **Tags**: ai, color

### Kittl
- **URL**: https://kittl.com
- **Use Case**: Design print-on-demand graphics and mockups
- **Description**: A design tool aimed at print-on-demand sellers, with vector graphics and mockup generation.
- **Tags**: print-on-demand, vector-graphics

### Kleki
- **URL**: https://kleki.com
- **Use Case**: Draw digitally with layers
- **Description**: Online drawing tool with brushes and layers.
- **Tags**: design

### Krea
- **URL**: https://krea.ai
- **Use Case**: Generate and iterate on AI images in real time
- **Description**: An AI creative suite putting many image and video models behind one real-time canvas.
- **Tags**: ai, image-generation

### Land-book
- **URL**: https://land-book.com
- **Use Case**: Find landing-page layout inspiration
- **Description**: Large curated gallery of landing pages, filterable by style, industry, and section type.
- **Tags**: inspiration, landing pages, web design

### Leonardo AI
- **URL**: https://leonardo.ai
- **Use Case**: Generate styled AI images for a project
- **Description**: An AI image-generation platform with fine-grained style and model controls.
- **Tags**: ai, image-generation

### Logoipsum
- **URL**: https://logoipsum.com
- **Use Case**: Drop a placeholder logo into a mockup
- **Description**: Free placeholder logos for mockups, in many styles and formats.
- **Tags**: logos, placeholder

### Lucide
- **URL**: https://lucide.dev
- **Use Case**: Add a tidy icon set to an app
- **Description**: Clean, consistent open-source icon set (the community fork of Feather) with packages for every major framework.
- **Tags**: essential, free, icons, open source, svg

### Lummi
- **URL**: https://lummi.ai
- **Use Case**: Find free AI-generated stock imagery
- **Description**: A library of free AI-generated stock photos and graphics.
- **Tags**: ai, stock-photos

### MagicPattern
- **URL**: https://magicpattern.design
- **Use Case**: Generate a background pattern or gradient graphic
- **Description**: A set of generators for background and pattern graphics (gradients, grids, blobs, and more).
- **Tags**: backgrounds, patterns

### Magma
- **URL**: https://magma.com/my/artworks
- **Use Case**: Paint or draw digitally
- **Description**: Browser-based drawing and painting tool.
- **Tags**: browser, design

### Magnific
- **URL**: https://magnific.com
- **Use Case**: Upscale an image while adding realistic detail
- **Description**: An AI image upscaler that adds realistic detail while enlarging images.
- **Tags**: ai, upscaling

### Make 8bit Art
- **URL**: https://make8bitart.com
- **Use Case**: Make 8-bit style pixel art in the browser
- **Description**: A simple browser-based pixel-art creation tool.
- **Tags**: creation-tool, pixel-art

### Make WordArt
- **URL**: https://makewordart.com
- **Use Case**: Make retro 90s-style WordArt text
- **Description**: A browser-based generator for loud, glossy 1990s-style WordArt text effects.
- **Tags**: retro, typography

### Maskable.app
- **URL**: https://maskable.app/editor
- **Use Case**: Fix a PWA icon that looks wrong on Android
- **Description**: Preview and generate maskable PWA icons so the home-screen icon isn't clipped across Android launcher shapes.
- **Tags**: free, icons, little-sprout, pwa, web

### Match Color
- **URL**: https://match.color.io
- **Use Case**: Extract colors from images
- **Description**: Extracts colors from images.
- **Tags**: design

### Media.io
- **URL**: https://media.io
- **Use Case**: Edit images and videos in one place
- **Description**: One-stop image and video editing platform.
- **Tags**: design

### Method
- **URL**: https://method.ac
- **Use Case**: Practice design fundamentals through a quick game
- **Description**: Short interactive games that teach core design fundamentals like color and layout.
- **Tags**: design-education, games

### Mobbin
- **URL**: https://mobbin.com
- **Use Case**: See how real apps design a specific screen or flow
- **Description**: Searchable library of real mobile and web app screenshots and full flows — reference for how shipped products solve a UX problem.
- **Tags**: inspiration, reference, ui, ux

### Modern Font Stacks
- **URL**: https://modernfontstacks.com
- **Use Case**: Ship good typography with no font files at all
- **Description**: System-font-only stacks grouped by feel — zero webfont download, instant render, no layout shift.
- **Tags**: css, performance, reference, typography

### MyHeritage
- **URL**: https://myheritage.com
- **Use Case**: Colorize old photos or build family trees
- **Description**: Colorizes photos and creates family trees.
- **Tags**: design

### Napkin
- **URL**: https://napkin.ai
- **Use Case**: Turn a paragraph of text into a diagram
- **Description**: Turns written text into visual diagrams and illustrations automatically.
- **Tags**: ai, diagrams

### Online OCR
- **URL**: https://onlineocr.net
- **Use Case**: Extract text from an image or scanned document
- **Description**: Text extraction from images.
- **Tags**: design

### Open Peeps
- **URL**: https://openpeeps.com
- **Use Case**: Add free hand-drawn illustrated people to a design
- **Description**: A free, hand-drawn illustration library of mix-and-match people.
- **Tags**: free-assets, illustration

### OpenDyslexic
- **URL**: https://opendyslexic.org
- **Use Case**: Offer a dyslexia-oriented reading font option
- **Description**: Free open-source typeface with weighted bottoms and wider spacing intended to reduce letter-swapping for some dyslexic readers.
- **Tags**: accessibility, dyslexia, fonts, free, little-sprout, typography

### OpenProcessing
- **URL**: https://openprocessing.org
- **Use Case**: Share and remix creative coding sketches
- **Description**: OpenProcessing - Creative Coding for the Curious Mind
- **Tags**: creative-coding, openprocessing, p5js

### Palette.fm
- **URL**: https://palette.fm
- **Use Case**: Add color to black and white photos
- **Description**: Automatically colorizes black and white images.
- **Tags**: design

### Pattern Monster
- **URL**: https://pattern.monster
- **Use Case**: Generate a seamless SVG background pattern
- **Description**: Generates seamless SVG background patterns, free to copy and customize.
- **Tags**: patterns, svg

### Pexels
- **URL**: https://pexels.com
- **Use Case**: Find high-quality royalty-free images
- **Description**: Thousands of royalty-free high-quality images.
- **Tags**: design, free

### PhotoRoom
- **URL**: https://app.photoroom.com/create
- **Use Case**: Remove photo backgrounds or create mockups
- **Description**: Removes photo backgrounds and creates designs.
- **Tags**: design

### PhotoRoom
- **URL**: https://photoroom.com
- **Use Case**: Remove a background from a product photo
- **Description**: AI photo editing focused on clean product shots and background removal for e-commerce.
- **Tags**: ai, photo-editing

### Pika
- **URL**: https://pika.style
- **Use Case**: Turn screenshots into polished mockups
- **Description**: Creates beautiful screenshots and mockups.
- **Tags**: design

### Pixabay
- **URL**: https://pixabay.com
- **Use Case**: Source free assets across image/video/audio types.
- **Description**: Free stock photos, illustrations, vectors, and video.
- **Tags**: design, free, stock

### Pixilart
- **URL**: https://pixilart.com
- **Use Case**: Draw pixel art in the browser
- **Description**: A free browser-based pixel art editor and community gallery.
- **Tags**: editor, pixel-art

### Pixlr
- **URL**: https://pixlr.com
- **Use Case**: Edit photos and design with templates
- **Description**: Online photo editor and template designer.
- **Tags**: design, editor

### PlanYourRoom
- **URL**: https://planyourroom.com
- **Use Case**: Sketching a room layout before moving furniture
- **Description**: Free browser floor-planning tool for arranging furniture in a scaled room layout.
- **Tags**: floor plan, interior, layout

### PNGIMG
- **URL**: https://pngimg.com
- **Use Case**: Find a free transparent PNG for a design
- **Description**: A searchable database of free transparent-background PNG images.
- **Tags**: free-assets, images

### Radix Primitives
- **URL**: https://radix-ui.com/primitives
- **Use Case**: Build a custom component without redoing accessibility
- **Description**: Unstyled, fully accessible React primitives (dialog, popover, dropdown) that handle focus, keyboard, and ARIA correctly.
- **Tags**: accessibility, components, react, ui

### RealFaviconGenerator
- **URL**: https://realfavicongenerator.net
- **Use Case**: Generate a complete favicon and app-icon set
- **Description**: Upload one image, get every favicon/app-icon size and the exact HTML, checked against each platform's quirks.
- **Tags**: favicon, icons, little-sprout, web

### Realtime Colors
- **URL**: https://realtimecolors.com
- **Use Case**: See how a palette actually feels on a real layout
- **Description**: Preview a full color and font system on a real landing-page mockup before committing, with live contrast checks.
- **Tags**: color, design, preview, typography

### Recraft
- **URL**: https://recraft.ai
- **Use Case**: Generate a vector icon or illustration set with AI
- **Description**: An AI tool for generating vector graphics, icons, and brand-consistent illustrations.
- **Tags**: ai, vector-graphics

### Refero
- **URL**: https://refero.design
- **Use Case**: Find real examples of a specific UI element
- **Description**: Searchable database of real web and mobile UI screens (35k+), indexed by page type and UI element.
- **Tags**: inspiration, reference, ui

### Remove.photos
- **URL**: https://remove.photos
- **Use Case**: Remove the background from a photo
- **Description**: An AI background remover for photos.
- **Tags**: ai, photo-editing

### RestorePhotos.io
- **URL**: https://restorephotos.io
- **Use Case**: Restore clarity to blurry old photos
- **Description**: Restores old and blurry face photos.
- **Tags**: design

### Screely
- **URL**: https://screely.com
- **Use Case**: Put a screenshot in a clean browser mockup frame
- **Description**: Wraps a screenshot in a clean browser or device frame for presentations.
- **Tags**: mockups, screenshots

### Servier Medical Art
- **URL**: https://smart.servier.com
- **Use Case**: Find a free medical illustration for a presentation
- **Description**: Free high-resolution medical and scientific illustrations for reuse.
- **Tags**: free-assets, medical-illustration

### shadcn/ui
- **URL**: https://ui.shadcn.com
- **Use Case**: Assemble an accessible React UI you fully control
- **Description**: Copy-paste React components built on Radix + Tailwind — you own the code, not a dependency. De facto standard for new React apps.
- **Tags**: components, essential, react, tailwind, ui

### Shape Divider
- **URL**: https://shapedivider.app
- **Use Case**: Add a decorative SVG divider between page sections
- **Description**: Generates SVG shape dividers (waves, angles, curves) for splitting page sections.
- **Tags**: svg, web-design

### Shots
- **URL**: https://shots.so
- **Use Case**: Put an app screenshot into a device mockup
- **Description**: Generates polished device mockups from a screenshot.
- **Tags**: mockups, screenshots

### SIL Fonts
- **URL**: https://software.sil.org/fonts
- **Use Case**: Pick a font built for early-reader legibility
- **Description**: Free, open-licensed typefaces from SIL — including Andika, designed specifically for literacy and beginning readers (clear a/g forms).
- **Tags**: accessibility, fonts, free, literacy, little-sprout, typography

### Silk
- **URL**: https://weavesilk.com
- **Use Case**: Create flowing generative art by moving the mouse
- **Description**: A generative-art tool that turns mouse movement into flowing, symmetric silk-like patterns.
- **Tags**: creative-coding, generative-art

### Skribbl.io
- **URL**: https://skribbl.io
- **Use Case**: Play multiplayer drawing and guessing
- **Description**: Multiplayer drawing and guessing game.
- **Tags**: design

### Storyblocks
- **URL**: https://storyblocks.com
- **Use Case**: Source b-roll/audio for book trailers or social promo.
- **Description**: Subscription stock video, audio, and image library.
- **Tags**: audio, design, stock, video

### Storyset
- **URL**: https://storyset.com
- **Use Case**: Get an editable, optionally animated illustration
- **Description**: Free customizable (and lightly animatable) illustration sets by Freepik, editable color and layered elements.
- **Tags**: animation, free, illustration, svg

### SVG Repo
- **URL**: https://svgrepo.com
- **Use Case**: Find and tweak a free vector for any style
- **Description**: Search 500k+ free SVG icons and vectors across many styles, with an inline editor and optimizer.
- **Tags**: free, icons, svg, vectors

### Sweezy Cursors
- **URL**: https://sweezy-cursors.com
- **Use Case**: Add a custom animated cursor to a website
- **Description**: A library of free animated custom cursors for websites.
- **Tags**: cursors, free-assets

### Tabler Icons
- **URL**: https://tabler.io/icons
- **Use Case**: Grab a large consistent free icon library
- **Description**: 5000+ free MIT-licensed SVG icons on a consistent 24px stroke grid, outline and filled.
- **Tags**: free, icons, open source, svg

### Tailwind CSS
- **URL**: https://tailwindcss.com
- **Use Case**: Style UI fast with utilities, or reference sane design defaults
- **Description**: Utility-first CSS framework; the docs double as a practical reference for spacing, color, and responsive design decisions.
- **Tags**: css, framework, reference, ui

### Terraink
- **URL**: https://terraink.app
- **Use Case**: Turn a real place into a stylized map print
- **Description**: Generates stylized, artistic map prints from real geographic data.
- **Tags**: art, maps

### The Noun Project
- **URL**: https://thenounproject.com
- **Use Case**: Find icons and stock photos
- **Description**: Icons and photos repository.
- **Tags**: design

### This is Sand
- **URL**: https://thisissand.com
- **Use Case**: Create art by drawing with digital sand
- **Description**: Digital sand art drawing application.
- **Tags**: design

### TinEye
- **URL**: https://tineye.com
- **Use Case**: Find where an image came from
- **Description**: Reverse image search finding similar images.
- **Tags**: design, osint, search

### tixy.land
- **URL**: https://tixy.land
- **Use Case**: Experiment with generative-art formulas in one line of code
- **Description**: A tiny creative-coding playground where a one-line JS function animates a grid of dots.
- **Tags**: creative-coding, generative-art

### Type Scale
- **URL**: https://typescale.com
- **Use Case**: Set up consistent heading sizes with a ratio
- **Description**: Visualize a modular typographic scale and copy the CSS for it.
- **Tags**: css, design, typography

### UI Colors
- **URL**: https://uicolors.app
- **Use Case**: Turn one brand color into a full shade palette
- **Description**: Generates a full Tailwind-style color shade palette from one base color.
- **Tags**: color, palette

### unDraw
- **URL**: https://undraw.co/illustrations
- **Use Case**: Drop a matching illustration into a page or deck
- **Description**: Open-source illustration library where you recolor to your brand accent on the fly; MIT-style license.
- **Tags**: free, illustration, open source, svg

### Unsplash
- **URL**: https://unsplash.com
- **Use Case**: Source free imagery for marketing pages/decks.
- **Description**: Free high-resolution stock photography.
- **Tags**: design, free, stock photos

### UXWing
- **URL**: https://uxwing.com
- **Use Case**: Grab a free vector icon for a project
- **Description**: A free icon library with thousands of vector icons for commercial use.
- **Tags**: free-assets, icons

### Vectorizer.AI
- **URL**: https://vectorizer.ai
- **Use Case**: Convert a raster logo into an editable vector
- **Description**: Converts raster images (JPG/PNG) into clean, editable vector graphics.
- **Tags**: conversion, vector-graphics

### Virtual Threads
- **URL**: https://virtualthreads.io
- **Use Case**: Generate a 3D t-shirt mockup with your logo
- **Description**: Generate free animated 3D t-shirt mockups with your logo.
- **Tags**: 3d, mockup, virtualthreads

### Vizcom
- **URL**: https://vizcom.com
- **Use Case**: Turn a product sketch into a realistic render
- **Description**: Converts rough product sketches into photorealistic AI renders.
- **Tags**: ai, rendering

### Watabou's Generators
- **URL**: https://watabou.github.io
- **Use Case**: Procedurally generate a fantasy city or map
- **Description**: A set of procedural generators for fantasy cities, maps, and RPG content.
- **Tags**: fantasy-maps, generator

### WhatTheFont
- **URL**: https://myfonts.com/pages/whatthefont
- **Use Case**: Identify a font from an image
- **Description**: Font identification using deep learning.
- **Tags**: design

## Developer Tools
*141 tools.*

### Accessibility Insights
- **URL**: https://accessibilityinsights.io
- **Use Case**: Do a structured manual accessibility assessment
- **Description**: Microsoft's a11y tooling for web and Windows — fast automated checks plus guided manual assessments (tab order, screen reader).
- **Tags**: a11y, accessibility, audit, testing

### Alembic
- **URL**: https://alembic.sqlalchemy.org
- **Use Case**: Write or debug a database migration
- **Description**: SQLAlchemy's migration tool — autogenerate, manual revisions, branching, offline SQL.
- **Tags**: alembic, chegga, database, migrations, python

### AlternativeTo
- **URL**: https://alternativeto.net
- **Use Case**: Find cheaper software alternatives
- **Description**: Finds alternatives to expensive software.
- **Tags**: software

### Anime.js
- **URL**: https://animejs.com
- **Use Case**: Add smooth animations to a web page with JS
- **Description**: A lightweight JavaScript animation library for CSS, SVG, and DOM properties.
- **Tags**: animation, javascript

### Apify
- **URL**: https://apify.com
- **Use Case**: Run ready-made web scrapers and automations
- **Description**: Thousands of tools to automate your business. Get real-time web data, track competitors, generate leads, and integrate your apps and AI agents.
- **Tags**: apify, automation, scraping

### axe DevTools
- **URL**: https://deque.com/axe/devtools
- **Use Case**: Run automated a11y checks while developing
- **Description**: The most-used accessibility testing engine, as a browser extension — automated WCAG checks with guided fixes and low false positives.
- **Tags**: a11y, accessibility, testing, wcag

### Axiom AI
- **URL**: https://axiom.ai
- **Use Case**: Automate browser tasks without code
- **Description**: Browser automation tool requiring no coding knowledge.
- **Tags**: browser, developer

### Beautifier.io
- **URL**: https://beautifier.io
- **Use Case**: Format code for readability
- **Description**: Formats and beautifies code for readability.
- **Tags**: developer

### Beeceptor
- **URL**: https://beeceptor.com
- **Use Case**: Mock a REST API before the backend exists
- **Description**: Create AI-powered mock servers in seconds. Generate realistic responses from prompts or real traffic for REST, SOAP, GraphQL, and gRPC. No code, no dependencies. Free
- **Tags**: beeceptor, mock-api, testing

### Better Auth
- **URL**: https://better-auth.com
- **Use Case**: Add real auth to a TS app without a SaaS
- **Description**: Framework-agnostic TypeScript authentication library — sessions, OAuth, 2FA, organizations — self-hosted, owns its tables.
- **Tags**: auth, backend, security, typescript

### Bitbucket
- **URL**: https://bitbucket.org
- **Use Case**: Host Git repos with Jira-linked CI/CD
- **Description**: Bitbucket Cloud is a Git-based code and CI/CD tool optimized for teams using Jira.
- **Tags**: bitbucket, ci-cd, git

### Browserling
- **URL**: https://browserling.com
- **Use Case**: Test a site in an old browser without installing it
- **Description**: Runs real browsers, including old IE versions, remotely for cross-browser testing.
- **Tags**: cross-browser, testing

### Can I Use
- **URL**: https://caniuse.com
- **Use Case**: Check if a feature is safe to ship to your users
- **Description**: Browser-support tables for web platform features, with global and regional usage percentages.
- **Tags**: compatibility, css, javascript, reference, web, web utilities

### Chess.com Published-Data API
- **URL**: https://chess.com/announcements/view/published-data-api
- **Use Case**: Pull a player's real game history the sanctioned way
- **Description**: Official read-only API for public Chess.com data — player profiles, monthly game archives (PGN), clubs, leaderboards. No key.
- **Tags**: api, chegga, chess, data, essential

### chess.js
- **URL**: https://github.com/jhlywa/chess.js
- **Use Case**: Enforce chess rules in a browser trainer
- **Description**: JavaScript/TypeScript chess logic — legal moves, check/checkmate/draw detection, FEN/PGN — the rules layer for a web board.
- **Tags**: chegga, chess, javascript, library, web

### Chessground
- **URL**: https://github.com/lichess-org/chessground
- **Use Case**: Render an interactive chess board on the web
- **Description**: Lichess's MIT-licensed board UI component — fast, accessible, drag/premove/animation — no rules, pair it with chess.js.
- **Tags**: chegga, chess, javascript, ui, web

### Codeberg
- **URL**: https://codeberg.org
- **Use Case**: Host code on a non-profit Git forge
- **Description**: Codeberg is a non-profit community-led organization that aims to help free and open source projects prosper by giving them a safe and friendly home.
- **Tags**: codeberg, git, open-source

### Codecademy
- **URL**: https://codecademy.com
- **Use Case**: Learn to code with interactive lessons
- **Description**: Interactive coding classes.
- **Tags**: developer

### CodePen
- **URL**: https://codepen.io
- **Use Case**: Prototype a UI snippet or find a technique demo
- **Description**: The frontend playground — small HTML/CSS/JS demos, huge inspiration feed, live preview.
- **Tags**: css, frontend, inspiration, playground

### CodeSandbox
- **URL**: https://codesandbox.io
- **Use Case**: Prototype or share a web app without local setup
- **Description**: Online IDE and sandboxes for web apps, with GitHub import and shareable live previews.
- **Tags**: ide, playground, prototyping, web

### Compare JSON
- **URL**: https://comparejson.com
- **Use Case**: Compare two JSON files semantically
- **Description**: Compare two JSON files online with this semantic JSON diff tool. Semantic comparison understands data structure, not just text — spot value changes, type mismatches, and missing properties with full key-path context.
- **Tags**: comparejson, diff, json

### Compiler Explorer
- **URL**: https://godbolt.org
- **Use Case**: Check what code the compiler actually generates
- **Description**: See the assembly (and optimizations) your C/C++/Rust/etc. compiles to, side by side, across compilers and flags.
- **Tags**: assembly, c++, compilers, performance, rust

### Conventional Commits
- **URL**: https://conventionalcommits.org
- **Use Case**: Standardize commit messages across repos
- **Description**: A lightweight commit-message convention that enables automated changelogs and semver bumps.
- **Tags**: conventions, git, reference

### CORS.dev
- **URL**: https://cors.dev
- **Use Case**: Get past CORS errors with a free proxy
- **Description**: Get past CORS errors and back to building. Free anonymous GET and HEAD access to any public API, plus Pro for write methods and custom headers: $5/month for 500,000 requests.
- **Tags**: cors, proxy

### crontab guru
- **URL**: https://crontab.guru
- **Use Case**: Write or verify a cron schedule
- **Description**: Live editor that translates a cron expression into plain English and shows the next run times.
- **Tags**: cron, reference, scheduling

### Crowdin
- **URL**: https://crowdin.com
- **Use Case**: Manage app translations and localization
- **Description**: Crowdin is an all-in-one localization and translation management platform with all the software, tools and integrations you need to localize your content.
- **Tags**: crowdin, localization, translation

### CSS-Tricks
- **URL**: https://css-tricks.com
- **Use Case**: Solve a specific CSS layout problem
- **Description**: Deep archive of practical CSS and frontend articles, including the near-canonical flexbox and grid guides.
- **Tags**: css, frontend, guide, reference

### CyberChef
- **URL**: https://gchq.github.io/CyberChef
- **Use Case**: Decode, convert, or transform a blob of data quickly
- **Description**: The 'cyber swiss-army knife' — chain 300+ operations for encoding, encryption, compression, and data parsing in the browser.
- **Tags**: data, encoding, encryption, facebook, osint, security, socmint

### Datalore
- **URL**: https://datalore.jetbrains.com
- **Use Case**: Run collaborative Jupyter notebooks online
- **Description**: Online Jupyter notebooks with smart coding assistance for Python, SQL, R, Scala, and Kotlin. Take advantage of database and cloud storage integrations, real-time collaboration, and interactive report publishing.
- **Tags**: data-science, datalore, notebooks

### Datasette
- **URL**: https://datasette.io
- **Use Case**: Browse or publish a SQLite dataset
- **Description**: Turn a SQLite database into an explorable, queryable JSON API and web UI with one command.
- **Tags**: api, chegga, data, python, sqlite

### DB Browser for SQLite
- **URL**: https://sqlitebrowser.org
- **Use Case**: Poke at the app's .db file directly
- **Description**: Free GUI to open, query, edit, and inspect a SQLite file — schema view, data grid, execute SQL.
- **Tags**: chegga, database, free, gui, sqlite

### DB Designer
- **URL**: https://dbdesigner.net
- **Use Case**: Design a database schema visually
- **Description**: FREE fully-featured visual database schema designer. Design database model online & generate SQL script instantly. ✓ MySQL ✓ PostgreSQL ✓ MS SQL ✓ Oracle ✓ SQLite modeling by DbDesigner.net
- **Tags**: database, dbdesigner, schema

### dbdiagram.io
- **URL**: https://dbdiagram.io
- **Use Case**: Design and share a DB schema quickly
- **Description**: Define a database schema in a simple DSL and get a live ER diagram; exports SQL and images.
- **Tags**: database, diagrams, erd, schema

### DBeaver
- **URL**: https://dbeaver.io
- **Use Case**: Free alternative to TablePlus for browsing SQLite data.
- **Description**: Free universal database GUI tool.
- **Tags**: database, free

### Detexify
- **URL**: https://detexify.kirelabs.org
- **Use Case**: Find the LaTeX command for a symbol by drawing it
- **Description**: Draw a symbol and it identifies the matching LaTeX command.
- **Tags**: latex, lookup

### DevDocs
- **URL**: https://devdocs.io
- **Use Case**: Search many libraries' docs from one keyboard-driven page
- **Description**: Fast, searchable, offline-capable aggregator of API documentation for hundreds of languages and libraries in one UI.
- **Tags**: docs, offline, reference, search

### DevHints
- **URL**: https://devhints.io
- **Use Case**: Get a fast refresher on a tool's syntax
- **Description**: Rico's dense, single-page cheat sheets for dozens of tools, languages, and CLIs.
- **Tags**: cheat sheets, cli, reference

### Dexie.js
- **URL**: https://dexie.org
- **Use Case**: Work with IndexedDB without the raw API pain (Chegga Web)
- **Description**: Ergonomic IndexedDB wrapper — schema versioning, indexes, transactions, live queries — instead of raw IndexedDB.
- **Tags**: browser, chegga, indexeddb, javascript, storage, web

### Diffchecker
- **URL**: https://diffchecker.com
- **Use Case**: Compare two versions of something outside of git
- **Description**: Online diff for text, files, images, PDFs, and Excel — quick when you're not in a git context.
- **Tags**: compare, diff, web utilities

### draw.io (diagrams.net)
- **URL**: https://app.diagrams.net
- **Use Case**: Draw a precise flowchart or ER diagram
- **Description**: Free full-featured diagramming — flowcharts, ERDs, network, UML — with local or cloud file storage.
- **Tags**: diagrams, erd, flowcharts, free

### Emscripten
- **URL**: https://emscripten.org
- **Use Case**: Understand or rebuild a C/C++ WASM module
- **Description**: The LLVM-to-WebAssembly toolchain — how C/C++ projects like Stockfish get compiled to run in a browser.
- **Tags**: c++, chegga, toolchain, wasm

### Epoch Converter
- **URL**: https://epochconverter.com
- **Use Case**: Convert a Unix timestamp to a real date
- **Description**: Converts Unix epoch timestamps to and from human-readable dates.
- **Tags**: converter, timestamps

### Excalidraw
- **URL**: https://excalidraw.com
- **Use Case**: Sketch a system diagram to think or explain
- **Description**: Hand-drawn-style whiteboard for architecture sketches and diagrams; exports SVG/PNG, has a library ecosystem.
- **Tags**: architecture, diagrams, free, whiteboard

### explainshell
- **URL**: https://explainshell.com
- **Use Case**: Decode a scary one-liner someone handed you
- **Description**: Paste a shell command and it annotates every flag and token with the matching man-page text.
- **Tags**: cli, learning, reference, shell

### FastAPI
- **URL**: https://fastapi.tiangolo.com
- **Use Case**: Look up a FastAPI pattern (deps, auth, background tasks)
- **Description**: The Python web framework these apps use — type-hint-driven, automatic OpenAPI docs, dependency injection, async.
- **Tags**: backend, chegga, docs, essential, fastapi, python

### Firebase
- **URL**: https://firebase.google.com
- **Use Case**: Reference managed-auth patterns for an auth gate.
- **Description**: Google's backend platform: auth, database, hosting, and functions.
- **Tags**: backend, database

### Forgejo
- **URL**: https://forgejo.org
- **Use Case**: Self-host a lightweight Git forge
- **Description**: Forgejo is a self-hosted lightweight software forge. Easy to install and low maintenance, it just does the job.
- **Tags**: forgejo, git, self-hosted

### Free Programming Books (list)
- **URL**: https://github.com/EbookFoundation/free-programming-books
- **Use Case**: Find a free resource for almost any tech topic
- **Description**: The huge, maintained index of free programming books, courses, and interactive tutorials in many languages.
- **Tags**: books, free, learning, reference

### free-for.dev
- **URL**: https://free-for.dev
- **Use Case**: Find services with a free tier for a side project
- **Description**: Developers and Open Source authors now have a massive amount of services offering free tiers, but it can be hard to find them all to make informed decisions.
- **Tags**: directory, free-for, free-tier

### GitHub
- **URL**: https://github.com
- **Use Case**: Hosts all four active project repos.
- **Description**: Git hosting, issues, and CI/CD for code repositories.
- **Tags**: git, hosting

### GitHub Pages
- **URL**: https://pages.github.com
- **Use Case**: Host a static site free from a GitHub repo
- **Description**: Free static hosting straight from a repo branch — what Little Sprout Stories already deploys to.
- **Tags**: free, github, hosting, little-sprout, static

### gitignore.io
- **URL**: https://gitignore.io
- **Use Case**: Generate a .gitignore for a new project
- **Description**: Generates a ready-made .gitignore file for any combination of languages and tools.
- **Tags**: config, git

### GitLab
- **URL**: https://gitlab.com
- **Use Case**: Alternative git host with built-in DevOps tooling.
- **Description**: Git hosting with integrated CI/CD pipelines.
- **Tags**: ci/cd, git

### GitLab
- **URL**: https://about.gitlab.com
- **Use Case**: Run Git hosting and CI/CD in one platform
- **Description**: Teams and agents ship trusted software faster with GitLab, the intelligent orchestration platform with context and governance for the entire software lifecycle.
- **Tags**: ci-cd, git, gitlab

### GoalKicker Free Programming Books
- **URL**: https://goalkicker.com
- **Use Case**: Get a free reference book for a language
- **Description**: Free PDF books compiled from Stack Overflow Documentation covering ~50 languages and tools.
- **Tags**: books, free, learning, reference

### grep.app
- **URL**: https://grep.app
- **Use Case**: Find real-world examples of how a function is used
- **Description**: Searches code across a huge index of public GitHub repositories.
- **Tags**: code-search, github

### Hoppscotch
- **URL**: https://hoppscotch.io
- **Use Case**: Test an API endpoint without installing Postman
- **Description**: Fast, open-source, browser-based API client — a lightweight Postman alternative for REST/GraphQL/WebSocket.
- **Tags**: api, graphql, open source, rest, testing

### HTTP Cats
- **URL**: https://http.cat
- **Use Case**: Look up what an HTTP status code means, memorably
- **Description**: Illustrates every HTTP status code with a matching cat photo.
- **Tags**: http, reference

### Inngest
- **URL**: https://inngest.com
- **Use Case**: Run background jobs and workflows reliably
- **Description**: Build reliable background jobs, workflows, and AI agents without extra infrastructure. Automatic retries, flow control, and step-level observability.
- **Tags**: inngest, jobs, workflows

### Insomnia
- **URL**: https://insomnia.rest
- **Use Case**: Free alternative to Postman for API testing.
- **Description**: Lightweight open-source API client.
- **Tags**: api, free, testing

### IP-API
- **URL**: https://ip-api.com
- **Use Case**: Look up IP geolocation from a free API
- **Description**: Free IP Geolocation API - lookup any IP address
- **Tags**: api, geolocation, ip, ip-api

### IPinfo
- **URL**: https://ipinfo.io
- **Use Case**: Look up IP data for fraud checks and geolocation
- **Description**: IPinfo delivers fast, accurate, and reliable IP data to power fraud detection, geolocation, analytics, and more. Trusted by over 500,000 developers.
- **Tags**: api, geolocation, ip, ipinfo

### IT Tools
- **URL**: https://it-tools.tech
- **Use Case**: Find a quick dev utility like a hash or encoder
- **Description**: A large collection of small browser-based utilities for developers, like hashing and encoding.
- **Tags**: toolbox, utilities

### JetBrains IDEs
- **URL**: https://jetbrains.com
- **Use Case**: Heavier-weight IDE alternative to VS Code for Python/TS work.
- **Description**: Suite of language-specific IDEs (PyCharm, WebStorm, etc.).
- **Tags**: ide

### JotForm
- **URL**: https://jotform.com
- **Use Case**: Build complex forms without code
- **Description**: Builds complex forms without coding.
- **Tags**: developer

### JSON Crack
- **URL**: https://jsoncrack.com
- **Use Case**: Visualize a messy JSON payload
- **Description**: Paste JSON/YAML/CSV and get an interactive node graph — fast way to understand a deep or unfamiliar structure.
- **Tags**: data, json, visualization

### JSONing
- **URL**: https://jsoning.com
- **Use Case**: Format, validate and convert JSON online
- **Description**: JSONing is an online JSON toolbox that provides a variety of tools, including a JSON formatter, JSON linter, JSON AI fixer, Mock API, JSONL tools, converters, and more.
- **Tags**: formatter, json, jsoning

### Keep a Changelog
- **URL**: https://keepachangelog.com
- **Use Case**: Structure a project changelog
- **Description**: A simple, widely-followed format for human-readable CHANGELOG files.
- **Tags**: conventions, documentation, reference

### Learn Git Branching
- **URL**: https://learngitbranching.js.org
- **Use Case**: Practice Git commands without risking a real repo
- **Description**: An interactive, visual sandbox for practicing Git branching and commands.
- **Tags**: git, tutorial

### Lichess API
- **URL**: https://lichess.org/api
- **Use Case**: Get games, evals, or puzzles from Lichess
- **Description**: Open, well-documented API — user games (NDJSON/PGN), studies, puzzles, cloud eval, board/bot play; far more permissive than Chess.com's.
- **Tags**: api, chegga, chess, data

### Litestream
- **URL**: https://litestream.io
- **Use Case**: Make a SQLite-on-a-single-host deploy durable
- **Description**: Streaming replication of a live SQLite database to S3-style storage — continuous backup and point-in-time restore.
- **Tags**: backup, chegga, hosting, replication, sqlite

### MDN Web Docs
- **URL**: https://developer.mozilla.org
- **Use Case**: Look up how a web API or CSS property actually behaves
- **Description**: The authoritative reference for HTML, CSS, JavaScript, and Web APIs — accurate, example-rich, with compatibility tables.
- **Tags**: css, docs, essential, javascript, reference, web

### Mermaid Live Editor
- **URL**: https://mermaid.live
- **Use Case**: Write a diagram as text for docs or a README
- **Description**: Live editor for Mermaid text-based diagrams (flowchart, sequence, gantt, class) that render from Markdown-like syntax.
- **Tags**: diagrams, docs, markdown, mermaid

### Mintlify
- **URL**: https://mintlify.com
- **Use Case**: Host product documentation that updates itself
- **Description**: Self-updating documentation for startups, enterprises, and agents.
- **Tags**: docs, documentation, mintlify

### MockAPI
- **URL**: https://mockapi.io
- **Use Case**: Spin up a mock REST API from a schema
- **Description**: MockAPI is a simple tool that lets you easily mock up APIs, generate custom data, and perform operations on it using RESTful interface. MockAPI is meant to be used as a prototyping/testing/learning tool.
- **Tags**: mock-api, mockapi, testing

### n8n
- **URL**: https://n8n.io
- **Use Case**: Automate a task across multiple apps without code
- **Description**: An open-source workflow-automation tool for connecting apps and APIs visually.
- **Tags**: automation, workflow

### Natively
- **URL**: https://natively.dev
- **Use Case**: Build a native mobile app without writing code
- **Description**: An AI-assisted no-code builder for native iOS and Android apps.
- **Tags**: mobile, no-code

### News API
- **URL**: https://newsapi.org
- **Use Case**: Search news articles through a JSON API
- **Description**: Get JSON search results for global news articles in real-time with our free News API.
- **Tags**: api, news, newsapi

### Ninite
- **URL**: https://ninite.com
- **Use Case**: Install multiple open-source apps at once
- **Description**: Batch installer for open-source software.
- **Tags**: software

### NVDA Screen Reader
- **URL**: https://nvaccess.org
- **Use Case**: Test a site the way a screen-reader user experiences it
- **Description**: Free, open-source Windows screen reader — the standard way for sighted developers to test how a page sounds to non-visual users.
- **Tags**: a11y, accessibility, free, screen reader, testing

### Observable Plot
- **URL**: https://observablehq.com/plot
- **Use Case**: Quickly plot data to see what's there
- **Description**: Concise, grammar-of-graphics plotting library — a lot of chart for a little code, great for exploratory views.
- **Tags**: charts, chegga, dataviz, javascript

### Open Source Alternative
- **URL**: https://opensourcealternative.to
- **Use Case**: Find open-source alternatives to paid software
- **Description**: Open source software alternatives.
- **Tags**: software

### PageSpeed Insights
- **URL**: https://pagespeed.web.dev
- **Use Case**: Get a lab + field report card for a live page
- **Description**: Runs Lighthouse against a URL for performance, accessibility, SEO, and best-practices scores plus field data from real Chrome users.
- **Tags**: accessibility, audit, lighthouse, performance, seo

### Patterns.dev
- **URL**: https://patterns.dev
- **Use Case**: Learn modern frontend architecture and rendering patterns
- **Description**: Free book on modern web app design, rendering, and performance patterns (React/Next-leaning but broadly useful).
- **Tags**: free, patterns, performance, react, web

### PGN Mentor Downloads
- **URL**: https://pgnmentor.com/files.html
- **Use Case**: Get bulk PGNs for testing or study
- **Description**: Free downloadable PGN collections by player, opening, and event — useful test data and opening study material.
- **Tags**: chegga, chess, data, pgn

### Playwright
- **URL**: https://playwright.dev
- **Use Case**: Write a browser end-to-end test
- **Description**: Cross-browser end-to-end testing with auto-waiting, tracing, and a codegen recorder.
- **Tags**: automation, chegga, e2e, testing

### Postman
- **URL**: https://postman.com
- **Use Case**: Test Atlas/Chegga FastAPI endpoints during development.
- **Description**: API client for testing and documenting HTTP endpoints.
- **Tags**: api, testing

### Prefect
- **URL**: https://prefect.io
- **Use Case**: Orchestrate data and ML workflows
- **Description**: Orchestrate workflows with Prefect. Connect AI agents to your tools and data with FastMCP Gateway. Open-source foundations, production-ready platforms.
- **Tags**: orchestration, prefect, workflows

### PWABuilder
- **URL**: https://pwabuilder.com
- **Use Case**: Wrap the storybook PWA for an app store
- **Description**: Microsoft tool that audits a PWA and packages it for the Microsoft Store, Google Play, and iOS from the live URL.
- **Tags**: free, little-sprout, packaging, pwa, web

### Pydantic
- **URL**: https://docs.pydantic.dev/latest
- **Use Case**: Model and validate request/response shapes
- **Description**: Validation and settings library underpinning FastAPI schemas — v2 model config, validators, serialization, pydantic-settings.
- **Tags**: chegga, docs, pydantic, python, validation

### python-chess
- **URL**: https://python-chess.readthedocs.io
- **Use Case**: Parse PGNs and drive Stockfish from Python
- **Description**: The Python library for chess — move generation, PGN/FEN/EPD parsing, UCI/XBoard engine control, tablebase and opening-book probing.
- **Tags**: chegga, chess, library, python

### QuickRef.ME
- **URL**: https://quickref.me
- **Use Case**: Find a quick visual cheat sheet for a language or tool
- **Description**: A collection of visual cheat sheets for languages, frameworks, and dev tools.
- **Tags**: cheat-sheet, reference

### ray.so
- **URL**: https://ray.so
- **Use Case**: Make a good-looking screenshot of code
- **Description**: Turn a code snippet into a clean, shareable image with themes, padding, and language detection.
- **Tags**: code images, design, screenshots, sharing

### React Bits
- **URL**: https://reactbits.dev
- **Use Case**: Grab a ready-made animated React component
- **Description**: A library of copy-paste animated React UI components and effects.
- **Tags**: components, react

### React Docs
- **URL**: https://react.dev
- **Use Case**: Check correct hook usage or a React pattern
- **Description**: The current official React documentation — hooks reference, effect rules, `use` and Suspense, and the 'you might not need an effect' guidance.
- **Tags**: chegga, docs, essential, frontend, react, reference

### react-chessboard
- **URL**: https://github.com/Clariity/react-chessboard
- **Use Case**: Add a React board with drag-and-drop quickly
- **Description**: React chessboard component built on chess.js conventions — drag-and-drop, custom pieces, arrows, square styling.
- **Tags**: chegga, chess, components, react, web

### Recharts
- **URL**: https://recharts.org
- **Use Case**: Add a chart to a React profile or dashboard
- **Description**: Composable React charting on SVG — line, area, bar, radar, scatter — good default for dashboards.
- **Tags**: charts, chegga, dataviz, frontend, react

### Refactoring.Guru
- **URL**: https://refactoring.guru
- **Use Case**: Understand a design pattern and when to use it
- **Description**: Clear, illustrated explanations of design patterns and refactorings with code in multiple languages.
- **Tags**: architecture, learning, patterns, reference

### regex101
- **URL**: https://regex101.com
- **Use Case**: Build and debug a regular expression
- **Description**: Regex tester with live match highlighting, a full explanation pane, and code generation for several languages.
- **Tags**: essential, regex, testing, web utilities

### RegExr
- **URL**: https://regexr.com
- **Use Case**: Build and debug a regular expression
- **Description**: An online regex tester with live highlighting, a cheat sheet, and a pattern community.
- **Tags**: regex, testing

### Replit
- **URL**: https://replit.com
- **Use Case**: Code and run almost any language with zero setup
- **Description**: Browser IDE with instant environments for ~50 languages, hosting, and collaboration.
- **Tags**: ai, collaboration, hosting, ide, playground, prototyping

### roadmap.sh
- **URL**: https://roadmap.sh
- **Use Case**: See what to learn next in a given track
- **Description**: Community-maintained visual skill roadmaps for frontend, backend, DevOps, and many specific roles and technologies.
- **Tags**: career, learning, reference, roadmap

### Ruff
- **URL**: https://docs.astral.sh/ruff
- **Use Case**: Lint and format a Python project fast
- **Description**: Extremely fast Python linter and formatter (Flake8 + isort + Black + more) with one config.
- **Tags**: chegga, formatting, linting, python, tooling

### scikit-learn
- **URL**: https://scikit-learn.org/stable
- **Use Case**: Build or tune a small predictive model
- **Description**: The classic Python ML library — regressors, classifiers, pipelines, cross-validation, metrics — behind Chegga's strength model.
- **Tags**: chegga, docs, machine learning, python

### SourceForge
- **URL**: https://sourceforge.net
- **Use Case**: Find open-source software projects
- **Description**: Open-source software collection and publishing platform.
- **Tags**: software

### SQLAlchemy
- **URL**: https://sqlalchemy.org
- **Use Case**: Already the ORM powering Atlas and Chegga's backends.
- **Description**: Python SQL toolkit and ORM.
- **Tags**: orm, python

### SQLAlchemy
- **URL**: https://docs.sqlalchemy.org
- **Use Case**: Get a SQLAlchemy relationship or query right
- **Description**: The ORM and Core query layer behind the backends — session handling, relationship loading, the 2.0 select() API.
- **Tags**: chegga, database, docs, orm, python, sqlalchemy

### SQLite Documentation
- **URL**: https://sqlite.org/docs.html
- **Use Case**: Check SQLite SQL syntax, a pragma, or FTS
- **Description**: The reference for the database all three apps run on — SQL dialect, pragmas, JSON1, FTS5 full-text search, limits.
- **Tags**: chegga, database, docs, reference, sqlite

### SQLite Online
- **URL**: https://sqliteonline.com
- **Use Case**: Try a SQL query without setting up a database
- **Description**: Runs a SQLite, MySQL, or PostgreSQL database directly in the browser, no install needed.
- **Tags**: sandbox, sql

### SS64
- **URL**: https://ss64.com
- **Use Case**: Look up exact flags for a shell command
- **Description**: Comprehensive command-line reference for bash, PowerShell, CMD, macOS, and major cloud CLIs.
- **Tags**: bash, cli, powershell, reference, shell

### StackBlitz
- **URL**: https://stackblitz.com
- **Use Case**: Spin up a real Node/frontend project instantly in a tab
- **Description**: In-browser IDE running Node and Vite via WebContainers — full dev server, npm install, no cloud VM.
- **Tags**: ide, javascript, playground, prototyping

### StackOverflow
- **URL**: https://stackoverflow.com
- **Use Case**: Search answers to programming questions
- **Description**: Website for programmers learning and discussing concepts.

### Stockfish
- **URL**: https://stockfishchess.org
- **Use Case**: Get the engine or a fresh network build
- **Description**: The strongest open-source chess engine — source, binaries, and the NNUE networks; the analysis core behind Chegga.
- **Tags**: chegga, chess, engine, open source

### stockfish.wasm / lila-stockfish-web
- **URL**: https://github.com/lichess-org/stockfish.wasm
- **Use Case**: Run Stockfish in a browser Web Worker (Chegga Web)
- **Description**: The WASM builds of Stockfish that Lichess ships in-browser — single-thread and multi-thread variants, the reference for running the engine client-side.
- **Tags**: chegga, chess, engine, wasm, web

### Svix
- **URL**: https://svix.com
- **Use Case**: Send webhooks to customers reliably
- **Description**: Svix is the enterprise-ready webhook platform delivering billions of webhooks every month for fast-growth startups and Fortune 500 companies including Brex, Benchling, and Drata. Send and receive webhooks at scale with retries, signature verification, and a managed dashboard.
- **Tags**: api, svix, webhooks

### System Design Primer
- **URL**: https://github.com/donnemartin/system-design-primer
- **Use Case**: Prep for a system-design interview or design a scalable service
- **Description**: Widely used open-source guide to designing large-scale systems and preparing for system-design interviews.
- **Tags**: architecture, free, interview, learning, system design

### Syzygy Tablebases
- **URL**: https://syzygy-tables.info
- **Use Case**: Get the theoretically correct result for an endgame
- **Description**: Online 7-piece endgame tablebase lookup with an API (also mirrored at tablebase.lichess.ovh) — perfect-play results for low-piece positions.
- **Tags**: api, chegga, chess, endgame

### TablePlus
- **URL**: https://tableplus.com
- **Use Case**: Inspect Atlas/Chegga SQLite databases visually.
- **Description**: GUI database client supporting SQLite, Postgres, MySQL, and more.
- **Tags**: database, sqlite

### TanStack Query
- **URL**: https://tanstack.com/query/latest
- **Use Case**: Manage server data fetching and caching cleanly
- **Description**: Async server-state for React — caching, background refetch, pagination, mutations — instead of hand-rolled loading state in useEffect.
- **Tags**: chegga, data fetching, frontend, react, state

### TanStack Table
- **URL**: https://tanstack.com/table/latest
- **Use Case**: Build a sortable/filterable data table
- **Description**: Headless table logic for React — sorting, filtering, grouping, virtualization — you own the markup.
- **Tags**: chegga, frontend, react, tables

### Testing Library
- **URL**: https://testing-library.com/docs
- **Use Case**: Test a component the way a user sees it
- **Description**: Query-by-accessible-role component testing for React and others — tests behavior, not implementation details.
- **Tags**: chegga, frontend, react, testing

### The A11Y Project Checklist
- **URL**: https://a11yproject.com/checklist
- **Use Case**: Work through a realistic a11y checklist before launch
- **Description**: A practical, prioritized accessibility checklist for shipping teams, grouped by content, design, and code.
- **Tags**: a11y, accessibility, checklist, reference

### TinyMCE
- **URL**: https://tiny.cloud
- **Use Case**: Add a rich text editor to a web app
- **Description**: Elevate your web development with TinyMCE's WYSIWYG Rich Text Editor. Trusted by 1.5M+ developers, with AI-powered tools and seamless integrations.
- **Tags**: editor, tinymce, wysiwyg

### tldr pages
- **URL**: https://tldr.sh
- **Use Case**: See practical examples for a CLI command fast
- **Description**: Community cheat sheets that replace man-page walls of text with a handful of real example commands.
- **Tags**: cheat sheets, cli, open source, reference

### Track Awesome List
- **URL**: https://trackawesomelist.com
- **Use Case**: Track new additions to awesome lists
- **Description**: We track over 500 awesome list updates, and you can also subscribe to daily or weekly updates via RSS or News Letter.
- **Tags**: awesome-lists, directory, trackawesomelist

### Transform.tools
- **URL**: https://transform.tools
- **Use Case**: Convert between two data or code formats
- **Description**: One-page collection of format converters — JSON↔TS, JSON↔Go, HTML→JSX, cURL→code, and dozens more.
- **Tags**: converter, json, typescript

### uv
- **URL**: https://docs.astral.sh/uv
- **Use Case**: Manage Python deps and envs quickly
- **Description**: Fast Rust-based Python package and project manager — resolver, lockfile, virtualenvs, Python version management.
- **Tags**: chegga, packaging, python, tooling

### Visual Studio Code
- **URL**: https://code.visualstudio.com
- **Use Case**: Primary editor for all four project codebases.
- **Description**: Free, extensible code editor.
- **Tags**: editor, free

### visx
- **URL**: https://visx.airbnb.tech
- **Use Case**: Build a custom, non-standard visualization
- **Description**: Low-level React + D3 primitives from Airbnb — build exactly the chart you want without a charting framework's constraints.
- **Tags**: charts, chegga, d3, dataviz, react

### Vite
- **URL**: https://vite.dev
- **Use Case**: Configure the dev server, proxy, or production build
- **Description**: The frontend build tool all three React apps use — dev server, HMR, env handling, build config, library mode.
- **Tags**: build, chegga, docs, frontend, vite

### Vitest
- **URL**: https://vitest.dev
- **Use Case**: Write unit tests for a Vite/React project
- **Description**: Vite-native test runner — Jest-compatible API, fast watch mode, in-source tests, coverage.
- **Tags**: chegga, frontend, testing, vite

### W3Schools
- **URL**: https://w3schools.com
- **Use Case**: Learn web development basics
- **Description**: Educational resource for coding and web development.
- **Tags**: developer

### Warp
- **URL**: https://warp.dev
- **Use Case**: Terminal replacement with command search and AI help.
- **Description**: Modern, AI-assisted terminal for macOS/Linux/Windows.
- **Tags**: terminal

### WAVE
- **URL**: https://wave.webaim.org
- **Use Case**: Audit a page for accessibility problems visually
- **Description**: WebAIM's accessibility evaluation tool — paste a URL (or use the extension) to get in-page annotations of errors, contrast issues, and ARIA problems.
- **Tags**: a11y, accessibility, audit, essential, wcag

### WCAG Quick Reference
- **URL**: https://w3.org/WAI/WCAG21/quickref
- **Use Case**: Look up what a specific WCAG requirement actually means
- **Description**: Filterable, plain-language list of every WCAG success criterion with techniques and failures — the official checklist.
- **Tags**: a11y, accessibility, reference, standards, wcag

### web.dev
- **URL**: https://web.dev
- **Use Case**: Improve a site's performance and best-practice score
- **Description**: Google's guidance on building modern web apps — performance, Core Web Vitals, PWA, accessibility — with measurable checklists.
- **Tags**: accessibility, performance, reference, web

### WebAIM Contrast Checker
- **URL**: https://webaim.org/resources/contrastchecker
- **Use Case**: Verify text color meets contrast requirements
- **Description**: Check a foreground/background color pair against WCAG AA/AAA contrast thresholds for normal and large text.
- **Tags**: a11y, accessibility, color, contrast, wcag

### WebAssembly.org
- **URL**: https://webassembly.org
- **Use Case**: Get oriented on shipping WASM to the browser
- **Description**: The official WebAssembly hub — concepts, the spec, toolchains, and links to language-specific compilers.
- **Tags**: chegga, reference, wasm, web

### Wokwi
- **URL**: https://wokwi.com
- **Use Case**: Test an Arduino circuit without real hardware
- **Description**: A browser-based simulator for Arduino, ESP32, and other microcontroller circuits.
- **Tags**: electronics, simulator

### Workbox
- **URL**: https://developer.chrome.com/docs/workbox
- **Use Case**: Make offline caching robust without hand-rolling a service worker
- **Description**: Google's library of service-worker building blocks — precaching, runtime caching strategies, offline fallback — instead of hand-writing sw.js.
- **Tags**: little-sprout, offline, pwa, service worker, web

### Zustand
- **URL**: https://pmndrs.github.io/zustand
- **Use Case**: Add simple global UI state without Redux
- **Description**: Tiny, unopinionated React state store — no context boilerplate, selective subscriptions, middleware.
- **Tags**: chegga, frontend, react, state

## Education
*138 tools.*

### Achieve the Core
- **URL**: https://achievethecore.org
- **Use Case**: Find a standards-aligned task or text set
- **Description**: Free tasks, text sets, planning tools, and rubrics built around college- and career-ready standards.
- **Tags**: almanac, free, standards, tasks, teaching

### Advent of Code
- **URL**: https://adventofcode.com
- **Use Case**: Practice with well-crafted algorithmic puzzles
- **Description**: Annual December puzzle set (all past years playable) — small, self-contained programming puzzles that ramp in difficulty.
- **Tags**: algorithms, practice, puzzles

### Animagraffs
- **URL**: https://animagraffs.com
- **Use Case**: See how a complex machine works, animated step by step
- **Description**: Jacob O'Neal's catalog of long-form animated infographics explaining how machines work.
- **Tags**: how-things-work, infographics

### Anki
- **URL**: https://apps.ankiweb.net
- **Use Case**: Reference spaced-repetition algorithm design for study features.
- **Description**: Free spaced-repetition flashcard software.
- **Tags**: flashcards, free, open source

### Anki
- **URL**: https://ankiweb.net
- **Use Case**: Memorize facts efficiently with spaced-repetition flashcards
- **Description**: A spaced-repetition flashcard app for efficient long-term memorization.
- **Tags**: flashcards, spaced-repetition

### Bartosz Ciechanowski's blog
- **URL**: https://ciechanow.ski
- **Use Case**: Read an interactive deep-dive on how something works
- **Description**: Hosts deep, beautifully crafted interactive articles explaining how things actually work.
- **Tags**: explainers, interactive

### BetterExplained
- **URL**: https://betterexplained.com
- **Use Case**: Build real intuition for a math concept
- **Description**: Teaches math through intuition and analogies first, then the formal details.
- **Tags**: intuition, math

### BioDigital Human
- **URL**: https://human.biodigital.com
- **Use Case**: Explore human anatomy in an interactive 3D model
- **Description**: An interactive 3D human anatomy platform for exploring the body system by system.
- **Tags**: 3d, anatomy

### Book Creator
- **URL**: https://bookcreator.com
- **Use Case**: Let students demonstrate learning by making something
- **Description**: Students make multimedia books combining text, drawing, image, audio, and video — a flexible 'show what you know' tool.
- **Tags**: almanac, creation, expression, multimedia, teaching

### Brilliant
- **URL**: https://brilliant.org
- **Use Case**: Learn a STEM topic through interactive lessons
- **Description**: Teaches STEM subjects through visual, interactive lessons instead of passive video.
- **Tags**: interactive, stem

### Canvas LMS
- **URL**: https://instructure.com/canvas
- **Use Case**: Reference LMS features for institutional integration ideas.
- **Description**: Widely used learning management system for schools/universities.
- **Tags**: lms

### CASEL
- **URL**: https://casel.org
- **Use Case**: Align content to a recognized SEL framework
- **Description**: The organization that defined the five-competency SEL framework — research, program guidance, and the CASEL wheel.
- **Tags**: essential, framework, little-sprout, sel, social-emotional, teaching

### CAST
- **URL**: https://cast.org
- **Use Case**: Go deeper on UDL research and practice
- **Description**: The nonprofit behind UDL — research, the UDL rising toolkits, and guidance on inclusive lesson design.
- **Tags**: accessibility, almanac, teaching, udl

### Chem Equations
- **URL**: https://chemequations.com
- **Use Case**: Balance a chemical equation and see the steps
- **Description**: Balances chemical equations and shows the step-by-step work.
- **Tags**: chemistry, solver

### Chrome Music Lab
- **URL**: https://musiclab.chromeexperiments.com
- **Use Case**: Explore a music concept through a playful experiment
- **Description**: A collection of free, playful browser experiments that make learning music fun.
- **Tags**: interactive, music-theory

### CK-12
- **URL**: https://ck12.org
- **Use Case**: Get free explanatory text and practice on a topic
- **Description**: Free adaptive textbooks ('FlexBooks'), simulations, and practice across math and science, remixable by teachers.
- **Tags**: almanac, free, math, oer, science, teaching

### Class Central
- **URL**: https://classcentral.com
- **Use Case**: Find a free online course
- **Description**: Aggregator of free online courses from universities worldwide.
- **Tags**: free

### ClassDojo
- **URL**: https://classdojo.com
- **Use Case**: Reference parent-communication UX patterns.
- **Description**: Classroom communication and behavior-tracking app for teachers/parents.
- **Tags**: communication

### Coddy
- **URL**: https://coddy.tech
- **Use Case**: Practice coding fundamentals with short exercises
- **Description**: Hands-on coding exercises and mini-courses for practicing programming basics.
- **Tags**: coding-practice, courses

### Codewars
- **URL**: https://codewars.com
- **Use Case**: Sharpen problem-solving in short sessions
- **Description**: Gamified coding katas ranked by difficulty; compare your solution to others' after solving.
- **Tags**: algorithms, challenges, practice

### Colorín Colorado
- **URL**: https://colorincolorado.org
- **Use Case**: Support an emerging bilingual reader
- **Description**: Bilingual (English/Spanish) research-based resources for teaching reading and supporting English language learners and their families.
- **Tags**: bilingual, ell, free, literacy, little-sprout

### Common Sense Education Reviews
- **URL**: https://commonsense.org/education/reviews
- **Use Case**: Vet an edtech tool before using it with students
- **Description**: Independent teacher reviews and ratings of edtech tools, apps, and websites, with learning-rating rubrics and privacy notes.
- **Tags**: almanac, edtech, privacy, reviews, teaching

### Common Sense Media
- **URL**: https://commonsensemedia.org
- **Use Case**: Benchmark age-appropriateness and content norms for kids' books.
- **Description**: Independent reviews/age ratings for children's media and books.
- **Tags**: children, reviews

### CommonLit
- **URL**: https://commonlit.org
- **Use Case**: Pull a text with built-in reading supports
- **Description**: Free digital library of literary and informational texts with annotations, questions, and paired-text discussion, grades 3–12.
- **Tags**: almanac, free, literacy, reading, teaching

### Connected Papers
- **URL**: https://connectedpapers.com
- **Use Case**: Map the literature around a paper for a lit review
- **Description**: Enter one paper and get a visual graph of related work — fast way to map a subfield and find key references for a lit review.
- **Tags**: literature review, research, visualization

### CORE
- **URL**: https://core.ac.uk
- **Use Case**: Find a free full-text version of a paywalled paper
- **Description**: The world's largest aggregator of open-access research papers — full-text search across 250M+ articles you can actually download.
- **Tags**: free, open access, research, search

### Course Hero
- **URL**: https://coursehero.com
- **Use Case**: Direct competitive research for Chegga's positioning.
- **Description**: Study-document sharing and homework-help platform (Chegg competitor).
- **Tags**: competitor, tutoring

### Coursera
- **URL**: https://coursera.org
- **Use Case**: Take courses from top universities online
- **Description**: Online learning from world's top universities and organizations.
- **Tags**: courses

### Crash Course
- **URL**: https://thecrashcourse.com
- **Use Case**: Give students a lively overview of a big topic
- **Description**: Fast, well-produced video courses across history, science, literature, and more — strong for engagement and overview.
- **Tags**: almanac, free, lessons, teaching, video

### Cymath
- **URL**: https://cymath.com
- **Use Case**: Get a step-by-step solution to a math problem
- **Description**: Solves math problems step by step, from algebra through calculus.
- **Tags**: math, solver

### Desmos
- **URL**: https://desmos.com
- **Use Case**: Embed graphing tools or reference activity design for math tutoring.
- **Description**: Free online graphing calculator and math classroom activities.
- **Tags**: free, math

### Desmos Classroom
- **URL**: https://classroom.amplify.com
- **Use Case**: Run an interactive, response-driven math activity
- **Description**: Free interactive math activities and the activity builder — students explore and respond, teacher sees thinking live.
- **Tags**: activities, almanac, free, math, teaching

### Digital History
- **URL**: https://digitalhistory.uh.edu
- **Use Case**: Research U.S. history with sources
- **Description**: Primary source for U.S. history with lessons and quizzes.

### Directory of Open Access Journals
- **URL**: https://doaj.org
- **Use Case**: Verify a journal is legitimate and open access
- **Description**: Vetted index of legitimate open-access, peer-reviewed journals — a check against predatory publishers.
- **Tags**: journals, open access, research

### DocsTeach
- **URL**: https://docsteach.org
- **Use Case**: Use archival documents in an interactive activity
- **Description**: The National Archives' tool and library for teaching with primary-source documents, with ready activities by era.
- **Tags**: almanac, free, history, primary sources, teaching

### Duolingo
- **URL**: https://duolingo.com
- **Use Case**: Reference gamification/streak mechanics for engagement design.
- **Description**: Gamified language-learning app.
- **Tags**: gamification, language

### Edpuzzle
- **URL**: https://edpuzzle.com
- **Use Case**: Turn a passive video into an interactive check
- **Description**: Add questions, notes, and voiceover to any video and track who watched and how they answered.
- **Tags**: almanac, assessment, engagement, teaching, video

### edX
- **URL**: https://edx.org
- **Use Case**: Compare course catalog/UX to competitor platforms.
- **Description**: Online courses from universities, now part of 2U.
- **Tags**: courses

### EL Education Curriculum
- **URL**: https://curriculum.eleducation.org
- **Use Case**: Get a complete free ELA module for a grade
- **Description**: Free, full K–8 ELA curriculum (and K–5 math) — modules, texts, and assessments, openly licensed.
- **Tags**: almanac, curriculum, ela, free, reading

### Electude Car Simulator
- **URL**: https://simulator.electude.com
- **Use Case**: See how a car's systems work through an animated simulator
- **Description**: A browser-based car simulator visualizing core automotive systems through animated cutaways.
- **Tags**: automotive, simulation

### Entertrained
- **URL**: https://entertrained.app
- **Use Case**: Practice typing speed while reading a real book
- **Description**: A typing-practice app that has you retype passages from real books as you read them.
- **Tags**: reading, typing-practice

### Epic
- **URL**: https://getepic.com
- **Use Case**: Give students a wide leveled reading library
- **Description**: Large digital library of leveled kids' books and read-to-me titles; free for educators during school hours.
- **Tags**: almanac, elementary, library, reading

### Exercism
- **URL**: https://exercism.org
- **Use Case**: Build fluency in a new language with feedback
- **Description**: Free coding practice in 70+ languages with automated analysis and free human mentoring on your solutions.
- **Tags**: free, learning, mentoring, practice

### Explorabl.es
- **URL**: https://explorabl.es
- **Use Case**: Explore science interactively
- **Description**: Interactive educational games teaching art, biology, chemistry, and more.

### FCRR Student Center Activities
- **URL**: https://fcrr.org/student-center-activities
- **Use Case**: Pull a free structured phonics activity
- **Description**: Florida Center for Reading Research's free, printable, leveled phonological-awareness / phonics / fluency / vocabulary activities.
- **Tags**: free, literacy, little-sprout, phonics, printables

### Flyleaf Free Decodable Readers
- **URL**: https://flyleafpublishing.com/community
- **Use Case**: Find decodable text matched to taught patterns
- **Description**: Free online decodable books and comprehension supports, organized by phonics scope, from a decodable-text publisher.
- **Tags**: decodable, free, little-sprout, phonics, reading

### Frontend Mentor
- **URL**: https://frontendmentor.io
- **Use Case**: Practice turning a real design into clean frontend code
- **Description**: Real-world HTML/CSS/JS challenges with professional designs (Figma/Sketch) and a community review loop.
- **Tags**: css, design, frontend, practice

### GDC Vault
- **URL**: https://gdcvault.com
- **Use Case**: Watch design/postmortem talks relevant to PixelRoom.
- **Description**: Recorded talks from the Game Developers Conference.
- **Tags**: gamedev, video

### GeoGebra
- **URL**: https://geogebra.org
- **Use Case**: Give students a manipulable math model
- **Description**: Free dynamic math software and a huge library of interactive applets — geometry, algebra, calculus, statistics.
- **Tags**: almanac, free, math, simulation, teaching

### GGIE Practices Library
- **URL**: https://ggie.berkeley.edu/school-relationships
- **Use Case**: Add a short SEL practice to any lesson
- **Description**: UC Berkeley's searchable bank of SEL and well-being classroom practices, tagged by age, time, and competency.
- **Tags**: almanac, free, practice, sel, teaching

### Google Classroom
- **URL**: https://classroom.google.com
- **Use Case**: Understand teacher workflow Chegga's tools might integrate with.
- **Description**: Free classroom management and assignment platform.
- **Tags**: classroom, free

### Google Scholar
- **URL**: https://scholar.google.com
- **Use Case**: Find and cite academic sources for a paper
- **Description**: Search engine for scholarly literature — papers, theses, books, citations — with 'cited by' links and one-click citation export.
- **Tags**: citations, essential, osint, research, search, search engine

### Greater Good in Education
- **URL**: https://ggie.berkeley.edu
- **Use Case**: Get a research-backed SEL practice to adapt
- **Description**: UC Berkeley's free, research-based library of SEL and well-being practices for the classroom, filterable by age and competency.
- **Tags**: free, little-sprout, practice, sel, social-emotional

### Harvard CS50
- **URL**: https://cs50.harvard.edu/x
- **Use Case**: Get real CS fundamentals for free
- **Description**: Harvard's acclaimed free intro to computer science — lectures, problem sets, and a broad tour from C to web to AI.
- **Tags**: computer science, free, fundamentals, learning

### Highbrow
- **URL**: https://gohighbrow.com
- **Use Case**: Learn something with daily 5-min lessons
- **Description**: Delivers daily 5-minute lessons by email.

### Hyper Physics
- **URL**: https://hyperphysics.phy-astr.gsu.edu/hbase/index.html
- **Use Case**: Understand physics visually
- **Description**: Makes physics concepts understandable through interactive explanations.

### ICT Games
- **URL**: https://ictgames.com
- **Use Case**: Find a quick literacy skill game for young kids
- **Description**: Long-running set of free, simple, no-login literacy and numeracy games for ages 5–8, mobile-friendly.
- **Tags**: early years, free, games, literacy, little-sprout

### Illustrative Mathematics
- **URL**: https://illustrativemathematics.org
- **Use Case**: Get a problem-based math task or lesson
- **Description**: Problem-based K–12 math curriculum and a task library; the curriculum is freely available to teachers.
- **Tags**: almanac, curriculum, free, math, tasks

### Internet Encyclopedia of Philosophy
- **URL**: https://iep.utm.edu
- **Use Case**: Research philosophical ideas
- **Description**: Encyclopedia of philosophy covering philosophers and ideas.

### IXL
- **URL**: https://ixl.com
- **Use Case**: Reference adaptive-difficulty practice-question design.
- **Description**: Adaptive K-12 practice platform across subjects.
- **Tags**: practice

### Javalab
- **URL**: https://javalab.org
- **Use Case**: Run a browser-based physics or science simulation
- **Description**: A sprawling science-simulation site with physics, electromagnetism, and solar-system labs.
- **Tags**: science, simulation

### JSTOR
- **URL**: https://jstor.org
- **Use Case**: Read journal articles in the humanities and social sciences
- **Description**: Digital library of academic journals, books, and primary sources; free independent accounts get a monthly cap of free article reads even without a campus login.
- **Tags**: journals, library, primary sources, research

### Kahoot!
- **URL**: https://kahoot.com
- **Use Case**: Run a quick engaging review or check for understanding
- **Description**: Game-show-style quizzes for whole-class review and formative checks (free tier for basic use).
- **Tags**: almanac, assessment, engagement, games, teaching

### Khan Academy
- **URL**: https://khanacademy.org
- **Use Case**: Reference content structure/pacing for a tutoring product.
- **Description**: Free courses and practice exercises across K-12 and college subjects.
- **Tags**: free, tutoring

### Kiddo Worksheets
- **URL**: https://kiddoworksheets.com
- **Use Case**: Print a worksheet for a kid's early learning practice
- **Description**: Free printable worksheets for early learning subjects.
- **Tags**: printables, worksheets

### Learn Anything
- **URL**: https://learn-anything.xyz
- **Use Case**: Find a structured learning path for a new topic
- **Description**: Community-curated learning paths and mind maps for a huge range of topics.
- **Tags**: community, learning-paths

### Library of Congress for Teachers
- **URL**: https://loc.gov/programs/teachers
- **Use Case**: Anchor a lesson in real primary documents
- **Description**: Primary-source sets, analysis tools, and lesson ideas built on the LoC's digitized collections; most content is free to use and reuse.
- **Tags**: almanac, free, history, primary sources, teaching

### LibreTexts
- **URL**: https://libretexts.org
- **Use Case**: Get free STEM course reading and worked examples
- **Description**: The largest open-education library — free, remixable textbooks and course material, especially strong in STEM.
- **Tags**: free, oer, stem, textbooks

### Lizard Point Geography
- **URL**: https://lizardpoint.com
- **Use Case**: Quiz yourself on world geography with an interactive map
- **Description**: Interactive map quizzes for learning world geography.
- **Tags**: geography, quizzes

### Mathigon
- **URL**: https://mathigon.org
- **Use Case**: Work through an interactive, adaptive math textbook
- **Description**: A free interactive math textbook that adapts and responds as you work through it.
- **Tags**: math, textbook

### Maths is Fun
- **URL**: https://mathsisfun.com
- **Use Case**: Learn math through interactive games
- **Description**: Makes mathematics engaging through interactive lessons.

### Mathway
- **URL**: https://mathway.com/Algebra
- **Use Case**: Get step-by-step math solutions
- **Description**: Solves math problems with step-by-step solutions.

### Memrise
- **URL**: https://memrise.com
- **Use Case**: Learn a new language
- **Description**: Language learning platform with courses in 15+ languages.

### MERLOT
- **URL**: https://merlot.org
- **Use Case**: Find vetted free study materials and simulations
- **Description**: Curated, peer-reviewed collection of free online learning materials — simulations, tutorials, assignments — across subjects.
- **Tags**: free, oer, search, study

### Microsoft Math Solver
- **URL**: https://mathsolver.microsoft.com
- **Use Case**: Solve math problems step-by-step
- **Description**: Educational tool for step-by-step math problem solutions.

### Mindluster
- **URL**: https://mindluster.com
- **Use Case**: Take a free course and get a certificate
- **Description**: Free online courses with completion certificates across many subjects.
- **Tags**: certificates, free-courses

### Musicca
- **URL**: https://musicca.com
- **Use Case**: Practice music theory or ear training interactively
- **Description**: A free interactive platform for learning music theory and ear training.
- **Tags**: ear-training, music-theory

### musictheory.net
- **URL**: https://musictheory.net
- **Use Case**: Learn music theory with free lessons and drills
- **Description**: Free music theory lessons and exercises, from basics through advanced topics.
- **Tags**: exercises, music-theory

### Muted.io
- **URL**: https://muted.io
- **Use Case**: Practice ear training or visualize a scale or chord
- **Description**: An interactive library of music-theory and ear-training tools for visualizing scales and chords.
- **Tags**: ear-training, music-theory

### Mystery Science
- **URL**: https://mysteryscience.com
- **Use Case**: Grab a low-prep elementary science lesson
- **Description**: Ready-to-teach, question-driven elementary science lessons with videos and simple hands-on activities (limited free access).
- **Tags**: almanac, elementary, lessons, science, teaching

### NASA Imagine the Universe
- **URL**: https://imagine.gsfc.nasa.gov
- **Use Case**: Learn an astrophysics concept from NASA's own explainers
- **Description**: NASA's educational site on astrophysics, with tools and explainers for space science.
- **Tags**: astronomy, nasa

### NASA STEM Resources
- **URL**: https://nasa.gov/learning-resources
- **Use Case**: Bring real space and Earth-science data into a lesson
- **Description**: Free STEM lessons, activities, images, and data from NASA, indexed by grade band and subject.
- **Tags**: almanac, free, lessons, science, stem, teaching

### NatGeo Education
- **URL**: https://education.nationalgeographic.org
- **Use Case**: Get geography/science content with strong visuals
- **Description**: Free lessons, articles, maps, and media for geography, science, and social studies, with an explorer mindset framing.
- **Tags**: almanac, free, geography, lessons, science, teaching

### Nearpod
- **URL**: https://nearpod.com
- **Use Case**: Reference interactive-lesson delivery patterns.
- **Description**: Interactive lesson and formative-assessment platform.
- **Tags**: assessment, writing

### Newsela
- **URL**: https://newsela.com
- **Use Case**: Give the same content at several reading levels
- **Description**: News and nonfiction articles published at multiple reading levels with quizzes — differentiation for the Representation principle.
- **Tags**: almanac, differentiation, nonfiction, reading, teaching

### Nicky Case's Explorables
- **URL**: https://ncase.me
- **Use Case**: Learn a concept by playing an interactive explainer
- **Description**: A collection of interactive explorables and games explaining ideas like trust and complexity.
- **Tags**: explorables, interactive

### Nobook Virtual Chemistry Lab
- **URL**: https://chemistry-en.nobook.com
- **Use Case**: Run a chemistry experiment simulation safely
- **Description**: A virtual chemistry lab offering interactive simulations of real experiments.
- **Tags**: chemistry, simulation

### NSF Research Experiences for Undergraduates (REU)
- **URL**: https://nsf.gov/crssprgm/reu
- **Use Case**: Find a paid summer research position as an undergrad
- **Description**: National Science Foundation-funded paid summer research placements at host universities across every science and engineering field; browse open sites by discipline.
- **Tags**: internships, paid, research, stem, summer

### OER Commons
- **URL**: https://oercommons.org
- **Use Case**: Find an open lesson or unit for a theme
- **Description**: Large searchable library of openly licensed lessons, units, and full courses across subjects and grade bands, with alignment metadata.
- **Tags**: almanac, essential, free, lessons, oer, teaching

### Open Culture
- **URL**: https://openculture.com
- **Use Case**: Find free courses
- **Description**: Curated collection of free courses, ebooks, and lectures.
- **Tags**: free

### Open Textbook Library
- **URL**: https://open.umn.edu/opentextbooks
- **Use Case**: Find a free open textbook for a specific course
- **Description**: University of Minnesota-hosted catalog of hundreds of openly licensed, faculty-reviewed textbooks across disciplines.
- **Tags**: free, oer, search, textbooks

### OpenSciEd
- **URL**: https://openscied.org
- **Use Case**: Get a complete, coherent science unit for free
- **Description**: Free, full, research-based middle- and high-school science units built on phenomena-driven, NGSS-aligned storylines.
- **Tags**: almanac, curriculum, free, ngss, science

### OpenStax
- **URL**: https://openstax.org
- **Use Case**: Replace an expensive intro textbook for free
- **Description**: Free, peer-reviewed, openly licensed textbooks for common intro college courses (Rice University project) — read online or download PDFs.
- **Tags**: essential, free, oer, textbooks

### Overleaf
- **URL**: https://overleaf.com
- **Use Case**: Write a math-heavy paper or thesis in LaTeX
- **Description**: Browser-based collaborative LaTeX editor with templates for lab reports, theses, and journal submissions; free tier covers most coursework.
- **Tags**: collaboration, latex, stem, writing

### Oxford Owl eBook Library
- **URL**: https://oxfordowl.co.uk/for-home/find-a-book/library-page
- **Use Case**: Match a book to a reading level for free
- **Description**: Free levelled ebook collection (Oxford Reading Tree and more) plus phonics guidance for parents and teachers.
- **Tags**: ebooks, free, leveling, literacy, little-sprout, reading

### Padlet
- **URL**: https://padlet.com
- **Use Case**: Collect student responses in multiple formats
- **Description**: Shared visual boards for brainstorming, exit tickets, and collecting student work in text, image, audio, or video — good for Action & Expression.
- **Tags**: almanac, collaboration, engagement, expression, teaching

### Pathways to Science
- **URL**: https://pathwaystoscience.org
- **Use Case**: Search STEM research programs and funding in one place
- **Description**: Searchable portal of undergrad and grad research programs, funding, and mentoring in STEM, with a focus on broadening participation.
- **Tags**: funding, research, search, stem

### PBS LearningMedia
- **URL**: https://pbslearningmedia.org
- **Use Case**: Find a vetted media resource aligned to standards
- **Description**: Free standards-aligned videos, interactives, and lesson plans from PBS and partners, searchable by grade and subject.
- **Tags**: almanac, free, lessons, media, teaching, video

### PhET Interactive Simulations
- **URL**: https://phet.colorado.edu
- **Use Case**: Add an interactive simulation to a lesson
- **Description**: Free research-based math and science simulations from CU Boulder — the go-to for the Representation and hands-on Action principles.
- **Tags**: almanac, essential, free, math, science, simulation, teaching

### Pixton
- **URL**: https://pixton.com/welcome
- **Use Case**: Create a comic or graphic story
- **Description**: Comic creation tool for educational storytelling.

### Prodigy Math
- **URL**: https://prodigygame.com
- **Use Case**: Reference gamified math-practice mechanics.
- **Description**: Game-based math practice platform for K-8 students.
- **Tags**: gamification, math

### Project Euler
- **URL**: https://projecteuler.net
- **Use Case**: Practice math-heavy problem solving
- **Description**: Long-running archive of math-flavored programming problems that reward good algorithms over brute force.
- **Tags**: algorithms, math, practice

### Ptable
- **URL**: https://ptable.com
- **Use Case**: Look up element properties
- **Description**: Interactive periodic table showing element properties.

### Purdue OWL
- **URL**: https://owl.purdue.edu
- **Use Case**: Get citation formatting and writing rules right
- **Description**: The Online Writing Lab — the standard free reference for MLA, APA, and Chicago formatting, plus grammar and academic-writing guides.
- **Tags**: citations, essential, reference, writing

### Python for Everybody
- **URL**: https://py4e.com/lessons
- **Use Case**: Learn Python from scratch
- **Description**: Free Python programming lessons for beginners.
- **Tags**: free

### Quizizz
- **URL**: https://quizizz.com
- **Use Case**: Assign a self-paced quiz with instant feedback
- **Description**: Self-paced quiz and lesson platform with question banks, reports, and accommodations like read-aloud.
- **Tags**: almanac, assessment, practice, teaching

### Quizlet
- **URL**: https://quizlet.com
- **Use Case**: Compare study-tool UX against Chegga's own flows.
- **Description**: Flashcards and study-set platform with spaced-repetition modes.
- **Tags**: flashcards, study

### Reading Rockets
- **URL**: https://readingrockets.org
- **Use Case**: Ground a phonics decision in reading research
- **Description**: Research-based guidance on teaching reading — phonics scope-and-sequence, comprehension strategies, struggling-reader help, printables.
- **Tags**: essential, literacy, little-sprout, phonics, reading, teaching

### ReadWorks
- **URL**: https://readworks.org
- **Use Case**: Find a leveled passage with comprehension questions
- **Description**: Free library of nonfiction and literary passages with question sets, vocabulary, and paired texts, K–12.
- **Tags**: almanac, comprehension, free, reading, teaching

### Remind
- **URL**: https://remind.com
- **Use Case**: Reference notification/reminder UX for a tutoring product.
- **Description**: Messaging app connecting teachers, students, and families.
- **Tags**: communication

### Sandspiel
- **URL**: https://sandspiel.club
- **Use Case**: Play with falling sand physics
- **Description**: Falling sand physics simulation game.

### Scale of Universe
- **URL**: https://scaleofuniverse.com/en
- **Use Case**: Compare sizes across the universe
- **Description**: Visualizes size comparisons from subatomic to cosmic.

### Second Step
- **URL**: https://secondstep.org
- **Use Case**: See how a full SEL scope-and-sequence is structured
- **Description**: Committee for Children's widely used SEL program site — scope, sample lessons, and family resources (core program is paid).
- **Tags**: curriculum, little-sprout, sel, social-emotional

### Semantic Scholar
- **URL**: https://semanticscholar.org
- **Use Case**: Quickly triage which papers are worth reading
- **Description**: AI-powered academic search from the Allen Institute — TL;DR paper summaries, citation context, and influential-citation ranking.
- **Tags**: ai, research, search, summaries

### Setosa
- **URL**: https://setosa.io
- **Use Case**: See a hard-to-picture stats concept visualized
- **Description**: Interactive visual explanations for statistics and probability concepts that are hard to picture.
- **Tags**: statistics, visualization

### Simple English Wikipedia
- **URL**: https://simple.wikipedia.org/wiki/Main_Page
- **Use Case**: Read Wikipedia in simpler language
- **Description**: Wikipedia in simplified English.

### Smithsonian Learning Lab
- **URL**: https://learninglab.si.edu
- **Use Case**: Build a primary-source collection around a theme
- **Description**: Millions of Smithsonian digital resources plus tools to collect and adapt them into teachable sets.
- **Tags**: almanac, free, primary sources, teaching

### Smithsonian Virtual Tour
- **URL**: https://naturalhistory.si.edu/visit/virtual-tour
- **Use Case**: Tour a Smithsonian natural history exhibit from home
- **Description**: A virtual tour of the Smithsonian's natural history exhibits.
- **Tags**: museum, virtual-tour

### Storyline Online
- **URL**: https://storylineonline.net
- **Use Case**: Model fluent read-aloud of a picture book
- **Description**: Actors reading well-known children's picture books aloud on video, with activity guides — SAG-AFTRA Foundation, free.
- **Tags**: free, literacy, little-sprout, read aloud, video

### Student.com
- **URL**: https://student.com
- **Use Case**: Find student housing abroad
- **Description**: Finds affordable accommodations for international students.

### StuDocu
- **URL**: https://studocu.com
- **Use Case**: Competitive research on study-material sharing models.
- **Description**: Student-shared study notes and document platform.
- **Tags**: competitor, notes

### Teach Your Monster to Read
- **URL**: https://teachyourmonster.org
- **Use Case**: Give kids game-based phonics practice
- **Description**: Free (on web) research-backed phonics game covering first letters through fluent reading, aligned to systematic SP phonics.
- **Tags**: free, games, literacy, little-sprout, phonics

### Teach Yourself CS
- **URL**: https://teachyourselfcs.com
- **Use Case**: Fill gaps in CS fundamentals deliberately
- **Description**: Opinionated guide (teachyourselfcs.com) to the nine core CS subjects with the best book + course for each.
- **Tags**: computer science, curriculum, learning, reference

### TED-Ed
- **URL**: https://ed.ted.com
- **Use Case**: Find a short video lesson on a concept
- **Description**: Short animated educational videos with built-in 'Think / Dig Deeper / Discuss' lesson wrappers, across subjects.
- **Tags**: almanac, free, lessons, teaching, video

### The Measured Mom
- **URL**: https://reachallreaders.com
- **Use Case**: Find a printable game for a specific phonics skill
- **Description**: Large bank of free printable phonics, phonemic-awareness, and early-literacy games and worksheets for pre-K–2.
- **Tags**: free, literacy, little-sprout, phonics, printables

### The Odin Project
- **URL**: https://theodinproject.com
- **Use Case**: Learn full-stack web dev for free, project-first
- **Description**: Free, full open-source curriculum for full-stack web development (Ruby or JS path) with real projects, not toy exercises.
- **Tags**: curriculum, free, full stack, learning, web

### Turnitin
- **URL**: https://turnitin.com
- **Use Case**: Reference academic-integrity tooling relevant to tutoring products.
- **Description**: Plagiarism-detection and originality-checking service for schools.
- **Tags**: plagiarism

### TypeLit.io
- **URL**: https://typelit.io
- **Use Case**: Practice typing speed using classic books
- **Description**: Practice typing by retyping passages from classic literature.
- **Tags**: literature, typing-practice

### Typing.com
- **URL**: https://typing.com
- **Use Case**: Practice and improve typing speed
- **Description**: Practice platform for improving typing speed and accuracy.

### TypingClub
- **URL**: https://typingclub.com
- **Use Case**: Learn to type with structured lessons
- **Description**: Structured, gamified typing lessons used widely by schools and individuals.
- **Tags**: courses, typing-practice

### Udemy
- **URL**: https://udemy.com
- **Use Case**: Benchmark course pricing and creator payout models.
- **Description**: Marketplace for instructor-created video courses.
- **Tags**: courses, design, marketplace

### UDL Guidelines (CAST)
- **URL**: https://udlguidelines.cast.org
- **Use Case**: Map a resource to UDL principles and checkpoints
- **Description**: The canonical Universal Design for Learning framework — the three principles, nine guidelines, and checkpoints Almanac's coverage readout is built on.
- **Tags**: accessibility, almanac, essential, framework, teaching, udl

### UFLI Foundations Toolbox
- **URL**: https://ufli.education.ufl.edu/foundations/toolbox
- **Use Case**: Follow a systematic phonics scope and sequence
- **Description**: University of Florida Literacy Institute's free lesson resources, sound walls, decodable practice, and routines for systematic phonics.
- **Tags**: curriculum, free, literacy, little-sprout, phonics

### Understood.org
- **URL**: https://understood.org
- **Use Case**: Adapt content for a kid who learns differently
- **Description**: Practical, parent- and teacher-facing guidance on learning and thinking differences (dyslexia, ADHD, dysgraphia).
- **Tags**: accessibility, dyslexia, learning differences, little-sprout, teaching

### Unite for Literacy
- **URL**: https://uniteforliteracy.com
- **Use Case**: Give an early reader free leveled picture books
- **Description**: Free digital picture-book library with narration in many languages — simple, photo-illustrated nonfiction for beginning readers.
- **Tags**: ebooks, free, literacy, little-sprout, reading

### Wikibooks
- **URL**: https://en.wikibooks.org/wiki/Main_Page
- **Use Case**: Find free online textbooks
- **Description**: Collection of free online textbooks anyone can edit.
- **Tags**: free

### Zearn Math
- **URL**: https://zearn.org
- **Use Case**: Give students guided digital math practice
- **Description**: Free K–8 digital math lessons with visual models and paced practice, aligned to a coherent scope.
- **Tags**: almanac, elementary, free, math, practice

### Zotero
- **URL**: https://zotero.org
- **Use Case**: Manage citations and auto-build a bibliography
- **Description**: Free, open-source reference manager — save sources from the browser, organize by project, and generate bibliographies in any citation style.
- **Tags**: citations, essential, free, research, writing

## Entertainment & Social
*77 tools.*

### 2048
- **URL**: https://play2048.co
- **Use Case**: Play a quick round of the 2048 puzzle
- **Description**: The classic sliding-tile puzzle where matching numbers double until you reach 2048.
- **Tags**: browser-game, puzzle

### 29a.ch Experiments
- **URL**: https://29a.ch/experiments
- **Use Case**: Relax with interactive experiments
- **Description**: Interactive tools for relaxation and entertainment.
- **Tags**: entertainment

### 56k.rip
- **URL**: https://56k.rip
- **Use Case**: Relive the sound and speed of a 1996 dial-up connection
- **Description**: A 1996 dial-up internet simulator with a working desktop and a noisy modem connection sound.
- **Tags**: nostalgia, web-art

### A Dark Room
- **URL**: https://adarkroom.doublespeakgames.com
- **Use Case**: Play a minimalist text-based survival game
- **Description**: A minimalist text-based survival and crafting game that unfolds entirely in prose.
- **Tags**: browser-game, text-based

### Agar.io
- **URL**: https://agar.io
- **Use Case**: Play a multiplayer blob-eating game
- **Description**: Multiplayer online action game.
- **Tags**: entertainment

### AirConsole
- **URL**: https://airconsole.com
- **Use Case**: Use a phone as a controller for a party game
- **Description**: Turns a phone into a game controller for browser-based party games on a TV or laptop screen.
- **Tags**: multiplayer, party-game

### AppyPie Meme Maker
- **URL**: https://pixazo.ai/meme/maker
- **Use Case**: Create memes
- **Description**: Meme creation tool.
- **Tags**: social, social media

### Atlas Obscura
- **URL**: https://atlasobscura.com
- **Use Case**: Discover hidden and unusual places
- **Description**: Finds hidden places and curiosities worldwide.
- **Tags**: entertainment

### Bluesky
- **URL**: https://bsky.app
- **Use Case**: Follow people on an open social network
- **Description**: Social media as it should be. Find your community among millions of users, unleash your creativity, and have some fun again.
- **Tags**: bsky, decentralized, social

### BoardGameGeek
- **URL**: https://boardgamegeek.com
- **Use Case**: Research game-design mechanics that translate to digital.
- **Description**: Reference database and community for board/tabletop games.
- **Tags**: entertainment, game design

### Bored Button
- **URL**: https://boredbutton.com
- **Use Case**: Find a random interesting website
- **Description**: Surprises users with random funny and creative websites.
- **Tags**: entertainment

### Buffer
- **URL**: https://buffer.com
- **Use Case**: Schedule marketing posts across projects from one place.
- **Description**: Social media scheduling and publishing tool.
- **Tags**: marketing, scheduling, social, social media

### Chunkbase
- **URL**: https://chunkbase.com
- **Use Case**: Find a Minecraft seed's structures and biomes
- **Description**: A suite of Minecraft map tools: seed maps, biome finders, and structure locators.
- **Tags**: map-tools, minecraft

### Classic Reload
- **URL**: https://classicreload.com
- **Use Case**: Play a classic DOS or early-Windows PC game in the browser
- **Description**: An in-browser emulator for classic DOS and early-Windows PC games.
- **Tags**: emulator, retro-gaming

### Cloudgazing
- **URL**: https://cloudgazing.online
- **Use Case**: Find and draw a shape hidden in a cloud photo
- **Description**: A cloud-drawing gallery where people find shapes in cloud photos and draw what they see.
- **Tags**: community, web-art

### Cookie Clicker
- **URL**: https://orteil.dashnet.org
- **Use Case**: Play the original idle cookie-clicking game
- **Description**: The original idle-clicker game: click cookies, buy upgrades, watch numbers grow forever.
- **Tags**: browser-game, idle-game

### Cool Math Games
- **URL**: https://coolmathgames.com
- **Use Case**: Play educational math games
- **Description**: HTML and Flash games for children and young adults.
- **Tags**: entertainment

### CrazyGames
- **URL**: https://crazygames.com
- **Use Case**: Play browser games without ads
- **Description**: Platform for ad-free online games.
- **Tags**: entertainment, free

### diep.io
- **URL**: https://diep.io
- **Use Case**: Play a free multiplayer tank battle game
- **Description**: A free multiplayer browser game where tanks shoot shapes and each other to level up.
- **Tags**: browser-game, multiplayer

### Discord
- **URL**: https://discord.com
- **Use Case**: Chat with friends or a community by voice and text
- **Description**: Discord is great for playing games and chilling with friends, or even building a worldwide community. Customize your own space to talk, play, and hang out.
- **Tags**: chat, community, discord

### Draw a Stickman
- **URL**: https://drawastickman.com
- **Use Case**: Draw a stickman and watch it go on an adventure
- **Description**: An interactive adventure where your own doodles become part of the story.
- **Tags**: browser-game, drawing

### Driving Simulator
- **URL**: https://framesynthesis.com/drivingsimulator/maps
- **Use Case**: Drive a simulated car through real Street View locations
- **Description**: A web-based driving simulator for exploring real places using Google Street View maps.
- **Tags**: maps, simulation

### elgooG
- **URL**: https://elgoog.im
- **Use Case**: Play with reversed-Google Easter eggs
- **Description**: Google mirror featuring Easter eggs.
- **Tags**: entertainment, google

### Escape Team
- **URL**: https://escape-team.com
- **Use Case**: Solve puzzles in online escape rooms
- **Description**: Online escape room games.
- **Tags**: entertainment

### Experiments with Google
- **URL**: https://experiments.withgoogle.com/experiments
- **Use Case**: Explore interactive art and experiments
- **Description**: Collection of 1600+ art and technology experiments.
- **Tags**: entertainment

### Facebook
- **URL**: https://facebook.com
- **Use Case**: Connect with friends and family
- **Description**: Leading social network for events, sharing, and connections.
- **Tags**: facebook, osint, social, social media, socmint

### fakeupdate.net
- **URL**: https://fakeupdate.net
- **Use Case**: Prank someone with a fake update or hacking screen
- **Description**: Simulates fake OS update and hacking screens for pranks or screensavers.
- **Tags**: prank, screen

### Find the Invisible Cow
- **URL**: https://findtheinvisiblecow.com
- **Use Case**: Play a quick audio-clue hidden-object game
- **Description**: An audio-based game where you locate a hidden cow by following sound clues.
- **Tags**: audio, browser-game

### Future Timeline
- **URL**: https://futuretimeline.net
- **Use Case**: Explore tech advancement predictions
- **Description**: Predictions of future technology developments.
- **Tags**: entertainment

### Gartic Phone
- **URL**: https://garticphone.com
- **Use Case**: Play a drawing-and-guessing party game with friends
- **Description**: A multiplayer party game mixing Telephone and Pictionary — draw, guess, repeat.
- **Tags**: multiplayer, party-game

### generals.io
- **URL**: https://generals.io
- **Use Case**: Play a real-time hidden-information strategy game
- **Description**: A real-time multiplayer strategy game about hidden armies and capturing generals.
- **Tags**: browser-game, strategy

### GeoGuessr
- **URL**: https://geoguessr.com
- **Use Case**: Guess a real-world location from a Street View drop
- **Description**: A geography game that drops you into Street View and challenges you to guess the location.
- **Tags**: browser-game, geography

### Good Tricks
- **URL**: https://goodtricks.net
- **Use Case**: Learn magic tricks
- **Description**: Teaches magic tricks and magician techniques.
- **Tags**: entertainment

### Google Arts & Culture: What Came First
- **URL**: https://artsandculture.google.com/experiment/what-came-first/ZQGBUPErEE3bVg
- **Use Case**: Play guess-the-chronological-order games
- **Description**: Chronological comparison game by Google.
- **Tags**: entertainment, google

### Hacker Typer
- **URL**: https://hackertyper.com
- **Use Case**: Fake a hacker terminal for pranks
- **Description**: Hacker prank simulator for entertainment.
- **Tags**: entertainment

### JacksonPollock.org
- **URL**: https://jacksonpollock.org
- **Use Case**: Make a Jackson-Pollock-style splatter painting
- **Description**: A one-page toy that lets you splatter paint across the canvas like a Pollock painting.
- **Tags**: drawing, web-art

### JKLM.FUN
- **URL**: https://jklm.fun
- **Use Case**: Play a party game with friends over video call
- **Description**: Hosts Jackbox-style party games playable with friends via a room code.
- **Tags**: multiplayer, party-game

### JustDelete.Me
- **URL**: https://backgroundchecks.org/justdeleteme
- **Use Case**: Find instructions to delete a social media account
- **Description**: Collection of links for quickly deleting social media accounts.
- **Tags**: social, social media

### Know Your Meme
- **URL**: https://knowyourmeme.com/memes
- **Use Case**: Look up where a meme or catchphrase started
- **Description**: Database of viral memes and catchphrases.
- **Tags**: entertainment

### Krunker.io
- **URL**: https://krunker.io
- **Use Case**: Play a free browser-based first-person shooter
- **Description**: A fast, free browser-based first-person shooter with no download required.
- **Tags**: browser-game, multiplayer

### Line Rider
- **URL**: https://linerider.com
- **Use Case**: Draw a track and watch a physics-based sled ride it
- **Description**: A physics sandbox where you draw a track for a sledder to ride down.
- **Tags**: browser-game, physics

### Little Alchemy 2
- **URL**: https://littlealchemy2.com
- **Use Case**: Combine elements to discover hundreds of items
- **Description**: A combine-elements puzzle game that starts from the four classical elements.
- **Tags**: browser-game, puzzle

### Lucidia
- **URL**: https://alana314.github.io/lucidia
- **Use Case**: Watch a generative WebGL visualizer, screensaver-style
- **Description**: A browser-based WebGL visualizer with preset generative patterns and a fullscreen mode.
- **Tags**: generative-art, visualizer

### Lumosity
- **URL**: https://lumosity.com/en
- **Use Case**: Train your memory with brain games
- **Description**: Brain training game for memory and skills.
- **Tags**: entertainment

### Map Genie
- **URL**: https://mapgenie.io
- **Use Case**: Track collectibles on an interactive game map
- **Description**: Interactive, trackable maps for collectibles and quests in popular video games.
- **Tags**: gaming, interactive-maps

### MapCrunch
- **URL**: https://mapcrunch.com
- **Use Case**: Teleport to random Earth locations
- **Description**: Random Google Street View locations worldwide.
- **Tags**: entertainment, google

### McBroken
- **URL**: https://mcbroken.com
- **Use Case**: A quick laugh, or actually checking before you go
- **Description**: Live map tracking which McDonald's locations have a broken ice cream machine.
- **Tags**: entertainment, fun, maps

### MeetEdgar
- **URL**: https://meetedgar.com
- **Use Case**: Schedule social media posts
- **Description**: Social media management automating post scheduling.
- **Tags**: social, social media

### Money Simulator
- **URL**: https://simulator.money
- **Use Case**: Simulate financial decision consequences
- **Description**: Financial decision simulator game.
- **Tags**: entertainment

### My 90s TV
- **URL**: https://my90stv.com
- **Use Case**: Watch random nostalgic 90s TV clips
- **Description**: A nostalgic TV simulator randomly playing 1990s TV content.
- **Tags**: nostalgia, video

### Neal.fun
- **URL**: https://neal.fun
- **Use Case**: Play interactive games and visualizations
- **Description**: Collection of interactive games and visualizations.
- **Tags**: entertainment

### Orb.Farm
- **URL**: https://orb.farm
- **Use Case**: Tend a tiny pixel-art aquatic ecosystem
- **Description**: A personal aquatic ecosystem where you manage bacteria, algae, and tiny crustaceans in a jar.
- **Tags**: simulation, web-art

### Paint a Street
- **URL**: https://paintastreet.com
- **Use Case**: Add a drawing to a real street
- **Description**: submit a drawing that will go on the pavement of a san francisco alley
- **Tags**: art, community, paintastreet

### Play Retro Games
- **URL**: https://playretrogames.online
- **Use Case**: A quick nostalgia hit or game-design reference
- **Description**: In-browser emulator library for retro console and arcade games — no install.
- **Tags**: emulator, entertainment, games, retro

### PlayPhrase.me
- **URL**: https://playphrase.me
- **Use Case**: Find a video clip of a specific movie or TV line
- **Description**: Searches movies and TV for a spoken phrase and generates a clip of it.
- **Tags**: movies, search

### Pranx Hacker Screen
- **URL**: https://pranx.com/hacker
- **Use Case**: Prank someone with a fake hacking-in-progress screen
- **Description**: A fake 'hacker' screen simulator for pranks or background ambiance.
- **Tags**: prank, screen

### R74n
- **URL**: https://r74n.com
- **Use Case**: Fall down a rabbit hole of small web toys and generators
- **Description**: A sprawling web collective of games, toys, tools, and generators from the maker of Sandboxels.
- **Tags**: generators, web-toys

### Random.org
- **URL**: https://random.org
- **Use Case**: Generate random numbers or simulations
- **Description**: Generates random numbers and simulations.
- **Tags**: entertainment

### Sketchtoy
- **URL**: https://sketchtoy.com
- **Use Case**: Sketch something and share a replayable drawing
- **Description**: A simple shared drawing canvas you can save and replay as an animation.
- **Tags**: drawing, sharing

### slither.io
- **URL**: https://slither.io
- **Use Case**: Play a multiplayer growing-snake game
- **Description**: A multiplayer browser game where you grow a snake by eating pellets and avoid other players.
- **Tags**: browser-game, multiplayer

### Slow Roads
- **URL**: https://slowroads.io
- **Use Case**: Unwind with a relaxing endless driving simulator
- **Description**: A relaxing, procedurally generated endless driving simulator with no goals.
- **Tags**: browser-game, relaxation

### Smash Karts
- **URL**: https://smashkarts.io
- **Use Case**: Play a quick multiplayer kart battle in the browser
- **Description**: A free browser-based multiplayer kart-battle racing game.
- **Tags**: browser-game, multiplayer

### Songkick
- **URL**: https://songkick.com
- **Use Case**: Get notified when favorite artists tour
- **Description**: Artist concert notifications linked to social media accounts.
- **Tags**: social, social media

### Sporcle
- **URL**: https://sporcle.com
- **Use Case**: Take a trivia quiz on almost any topic
- **Description**: A huge library of trivia quizzes across countless categories.
- **Tags**: quizzes, trivia

### Steam Store
- **URL**: https://store.steampowered.com
- **Use Case**: Browse and buy PC games
- **Description**: Steam is the ultimate destination for playing, discussing, and creating games.
- **Tags**: games, store

### Stellarium Web
- **URL**: https://stellarium-web.org
- **Use Case**: Explore the night sky
- **Description**: Online planetarium showing stars and constellations.
- **Tags**: entertainment

### territorial.io
- **URL**: https://territorial.io
- **Use Case**: Play a territory-conquest strategy game online
- **Description**: A free browser-based territory-conquest strategy game against AI or other players.
- **Tags**: browser-game, strategy

### TETR.IO
- **URL**: https://tetr.io
- **Use Case**: Play competitive ranked Tetris online
- **Description**: A free, fast competitive Tetris clone with ranked online multiplayer.
- **Tags**: browser-game, multiplayer

### The Sky Live
- **URL**: https://theskylive.com
- **Use Case**: Locate stars and planets tonight
- **Description**: Interactive sky viewer for observing celestial objects.
- **Tags**: entertainment

### The Useless Web
- **URL**: https://theuselessweb.com
- **Use Case**: Visit absurd random websites for laughs
- **Description**: Takes you to random silly websites.
- **Tags**: entertainment

### Tunefind
- **URL**: https://tunefind.com
- **Use Case**: Identifying a track from a show or film
- **Description**: Community database of songs featured in TV shows, movies, and games, scene by scene.
- **Tags**: entertainment, music, soundtracks, tv

### Twitter (X)
- **URL**: https://x.com
- **Use Case**: Follow news and conversations
- **Description**: Time-saving social media platform.
- **Tags**: social, social media

### WhatsApp Web
- **URL**: https://web.whatsapp.com
- **Use Case**: Send messages to contacts from your browser
- **Description**: Messaging app with web and desktop versions.
- **Tags**: social, social media

### Window Swap
- **URL**: https://window-swap.com
- **Use Case**: See a stranger's window view from somewhere else in the world
- **Description**: Shows a live window view from a random stranger's home somewhere in the world.
- **Tags**: video, web-art

### Windows93
- **URL**: https://windows93.net
- **Use Case**: Explore a surreal fake 90s operating system
- **Description**: A surreal, glitchy parody of a 90s desktop OS, built as an art project you can click through.
- **Tags**: parody, web-art

### Zoomquilt
- **URL**: https://zoomquilt.org
- **Use Case**: Watch an endlessly zooming collaborative artwork
- **Description**: An endlessly, seamlessly zooming collaborative painting.
- **Tags**: animation, web-art

### zty.pe
- **URL**: https://zty.pe
- **Use Case**: Practice typing speed through a shooting game
- **Description**: A typing game where you type words to shoot down enemy ships.
- **Tags**: game, typing-practice

## Everyday Life
*79 tools.*

### 1A Auto
- **URL**: https://1aauto.com
- **Use Case**: Find a DIY car repair video and the part it needs
- **Description**: Serves DIY automotive enthusiasts with how-to videos and the parts to go with them.
- **Tags**: car-repair, diy

### Arcadium 3D
- **URL**: https://arcadium3d.com
- **Use Case**: Plan a room's interior design in 3D for free
- **Description**: A free browser-based home and interior design tool.
- **Tags**: 3d, interior-design

### Calm
- **URL**: https://calm.com
- **Use Case**: Wind-down routine to protect sleep during crunch periods.
- **Description**: Sleep and meditation app.
- **Tags**: health, health & fitness, mindfulness, sleep

### CamelCamelCamel
- **URL**: https://camelcamelcamel.com
- **Use Case**: Track price history of Amazon products
- **Description**: Tracks Amazon price history.
- **Tags**: shopping

### Canopy
- **URL**: https://canopy.co
- **Use Case**: Find beautifully designed products
- **Description**: Amazon curated marketplace for beautifully designed items.
- **Tags**: shopping

### Car Care Kiosk
- **URL**: https://carcarekiosk.com
- **Use Case**: Get maintenance steps specific to your exact car model
- **Description**: Provides visual, model-specific guidance for routine DIY car maintenance.
- **Tags**: car-repair, diy

### ChefGPT
- **URL**: https://chefgpt.xyz
- **Use Case**: Get a recipe idea that reduces food waste
- **Description**: An AI cooking assistant focused on reducing food waste by suggesting recipes.
- **Tags**: ai, cooking

### Collov AI
- **URL**: https://collov.ai
- **Use Case**: Virtually stage a real-estate listing photo
- **Description**: Generates quick, affordable virtual staging photos for real estate listings.
- **Tags**: ai, real-estate

### CopyKat Recipes
- **URL**: https://copykat.com
- **Use Case**: Find a homemade copycat version of a restaurant dish
- **Description**: Recreates copycat versions of well-known restaurant and brand-name recipes.
- **Tags**: cooking, recipes

### Craigslist
- **URL**: https://craigslist.org
- **Use Case**: Find used items or sell locally
- **Description**: Minimalist classified ads site for buying and selling.
- **Tags**: shopping

### DAREBEE
- **URL**: https://darebee.com
- **Use Case**: Find workouts or meal plans for goals
- **Description**: Workout and diet programs for fitness goals.
- **Tags**: health, health & fitness

### Drive & Listen
- **URL**: https://driveandlisten.herokuapp.com
- **Use Case**: Virtually drive through a city while listening to its local radio
- **Description**: Virtually drives through cities worldwide while streaming that city's local radio.
- **Tags**: ambience, travel

### Drugs.com
- **URL**: https://drugs.com
- **Use Case**: Look up drugs or identify pills
- **Description**: Drug information and pill identification.
- **Tags**: health & fitness

### earth.nullschool.net
- **URL**: https://earth.nullschool.net
- **Use Case**: Explore live weather and air pollution
- **Description**: Interactive weather and pollution maps.
- **Tags**: maps, maps & travel, osint

### Eat This Much
- **URL**: https://eatthismuch.com
- **Use Case**: Generate personalized meal plans
- **Description**: Generates personalized meal plans.
- **Tags**: health, health & fitness

### eBay
- **URL**: https://ebay.com
- **Use Case**: Bid on or buy items from sellers worldwide
- **Description**: Global marketplace for buying and selling items.
- **Tags**: shopping

### Etsy
- **URL**: https://etsy.com
- **Use Case**: Buy handmade and vintage items
- **Description**: Online store for makers and artists to sell products.
- **Tags**: shopping

### Every Time Zone
- **URL**: https://everytimezone.com
- **Use Case**: Check time zone differences quickly
- **Description**: Time zone difference checker.
- **Tags**: maps, maps & travel

### Fakespot
- **URL**: https://fakespot.com
- **Use Case**: Spot fake reviews before purchasing
- **Description**: Detects fake reviews on shopping sites.
- **Tags**: shopping

### Fakespot/NullFake
- **URL**: https://nullfake.com
- **Use Case**: Check whether a product's reviews look fake
- **Description**: Analyzes Amazon reviews to flag ones that look fake.
- **Tags**: reviews, shopping

### FlightStats
- **URL**: https://flightstats.com/v2/flight-tracker/search
- **Use Case**: Track a flight in real time
- **Description**: Real-time flight tracking.
- **Tags**: maps, maps & travel

### FoodSubs
- **URL**: https://foodsubs.com
- **Use Case**: Find substitutes for cooking ingredients
- **Description**: Food ingredient substitution guide.
- **Tags**: cooking

### Fragrantica
- **URL**: https://fragrantica.com
- **Use Case**: Research and compare a perfume before buying
- **Description**: A perfume enthusiast resource for researching and comparing fragrances.
- **Tags**: fragrance, reviews

### FreeSewing
- **URL**: https://freesewing.eu
- **Use Case**: Generate a sewing pattern fitted to your measurements
- **Description**: Generates custom sewing patterns based on your own measurements.
- **Tags**: patterns, sewing

### Google Earth
- **URL**: https://earth.google.com/web
- **Use Case**: View Earth from satellite perspective
- **Description**: 3D satellite view of Earth locations.
- **Tags**: maps & travel

### Google My Maps
- **URL**: https://mymaps.google.com
- **Use Case**: Create custom maps with labels
- **Description**: Creates custom Google Maps with annotations.
- **Tags**: google, maps & travel

### Groupon
- **URL**: https://groupon.com/local
- **Use Case**: Find deals on local restaurants and experiences
- **Description**: Local offers and deals on meals, vacations, and services.
- **Tags**: shopping

### Headspace
- **URL**: https://headspace.com
- **Use Case**: Short focus/reset breaks between solo-founder work blocks.
- **Description**: Guided meditation and mindfulness app.
- **Tags**: health, health & fitness, mindfulness

### Home By Me
- **URL**: https://home.by.me
- **Use Case**: Visualize furniture layout in a virtual room
- **Description**: A virtual room-layout and furniture-visualization planner.
- **Tags**: interior-design, planning

### iFixit
- **URL**: https://ifixit.com
- **Use Case**: Follow step-by-step device repair guides
- **Description**: Device repair guides and manuals.
- **Tags**: diy, diy & repair

### InnerBody
- **URL**: https://innerbody.com
- **Use Case**: Find science-backed health product picks
- **Description**: Health product recommendations based on science.
- **Tags**: health, health & fitness

### Insight Timer
- **URL**: https://insighttimer.com
- **Use Case**: Find and play guided meditations
- **Description**: 150k+ guided meditation tracks.
- **Tags**: health, health & fitness

### Instructables
- **URL**: https://instructables.com
- **Use Case**: Find instructions for DIY projects
- **Description**: DIY project instructions.
- **Tags**: diy, diy & repair

### JustTheRecipe
- **URL**: https://justtherecipe.com
- **Use Case**: Get a recipe without the blog story
- **Description**: Extracts recipes without clutter.
- **Tags**: cooking

### Keepa
- **URL**: https://keepa.com
- **Use Case**: Monitor Amazon price changes over time
- **Description**: Tracks Amazon product prices over time.
- **Tags**: shopping

### Layla
- **URL**: https://layla.ai
- **Use Case**: Get an AI-generated trip itinerary
- **Description**: An AI-powered trip-planning assistant.
- **Tags**: ai, travel

### Like a Local Guide
- **URL**: https://likealocalguide.com
- **Use Case**: Get local travel tips from residents
- **Description**: Insider tips and information from local perspectives.
- **Tags**: maps & travel

### LivingSocial
- **URL**: https://livingsocial.com
- **Use Case**: Find discount deals on restaurants and activities
- **Description**: Bargain deals on local shops, restaurants, and activities.
- **Tags**: shopping

### MAKE
- **URL**: https://makezine.com
- **Use Case**: Learn how to build or fix things
- **Description**: DIY culture website with tutorials and projects.
- **Tags**: diy, diy & repair

### Make Me a Cocktail
- **URL**: https://makemeacocktail.com
- **Use Case**: Figuring out what you can make with what is in the cabinet
- **Description**: Cocktail recipe search that can work backwards from the bottles you already have.
- **Tags**: cocktails, cooking, recipes

### ManualsLib
- **URL**: https://manualslib.com
- **Use Case**: Download product manuals and guides
- **Description**: Downloads product manuals.
- **Tags**: diy, diy & repair

### McMaster-Carr
- **URL**: https://mcmaster.com
- **Use Case**: Find mechanical hardware and parts
- **Description**: Comprehensive mechanical hardware catalog.
- **Tags**: shopping

### MoneySavingExpert
- **URL**: https://moneysavingexpert.com
- **Use Case**: Find cashback deals and money-saving coupons
- **Description**: Resource for credit card deals, coupons, and savings tips.
- **Tags**: shopping

### MuscleWiki
- **URL**: https://musclewiki.com
- **Use Case**: Find exercises for specific muscles
- **Description**: Targeted muscle-toning exercise finder.
- **Tags**: health, health & fitness

### My Fridge Food
- **URL**: https://myfridgefood.com
- **Use Case**: Find a recipe using what's already in the fridge
- **Description**: Suggests recipes based on the ingredients you already have.
- **Tags**: cooking, recipes

### MyFitnessPal
- **URL**: https://myfitnesspal.com
- **Use Case**: Track meals and fitness progress
- **Description**: Tracks meals and fitness goals.
- **Tags**: health, health & fitness

### NAS Disks
- **URL**: https://nasdisks.com
- **Use Case**: Pick a NAS hard drive by CMR/SMR and capacity
- **Description**: Filter currently-sold NAS hard drives by CMR/SMR, capacity, class and real-world failure rates (Backblaze AFR). 178 drives.
- **Tags**: hardware, nasdisks, storage

### Newarc
- **URL**: https://newarc.ai
- **Use Case**: Generate an architectural rendering from a concept
- **Description**: An AI architecture design and rendering tool for visualizing building concepts.
- **Tags**: ai, architecture

### Newegg
- **URL**: https://newegg.com
- **Use Case**: Buy computer and electronics parts
- **Description**: Electronics retailer offering consumer products at good prices.
- **Tags**: shopping

### Overstock
- **URL**: https://overstock.com
- **Use Case**: Buy home goods at a discount
- **Description**: Online retail outlet with deals and international shipping.
- **Tags**: shopping

### PAPERMAU
- **URL**: https://papermau.blogspot.com
- **Use Case**: Print a free papercraft model to build
- **Description**: A gloriously dense papercraft blog with free printable paper models of buildings, vehicles, and more.
- **Tags**: papercraft, printables

### PaperMe
- **URL**: https://paperme.pixzens.com
- **Use Case**: Generate a printable paper template
- **Description**: A free browser-based generator for printable paper templates (notebooks, planners, grids).
- **Tags**: printables, templates

### PCPartPicker
- **URL**: https://pcpartpicker.com
- **Use Case**: Build PCs with price comparison
- **Description**: Selects PC components with price tracking.
- **Tags**: shopping

### REimagineHome
- **URL**: https://reimaginehome.ai
- **Use Case**: Get AI redesign ideas for a room from a photo
- **Description**: Generates AI interior-design ideas from a photo of a real room.
- **Tags**: ai, interior-design

### RepairClinic
- **URL**: https://repairclinic.com
- **Use Case**: Find appliance repair guides and replacement parts
- **Description**: Appliance repair guides and parts.
- **Tags**: diy, diy & repair

### RetailMeNot
- **URL**: https://retailmenot.com
- **Use Case**: Find coupons for online or in-store
- **Description**: Coupon website for online and in-store.
- **Tags**: shopping

### Rome2Rio
- **URL**: https://rome2rio.com
- **Use Case**: Plan routes and compare transportation options
- **Description**: Travel route and transportation finder.
- **Tags**: maps, maps & travel

### Rotten Tomatoes
- **URL**: https://rottentomatoes.com
- **Use Case**: Check reviews before watching a movie
- **Description**: Collection of unbiased reviews on TV shows and movies.
- **Tags**: shopping

### Scribble Maps
- **URL**: https://scribblemaps.com
- **Use Case**: Draw routes and notes on a custom map
- **Description**: Custom map annotation tool.
- **Tags**: maps, maps & travel

### SkyScanner
- **URL**: https://skyscanner.com
- **Use Case**: Find the cheapest flights for your trip
- **Description**: Flight search engine for domestic and international travel.
- **Tags**: maps, maps & travel, search

### Start My Car
- **URL**: https://startmycar.com
- **Use Case**: Diagnose why a car won't start, step by step
- **Description**: A step-by-step troubleshooting guide for diagnosing why a car won't start.
- **Tags**: car-repair, troubleshooting

### StickK
- **URL**: https://stickk.com
- **Use Case**: Commit to goals with real stakes
- **Description**: Accountability tool with monetary stakes.
- **Tags**: health, health & fitness

### SuperCook
- **URL**: https://supercook.com
- **Use Case**: Find recipes from what you have
- **Description**: Recipe search by available ingredients.
- **Tags**: cooking, search

### Tailornova
- **URL**: https://tailornova.com
- **Use Case**: Generate a custom garment sewing pattern
- **Description**: A custom sewing-pattern generator for garment makers.
- **Tags**: patterns, sewing

### The Real Food Dietitians
- **URL**: https://therealfooddietitians.com
- **Use Case**: Find healthy recipes and nutrition info
- **Description**: Healthy meal recipes and diet information.
- **Tags**: health, health & fitness

### The Toymaker
- **URL**: https://thetoymaker.com
- **Use Case**: Print a paper toy template to build with kids
- **Description**: Printable paper toy templates to cut out and build.
- **Tags**: papercraft, printables

### ThinkGeek
- **URL**: https://thinkgeek.com
- **Use Case**: Find unique gifts and tech gadgets
- **Description**: Specialty retailer for gadgets, gifts, and tech accessories.
- **Tags**: shopping

### This to That
- **URL**: https://thistothat.com
- **Use Case**: Find the right adhesive for materials
- **Description**: Identifies correct adhesive for materials.
- **Tags**: diy, diy & repair

### ThriftBooks
- **URL**: https://thriftbooks.com
- **Use Case**: Buy discounted used books
- **Description**: Marketplace for discounted used books.
- **Tags**: shopping

### Timezone.io
- **URL**: https://timezone.io
- **Use Case**: Convert times between time zones
- **Description**: Check the current local time anywhere in the world — live clocks, a time zone converter, UTC offsets, and daylight saving schedules for every country and city.
- **Tags**: clock, time-zones, timezone

### TripAdvisor
- **URL**: https://tripadvisor.in
- **Use Case**: Search flights and hotels for your trip
- **Description**: Flights and hotel directory with attractions information.
- **Tags**: maps, maps & travel

### Versus
- **URL**: https://versus.com
- **Use Case**: Compare two products spec by spec before buying
- **Description**: Compares products, mostly electronics, spec by spec.
- **Tags**: product-comparison, shopping

### ViaBox
- **URL**: https://viabox.com
- **Use Case**: Get international items shipped to your country
- **Description**: Package forwarding service for international shoppers.
- **Tags**: shopping

### Virtual Vacation
- **URL**: https://virtualvacation.us
- **Use Case**: Take a virtual tour of a city before visiting
- **Description**: Offers virtual tours of world cities with travel info and highlights.
- **Tags**: travel, virtual-tour

### Weather Underground
- **URL**: https://wunderground.com
- **Use Case**: Check the weather forecast for any location
- **Description**: Weather website providing updates for any location.
- **Tags**: maps, maps & travel

### WiFi Map
- **URL**: https://wifimap.io
- **Use Case**: Find a public WiFi password nearby
- **Description**: A crowdsourced database of public WiFi network passwords.
- **Tags**: crowdsourced, wifi

### Woot
- **URL**: https://woot.com
- **Use Case**: Find heavy discounts on everyday items
- **Description**: Deals website featuring heavy discounts.
- **Tags**: shopping

### WornOnTV
- **URL**: https://wornontv.net
- **Use Case**: Tracking down an outfit you saw on a show
- **Description**: Identifies clothing and outfits worn by characters on popular TV shows and where to buy them.
- **Tags**: fashion, shopping, tv

### Yelp
- **URL**: https://yelp.com
- **Use Case**: Read reviews of restaurants and local services
- **Description**: Local review site covering restaurants, services, and professionals.
- **Tags**: shopping

## File & Web Utilities
*41 tools.*

### 10015.io
- **URL**: https://10015.io
- **Use Case**: Find a quick one-off utility without installing anything
- **Description**: A free toolbox bundling dozens of small text, image, and file utilities on one page.
- **Tags**: converters, toolbox

### 123apps
- **URL**: https://123apps.com
- **Use Case**: Convert or edit media files
- **Description**: Collection of 50+ online tools for media creation and conversion.
- **Tags**: file tools

### 12ft.io
- **URL**: https://12ft.io
- **Use Case**: Try to read a paywalled article
- **Description**: Attempts to strip paywalls and overlays from a linked article.
- **Tags**: paywall, proxy

### BugMeNot
- **URL**: https://bugmenot.com
- **Use Case**: Skip website registration walls
- **Description**: Provides shared login credentials bypassing registration.
- **Tags**: web utilities

### BuiltWith
- **URL**: https://builtwith.com
- **Use Case**: Discover the tech stack of any website
- **Description**: Website technology stack identifier.
- **Tags**: osint, web, web utilities

### Carrd
- **URL**: https://carrd.com
- **Use Case**: Build a single-page website quickly
- **Description**: One-page website builder.
- **Tags**: web, web utilities

### CopyChar
- **URL**: https://copychar.cc
- **Use Case**: Copy a special character or symbol
- **Description**: Types special characters and symbols.
- **Tags**: web utilities

### Dillinger
- **URL**: https://dillinger.io
- **Use Case**: Write and preview Markdown online
- **Description**: Cloud Markdown editor.
- **Tags**: editor, file, file tools

### Down For Everyone Or Just Me
- **URL**: https://downforeveryoneorjustme.com
- **Use Case**: Check if a website is down for everyone
- **Description**: Website status checker.
- **Tags**: web, web utilities

### Downdetector
- **URL**: https://downdetector.com
- **Use Case**: Check whether a site is down for everyone else too
- **Description**: Tracks real-time, crowdsourced outage reports for websites and online services.
- **Tags**: outages, status

### Dropbox
- **URL**: https://dropbox.com
- **Use Case**: Keep files synced across your devices
- **Description**: Cloud storage synced across devices.
- **Tags**: file, file tools

### Fast.com
- **URL**: https://fast.com
- **Use Case**: Test your internet connection speed
- **Description**: Netflix internet speed test.
- **Tags**: web, web utilities

### FaxZero
- **URL**: https://faxzero.com
- **Use Case**: Send a fax without a fax machine
- **Description**: Free online fax service.
- **Tags**: file, file tools, free, osint, throwaway contact

### File.pizza
- **URL**: https://file.pizza
- **Use Case**: Transfer files directly to someone else
- **Description**: Peer-to-peer file transfer tool.
- **Tags**: file, file tools

### GoFile
- **URL**: https://gofile.io
- **Use Case**: Share files with unlimited cloud storage
- **Description**: File sharing with unlimited storage.
- **Tags**: file, file tools

### Google Drive
- **URL**: https://google.com/drive
- **Use Case**: Create and edit documents online with others
- **Description**: Virtual drive for hosting and editing files online.
- **Tags**: file tools

### Google Translate
- **URL**: https://translate.google.com
- **Use Case**: Get an English translation of foreign text
- **Description**: Converts text between languages with browser extension.
- **Tags**: browser, web utilities

### Hightail
- **URL**: https://hightail.com
- **Use Case**: Send large files to colleagues or clients
- **Description**: Solution for sending large files and team collaboration.
- **Tags**: file, file tools

### iLovePDF
- **URL**: https://ilovepdf.com
- **Use Case**: Quick PDF edits for contracts, reports, or book proofs.
- **Description**: Suite of free PDF tools (merge, split, compress, convert).
- **Tags**: converter, editor, file, file tools, free, pdf

### JustPaste.it
- **URL**: https://justpaste.it
- **Use Case**: Share formatted text at a temporary unique URL
- **Description**: Lightweight service for sharing formatted text at unique URLs.
- **Tags**: web utilities

### LibreSpeed
- **URL**: https://librespeed.org
- **Use Case**: Test internet speed on your own server
- **Description**: Open-source speed test tool.
- **Tags**: web, web utilities

### Mega
- **URL**: https://mega.co.nz
- **Use Case**: Store files securely with 50GB free space
- **Description**: File hosting with 50GB free space and local encryption.
- **Tags**: file, file tools, free

### Multi IP Exits Checker
- **URL**: https://ip.alstra.ca
- **Use Case**: Check what IP address websites see for you
- **Description**: Check what your IP address is as seen by various global regions and top online services with our Multi IP Exits Checker. Effortlessly check your IP across multiple platforms and understand how your IP appears to different places and websites.
- **Tags**: ip, network

### Namechk
- **URL**: https://namechk.com
- **Use Case**: Check if a username or domain is available
- **Description**: Username and domain availability checker.
- **Tags**: osint, username search, web, web utilities

### OCR.space
- **URL**: https://ocr.space
- **Use Case**: Run OCR on an image or PDF for free
- **Description**: Free OCR API, Online OCR and Searchable PDF (Sandwich PDF) Service. Web API to extract text from images and convert scans to searchable PDF. Free OCR software as a hosted service and as download.
- **Tags**: ocr, pdf

### OneDrive
- **URL**: https://microsoft.com/en-in/microsoft-365/onedrive/online-cloud-storage
- **Use Case**: Share and edit documents online
- **Description**: Microsoft's cloud storage for sharing and editing files.
- **Tags**: file, file tools

### PairDrop
- **URL**: https://pairdrop.net
- **Use Case**: Send a file directly between two devices on the same network
- **Description**: An open-source, browser-based peer-to-peer file transfer tool, like AirDrop for any device.
- **Tags**: file-transfer, p2p

### PDF Candy
- **URL**: https://pdfcandy.com
- **Use Case**: Edit and convert PDFs
- **Description**: 47 online tools for PDF editing and conversion.
- **Tags**: file, file tools

### PDFgear
- **URL**: https://pdfgear.com
- **Use Case**: Edit, merge, or convert a PDF for free
- **Description**: A free desktop and online PDF editor, converter, and merger.
- **Tags**: editor, pdf

### SimilarSites
- **URL**: https://similarsites.com
- **Use Case**: Discover websites similar to your favorites
- **Description**: Finds websites similar to your favorites.
- **Tags**: web utilities

### Smallpdf
- **URL**: https://smallpdf.com
- **Use Case**: Alternative PDF toolkit to iLovePDF.
- **Description**: Online PDF editing and conversion tools.
- **Tags**: file tools, pdf

### Snapdrop
- **URL**: https://snapdrop.net
- **Use Case**: Share files between nearby computers
- **Description**: Peer-to-peer local file sharing.
- **Tags**: file, file tools

### Stirling PDF
- **URL**: https://stirlingpdf.io
- **Use Case**: Run a full PDF toolkit yourself or in the browser
- **Description**: An open-source, self-hostable Swiss-army-knife for PDF editing and conversion.
- **Tags**: open-source, pdf

### ToffeeShare
- **URL**: https://toffeeshare.com
- **Use Case**: Share files securely with expiring links
- **Description**: Secure file sharing with expiring links.
- **Tags**: file, file tools

### Unpigeon
- **URL**: https://unpigeon.me
- **Use Case**: Clean tracking junk out of a link before sharing
- **Description**: Strips tracking parameters out of a pasted URL before you share it.
- **Tags**: privacy, url-cleaner

### VirusTotal
- **URL**: https://virustotal.com/gui/home/upload
- **Use Case**: Scan a file or URL with multiple antivirus engines
- **Description**: Multi-antivirus file scanning.
- **Tags**: file, file tools

### WeTransfer
- **URL**: https://wetransfer.com
- **Use Case**: Send large art/audio assets to a collaborator.
- **Description**: Simple large-file sharing service.
- **Tags**: file, file sharing, file tools

### WhatRuns
- **URL**: https://whatruns.com
- **Use Case**: See what technologies power a website
- **Description**: Identifies website technologies.
- **Tags**: web, web utilities

### White Screen
- **URL**: https://whitescreen.online
- **Use Case**: Fake a software-update screen on a shared computer
- **Description**: Shows a fake Windows or Mac update screen to make a computer look busy.
- **Tags**: prank, screen

### Wormhole
- **URL**: https://wormhole.app
- **Use Case**: Send a large file through a self-destructing link
- **Description**: Sends end-to-end encrypted files via a link that self-destructs after download or a timer.
- **Tags**: encryption, file-transfer

### Zamzar
- **URL**: https://zamzar.com
- **Use Case**: Convert between any file formats
- **Description**: Online file converter supporting all formats.
- **Tags**: converter, file, file tools

## Game Dev
*64 tools.*

### ArtStation
- **URL**: https://artstation.com
- **Use Case**: Reference concept art or find freelance artists.
- **Description**: Portfolio platform for game/film concept artists.
- **Tags**: art, gamedev, portfolio

### Aseprite
- **URL**: https://aseprite.org
- **Use Case**: Draw and animate sprites for a pixel game
- **Description**: The de facto standard pixel-art and sprite-animation editor — onion skinning, tags, tilemap mode, slices, CLI export. Paid, or free if you compile it yourself.
- **Tags**: animation, edusystem, gamedev, pixel art, sprites

### Awesome Godot
- **URL**: https://github.com/godotengine/awesome-godot
- **Use Case**: Discover Godot tooling and example projects
- **Description**: Curated index of Godot engines forks, plugins, tools, tutorials, and open-source games.
- **Tags**: directory, edusystem, gamedev, godot, reference

### BeepBox
- **URL**: https://beepbox.co
- **Use Case**: Compose background music for a small game
- **Description**: Browser chiptune tracker — write a loopable tune in minutes, share by URL, export WAV/MIDI.
- **Tags**: chiptune, edusystem, free, gamedev, music

### Bfxr
- **URL**: https://bfxr.net
- **Use Case**: Design a more nuanced retro sound effect
- **Description**: Expanded sfxr with more synthesis, mixing, and effects — still one-click retro SFX generation.
- **Tags**: edusystem, free, gamedev, retro, sound effects

### Bosca Ceoil
- **URL**: https://boscaceoil.net
- **Use Case**: Write game music with zero music background
- **Description**: Beginner-friendly free music maker by Terry Cavanagh (VVVVVV) — simple enough to write a game loop with no theory.
- **Tags**: chiptune, edusystem, free, gamedev, music

### ChipTone
- **URL**: https://sfbgames.itch.io/chiptone
- **Use Case**: Craft a custom game sound effect for free
- **Description**: Free, deep sound-effect designer (SnesLab-style) with envelopes, LFOs, and export — good for game SFX beyond sfxr presets.
- **Tags**: audio, edusystem, free, gamedev, sound effects

### CraftPix Freebies
- **URL**: https://craftpix.net/freebies
- **Use Case**: Find a free 2D art pack in a consistent style
- **Description**: Regularly updated free section of 2D game art packs — characters, tilesets, GUI, backgrounds.
- **Tags**: 2d, assets, edusystem, free, gamedev

### Diversion
- **URL**: https://diversion.dev
- **Use Case**: Manage game files with version control
- **Description**: Version control built for game teams — handles large binary assets natively.
- **Tags**: version-control

### FamiStudio
- **URL**: https://famistudio.org
- **Use Case**: Write authentic NES-style chiptune
- **Description**: Free NES/Famicom music editor with modern piano-roll UX; exports to real NES formats or WAV.
- **Tags**: chiptune, edusystem, free, music, nes

### Freesound
- **URL**: https://freesound.org
- **Use Case**: Source SFX for game actions and UI feedback.
- **Description**: Collaborative database of Creative Commons-licensed sound effects.
- **Tags**: audio, free, gamedev, sound effects

### Game Developer
- **URL**: https://gamedeveloper.com
- **Use Case**: Read developer post-mortems and industry analysis
- **Description**: Industry news and long-form developer blogs (the former Gamasutra) — post-mortems, deep dives, business analysis.
- **Tags**: edusystem, gamedev, news, reference

### Game Jolt
- **URL**: https://gamejolt.com
- **Use Case**: Alternative distribution channel to itch.io for PixelRoom.
- **Description**: Community platform for hosting and discovering indie games.
- **Tags**: distribution, gamedev, indie

### Game Programming Patterns
- **URL**: https://gameprogrammingpatterns.com
- **Use Case**: Structure game code without painting yourself into a corner
- **Description**: Robert Nystrom's book (free online) on design patterns as they actually apply to games — game loop, component, state, etc.
- **Tags**: architecture, books, free, gamedev, patterns

### Game-icons.net
- **URL**: https://game-icons.net
- **Use Case**: Grab an ability or item icon for game UI
- **Description**: 4000+ clean single-color game icons (CC-BY / CC0) — abilities, items, UI — recolorable, downloadable as SVG/PNG.
- **Tags**: edusystem, free, gamedev, icons, ui

### GameAnalytics
- **URL**: https://gameanalytics.com
- **Use Case**: Track player behavior and game metrics
- **Description**: Free game telemetry and player-behavior analytics SDK.
- **Tags**: analytics, playtesting

### Gamedev Mastodon
- **URL**: https://mastodon.gamedev.place
- **Use Case**: Join a Mastodon server for game developers
- **Description**: Mastodon server focused on game development and related topics.
- **Tags**: community, mastodon

### GameMaker
- **URL**: https://gamemaker.io
- **Use Case**: Compare tooling/workflow against PixelRoom's own stack.
- **Description**: 2D-focused game engine popular for indie pixel-art games.
- **Tags**: engine, gamedev

### GDC Vault (free talks)
- **URL**: https://gdcvault.com/free
- **Use Case**: Learn from a specific studio's post-mortem or technique talk
- **Description**: Thousands of Game Developers Conference talks, with a large free section covering design, art, tech, and business post-mortems.
- **Tags**: edusystem, gamedev, learning, reference, talks

### GDevelop
- **URL**: https://gdevelop.io
- **Use Case**: Fast prototyping of game mechanics without code.
- **Description**: Free, open-source, no-code 2D game engine.
- **Tags**: engine, free, gamedev, no-code

### GDQuest
- **URL**: https://gdquest.com
- **Use Case**: Learn Godot properly with structured lessons
- **Description**: High-quality Godot tutorials and free open-source demo projects and tools.
- **Tags**: gamedev, godot, learning, tutorials

### Godot Asset Library
- **URL**: https://godotengine.org/asset-library/asset
- **Use Case**: Find a Godot plugin or addon for a feature
- **Description**: The in-editor and web catalog of free Godot plugins, tools, and demo projects, installable straight from the editor.
- **Tags**: assets, edusystem, gamedev, godot, plugins

### Godot Engine
- **URL**: https://godotengine.org
- **Use Case**: Build a 2D or 3D game with a fully free engine
- **Description**: Free, open-source game engine — 2D and 3D, small footprint, GDScript/C#, no royalties or subscription.
- **Tags**: 2d, 3d, engine, free, gamedev, open source

### Godot Engine Documentation
- **URL**: https://docs.godotengine.org
- **Use Case**: Look up how a Godot node or method works
- **Description**: The full official manual and class reference for Godot 4 — nodes, GDScript, rendering, export, the whole API.
- **Tags**: docs, edusystem, essential, gamedev, godot, reference

### Godot Forum
- **URL**: https://forum.godotengine.org
- **Use Case**: Ask a Godot question or search past answers
- **Description**: Official community forum — engine help, project feedback, and dev discussion.
- **Tags**: community, edusystem, gamedev, godot

### Godot Recipes (KidsCanCode)
- **URL**: https://kidscancode.org/godot_recipes/4.x
- **Use Case**: Get a working pattern for a common Godot problem
- **Description**: Focused, practical Godot how-to articles — movement, state machines, UI, saving — kept current for 4.x.
- **Tags**: edusystem, gamedev, godot, patterns, tutorials

### Godot Shaders
- **URL**: https://godotshaders.com
- **Use Case**: Drop in a visual effect shader for a 2D game
- **Description**: Community library of ready-to-paste Godot shaders — outlines, water, CRT, dissolve, 2D lighting — with live previews.
- **Tags**: 2d, edusystem, gamedev, godot, shaders

### Godot Wild Jam
- **URL**: https://godotwildjam.com
- **Use Case**: Do a time-boxed Godot build to practice scope
- **Description**: Long-running monthly game jam specifically for Godot, with themes, ratings, and a Discord.
- **Tags**: edusystem, game jam, gamedev, godot

### How To Market A Game
- **URL**: https://howtomarketagame.com
- **Use Case**: Plan realistic marketing for an indie game
- **Description**: Chris Zukowski's blog and talks — concrete, data-backed indie game marketing: Steam pages, wishlists, festivals, capsule art.
- **Tags**: distribution, edusystem, essential, gamedev, marketing, steam

### HowLongToBeat
- **URL**: https://howlongtobeat.com
- **Use Case**: Benchmark expected playtime against similar games.
- **Description**: Crowdsourced database of game completion times.
- **Tags**: gamedev, research

### Humble Bundle Games
- **URL**: https://humblebundle.com/games
- **Use Case**: Research pricing/bundling strategy for indie releases.
- **Description**: Bundled game sales, some benefiting charity.
- **Tags**: distribution, gamedev, pricing

### IGDB API
- **URL**: https://igdb.com/api
- **Use Case**: Pull comparable-game data or metadata programmatically.
- **Description**: Video game database API with metadata on thousands of titles.
- **Tags**: api, data, gamedev

### itch.io
- **URL**: https://itch.io
- **Use Case**: Distribute PixelRoom builds; browse jam entries for inspiration.
- **Description**: Open marketplace for indie games, assets, and game jams.
- **Tags**: distribution, gamedev, indie

### itch.io Game Assets
- **URL**: https://itch.io/game-assets
- **Use Case**: Browse indie asset packs, often free
- **Description**: Massive store of indie game asset packs — sprites, tilesets, audio, tools — much of it free or pay-what-you-want.
- **Tags**: assets, gamedev, indie, marketplace

### jsfxr
- **URL**: https://sfxr.me
- **Use Case**: Make a placeholder or final retro SFX in seconds
- **Description**: Browser version of sfxr — generate retro 8-bit sound effects (jump, pickup, hit, laser) from presets and export WAV.
- **Tags**: edusystem, free, gamedev, retro, sound effects

### Kenney Assets
- **URL**: https://kenney.nl/assets
- **Use Case**: Prototype a game with cohesive free art immediately
- **Description**: Thousands of CC0 game assets — 2D sprites, 3D kits, UI, audio, fonts — all free, all public domain, consistently styled.
- **Tags**: 2d, 3d, assets, cc0, essential, free, gamedev, sprites

### Keymailer
- **URL**: https://keymailer.co
- **Use Case**: Send review keys to press and creators
- **Description**: Platform for distributing game keys to vetted press and streamers, with reach and audience stats.
- **Tags**: distribution, edusystem, gamedev, marketing, pr

### LDtk
- **URL**: https://ldtk.io
- **Use Case**: Design levels with auto-tiling and typed entities
- **Description**: Modern, free level editor by Deepnight (Dead Cells) — auto-tiling rules, entity fields, clean JSON; Godot importer exists.
- **Tags**: edusystem, free, gamedev, level design, tilemap

### Learn GDScript From Zero
- **URL**: https://gdquest.github.io/learn-gdscript
- **Use Case**: Learn or brush up GDScript interactively
- **Description**: Free interactive GDScript course that runs in the browser (and as an app) with an in-lesson code checker.
- **Tags**: edusystem, free, gdscript, godot, learning

### LibreSprite
- **URL**: https://libresprite.org
- **Use Case**: No-cost alternative to Aseprite for sprite work.
- **Description**: Free, open-source fork of Aseprite for pixel art.
- **Tags**: free, gamedev, open source, pixel art

### LibreSprite
- **URL**: https://libresprite.github.io
- **Use Case**: Do pixel art without paying for Aseprite
- **Description**: Free, open-source fork of the last GPL Aseprite release — most of the same workflow at no cost.
- **Tags**: edusystem, free, open source, pixel art, sprites

### LMMS
- **URL**: https://lmms.io
- **Use Case**: Compose original background music/loops for a game.
- **Description**: Free, open-source digital audio workstation for music production.
- **Tags**: audio, free, gamedev, music

### Lospec Palette List
- **URL**: https://lospec.com/palette-list
- **Use Case**: Pick a constrained palette for pixel art
- **Description**: Curated database of pixel-art color palettes with one-click export to every art tool.
- **Tags**: color, gamedev, palettes, pixel art

### Lospec Pixel Art Tutorials
- **URL**: https://lospec.com/pixel-art-tutorials
- **Use Case**: Learn a specific pixel-art technique
- **Description**: Curated collection of pixel-art technique guides — dithering, anti-aliasing, cluster theory, animation.
- **Tags**: edusystem, learning, pixel art, tutorials

### Ludum Dare
- **URL**: https://ldjam.com
- **Use Case**: Find jam entries and postmortems for design inspiration.
- **Description**: Long-running online game jam community.
- **Tags**: community, game jam, gamedev

### OpenGameArt
- **URL**: https://opengameart.org
- **Use Case**: Find free sprites, tilesets, or music for a game
- **Description**: Long-running community repository of free game art and audio under open licenses (CC0/CC-BY/GPL).
- **Tags**: 2d, assets, audio, free, gamedev

### Piskel
- **URL**: https://piskelapp.com
- **Use Case**: Quick free pixel-art edits without installing software.
- **Description**: Free browser-based pixel art and sprite animation tool.
- **Tags**: browser, free, gamedev, pixel art

### Pixelorama
- **URL**: https://oramainteractive.com/Pixelorama
- **Use Case**: Free desktop pixel-art editor with animation
- **Description**: Free, open-source pixel-art editor (built in Godot) — animation timeline, tilemaps, custom brushes, palette tools.
- **Tags**: animation, edusystem, free, open source, pixel art, sprites

### PixelOver
- **URL**: https://pgexe.com
- **Use Case**: Generate pixel-art sprites from 3D or hi-res source
- **Description**: Tool for turning 3D or high-res art into animated pixel art with outlines, dithering, and normal-map lighting.
- **Tags**: gamedev, pixel art, sprites

### Pixilart
- **URL**: https://pixilart.com/draw
- **Use Case**: Sketch a sprite quickly in the browser
- **Description**: Browser pixel-art editor with animation frames, layers, and a big community gallery.
- **Tags**: browser, edusystem, free, pixel art, sprites

### PlaytestCloud
- **URL**: https://playtestcloud.com
- **Use Case**: Get outside playtest feedback on PixelRoom before release.
- **Description**: Remote playtesting service with real players and recorded sessions.
- **Tags**: feedback, gamedev, playtesting

### POEditor
- **URL**: https://poeditor.com
- **Use Case**: Translate your app into multiple languages
- **Description**: Localization management platform for translating apps and games.
- **Tags**: localization

### Poki for Developers
- **URL**: https://developers.poki.com
- **Use Case**: Publish and monetize a browser game
- **Description**: Web-game publishing platform with revenue share, playtesting, and analytics for HTML5 games.
- **Tags**: gamedev, monetization, publishing, web games

### r/gamedev
- **URL**: https://reddit.com/r/gamedev
- **Use Case**: Get feedback on PixelRoom or ask tooling questions.
- **Description**: Reddit community for game development discussion and feedback.
- **Tags**: community, forum, gamedev

### r/IndieGaming
- **URL**: https://reddit.com/r/IndieGaming
- **Use Case**: Share PixelRoom progress/trailers to an indie-game audience.
- **Description**: Reddit community for showcasing and discovering indie games.
- **Tags**: community, gamedev, marketing

### Red Blob Games
- **URL**: https://redblobgames.com
- **Use Case**: Understand a game algorithm through an interactive diagram
- **Description**: Amos's interactive explanations of game algorithms — A* pathfinding, hex grids, noise — the definitive visual references.
- **Tags**: algorithms, essential, gamedev, pathfinding, reference

### Ren'Py
- **URL**: https://renpy.org
- **Use Case**: Reference for narrative/branching-dialogue game structure.
- **Description**: Engine for visual novels and story-driven games.
- **Tags**: engine, free, gamedev, narrative

### Sonniss GDC Game Audio Bundle
- **URL**: https://sonniss.com/gameaudiogdc
- **Use Case**: Get a huge free pro SFX library for a game
- **Description**: Free multi-gigabyte professional sound-effect libraries released every year at GDC, licensed for commercial game use.
- **Tags**: audio, free, gamedev, sound effects

### SteamDB
- **URL**: https://steamdb.info
- **Use Case**: Research a comparable game's Steam performance
- **Description**: Third-party database of Steam apps — price history, sales, player counts, patch notes, wishlist-to-sale ratios.
- **Tags**: edusystem, gamedev, marketing, research, steam

### Steamworks
- **URL**: https://partner.steamgames.com
- **Use Case**: Reference for a future Steam release of PixelRoom.
- **Description**: Valve's developer portal for publishing games on Steam.
- **Tags**: distribution, gamedev, steam

### TexturePacker
- **URL**: https://codeandweb.com/texturepacker
- **Use Case**: Pack PixelRoom sprites into optimized texture atlases.
- **Description**: Sprite-sheet packer for game engines.
- **Tags**: gamedev, sprites

### Tiled
- **URL**: https://mapeditor.org
- **Use Case**: Lay out a level as a tile map
- **Description**: The standard free tile-map editor — orthogonal/iso/hex, object layers, custom properties; Godot imports its .tmx/.tmj directly.
- **Tags**: edusystem, free, gamedev, level design, tilemap

### Twine
- **URL**: https://twinery.org
- **Use Case**: Prototype branching narrative or dialogue trees.
- **Description**: Open-source tool for telling interactive, nonlinear stories.
- **Tags**: free, gamedev, narrative, open source

### Unity Asset Store
- **URL**: https://assetstore.unity.com
- **Use Case**: Find assets and plugins for Unity games
- **Description**: Marketplace for Unity-ready assets, tools, and plugins.
- **Tags**: assets, unity

## Hosting & Ops
*25 tools.*

### Better Stack (Uptime)
- **URL**: https://betterstack.com/uptime
- **Use Case**: Monitor a site and publish a status page
- **Description**: Uptime and heartbeat monitoring with hosted status pages and on-call scheduling; free tier for small setups.
- **Tags**: alerts, monitoring, status page, uptime

### Cloudflare Pages
- **URL**: https://pages.cloudflare.com
- **Use Case**: Host a site free on a fast global network
- **Description**: Free static/JAMstack hosting on Cloudflare's network, with Workers and Functions for dynamic bits and generous limits.
- **Tags**: cloudflare, deployment, free, hosting, static

### Cloudflare Workers
- **URL**: https://workers.cloudflare.com
- **Use Case**: Run backend logic at the edge without a server
- **Description**: Serverless functions at the edge with KV, D1 (SQLite), R2 (object storage), and Durable Objects — a whole small-app backend.
- **Tags**: backend, cloudflare, edge, serverless

### Docker
- **URL**: https://docker.com
- **Use Case**: Make an app reproducible across dev and prod
- **Description**: Package an app and its dependencies into a container that runs the same everywhere — the unit most hosts deploy.
- **Tags**: containers, deployment, developer tools, devops, essential

### Fly.io
- **URL**: https://fly.io
- **Use Case**: Deploy a containerized app to multiple regions
- **Description**: Run full apps and Docker containers close to users in many regions; good for latency-sensitive services and always-on processes.
- **Tags**: backend, deployment, docker, edge, hosting

### GitHub Actions
- **URL**: https://github.com/features/actions
- **Use Case**: Automate tests and deploys on every push
- **Description**: CI/CD built into GitHub: run tests, build, and deploy on push with a YAML workflow and a free minutes allowance.
- **Tags**: automation, ci/cd, devops, github

### GitHub Status
- **URL**: https://githubstatus.com
- **Use Case**: Check whether GitHub is down
- **Description**: Welcome to GitHub's home for real-time and historical data on system performance.
- **Tags**: github, githubstatus, status-page

### Healthchecks.io
- **URL**: https://healthchecks.io
- **Use Case**: Get told when a scheduled job silently stops running
- **Description**: Dead-man's-switch monitoring for cron jobs — if the expected ping doesn't arrive on schedule, it alerts you. Free tier, open source.
- **Tags**: alerts, cron, free, monitoring

### Instatus
- **URL**: https://instatus.com
- **Use Case**: Give users a status page during an incident
- **Description**: Fast, free-tier hosted status pages (instatus.com) with subscriber notifications and incident templates.
- **Tags**: incidents, monitoring, status page

### Microsoft Clarity
- **URL**: https://clarity.microsoft.com
- **Use Case**: Watch how real users actually use a page
- **Description**: Free (unlimited) heatmaps and session recordings with rage-click and dead-click detection — no traffic caps.
- **Tags**: analytics, essential, free, heatmaps, session replay, ux

### Neon
- **URL**: https://neon.com
- **Use Case**: Add a cheap, branchable Postgres to a project
- **Description**: Serverless Postgres that scales to zero, with instant database branching for preview environments.
- **Tags**: database, hosting, postgres, serverless

### Netlify
- **URL**: https://netlify.com
- **Use Case**: Host a static site or JAMstack app with CI built in
- **Description**: Git-driven hosting for static sites and functions — deploy previews, form handling, redirects, split testing. Vercel's closest peer.
- **Tags**: deployment, developer tools, hosting, jamstack, static

### ntfy
- **URL**: https://ntfy.sh
- **Use Case**: Get a phone alert when a background job finishes or fails
- **Description**: Send yourself push notifications from a script or cron job with a simple HTTP PUT; open source, free.
- **Tags**: devops, notifications, open source, webhooks

### Plausible Analytics
- **URL**: https://plausible.io
- **Use Case**: Track site traffic without cookie banners or Google
- **Description**: Lightweight, cookie-free, GDPR-friendly web analytics — a single simple dashboard, no consent banner needed. Open source, self-hostable.
- **Tags**: analytics, open source, privacy, web

### PostHog
- **URL**: https://posthog.com
- **Use Case**: Instrument a product with analytics and feature flags
- **Description**: All-in-one product analytics — events, funnels, session replay, feature flags, A/B tests, surveys — with a big free tier. Open source.
- **Tags**: ab testing, analytics, feature flags, open source, product

### Pulumi
- **URL**: https://pulumi.com
- **Use Case**: Define cloud infrastructure in real code
- **Description**: Pulumi is an open-source infrastructure as code platform that helps humans and agents build and manage cloud infrastructure with real programming languages.
- **Tags**: cloud, infrastructure-as-code, pulumi

### Railway
- **URL**: https://railway.com
- **Use Case**: Stand up a backend and database fast from a template
- **Description**: Deploy apps, databases, and workers from a repo or template with minimal config; usage-based pricing after a small monthly credit.
- **Tags**: backend, database, deployment, hosting, paas

### Render
- **URL**: https://render.com
- **Use Case**: Host a full backend + DB without managing servers
- **Description**: PaaS for web services, static sites, cron jobs, Postgres, and Redis with a usable free tier — deploy a Docker image or a repo.
- **Tags**: backend, deployment, developer tools, hosting, paas, postgres

### Sentry
- **URL**: https://sentry.io
- **Use Case**: See the actual errors real users are hitting in production
- **Description**: Error and performance monitoring — captures exceptions with stack traces, breadcrumbs, and release context across frontend and backend.
- **Tags**: debugging, error tracking, essential, monitoring, observability

### Supabase
- **URL**: https://supabase.com
- **Use Case**: Get a database + auth + APIs for an app in minutes
- **Description**: Open-source Firebase alternative: hosted Postgres with instant REST/realtime APIs, auth, storage, and edge functions.
- **Tags**: auth, baas, backend, database, developer tools, essential, postgres

### Turso
- **URL**: https://turso.tech
- **Use Case**: Put a SQLite database at the edge
- **Description**: Hosted, edge-replicated SQLite (libSQL) — low-latency reads near users, generous free tier.
- **Tags**: database, edge, hosting, sqlite

### Umami
- **URL**: https://umami.is
- **Use Case**: Self-host simple, private site analytics
- **Description**: Open-source, privacy-first web analytics you can self-host free or use their hosted tier; clean single-page stats.
- **Tags**: analytics, open source, privacy, self-hosted

### Upstash
- **URL**: https://upstash.com
- **Use Case**: Add caching, rate-limiting, or queues without running Redis
- **Description**: Serverless Redis and Kafka billed per request — no idle cost, works from edge/serverless functions.
- **Tags**: backend, caching, redis, serverless

### UptimeRobot
- **URL**: https://uptimerobot.com
- **Use Case**: Know immediately when a deployed site goes down
- **Description**: Free uptime monitoring — pings your URL every 5 minutes and alerts by email/Slack/webhook when it goes down.
- **Tags**: alerts, essential, free, monitoring, uptime

### Vercel
- **URL**: https://vercel.com
- **Use Case**: Deploy a React/Next/Vite frontend with preview builds
- **Description**: Zero-config hosting for frontend frameworks and serverless functions — Git-push deploys, preview URLs per branch, global edge network. Home of Next.js.
- **Tags**: deployment, developer tools, essential, frontend, hosting, serverless

## Money & Markets
*23 tools.*

### Alpaca
- **URL**: https://alpaca.markets
- **Use Case**: The broker account and dashboard for the bot
- **Description**: Commission-free US stock/ETF/options/crypto brokerage built for APIs — the broker for trading-bot, paper first then live.
- **Tags**: alpaca, broker, essential, trading, trading & markets, trading-bot

### Alpaca API Docs
- **URL**: https://docs.alpaca.markets
- **Use Case**: Look up an Alpaca endpoint or data feed detail
- **Description**: Reference for Alpaca's Trading API (orders, positions, brackets), Market Data API (bars, quotes, trades), and streaming.
- **Tags**: alpaca, api, docs, trading, trading & markets, trading-bot

### alpaca-py
- **URL**: https://github.com/alpacahq/alpaca-py
- **Use Case**: Call Alpaca from Python for orders and bars
- **Description**: Alpaca's official Python SDK — trading client, historical + live market data, broker API, with typed models.
- **Tags**: alpaca, python, sdk, trading, trading & markets, trading-bot

### APScheduler
- **URL**: https://apscheduler.readthedocs.io
- **Use Case**: Schedule the bot's periodic run without system cron
- **Description**: In-process Python job scheduler — cron/interval/date triggers, persistence — for running the trading loop on a schedule.
- **Tags**: python, scheduling, trading & markets, trading-bot

### Awesome Quant
- **URL**: https://github.com/wilsonfreitas/awesome-quant
- **Use Case**: Find a library or data source for a quant task
- **Description**: Curated index of quantitative-finance libraries, data sources, and learning material across languages.
- **Tags**: directory, reference, trading, trading & markets, trading-bot

### backtesting.py
- **URL**: https://kernc.github.io/backtesting.py
- **Use Case**: Prove a strategy's edge before writing any live code (Gate 0)
- **Description**: Lightweight, fast event-driven backtesting framework — vectorized indicators, realistic fills, built-in optimization and plots. No look-ahead by design.
- **Tags**: backtesting, essential, python, trading, trading & markets, trading-bot

### Backtrader
- **URL**: https://backtrader.com
- **Use Case**: Backtest with a framework that can also go live
- **Description**: Long-standing Python backtesting/trading framework with a broker abstraction (incl. Alpaca), indicators, and live-trading support.
- **Tags**: backtesting, python, trading, trading & markets, trading-bot

### Expensify
- **URL**: https://expensify.com
- **Use Case**: Track business expenses and create reports
- **Description**: Tracks spending and generates expense reports.
- **Tags**: finance

### FreshBooks
- **URL**: https://freshbooks.com
- **Use Case**: Compare invoicing workflows against Wave/QuickBooks.
- **Description**: Invoicing and accounting software for freelancers/small business.
- **Tags**: accounting, finance, invoicing

### Mint
- **URL**: https://mint.intuit.com
- **Use Case**: Track spending and set budgets
- **Description**: Budgeting app tracking expenses and financial goals.
- **Tags**: finance

### pandas-market-calendars
- **URL**: https://github.com/rsheftel/pandas_market_calendars
- **Use Case**: Know exactly when the market is open
- **Description**: Exchange trading calendars (NYSE, NASDAQ, etc.) — sessions, holidays, early closes — so the bot doesn't act on closed days.
- **Tags**: calendar, python, trading, trading & markets, trading-bot

### python-telegram-bot
- **URL**: https://docs.python-telegram-bot.org
- **Use Case**: Wire the bot's Telegram commands in Python
- **Description**: Mature async Python wrapper for the Telegram Bot API — handlers, jobs, conversation flows.
- **Tags**: bots, python, telegram, trading & markets, trading-bot

### Quantitative Finance Stack Exchange
- **URL**: https://quant.stackexchange.com
- **Use Case**: Ask or search a quant-finance question
- **Description**: Q&A site for quantitative and algorithmic finance — modeling, backtesting statistics, market microstructure.
- **Tags**: community, reference, trading, trading & markets, trading-bot

### QuantStart Articles
- **URL**: https://quantstart.com/articles
- **Use Case**: Learn a systematic-trading concept properly
- **Description**: Free articles on systematic trading — backtesting pitfalls, strategy research, risk management, execution.
- **Tags**: learning, reference, trading, trading & markets, trading-bot

### QuantStats
- **URL**: https://github.com/ranaroussi/quantstats
- **Use Case**: Turn backtest returns into a performance tearsheet
- **Description**: Portfolio analytics — Sharpe/Sortino/CAGR/drawdown, rolling stats, and a full HTML tearsheet from a returns series.
- **Tags**: analytics, python, reporting, trading, trading & markets, trading-bot

### QuickBooks
- **URL**: https://quickbooks.intuit.com
- **Use Case**: Track income/expenses across the four active projects.
- **Description**: Small-business accounting and bookkeeping software.
- **Tags**: accounting, finance

### Stripe
- **URL**: https://stripe.com
- **Use Case**: Handle payments if/when a monetization model is decided.
- **Description**: Payment processing platform for online businesses.
- **Tags**: finance, payments

### TaxAct
- **URL**: https://taxact.com
- **Use Case**: File your taxes online affordably
- **Description**: Platform for preparing and filing taxes online.
- **Tags**: finance

### Telegram Bot API
- **URL**: https://core.telegram.org/bots/api
- **Use Case**: Send the bot's alerts and take commands over Telegram
- **Description**: Reference for building a Telegram bot — the only planned UI for trading-bot (alerts, status, kill-switch).
- **Tags**: api, bots, telegram, trading & markets, trading-bot

### TransferWise (Wise)
- **URL**: https://wise.com
- **Use Case**: Send money internationally at real rates
- **Description**: Fast money transfers in multiple currencies at real rates.
- **Tags**: finance

### vectorbt
- **URL**: https://vectorbt.dev
- **Use Case**: Run large-scale parameter sweeps and walk-forward tests
- **Description**: High-performance vectorized backtesting and research over NumPy/Numba — huge parameter sweeps, portfolio analytics.
- **Tags**: backtesting, python, research, trading, trading & markets, trading-bot

### Wave
- **URL**: https://waveapps.com
- **Use Case**: Free alternative to QuickBooks for a solo operation.
- **Description**: Free accounting and invoicing software for small businesses.
- **Tags**: accounting, finance, free

### Zipline Reloaded
- **URL**: https://zipline.ml4trading.io
- **Use Case**: Do factor-based research on a universe of stocks
- **Description**: Maintained fork of Quantopian's Zipline — pipeline API for cross-sectional factor research and event-driven backtests.
- **Tags**: backtesting, python, research, trading, trading & markets, trading-bot

## Productivity
*72 tools.*

### 10 Minute Mail
- **URL**: https://10minutemail.com
- **Use Case**: Get a temporary email address for signups
- **Description**: Temporary email address service.
- **Tags**: communication, osint, throwaway contact

### AFFiNE
- **URL**: https://affine.pro
- **Use Case**: Combine notes and a whiteboard in one workspace
- **Description**: An open-source workspace that merges docs, whiteboards, and tables into one canvas.
- **Tags**: notes, whiteboard

### Airtable
- **URL**: https://airtable.com
- **Use Case**: Track structured data (e.g. Atlas-style link banks) visually.
- **Description**: Spreadsheet-database hybrid for structured data and workflows.
- **Tags**: database, spreadsheet

### Alfred
- **URL**: https://alfredapp.com
- **Use Case**: Mac launcher alternative with custom automation workflows.
- **Description**: macOS productivity app with workflows and quick search.
- **Tags**: mac, software

### Anytype
- **URL**: https://anytype.io
- **Use Case**: Keep notes and a knowledge base fully local
- **Description**: A privacy-first, local-storage note-taking and knowledge-base alternative.
- **Tags**: notes, privacy

### Asana
- **URL**: https://asana.com
- **Use Case**: Reference for structuring multi-project task tracking.
- **Description**: Project and task management for teams.
- **Tags**: project management

### Basecamp
- **URL**: https://basecamp.com
- **Use Case**: Reference simpler, opinionated project-management UX.
- **Description**: Project management and team communication in one tool.
- **Tags**: project management

### Bubbl.us
- **URL**: https://bubbl.us
- **Use Case**: Create a mind map
- **Description**: Mind mapping tool for organizing thoughts visually.

### Cal.com
- **URL**: https://cal.com
- **Use Case**: Share a booking link for scheduling meetings
- **Description**: An open-source scheduling tool, a self-hostable alternative to Calendly.
- **Tags**: open-source, scheduling

### Calendly
- **URL**: https://calendly.com
- **Use Case**: Let collaborators or customers book time without back-and-forth.
- **Description**: Scheduling tool that shares availability and books meetings.
- **Tags**: scheduling

### ClickUp
- **URL**: https://clickup.com
- **Use Case**: Alternative to Notion for heavier project-tracking needs.
- **Description**: Customizable all-in-one project management platform.
- **Tags**: project management

### Clockify
- **URL**: https://clockify.me
- **Use Case**: Free alternative to Toggl for logging billable/project hours.
- **Description**: Free time-tracking tool for teams and freelancers.
- **Tags**: free, time tracking

### Dictation.io
- **URL**: https://dictation.io
- **Use Case**: Convert speech to text quickly
- **Description**: Speech-to-text transcription tool.

### DWService
- **URL**: https://dwservice.net/en/home.html
- **Use Case**: Control a computer remotely
- **Description**: Remote computer access service.
- **Tags**: communication

### Eesel
- **URL**: https://eesel.app
- **Use Case**: Organize your workflow tools
- **Description**: Chrome extension organizing workflows for productivity.
- **Tags**: chrome

### Evernote
- **URL**: https://evernote.com
- **Use Case**: Web clipping for research capture.
- **Description**: Cross-platform note-taking and web-clipping app.
- **Tags**: notes

### Excel Formula Bot
- **URL**: https://betteranalyst.com/ai-excel-spreadsheet-generator
- **Use Case**: Generate spreadsheet formulas
- **Description**: Converts text to spreadsheet formulas.

### Follow Up Then
- **URL**: https://followupthen.com
- **Use Case**: Set email reminders
- **Description**: Sets email reminders easily.
- **Tags**: communication

### Forest
- **URL**: https://forestapp.cc
- **Use Case**: Pomodoro-style focus sessions with a habit-forming hook.
- **Description**: Gamified focus-timer app that grows virtual trees while you focus.
- **Tags**: focus, gamification

### Fuelly
- **URL**: https://fuelly.com
- **Use Case**: Track fuel mileage and expenses
- **Description**: Tracks fuel mileage and expenses.

### FutureMe
- **URL**: https://futureme.org
- **Use Case**: Send yourself a message for the future
- **Description**: Sends emails to your future self.
- **Tags**: communication

### GetHuman
- **URL**: https://gethuman.com
- **Use Case**: Find company phone numbers fast
- **Description**: Finds company phone numbers for support.

### Goblin Tools
- **URL**: https://goblin.tools
- **Use Case**: Break an overwhelming task into small steps
- **Description**: Small AI helpers that break tasks into steps, designed for neurodivergent users.
- **Tags**: accessibility, task-breakdown

### Google Hangouts
- **URL**: https://hangouts.google.com
- **Use Case**: Message and video call contacts
- **Description**: Communication application for staying in touch globally.
- **Tags**: communication

### Habitica
- **URL**: https://habitica.com
- **Use Case**: Turn habit tracking into an RPG game
- **Description**: Gamifies habit and task tracking as an RPG with rewards for real-life progress.
- **Tags**: gamification, habits

### Harvest
- **URL**: https://getharvest.com
- **Use Case**: Track time and invoice clients from one tool.
- **Description**: Time tracking with built-in invoicing.
- **Tags**: invoicing, time tracking

### Hunter.io
- **URL**: https://hunter.io
- **Use Case**: Find email addresses for business contacts
- **Description**: Email address finder for websites.
- **Tags**: communication, osint

### IFTTT
- **URL**: https://ifttt.com
- **Use Case**: Automate apps and device tasks
- **Description**: Automates web tasks and device interactions.

### Join.me
- **URL**: https://join.me
- **Use Case**: Share your screen with others remotely
- **Description**: Screen-sharing application for remote collaboration.
- **Tags**: communication

### Linear
- **URL**: https://linear.app
- **Use Case**: Track bugs/feature work with a lighter feel than Jira.
- **Description**: Fast, opinionated issue tracker for software teams.
- **Tags**: developer tools, issue tracking

### Logseq
- **URL**: https://logseq.com
- **Use Case**: Keep a networked outline of notes in local Markdown
- **Description**: A privacy-first, open-source outliner for networked notes stored as local Markdown.
- **Tags**: notes, outliner

### Loom
- **URL**: https://loom.com
- **Use Case**: Record quick walkthroughs of Atlas/Chegga/PixelRoom features.
- **Description**: Quick screen-recording and async video-messaging tool.
- **Tags**: communication, screen recording, video

### Mailinator
- **URL**: https://mailinator.com
- **Use Case**: Get a throwaway email for one-time signups
- **Description**: Creates disposable email inboxes to avoid spam.
- **Tags**: communication

### Make (formerly Integromat)
- **URL**: https://make.com
- **Use Case**: Build multi-step automations Zapier can't handle cheaply.
- **Description**: Visual no-code automation platform for complex workflows.
- **Tags**: automation, no-code

### Microsoft Office Online
- **URL**: https://m365.cloud.microsoft
- **Use Case**: Edit Word documents and spreadsheets in your browser
- **Description**: Free browser-based access to edit MS Office files.
- **Tags**: browser, communication, free

### Milanote
- **URL**: https://milanote.com
- **Use Case**: Sketch out a creative project visually
- **Description**: A visual board for organizing notes, images, and links into mood boards and project plans.
- **Tags**: mood-board, planning

### Minutes.io
- **URL**: https://minutes.io
- **Use Case**: Take quick meeting notes
- **Description**: Quick note-taking tool for meetings.

### Miro
- **URL**: https://miro.com/online-whiteboard
- **Use Case**: Brainstorm visually with a team
- **Description**: Web-based whiteboard for collaborative brainstorming.

### Miro
- **URL**: https://miro.com
- **Use Case**: Map out game levels, story flows, or product roadmaps visually.
- **Description**: Online collaborative whiteboard.
- **Tags**: collaboration, whiteboard

### monday.com
- **URL**: https://monday.com
- **Use Case**: Alternative project-tracking tool to compare against Notion.
- **Description**: Visual work-management platform with customizable boards.
- **Tags**: project management

### Motion
- **URL**: https://usemotion.com
- **Use Case**: Automatically time-block tasks around fixed meetings.
- **Description**: AI calendar/task app that auto-schedules your day.
- **Tags**: ai, scheduling

### Notion
- **URL**: https://notion.com
- **Use Case**: Already used as the vault/task-tracking backbone.
- **Description**: All-in-one workspace for notes, docs, and databases.
- **Tags**: database, notes

### Notion Calendar
- **URL**: https://notion.com/product/calendar
- **Use Case**: Keep scheduling tied to the existing Notion setup.
- **Description**: Calendar app integrated with Notion workspaces.
- **Tags**: calendar

### Obsidian
- **URL**: https://obsidian.md
- **Use Case**: Alternative to this vault's markdown-file approach with linking UI.
- **Description**: Local-first markdown note-taking app with backlinks/graph view.
- **Tags**: markdown, notes

### OneNote
- **URL**: https://microsoft.com/en-in/microsoft-365/onenote/digital-note-taking-app
- **Use Case**: Take and organize notes across devices
- **Description**: Note-taking app with customizable layout options.

### Otter.ai
- **URL**: https://otter.ai
- **Use Case**: Transcribe calls or brainstorms into searchable notes.
- **Description**: AI meeting transcription and note-taking tool.
- **Tags**: ai, transcription

### Poised
- **URL**: https://poised.com
- **Use Case**: Improve your speaking and presentation skills
- **Description**: Communication skills improvement tool.
- **Tags**: communication

### Pomofocus
- **URL**: https://pomofocus.io
- **Use Case**: Run a Pomodoro focus timer in the browser
- **Description**: A simple, customizable web-based Pomodoro timer.
- **Tags**: pomodoro, timer

### Raindrop.io
- **URL**: https://raindrop.io
- **Use Case**: Organize and sync bookmarks across devices
- **Description**: A bookmark manager with tagging, collections, and sync across devices.
- **Tags**: bookmarks, sync

### Raycast
- **URL**: https://raycast.com
- **Use Case**: Quick app launching, clipboard history, and snippet tools.
- **Description**: macOS launcher/productivity tool with extensions and scripts.
- **Tags**: mac, software

### Reclaim.ai
- **URL**: https://reclaim.ai
- **Use Case**: Auto-protect focus time across four active projects.
- **Description**: AI scheduling assistant that auto-blocks time for tasks/habits.
- **Tags**: ai, scheduling

### RescueTime
- **URL**: https://rescuetime.com
- **Use Case**: Audit where solo-founder time actually goes each week.
- **Description**: Automatic time-tracking and focus-analytics app.
- **Tags**: time tracking

### Slack
- **URL**: https://slack.com
- **Use Case**: Async communication channel; already Claude-tag connected.
- **Description**: Team messaging and channel-based communication.
- **Tags**: communication, team chat

### Speechify
- **URL**: https://speechify.com
- **Use Case**: Convert documents to audio
- **Description**: Text-to-speech engine for documents.

### Start.me
- **URL**: https://about.start.me
- **Use Case**: Create a custom start page
- **Description**: Creates customizable browser start pages.
- **Tags**: browser

### Structured
- **URL**: https://structured.app
- **Use Case**: Plan a day as a visual timeline of tasks and events
- **Description**: A daily planner combining a visual timeline with tasks and calendar events.
- **Tags**: planner, timeline

### Sunsama
- **URL**: https://sunsama.com
- **Use Case**: Plan a daily schedule pulling from Notion/task tools.
- **Description**: Daily planner that pulls tasks from other tools into one view.
- **Tags**: planning

### Tango
- **URL**: https://tango.ai
- **Use Case**: Build step-by-step setup or onboarding guides
- **Description**: Step-by-step guide creation tool.

### Temp Mail
- **URL**: https://temp-mail.org/en
- **Use Case**: Throwaway email for a one-off signup
- **Description**: Free disposable email inbox for sign-ups you do not want tied to your real address.
- **Tags**: communication, disposable, email, privacy

### TextExpander
- **URL**: https://textexpander.com
- **Use Case**: Speed up repeated replies/boilerplate across apps.
- **Description**: Text-snippet expansion tool for repetitive typing.
- **Tags**: automation, typing

### tl;dv
- **URL**: https://tldv.io
- **Use Case**: Get an automatic summary of a video call
- **Description**: Joins video calls to record, transcribe, and summarize meetings automatically.
- **Tags**: meetings, transcription

### tldraw
- **URL**: https://tldraw.com
- **Use Case**: Sketch a quick diagram with a collaborator
- **Description**: An infinite collaborative whiteboard for sketching diagrams and ideas.
- **Tags**: diagramming, whiteboard

### Todoist
- **URL**: https://todoist.com
- **Use Case**: Personal to-do tracking alternative to Notion boards.
- **Description**: Task manager with natural-language due dates and recurring tasks.
- **Tags**: social, tasks

### Toggl Track
- **URL**: https://toggl.com/track
- **Use Case**: Track time spent per project for billing or self-audit.
- **Description**: Simple manual time-tracking tool.
- **Tags**: time tracking

### Trello
- **URL**: https://trello.com
- **Use Case**: Lightweight visual task board for a single project.
- **Description**: Kanban-board project management tool.
- **Tags**: kanban, project management

### Tweek
- **URL**: https://tweek.so
- **Use Case**: Plan a week with a simple task-and-calendar view
- **Description**: A minimal weekly planner combining a task list with a calendar view.
- **Tags**: planner, weekly

### Unroll.me
- **URL**: https://unroll.me
- **Use Case**: Unsubscribe from unwanted mailing lists
- **Description**: Email spam unsubscribe tool.
- **Tags**: communication

### Use The Keyboard
- **URL**: https://usethekeyboard.com
- **Use Case**: Look up keyboard shortcuts
- **Description**: Collection of keyboard shortcuts.

### Wheel of Names
- **URL**: https://wheelofnames.com
- **Use Case**: Randomly pick a name or winner from a list
- **Description**: A free, customizable spinner wheel for randomly picking a name from a list.
- **Tags**: randomizer, spinner

### Whimsical
- **URL**: https://whimsical.com
- **Use Case**: Sketch quick flowcharts for app logic or onboarding.
- **Description**: Visual workspace for flowcharts, wireframes, and docs.
- **Tags**: diagramming

### Zapier
- **URL**: https://zapier.com
- **Use Case**: Automate repetitive cross-app tasks without custom code.
- **Description**: No-code automation connecting thousands of apps.
- **Tags**: automation, no-code

### Zoom
- **URL**: https://zoom.com
- **Use Case**: Client calls or playtesting sessions.
- **Description**: Video conferencing platform.
- **Tags**: communication, video

## Reading & News
*25 tools.*

### Aeon
- **URL**: https://aeon.co
- **Use Case**: Read long-form essays by experts
- **Description**: Publishes in-depth articles by experts on science, philosophy, history, arts, and nature.
- **Tags**: news & reading

### Blinkist
- **URL**: https://blinkist.com
- **Use Case**: Get 15-minute summaries of bestselling books
- **Description**: Quick summaries of 2500+ bestselling books in 15-minute formats.
- **Tags**: books & reading

### Book Riot
- **URL**: https://bookriot.com
- **Use Case**: Read entertaining book news and reviews
- **Description**: Online publication with entertaining news and book reviews.
- **Tags**: news, news & reading

### FiveThirtyEight
- **URL**: https://abcnews.com/538
- **Use Case**: Read news explained with data and analysis
- **Description**: Data-centric news blog providing statistical perspective.
- **Tags**: news, news & reading

### GitHub Blog
- **URL**: https://github.blog
- **Use Case**: Follow product news and engineering posts from GitHub
- **Description**: Updates, ideas, and inspiration from GitHub to help developers build and design software.
- **Tags**: engineering-blog, github

### GoodReads
- **URL**: https://goodreads.com
- **Use Case**: Discover books and track what you're reading
- **Description**: World's largest community of book lovers for tracking and discovering books.
- **Tags**: books, books & reading

### Google News
- **URL**: https://news.google.com
- **Use Case**: Get personalized news headlines daily
- **Description**: Aggregates top stories globally with personalized recommendations.
- **Tags**: news & reading

### Hacker News
- **URL**: https://news.ycombinator.com
- **Use Case**: Follow tech and startup news
- **Description**: Tech news site offering unique insider perspective.
- **Tags**: news, news & reading

### HN Search
- **URL**: https://hn.algolia.com
- **Use Case**: Search Hacker News posts and comments
- **Description**: Hacker News Search, millions articles and comments at your fingertips.
- **Tags**: algolia, hacker-news, search

### Instapaper
- **URL**: https://instapaper.com
- **Use Case**: Save articles to read when you have time
- **Description**: Save articles for later reading with highlighting and notes.
- **Tags**: books, books & reading

### Kialo
- **URL**: https://kialo.com
- **Use Case**: Explore pros and cons of any debate topic
- **Description**: Debate platform listing pros and cons of topics.
- **Tags**: news, news & reading

### LibraryThing
- **URL**: https://librarything.com
- **Use Case**: Track and discover books
- **Description**: Social platform for readers to share and discover books.
- **Tags**: books & reading

### MakeUseOf
- **URL**: https://makeuseof.com
- **Use Case**: Learn how to use gadgets and tools
- **Description**: Tech blog teaching gadget use and internet discovery.
- **Tags**: news, news & reading

### MedlinePlus
- **URL**: https://medlineplus.gov
- **Use Case**: Look up medical conditions and treatments
- **Description**: Medical knowledge by U.S. National Library.
- **Tags**: books, books & reading

### Open Library
- **URL**: https://openlibrary.org
- **Use Case**: Borrow an ebook online for free
- **Description**: The Internet Archive's catalog for borrowing scanned books online.
- **Tags**: ebooks, library

### Pixel of Ink
- **URL**: https://pixelofink.com
- **Use Case**: Find free or discounted Kindle ebooks
- **Description**: Tracks free and discounted Kindle eBooks.
- **Tags**: books, books & reading, free

### Pocket
- **URL**: https://getpocket.com
- **Use Case**: Bookmark articles and videos for later reading
- **Description**: Read-later application for saving articles and videos.
- **Tags**: news & reading

### Project Gutenberg
- **URL**: https://gutenberg.org
- **Use Case**: Find a free ebook
- **Description**: Repository of over 60,000 free ebooks.
- **Tags**: books & reading, free

### Quartz
- **URL**: https://qz.com
- **Use Case**: Read business and tech news
- **Description**: Global-centric news platform with unique story angles.
- **Tags**: news, news & reading

### Reddit
- **URL**: https://reddit.com
- **Use Case**: Find niche communities and discussions
- **Description**: International platform covering serious and absurd news.
- **Tags**: news, news & reading

### Reuters
- **URL**: https://reuters.com
- **Use Case**: Read objective news from around the world
- **Description**: Multimedia news agency with objective reporting.
- **Tags**: news, news & reading

### Space.com
- **URL**: https://space.com
- **Use Case**: Follow space exploration news
- **Description**: News and updates on space exploration and astronomy.
- **Tags**: news, news & reading

### The Conversation
- **URL**: https://theconversation.com
- **Use Case**: Read in-depth analysis on current events
- **Description**: In-depth analysis and news on diverse topics.
- **Tags**: news, news & reading

### The Pudding
- **URL**: https://pudding.cool
- **Use Case**: Read a visually explained deep-dive on a cultural topic
- **Description**: A digital publication that explains cultural debates through deeply researched visual essays.
- **Tags**: data-journalism, visual-essays

### WhichBook
- **URL**: https://whichbook.net
- **Use Case**: Get personalized book recommendations
- **Description**: Provides quality book recommendations based on preferences.
- **Tags**: books, books & reading

## Reference & Data
*217 tools.*

### 2050 Earth
- **URL**: https://2050.earth
- **Use Case**: Browse crowdsourced predictions for the year 2050
- **Description**: A crowdsourced collection of predictions and visions for what the year 2050 will look like.
- **Tags**: crowdsourced, futurism

### 2lingual Google Search
- **URL**: https://2lingual.com
- **Use Case**: Search Google for pages in a chosen language
- **Description**: Google search front end that limits results to pages written in languages you pick from two dropdowns of about 36 languages.
- **Tags**: osint, search engine

### ACLED US Monitor
- **URL**: https://acleddata.com/special-projects/us-crisis-monitor
- **Use Case**: Read recent reports on US protest activity
- **Description**: Reports and analysis on protest and extremist activity across the United States from ACLED; the interactive map needs an upgraded account.
- **Tags**: geolocation, osint

### Active Agency Map
- **URL**: https://google.com/maps/d/viewer?mid=1eYVDPh5itXq5acDT9b0BVeQwmESBa4cB
- **Use Case**: See which local agencies have joined Ring Neighbors
- **Description**: User-made Google My Maps map of public safety agencies and local governments that joined Ring's Neighbors app, with each one's join date and profile link.
- **Tags**: maps, osint

### AllChans
- **URL**: https://allchans.org
- **Use Case**: Find an active anonymous imageboard
- **Description**: A long-running directory of anonymous imageboards, with additions, removals, and activity news.
- **Tags**: directory, forums

### Alpha Vantage
- **URL**: https://alphavantage.co/documentation
- **Use Case**: Pull a free backup price or indicator feed
- **Description**: Free API for stock time series, technical indicators, FX, crypto, and some fundamentals (rate-limited free key).
- **Tags**: api, data & research, free, market data, trading-bot

### Amazon Cloud Search Engine
- **URL**: https://cse.google.com/cse?cx=005797772976587943970:g-6ohngosio
- **Use Case**: Search Amazon cloud pages with Google
- **Description**: Google custom search engine whose title names Amazon cloud services; the page loaded without a search box, so its sites are unconfirmed.
- **Tags**: google cse, osint

### App Store Custom Search Engine
- **URL**: https://cse.google.com/cse/publicurl?cx=006205189065513216365:aqogom-kfne
- **Use Case**: Search app store listings with Google
- **Description**: Google custom search engine whose title names the App Store; the page loaded without a search box, so its sites are unconfirmed.
- **Tags**: google cse, osint

### Arabo
- **URL**: https://arabo.com
- **Use Case**: Browse Arabic-language websites by subject
- **Description**: Directory of Arabic-language websites, sorted into subject categories you can browse.
- **Tags**: osint, search engine

### ArcGIS Living Atlas
- **URL**: https://livingatlas.arcgis.com/en/browse
- **Use Case**: Find ready-made map layers and imagery for ArcGIS
- **Description**: Esri's online catalog of ready-made maps, imagery and data layers that you can browse on the web and add to ArcGIS maps.
- **Tags**: maps, osint

### ASCII Flow
- **URL**: https://asciiflow.com
- **Use Case**: Create ASCII diagrams
- **Description**: Web application for creating ASCII diagrams.
- **Tags**: reference, reference & calculators

### Auto Catalog Archive
- **URL**: https://autocatalogarchive.com
- **Use Case**: Look up a classic car's original factory specs
- **Description**: An archive of original car brochures and catalogs for researching classic vehicle specs.
- **Tags**: archive, classic-cars

### Awesome Open Source: OSINT projects
- **URL**: https://awesomeopensource.com/projects/osint
- **Use Case**: Browse open-source OSINT projects ranked by stars
- **Description**: Ranked list of open-source OSINT projects on GitHub, showing each one's star count, a short description and the date of its latest commit.
- **Tags**: osint, search engine

### Awesome Public Datasets
- **URL**: https://github.com/awesomedata/awesome-public-datasets
- **Use Case**: Browse vetted datasets by topic
- **Description**: Curated, categorized index of high-quality open datasets across dozens of domains.
- **Tags**: data & research, datasets, directory, open data, reference

### awesome-maps-ukraine
- **URL**: https://github.com/SergeyShchus/awesome-maps-ukraine
- **Use Case**: Find maps of Ukraine and Ukrainian map makers
- **Description**: Curated GitHub list of maps of Ukraine, Ukrainian mappers, mapping blogs and GIS software such as QGIS and OpenStreetMap Ukraine.
- **Tags**: maps, osint

### Baidu
- **URL**: https://baidu.com
- **Use Case**: Search Chinese-language web pages
- **Description**: Chinese-language web search engine that returns web pages, news, images and video for a typed query.
- **Tags**: osint, search engine

### Baidu Maps
- **URL**: https://map.baidu.com
- **Use Case**: Look up a place or plan a route in China
- **Description**: Web and mobile map service from Baidu with street maps, satellite imagery and street-level panoramas, plus walking, driving and transit routes.
- **Tags**: maps, osint

### Better Chrome Web Store Search Engine
- **URL**: https://cse.google.com/cse/publicurl?cx=006205189065513216365:pn3lumi80ne
- **Use Case**: Search Chrome Web Store extensions with Google
- **Description**: Google custom search engine whose title names the Chrome Web Store; the page loaded without a search box, so its sites are unconfirmed.
- **Tags**: google cse, osint

### BeVigil
- **URL**: https://bevigil.com
- **Use Case**: Check a mobile app's security risk and permissions
- **Description**: Security search engine for mobile apps, run by CloudSEK: search by package name or developer email to see an app's risk score and permissions.
- **Tags**: osint, search engine

### Bing
- **URL**: https://bing.com
- **Use Case**: Search the web with Microsoft's index
- **Description**: Microsoft's web search engine: type a query to get web, image, video, map and news results.
- **Tags**: osint, search engine

### Bing Maps
- **URL**: https://bing.com/maps
- **Use Case**: Get directions or aerial views of a place
- **Description**: Microsoft's web map with road and aerial views, driving directions and live traffic.
- **Tags**: maps, osint

### Blockscan
- **URL**: https://blockscan.com
- **Use Case**: Combine a crypto wallet's holdings across chains
- **Description**: Multichain blockchain explorer that groups up to 10 wallet addresses into one portfolio view across 30+ chains.
- **Tags**: osint, search engine

### Boardreader
- **URL**: https://boardreader.com
- **Use Case**: Search online forum posts by keyword
- **Description**: Search engine for online forum discussions: type a keyword to find posts across message boards.
- **Tags**: forums, osint, search engine, socmint

### Brave Search
- **URL**: https://search.brave.com
- **Use Case**: Search the web with a privacy-focused index
- **Description**: Privacy-focused search engine with its own independent web index, plus AI answers that cite their sources.
- **Tags**: osint, search engine

### BTDig
- **URL**: https://btdig.com
- **Use Case**: Find torrents on the BitTorrent DHT network by keyword
- **Description**: Search engine for torrents found on the BitTorrent DHT network: type keywords and get magnet links with each torrent's name, size and file list.
- **Tags**: osint, search engine

### Bundlephobia
- **URL**: https://bundlephobia.com
- **Use Case**: Decide if an npm dependency is worth the weight
- **Description**: Enter an npm package and see its minified + gzipped size, dependencies, and download-time cost.
- **Tags**: javascript, npm, performance, reference, reference & calculators

### CachedViews
- **URL**: https://cachedviews.com
- **Use Case**: Browse saved past versions of a web page
- **Description**: Archived-page viewer: paste a page's full web address and pick a year, date and snapshot from its Wayback Machine captures.
- **Tags**: osint, search engine

### Cagematch
- **URL**: https://cagematch.net
- **Use Case**: Look up a wrestler's match history or a title's championship history
- **Description**: A vast professional wrestling database of wrestlers, events, matches, and championships.
- **Tags**: database, wrestling

### Calculator Soup
- **URL**: https://calculatorsoup.com
- **Use Case**: Calculate mortgages, taxes, conversions
- **Description**: Comprehensive online calculator for mortgages, taxes, conversions, and more.
- **Tags**: calculator, reference, reference & calculators

### Calculator.net
- **URL**: https://calculator.net
- **Use Case**: Quick financial/health/math calculators without a dedicated app.
- **Description**: Large collection of free online calculators.
- **Tags**: calculator, free, reference, reference & calculators

### Can I Email
- **URL**: https://caniemail.com
- **Use Case**: Check if an email client supports a CSS feature
- **Description**: Support tables for HTML and CSS features across email clients — the 'Can I Use' of email templates.
- **Tags**: compatibility, css, email, html, reference, reference & calculators

### Carbon (code screenshots)
- **URL**: https://carbon.now.sh
- **Use Case**: Share code as an attractive image
- **Description**: Turn a code snippet into a polished image with theme, window chrome, and export presets.
- **Tags**: code images, reference & calculators, screenshots, sharing

### Carrot2
- **URL**: https://search.carrot2.org
- **Use Case**: Group search results into topic clusters
- **Description**: Search results clustering engine that groups the results of a query into clusters by topic.
- **Tags**: osint, search engine

### Cesium Stories
- **URL**: https://cesium.com/ion/stories/viewer?id=8be6f99c-0d4c-46ce-91a3-313e3cac62fe
- **Use Case**: View a published 3D globe story
- **Description**: Cesium ion viewer page for one published Cesium Stories presentation, a slideshow of scenes on a 3D globe.
- **Tags**: maps, osint

### Choose a License
- **URL**: https://choosealicense.com
- **Use Case**: Pick the right license for a repo
- **Description**: GitHub's plain-language guide to open-source licenses — what each permits, requires, and forbids.
- **Tags**: licensing, open source, reference, reference & calculators

### Chrome Extension Archive Search Engine
- **URL**: https://cse.google.com/cse/publicurl?cx=000501358716561852263:h-5uyshsclq
- **Use Case**: Search archived Chrome extensions by keyword
- **Description**: Google Custom Search engine for archived Chrome extensions: type keywords and get Google results from the sites it is set to search.
- **Tags**: google cse, osint

### Cloud Bucket Search Engine
- **URL**: https://cse.google.com/cse?cx=d80f8518b11b1438e
- **Use Case**: Search cloud storage buckets by keyword
- **Description**: Google Custom Search engine for cloud storage buckets: type keywords and get Google results from the sites it is set to search.
- **Tags**: google cse, osint

### CloudConvert
- **URL**: https://cloudconvert.com
- **Use Case**: Convert an odd file format without installing anything
- **Description**: Online converter across 200+ formats — documents, images, audio, video, ebooks, CAD — with an API.
- **Tags**: conversion, file conversion, file tools, reference & calculators

### Creepy
- **URL**: https://github.com/ilektrojohn/creepy
- **Use Case**: Map where a social media account posted from
- **Description**: Open-source desktop app that gathered geolocation data from social networks, showed it on a map and exported CSV or KML; last updated in 2014.
- **Tags**: geolocation, osint

### Criminal IP
- **URL**: https://criminalip.io
- **Use Case**: Check an IP address or domain for threat history
- **Description**: Threat intelligence search engine: enter an IP address, domain or threat indicator to see its ownership, abuse records, malware links and passive DNS history.
- **Tags**: osint, unified search

### cron-job.org
- **URL**: https://cron-job.org
- **Use Case**: Run a scheduled HTTP job without a server
- **Description**: Free hosted cron — hits a URL on a schedule you set, with logs and failure alerts.
- **Tags**: cron, free, reference & calculators, scheduling, webhooks

### Crossref Metadata Search
- **URL**: https://search.crossref.org
- **Use Case**: Look up the metadata for a journal article or book
- **Description**: Search of Crossref's scholarly metadata records for journal articles, books, standards, datasets and more.
- **Tags**: osint, search engine

### Data.gov
- **URL**: https://data.gov
- **Use Case**: Find an authoritative public dataset for a project
- **Description**: The U.S. government's open-data catalog — 250k+ datasets across agencies (census, education, health, climate, economy).
- **Tags**: data & research, datasets, government, open data, research

### Dog Bites Search Engine
- **URL**: https://cse.google.com/cse?cx=partner-pub-8216357153102971:3267723418
- **Use Case**: Search dog bite law pages by keyword
- **Description**: Google Custom Search engine on dog bites, branded with a dogbitelaw.com logo: type keywords and get Google results from the sites it is set to search.
- **Tags**: google cse, osint

### Dogpile
- **URL**: https://dogpile.com
- **Use Case**: Search the web and switch to images, news or maps
- **Description**: Web search engine with tabs for web, image, video, news and map results (maps from MapQuest) for a typed query.
- **Tags**: osint, search engine

### DuckDuckGo
- **URL**: https://duckduckgo.com
- **Use Case**: Search the web privately without tracking
- **Description**: Search engine anonymizing searches without keeping logs.
- **Tags**: osint, reference & calculators, search, search engine

### Earth Engine Data Catalog
- **URL**: https://developers.google.com/earth-engine/datasets
- **Use Case**: Find satellite and climate datasets for a region
- **Description**: Catalog of public satellite imagery, climate, weather and geophysical datasets in Google Earth Engine, covering more than 40 years and updated daily.
- **Tags**: geolocation, osint

### Earthquake Watch
- **URL**: https://arcgis.com/apps/dashboards/c8af9c5411814584b460cc87cb7c3780
- **Use Case**: See where the latest earthquakes struck worldwide
- **Description**: Esri ArcGIS dashboard of the latest earthquakes worldwide from USGS data, showing magnitude, time, location and tsunami warnings, updated automatically.
- **Tags**: maps, osint

### Effect Group
- **URL**: https://effectgroup.io
- **Use Case**: Look up a person's roles, companies and locations
- **Description**: Name-search service that returns profiles with roles, companies, locations and partly masked phone numbers from many data sources.
- **Tags**: osint, unified search

### Engineering ToolBox
- **URL**: https://engineeringtoolbox.com
- **Use Case**: Look up engineering formulas
- **Description**: Provides engineering tools, formulas, and equations.
- **Tags**: reference & calculators

### Etym Online
- **URL**: https://etymonline.com
- **Use Case**: Trace a word's origin
- **Description**: Online dictionary showing word origins and evolution.
- **Tags**: reference, reference & calculators

### FAO Map Catalog
- **URL**: https://data.apps.fao.org/map/catalog/srv/eng/catalog.search
- **Use Case**: Find FAO maps and spatial datasets on agriculture
- **Description**: GeoNetwork catalogue of spatial datasets and maps from the UN Food and Agriculture Organization (FAO), on food, agriculture and land themes.
- **Tags**: geolocation, osint

### Financial Modeling Prep
- **URL**: https://site.financialmodelingprep.com/developer/docs
- **Use Case**: Pull fundamentals for a screen or filter
- **Description**: API for company financial statements, ratios, valuations, and market data — free tier covers a lot of fundamentals.
- **Tags**: api, data & research, fundamentals, market data, trading-bot

### FIRMS
- **URL**: https://firms.modaps.eosdis.nasa.gov/map
- **Use Case**: Map recent satellite-detected fires on a world map
- **Description**: NASA's free web map of near-real-time satellite fire detections from MODIS and VIIRS, with fire data downloads in SHP, KML and TXT formats.
- **Tags**: maps, osint

### Flippity
- **URL**: https://flippity.net
- **Use Case**: Make a quiz, flashcard or bingo game for a class
- **Description**: Site of educational activity templates for making flashcards, quiz shows, bingo, word searches, crosswords and random name pickers.
- **Tags**: osint, search engine

### fnd
- **URL**: https://fnd.io
- **Use Case**: Search Apple's App Store and music catalog
- **Description**: Search engine for Apple's App Store, Apple Music and Apple TV catalogs that works from any web browser.
- **Tags**: osint, search engine

### FRED (Federal Reserve Economic Data)
- **URL**: https://fred.stlouisfed.org
- **Use Case**: Chart or download an economic indicator over time
- **Description**: 800k+ US and international economic time series (rates, inflation, employment) with charting and an API.
- **Tags**: api, charts, data, data & research, economics, finance

### FreeMediaHeckYeah (FMHY)
- **URL**: https://fmhy.net
- **Use Case**: Find a free source for streaming, reading, or downloading something
- **Description**: A massive, meticulously organized directory of free streaming, download, and reading links.
- **Tags**: directory, free-stuff

### geoclustering
- **URL**: https://pypi.org/project/geoclustering
- **Use Case**: Group a CSV of coordinates into location clusters
- **Description**: Command-line tool from Bellingcat that groups a CSV of lat/lon points into clusters by distance, writing JSON, GeoJSON, CSV, text and an optional kepler.gl map.
- **Tags**: geolocation, osint

### Geogebra
- **URL**: https://geogebra.org/classic?lang=en
- **Use Case**: Graph equations and visualize geometry
- **Description**: Mathematics tool for graphing and geometric visualization.
- **Tags**: reference & calculators

### GEOINT
- **URL**: https://start.me/p/W1kDAj/geoint
- **Use Case**: Browse a curated list of GEOINT links
- **Description**: Start.me bookmark page by Bruno Mortier that collects geospatial intelligence (GEOINT) links in one place.
- **Tags**: geolocation, osint

### GeoINT Search
- **URL**: https://cse.google.com/cse?cx=015328649639895072395:sbv3zyxzmji
- **Use Case**: Search GEOINT sources from one Google search box
- **Description**: Google Programmable Search Engine set up for geospatial intelligence (GEOINT) searches; its list of covered sites is not shown.
- **Tags**: geolocation, osint

### geoint-py
- **URL**: https://github.com/gisfromscratch/geoint-py
- **Use Case**: Map protest and conflict events in Python
- **Description**: Python code and Jupyter notebooks for geospatial intelligence work: binning data into a spatial grid and mapping protest and armed-conflict events from APIs.
- **Tags**: geolocation, osint

### GeoNames
- **URL**: https://geonames.org
- **Use Case**: Look up coordinates and country for a place name
- **Description**: Open gazetteer of about 13 million place names, with free downloads per country and web services for geocoding; web services need a free account.
- **Tags**: geolocation, osint

### GeoPlatform.gov
- **URL**: https://geoplatform.gov
- **Use Case**: Find official US federal geospatial datasets
- **Description**: U.S. federal geospatial portal run by the FGDC for finding and sharing official government geospatial data.
- **Tags**: geolocation, osint

### geoprotests API
- **URL**: https://rapidapi.com/gisfromscratch/api/geoprotests
- **Use Case**: Map where protests were reported in the news
- **Description**: RapidAPI web service that returns protest hotspots and hex-binned map features built from broadcast news, as GeoJSON or Esri output.
- **Tags**: geolocation, osint

### GeoSeer
- **URL**: https://geoseer.net
- **Use Case**: Find map and data layers from online GIS services
- **Description**: Search engine for geospatial map and data layers from live online services, searchable by place name, EPSG code or service type.
- **Tags**: geolocation, osint

### GitHub with Awesome-List Search Engine
- **URL**: https://cse.google.com/cse/publicurl?cx=017261104271573007538:fqn_jyftcdq
- **Use Case**: Search GitHub and awesome lists for a topic
- **Description**: Google Custom Search engine for GitHub and awesome lists: type a topic and get Google results from the sites it is set to search.
- **Tags**: google cse, osint

### gitignore.io
- **URL**: https://toptal.com/developers/gitignore
- **Use Case**: Create a proper .gitignore for a new project
- **Description**: Generate a .gitignore for any combination of languages, editors, and OSes.
- **Tags**: git, reference, reference & calculators

### Google & Bing
- **URL**: https://one-plus.github.io/GoogleBing
- **Use Case**: Look up search operators for Google and Bing
- **Description**: Reference page listing Google and Bing search operators, with links to Google Advanced Search, Google Trends and the Bing help page.
- **Tags**: osint, search engine

### Google Advanced Search
- **URL**: https://google.com/advanced_search
- **Use Case**: Narrow Google results by site, date or file type
- **Description**: Form that narrows Google results by exact phrase, excluded words, number range, language, region, last update, site, file type and usage rights.
- **Tags**: osint, search engine

### Google CSE Instances Search Engine
- **URL**: https://cse.google.com/cse?cx=009462381166450434430:vggeu3dhhgg
- **Use Case**: Find other Google custom search engines by topic
- **Description**: Google Custom Search engine for finding other Google Custom Search engines: type a topic and get Google results from the sites it is set to search.
- **Tags**: google cse, osint

### Google Custom Search
- **URL**: https://cse.google.com/cse?cx=017648920863780530960:lddgpbzqgoi
- **Use Case**: Run one Google search across a chosen site list
- **Description**: Google Programmable Search engine; the captured page does not say which sites it covers or how results are shown.
- **Tags**: osint, unified search

### Google Dataset Search
- **URL**: https://datasetsearch.research.google.com
- **Use Case**: Search across the whole web for a dataset
- **Description**: A search engine specifically for datasets published anywhere on the web, with license and format filters.
- **Tags**: data & research, datasets, research, search

### Google Domain Hacker
- **URL**: https://cse.google.com/cse/publicurl?cx=005797772976587943970:ca2hiy6hmri
- **Use Case**: Run a keyword search through the Domain Hacker engine
- **Description**: Google Custom Search engine named Domain Hacker: type keywords and get Google results, though its page does not say which sites it searches.
- **Tags**: google cse, osint

### Google Drive Folder Search Engine
- **URL**: https://cse.google.com/cse/publicurl?cx=013991603413798772546:nwzqlcysx_w
- **Use Case**: Search public Google Drive folders by keyword
- **Description**: Google Custom Search engine for Google Drive folders: type keywords and get Google results for shared Drive folders it is set to search.
- **Tags**: google cse, osint

### Google Map Search Engine
- **URL**: https://cse.google.com/cse?cx=013991603413798772546:mofb1uoaebi
- **Use Case**: Search map-related sites through one Google engine
- **Description**: Google Programmable Search engine listed for searching map sites; the page does not show which sites it covers.
- **Tags**: maps, osint

### Google Maps
- **URL**: https://google.com/maps
- **Use Case**: Find a place and get directions on a map
- **Description**: Google's map website and app for finding places and getting directions, with live traffic, transit times and Street View imagery.
- **Tags**: maps, osint

### Google.com Hack Attack
- **URL**: https://cse.google.com/cse/publicurl?cx=017648920863780530960:lddgpbzqgoi
- **Use Case**: Search only Google-owned sites with Google
- **Description**: Google custom search engine scoped to Google's own domains, as its title says, for searching Google-hosted pages.
- **Tags**: google cse, osint

### GoPit
- **URL**: https://gopit.com/socialsearch/index.php?type=Social
- **Use Case**: Search social media posts through GoPit
- **Description**: Social media search page on gopit.com; the server refused connections when checked, so what it searches is unconfirmed.
- **Tags**: osint, search engine

### gpx.studio
- **URL**: https://gpx.studio
- **Use Case**: Edit a GPS track file in the browser
- **Description**: Free, open-source browser editor for GPX files that creates and edits GPS tracks and routes on a map, with routing and elevation charts.
- **Tags**: maps, osint

### GrayhatWarfare Public Buckets
- **URL**: https://buckets.grayhatwarfare.com
- **Use Case**: Find exposed files in open cloud storage buckets
- **Description**: Search engine for files in open cloud storage buckets on AWS, Azure, Google Cloud, DigitalOcean and Alibaba, by filename, extension and size; some results need an account.
- **Tags**: osint, search engine

### GRID-Geneva Datacore
- **URL**: https://datacore-gn.unepgrid.ch/geonetwork/srv/eng/catalog.search
- **Use Case**: Search UNEP/GRID-Geneva geospatial datasets
- **Description**: GeoNetwork metadata catalogue on UNEP/GRID-Geneva's server, for searching geospatial datasets by keyword.
- **Tags**: geolocation, osint

### Homepage Search Engine
- **URL**: https://cse.google.com/cse?cx=005797772976587943970:3tu7im1-rdg
- **Use Case**: Find homepages by keyword
- **Description**: Google Custom Search engine for homepages: type keywords and get Google results from the sites it is set to search.
- **Tags**: google cse, osint

### HowStuffWorks
- **URL**: https://howstuffworks.com
- **Use Case**: Learn how things work with explanations
- **Description**: Explains how things work.
- **Tags**: reference, reference & calculators

### Hugging Face Datasets
- **URL**: https://huggingface.co/datasets
- **Use Case**: Load a dataset for training or evaluating a model
- **Description**: Thousands of ML-ready datasets (text, image, audio) with a streaming loader library and dataset cards.
- **Tags**: ai, data & research, datasets, machine learning, nlp

### InciWeb
- **URL**: https://inciweb.wildfire.gov
- **Use Case**: Track current wildfire incidents on a map
- **Description**: Official U.S. government map of wildfire, prescribed fire and burned-area incidents, with filters by incident type and a table view.
- **Tags**: maps, osint

### Information is Beautiful
- **URL**: https://informationisbeautiful.net
- **Use Case**: See complex information as diagrams
- **Description**: Presents information as visual diagrams.
- **Tags**: reference, reference & calculators

### InfoTracer
- **URL**: https://infotracer.com
- **Use Case**: Look up public records for a name or phone
- **Description**: People-search site that looks up names, phones, emails, plates and VINs in public records; full results need an account or paid report.
- **Tags**: osint, unified search

### IntelTechniques OSINT
- **URL**: https://inteltechniques.com/tools
- **Use Case**: Find a free OSINT search tool by category
- **Description**: Free index of open-source intelligence search tools by category, from search engines to email, username, phone and breach lookups.
- **Tags**: osint, unified search

### IntelTechniques Search Tool
- **URL**: https://inteltechniques.com/tools/Search.html
- **Use Case**: Run web searches from IntelTechniques' search form
- **Description**: Search-engines page in IntelTechniques' set of online search tools; its form did not render in a text fetch, so its inputs are unconfirmed.
- **Tags**: osint, search engine

### Internet Archive
- **URL**: https://archive.org
- **Use Case**: Find an old version of a page or a public-domain source
- **Description**: Wayback Machine plus millions of free books, audio, video, and software — primary-source and archival research.
- **Tags**: archives, data & research, reference, research, wayback

### IOA
- **URL**: https://io-archive.org
- **Use Case**: Search many sources from one page
- **Description**: Site whose content could not be read in this check, so its purpose is not confirmed.
- **Tags**: osint, unified search

### IPSE
- **URL**: https://ipse.io
- **Use Case**: Search content on the IPFS network
- **Description**: Search engine for content on the IPFS decentralized file network, per third-party listings; the site itself could not be read.
- **Tags**: osint, search engine

### ISRIC Soil Data Hub
- **URL**: https://data.isric.org/geonetwork/srv/eng/catalog.search
- **Use Case**: Download world soil data layers by keyword
- **Description**: Catalogue for searching and downloading soil data layers from around the world, including SoilGrids250m soil property maps.
- **Tags**: geolocation, osint

### Johns Hopkins COVID-19 Map
- **URL**: https://coronavirus.jhu.edu/map.html
- **Use Case**: Look up past COVID-19 case counts on a world map
- **Description**: World map dashboard of COVID-19 cases from Johns Hopkins CSSE; data collection stopped on March 10, 2023.
- **Tags**: maps, osint

### JSONPlaceholder
- **URL**: https://jsonplaceholder.typicode.com
- **Use Case**: Wire up UI against a fake API before the real one exists
- **Description**: Free fake REST API (posts, users, todos) that accepts GET/POST/etc. for front-end prototyping and demos.
- **Tags**: api, mock, prototyping, reference & calculators, rest

### Kaggle Datasets
- **URL**: https://kaggle.com/datasets
- **Use Case**: Grab a ready-to-analyze dataset with example code
- **Description**: Huge community collection of downloadable datasets with notebooks, previews, and usability ratings.
- **Tags**: community, data & research, data science, datasets, machine learning

### KartaView
- **URL**: https://kartaview.org/map
- **Use Case**: Browse street-level photos along roads
- **Description**: Free street-level photo map of road imagery uploaded from phone apps, shared under CC BY-SA and linked to OpenStreetMap editing.
- **Tags**: maps, osint

### keys.openpgp.org
- **URL**: https://keys.openpgp.org
- **Use Case**: Find someone's public PGP encryption key
- **Description**: Public keyserver for OpenPGP keys where you search for someone's public key or upload and manage your own.
- **Tags**: osint, search engine

### Library Genesis
- **URL**: https://libgen.rs
- **Use Case**: Search the Library Genesis catalog
- **Description**: Search interface on the libgen.rs domain for the Library Genesis catalog; the site itself could not be read.
- **Tags**: osint, search engine

### Lichess chess-openings
- **URL**: https://github.com/lichess-org/chess-openings
- **Use Case**: Name openings from a move sequence
- **Description**: The full ECO opening classification as plain TSV (name, ECO code, moves) — MIT, the source many apps use for opening naming.
- **Tags**: chegga, chess, data, data & research, openings

### Lichess Open Database
- **URL**: https://database.lichess.org
- **Use Case**: Get a massive labeled game corpus for analysis or ML
- **Description**: Free monthly dumps of every rated Lichess game (billions), a large share with Stockfish evals and clock data, plus puzzle and eval databases.
- **Tags**: chegga, chess, data & research, datasets, open data

### LinkScope
- **URL**: https://github.com/AccentuSoft/LinkScope_Client
- **Use Case**: Map connections between entities in an investigation
- **Description**: Investigation app that links entities to connected information through Python modules, building a knowledge graph with timeline and map views.
- **Tags**: osint, unified search

### Live Action Map
- **URL**: https://live-action-map.com
- **Use Case**: Look at a place on a map or satellite view
- **Description**: Map website at live-action-map.com that could not be read because of a certificate error, so what it maps is unconfirmed.
- **Tags**: maps, osint

### Live Corona Map
- **URL**: https://livecorona.co.kr
- **Use Case**: Look up 2020 COVID-19 case trends for South Korea
- **Description**: Korean COVID-19 dashboard of 2020 case charts for South Korea, Jeju and the world, plus testing-clinic lists; updates stopped Oct 14.
- **Tags**: maps, osint

### Live map of London Underground trains
- **URL**: https://traintimes.org.uk/map/tube
- **Use Case**: See where London Underground trains are right now
- **Description**: Map showing every London Underground train as a yellow dot in approximately real time, built from live TfL departure data.
- **Tags**: maps, osint

### Liveuamap
- **URL**: https://liveuamap.com
- **Use Case**: Follow geotagged conflict news on a live map
- **Description**: Live news map that plots geotagged conflict and security reports for a chosen region, free to browse with optional paid ad-free plans.
- **Tags**: maps, osint

### Liveuamap Syria
- **URL**: https://syria.liveuamap.com
- **Use Case**: Follow geolocated news reports from the Syrian conflict
- **Description**: Map and dated news feed of geolocated incident reports on the Syrian conflict, with photos and videos; reading needs no account.
- **Tags**: maps, osint

### Lorem Picsum
- **URL**: https://picsum.photos
- **Use Case**: Drop real-looking placeholder photos into a mockup
- **Description**: Placeholder images by URL at any dimensions, drawn from a stock photo pool; supports grayscale and blur.
- **Tags**: images, placeholders, prototyping, reference & calculators

### MAC Address Lookup
- **URL**: https://maclookup.app
- **Use Case**: Find which vendor made a network device from its MAC
- **Description**: Free lookup that returns the device vendor for a MAC address or OUI prefix from IEEE data, with a public API and JSON, CSV or Cisco XML downloads.
- **Tags**: osint, search engine

### Mapillary
- **URL**: https://mapillary.com/app
- **Use Case**: Browse street-level photos of a place
- **Description**: Map of crowdsourced street-level photos you can browse by location, with faces and license plates that its software detects blurred.
- **Tags**: maps, osint

### MapQuest
- **URL**: https://mapquest.com
- **Use Case**: Get driving directions between two addresses
- **Description**: Map and directions site for routes between addresses, with developer APIs for directions, geocoding, place search and traffic.
- **Tags**: maps, osint

### Mathway
- **URL**: https://mathway.com
- **Use Case**: Cross-check tutoring answers or generate worked solutions.
- **Description**: Step-by-step math problem solver.
- **Tags**: education, math, reference, reference & calculators

### Maxar Discover
- **URL**: https://xpress.maxar.com
- **Use Case**: Search satellite imagery archives by location
- **Description**: Web catalog for searching and browsing Maxar's satellite imagery archive by location, the successor to DigitalGlobe's Discover.
- **Tags**: maps, osint

### Metacrawler
- **URL**: https://metacrawler.com
- **Use Case**: Search the web through Metacrawler
- **Description**: Web search site under the Metacrawler name, run by Infospace Holdings (a System1 company); the page shows a Web search tab.
- **Tags**: osint, search engine

### MetaDefender Cloud
- **URL**: https://metadefender.com
- **Use Case**: Scan a suspicious file for malware online
- **Description**: Online service for scanning uploaded files for malware and analyzing them, shown on the page as a free file scan.
- **Tags**: osint, unified search

### MetaGer
- **URL**: https://metager3.de
- **Use Case**: Search the web through a privacy-focused metasearch
- **Description**: Metasearch engine from the non-profit SUMA-EV that combines results from several search engines and uses a generated key instead of an account.
- **Tags**: osint, search engine

### Military Bases Around the World
- **URL**: https://umap.openstreetmap.fr/en/map/military-bases-around-the-world_510207
- **Use Case**: View where military bases sit around the world
- **Description**: User-made interactive map of military bases around the world, built with uMap, the OpenStreetMap-based map editor.
- **Tags**: maps, osint

### Milled
- **URL**: https://milled.com/search
- **Use Case**: Search brands' promotional emails and newsletters
- **Description**: Search engine for promotional emails and newsletters sent by brands, with a searchable archive of sales emails.
- **Tags**: osint, search engine

### Million Short
- **URL**: https://millionshort.com
- **Use Case**: Search the web while skipping the biggest sites
- **Description**: Web search engine that drops the most popular sites from results; you choose how many top sites to exclude so smaller sites surface.
- **Tags**: discord, osint, search engine, socmint

### Mindmap Search Engine
- **URL**: https://cse.google.com/cse?cx=013991603413798772546:gj6rx9spox8
- **Use Case**: Find mind maps on a topic
- **Description**: Google Custom Search engine for mind maps: type a topic and get Google results from the mind-map sites it is set to search.
- **Tags**: google cse, osint

### MIT PGP Public Key Server
- **URL**: https://pgp.mit.edu
- **Use Case**: Look up or publish a PGP public key
- **Description**: Public PGP key server where you search keys by a text string, paste in an ASCII-armored public key to submit it, or request a removal.
- **Tags**: osint, search engine

### Mockaroo
- **URL**: https://mockaroo.com
- **Use Case**: Get realistic test data for a table or API
- **Description**: Generate realistic fake datasets (names, addresses, custom schemas) as CSV/JSON/SQL, up to 1000 rows free.
- **Tags**: database, mock, reference & calculators, test data

### MODIS Thermal Hotspots and Fire Activity
- **URL**: https://arcgis.com/apps/dashboards/bf5df3a49a624521844a2e5e1ec7df05
- **Use Case**: See where satellites detected fires in the last 48 hours
- **Description**: ArcGIS dashboard of MODIS satellite thermal hotspots from NASA FIRMS for the last 48 hours, filterable by country and detection confidence.
- **Tags**: maps, osint

### Mojeek
- **URL**: https://mojeek.com
- **Use Case**: Search the web on an independent, non-Google index
- **Description**: Web search engine with its own crawler and index: enter a query and get web, image and news results.
- **Tags**: osint, search engine

### ngrok
- **URL**: https://ngrok.com
- **Use Case**: Let an external service reach your localhost
- **Description**: Instantly expose a local port to a public HTTPS URL — for webhook testing, demos, and mobile testing.
- **Tags**: reference & calculators, testing, tunneling, webhooks

### OCEARCH Shark Tracker
- **URL**: https://ocearch.org/tracker
- **Use Case**: Track a tagged shark's real-time location
- **Description**: Real-time tracking data for sharks and other tagged marine animals.
- **Tags**: tracking, wildlife

### OctoSearch
- **URL**: https://octosearch.dootech.com
- **Use Case**: Search repos starred by people you follow on GitHub
- **Description**: Search tool that looks through the GitHub repositories starred by the people you follow.
- **Tags**: osint, search engine

### Omni Calculator
- **URL**: https://omnicalculator.com/biology
- **Use Case**: Calculate anything instantly
- **Description**: Universal online calculator for any computation.
- **Tags**: calculator, reference, reference & calculators

### OneLook
- **URL**: https://onelook.com
- **Use Case**: Find a word by its meaning
- **Description**: Reverse dictionary finding words based on descriptions.
- **Tags**: reference, reference & calculators

### Online Conversion
- **URL**: https://onlineconversion.com
- **Use Case**: Convert between any units
- **Description**: Converts measurements between virtually any units.
- **Tags**: reference & calculators

### OpenStreetMap
- **URL**: https://openstreetmap.org
- **Use Case**: Browse a free community-edited world map
- **Description**: Free, community-edited world map with place search, route planning between two points, and editing tools for registered contributors.
- **Tags**: maps, osint

### OSINT Search Engine
- **URL**: https://cse.google.com/cse/publicurl?cx=006290531980334157382:qcaf4enph7i
- **Use Case**: Search many sources from one page
- **Description**: Google Programmable Search engine; the captured page does not say which sites it covers or what results look like.
- **Tags**: osint, unified search

### OSINT Toolkit V2.1
- **URL**: https://one-plus.github.io/Bookmarks
- **Use Case**: Run quick page and site searches from bookmarks
- **Description**: Set of browser bookmarklets that list a page's links and images, search Facebook, Twitter and web archives, and show a Facebook profile's ID.
- **Tags**: osint, search engine

### OSRFramework
- **URL**: https://pypi.org/project/osrframework
- **Use Case**: Run username and profile searches across social networks
- **Description**: Collection of open-source OSINT tools for online research into usernames and social media profiles, installed from PyPI.
- **Tags**: osint, unified search

### Our World in Data
- **URL**: https://ourworldindata.org
- **Use Case**: Get a clear, sourced chart on a global trend
- **Description**: Research and interactive charts on global development — health, education, energy, poverty — with all data downloadable and cited.
- **Tags**: charts, data, data & research, reference, research

### Panorama generator
- **URL**: https://udeuschle.de/panoramas/makepanoramas_en.htm
- **Use Case**: Draw a terrain panorama from a chosen viewpoint
- **Description**: Web tool that draws a panorama image from a viewpoint and direction you set by clicking a map, picking a summit or typing coordinates.
- **Tags**: maps, osint

### Placehold.co
- **URL**: https://placehold.co
- **Use Case**: Add a labeled box placeholder while building layout
- **Description**: Simple colored placeholder image service (SVG/PNG/WebP) with custom size, colors, and text.
- **Tags**: images, placeholders, prototyping, reference & calculators

### PlaneCrashInfo.com
- **URL**: https://planecrashinfo.com
- **Use Case**: Look up the record and statistics for an aviation accident
- **Description**: A long-running aviation accident reference with crash records, statistics, and reports.
- **Tags**: aviation, database

### Polygon.io
- **URL**: https://massive.com
- **Use Case**: Get higher-quality historical market data
- **Description**: Market data API — aggregates, trades, quotes, reference data, corporate actions; limited free tier, paid for real-time.
- **Tags**: api, data & research, market data, trading-bot

### Power Plants in the United States
- **URL**: https://arcgis.com/apps/dashboards/201fc98c0d74482d8b3acb0c4cc47f16
- **Use Case**: Map US power plants by location
- **Description**: ArcGIS dashboard of US power plant locations that is no longer shared publicly, so viewing it needs an ArcGIS account with access.
- **Tags**: maps, osint

### Presearch
- **URL**: https://presearch.com
- **Use Case**: Search the web through a decentralized engine
- **Description**: Decentralized metasearch engine: type a query and get web results gathered from several sources.
- **Tags**: osint, search engine

### Programmable Search Engine
- **URL**: https://cse.google.com/cse/publicurl?cx=013991603413798772546:sipriovnbxq
- **Use Case**: Search a curated set of sites through Google
- **Description**: Google Programmable Search engine limited to a set of sites its owner chose; the public page shows neither the sites nor a query box.
- **Tags**: osint, search engine

### Public APIs (directory)
- **URL**: https://github.com/public-apis/public-apis
- **Use Case**: Find a free API for a feature or side project
- **Description**: Community-maintained list of hundreds of free public APIs by category, noting auth and HTTPS support.
- **Tags**: api, data & research, directory, free, reference

### Public Buckets (osint.sh)
- **URL**: https://osint.sh/buckets
- **Use Case**: Find public AWS S3 and Azure buckets by keyword
- **Description**: Keyword search for public AWS S3 and Azure Blob storage buckets: type a keyword and click Check Now to find matching buckets.
- **Tags**: osint, search engine

### Quora
- **URL**: https://quora.com
- **Use Case**: Find answers to niche or specific questions
- **Description**: Question and answer website for sharing knowledge.
- **Tags**: reference & calculators, search

### Qwant
- **URL**: https://qwant.com
- **Use Case**: Search the web and get direct answers to questions
- **Description**: Web search engine that returns ranked web results plus Flash Answers, short direct answers to a typed question drawn from across the web.
- **Tags**: osint, search engine

### Radio Garden
- **URL**: https://radio.garden/search
- **Use Case**: Listen to live radio from places around the world
- **Description**: Interactive globe you rotate to pick a spot and hear live radio stations broadcasting from that place.
- **Tags**: maps, osint

### Random User Generator
- **URL**: https://randomuser.me
- **Use Case**: Populate a user list with plausible fake people
- **Description**: API that returns realistic fake user records with photos — handy for populating lists and avatars.
- **Tags**: api, avatars, mock, reference & calculators, test data

### Rapid7 Vulnerability & Exploit Database
- **URL**: https://rapid7.com/db
- **Use Case**: Check a CVE's severity and whether exploits exist
- **Description**: Searchable CVE database showing CVSS and EPSS scores, exploited-in-the-wild status and linked Metasploit modules.
- **Tags**: osint, search engine

### readme.so
- **URL**: https://readme.so
- **Use Case**: Draft a README without staring at a blank file
- **Description**: Drag-and-drop editor for assembling a project README from common sections.
- **Tags**: documentation, markdown, reference & calculators

### RecruitEm
- **URL**: https://recruitin.net/stackoverflow.php
- **Use Case**: Find Stack Overflow developer profiles by skill and place
- **Description**: Free form that builds a Google search for Stack Overflow profiles by skill or keyword and city or country, with an option to skip profiles with no answers.
- **Tags**: osint, search engine

### remove.bg
- **URL**: https://remove.bg
- **Use Case**: Cut out a subject without manual masking
- **Description**: One-click automatic background removal for photos and product shots.
- **Tags**: ai, background removal, design, image editing, images, reference & calculators

### Residential Fire Fatalities in Indiana
- **URL**: https://arcgis.com/apps/dashboards/4d1289ab105145a1b1f80c1ad3cf19fb
- **Use Case**: See residential fire deaths by Indiana county
- **Description**: ArcGIS dashboard mapping residential fire deaths by Indiana county since 2019, from Indiana Department of Homeland Security data.
- **Tags**: geolocation, osint

### RhymeZone
- **URL**: https://rhymezone.com
- **Use Case**: Find rhymes for picture-book text.
- **Description**: Rhyming dictionary and word-finder.
- **Tags**: reference, reference & calculators, writing

### Robots.txt Search Engine
- **URL**: https://cse.google.com/cse?cx=013991603413798772546:zu7epjqvunu
- **Use Case**: Find robots.txt files by keyword
- **Description**: Google Custom Search engine for robots.txt files: type keywords and get Google results for the robots.txt files it is set to search.
- **Tags**: google cse, osint

### Satellites.pro
- **URL**: https://satellites.pro
- **Use Case**: Compare satellite imagery of a place across map sources
- **Description**: Free browser-based satellite map that lets you switch between several imagery and map sources to view a chosen place.
- **Tags**: maps, osint

### Search by FileType
- **URL**: https://cse.google.com/cse/publicurl?cx=013991603413798772546:mu-oio3a980
- **Use Case**: Find documents of one file type by keyword
- **Description**: Google Custom Search engine for searching by file type: type keywords and get Google results for documents of the file types it is set to find.
- **Tags**: google cse, osint

### Search Engine Finder
- **URL**: https://cse.google.com/cse?cx=016621447308871563343:nyvaorurd5l
- **Use Case**: Find a search engine for a topic
- **Description**: Google Custom Search engine for finding other search engines: type a topic and get Google results from the sites it is set to search.
- **Tags**: google cse, osint

### Search Engines Index
- **URL**: https://searchenginesindex.com
- **Use Case**: Look up which search engines run their own index
- **Description**: Website that lists search engines and the indexes they run; its page refused the connection, so the details here are unconfirmed.
- **Tags**: osint, search engine

### SearchCraigslist
- **URL**: https://searchcraigslist.org
- **Use Case**: Find Craigslist listings nationwide by keyword
- **Description**: Third-party search engine for Craigslist: enter keywords and get matching posts from across the country with direct links; not affiliated with Craigslist.
- **Tags**: osint, search engine

### SearchTempest
- **URL**: https://searchtempest.com
- **Use Case**: Search classified listings across several marketplaces
- **Description**: Search tool for classified listings across Facebook Marketplace, craigslist and other sites, unaffiliated with those services.
- **Tags**: osint, search engine

### SEC EDGAR
- **URL**: https://sec.gov/edgar/search-and-access
- **Use Case**: Get authoritative filing data straight from the source
- **Description**: The primary source for US public-company filings — 10-K/10-Q/8-K, full-text search, and a JSON submissions/company-facts API.
- **Tags**: data, data & research, filings, fundamentals, sec, trading-bot

### SEQE
- **URL**: https://seqe.me
- **Use Case**: Run one query across several search engines
- **Description**: Tool named SEQE, for Search Engines Query Engine, that runs searches across search engines; its page was rate-limited, so details are unconfirmed.
- **Tags**: osint, search engine

### ShadowCrypt IP Geolocation
- **URL**: https://shadowcrypt.net/geoip
- **Use Case**: Find where an IP address is and who runs it
- **Description**: Web lookup that takes an IP address or hostname and returns its country, city, ISP, organization and network details.
- **Tags**: geolocation, osint

### Shields.io
- **URL**: https://shields.io
- **Use Case**: Add badges to a project README
- **Description**: Generate the status badges (build, version, coverage, license) you see at the top of GitHub READMEs.
- **Tags**: badges, documentation, git, reference & calculators

### Short URL Search Engine
- **URL**: https://cse.google.com/cse?cx=017261104271573007538:magh-vr6t6g
- **Use Case**: Search a chosen set of short-link sites
- **Description**: Google Custom Search engine limited to a chosen set of short-link sites; the page does not list which sites it covers.
- **Tags**: google cse, osint

### Shorteners by Grayhatwarfare
- **URL**: https://shorteners.grayhatwarfare.com
- **Use Case**: Find shortened links by keyword or file type
- **Description**: Search engine for links made with URL shorteners, by keyword, file type or category; the full index requires an account.
- **Tags**: osint, search engine

### Slack/Discord/Zoom Invites Search
- **URL**: https://cse.google.com/cse?cx=8e26eca532ec2cba3
- **Use Case**: Search a chosen set of sites for chat invites
- **Description**: Google Custom Search engine limited to a chosen set of sites for Slack, Discord and Zoom invite links; the page does not list them.
- **Tags**: google cse, osint

### Smappen
- **URL**: https://smappen.com/app
- **Use Case**: Draw travel-time or radius areas on a map
- **Description**: Map tool that draws travel-time or radius areas around a location and shows population data for each; the free plan allows 10 areas.
- **Tags**: maps, osint

### Sploitus
- **URL**: https://sploitus.com
- **Use Case**: Find public exploit code for a CVE or product
- **Description**: Search engine for exploits and hacktools, returning proof-of-concept code, CVEs and the products they affect.
- **Tags**: osint, search engine

### SpyTox
- **URL**: https://spytox.com
- **Use Case**: Search many sources from one page
- **Description**: Website named SpyTox; its page could not be reached, so the lookups it offers are unconfirmed.
- **Tags**: osint, unified search

### Squoosh
- **URL**: https://squoosh.app
- **Use Case**: Shrink an image to the smallest acceptable size
- **Description**: Google's in-browser image compressor with side-by-side quality comparison and modern formats (AVIF/WebP).
- **Tags**: compression, design, essential, free, image optimization, images, optimization, reference & calculators

### Startpage
- **URL**: https://startpage.com
- **Use Case**: Search the web with a privacy-focused engine
- **Description**: Web search engine marketed on privacy; its page could not be read, so this description is unverified.
- **Tags**: osint, search engine

### SVGOMG
- **URL**: https://jakearchibald.github.io/svgomg
- **Use Case**: Optimize an SVG exported from a design tool
- **Description**: GUI for SVGO — clean up and shrink exported SVGs with toggleable optimizations and a live preview.
- **Tags**: optimization, reference & calculators, svg

### Swisscows
- **URL**: https://swisscows.com
- **Use Case**: Search the web with family-friendly, non-tracking results
- **Description**: Web search engine that says it does not track users and filters results to be family-friendly; ad-supported, with a paid Pro tier.
- **Tags**: osint, search engine

### Symbolab
- **URL**: https://symbolab.com
- **Use Case**: Alternative solver for verifying tutoring content.
- **Description**: Math solver with step-by-step explanations.
- **Tags**: education, math, reference, reference & calculators

### SynapsInt
- **URL**: https://synapsint.com
- **Use Case**: Look up a domain, IP or email for OSINT data
- **Description**: OSINT engine website where you look up a domain, IP, ASN, SSL certificate, email, phone number, Twitter account, Bitcoin address or CVE.
- **Tags**: osint, unified search

### TfL JamCams
- **URL**: https://tfljamcams.net
- **Use Case**: Watch live traffic camera images across London
- **Description**: Viewer for London traffic camera (JamCam) images showing still pictures of road junctions across the city.
- **Tags**: maps, osint

### The Observatory of Economic Complexity
- **URL**: https://oec.world
- **Use Case**: See what a country imports and exports and to whom
- **Description**: Visualizes international trade data for countries and products.
- **Tags**: data-visualization, trade

### The Open Graph Protocol
- **URL**: https://ogp.me
- **Use Case**: Get link-preview meta tags right
- **Description**: The spec for the og: meta tags that control link previews — reference when setting up sharing for any of the sites.
- **Tags**: meta tags, reference, reference & calculators, seo, web

### The True Size Of...
- **URL**: https://thetruesize.com
- **Use Case**: Compare two countries' true size, correcting map distortion
- **Description**: An interactive map for dragging countries around to compare their true relative size.
- **Tags**: geography, maps

### Tiingo
- **URL**: https://tiingo.com
- **Use Case**: Cheap clean EOD data for backtests
- **Description**: Affordable end-of-day and intraday stock data plus news and fundamentals, with a free tier.
- **Tags**: api, data & research, market data, trading-bot

### TinyPNG
- **URL**: https://tinypng.com
- **Use Case**: Quickly compress a batch of PNGs
- **Description**: Smart lossy PNG/JPEG/WebP compression via drag-and-drop; keeps transparency, big size savings.
- **Tags**: compression, design, free, image optimization, images, optimization, reference & calculators

### Toronto Live
- **URL**: https://apps.esri.ca/torontolive
- **Use Case**: See Toronto collision locations on a map
- **Description**: Esri Canada map viewer of Toronto collision data, with a toggle for the collision layer.
- **Tags**: geolocation, osint

### trace.moe
- **URL**: https://trace.moe
- **Use Case**: Find which anime a screenshot is from
- **Description**: A reverse image search specifically for identifying the anime a screenshot came from.
- **Tags**: anime, reverse-image-search

### UK Onshore Oil and Gas Activity
- **URL**: https://arcgis.com/apps/webappviewer/index.html?id=29c31fa4b00248418e545d222e57ddaa
- **Use Case**: Look up onshore oil and gas sites on a UK map
- **Description**: Interactive ArcGIS web map of onshore oil and gas exploration and production activity in the UK.
- **Tags**: maps, osint

### Ukraine Live Cams
- **URL**: https://nagix.github.io/ukraine-livecams
- **Use Case**: See live camera feeds and fire detections on a map
- **Description**: Interactive map of Ukraine webcams that opens each camera's live feed, with the latest Russian occupation area from Liveuamap and NASA FIRMS fire data.
- **Tags**: maps, osint

### Ukraine War Map/Heatmap
- **URL**: https://ruarq.github.io/ukraine-war-heatmap
- **Use Case**: See where war-related posts cluster on a Ukraine heatmap
- **Description**: Heatmap of Ukraine war locations built from posts in subreddits such as r/CombatFootage and r/ukraine; the author has stopped its automatic updates.
- **Tags**: maps, osint

### ULB Argument Search Engine
- **URL**: https://argumentsearch.com
- **Use Case**: Find arguments made about a topic
- **Description**: Search engine for finding arguments made about a topic you type in.
- **Tags**: osint, search engine

### US Census Bureau Data
- **URL**: https://data.census.gov
- **Use Case**: Look up demographics for a specific area or market
- **Description**: Detailed US demographic, housing, and economic data down to neighborhood level; API and table builder.
- **Tags**: data & research, datasets, demographics, government, research

### US Labor Strike Map
- **URL**: https://google.com/maps/d/viewer?mid=1hE1nDR-Ff_sVgOS67IteJSxGZlvqIP3k
- **Use Case**: View a user-made map of strike locations
- **Description**: User-made Google My Maps map titled "Strike Map" that marks labor strike locations; its markers could not be read to confirm coverage.
- **Tags**: maps, osint

### US Wildfire Activity Web Map
- **URL**: https://arcgis.com/home/webmap/viewer.html?webmap=df8bcc10430f48878b01c96e907a1fc3
- **Use Case**: See where US wildfires and hot spots are now
- **Description**: Esri web map of current US wildfire locations and perimeters, satellite hot spots, red flag warnings and wildfire potential, from live feeds.
- **Tags**: maps, osint

### UserSearch
- **URL**: https://usersearch.org
- **Use Case**: Find where a username is used
- **Description**: Website for searching a username across sites; its page returned HTTP 403, so its details are unconfirmed.
- **Tags**: osint, unified search

### Vulmon
- **URL**: https://vulmon.com
- **Use Case**: Look up CVEs for a product or vendor
- **Description**: Vulnerability search engine: enter a product, vendor or CVE ID to get related CVEs and research posts, with optional alerts.
- **Tags**: osint, search engine

### Walmart Store Status Dashboard
- **URL**: https://arcgis.com/apps/dashboards/4e573c79e1224081805165d25b4f33c7
- **Use Case**: Check whether a Walmart store is open or closed
- **Description**: ArcGIS dashboard from the Walmart Emergency Operations Center that maps the operating status of each Walmart store and club.
- **Tags**: maps, osint

### Wayback Machine
- **URL**: https://web.archive.org
- **Use Case**: View historical snapshots of websites
- **Description**: Accesses historical snapshots of web pages.
- **Tags**: archives, osint, reference & calculators

### Waze
- **URL**: https://waze.com/live-map
- **Use Case**: Plan a driving route with live traffic
- **Description**: Driving navigation app and live map that gives routes with live traffic and road-condition updates.
- **Tags**: maps, osint

### Webhook.site
- **URL**: https://webhook.site
- **Use Case**: Inspect exactly what a webhook is sending you
- **Description**: Get a throwaway URL that captures and displays every incoming request in real time.
- **Tags**: api, debugging, reference & calculators, webhooks

### Wiby
- **URL**: https://wiby.org
- **Use Case**: Search the indie, old-school corner of the web instead of modern SEO pages
- **Description**: A search engine focused on surfacing old-school, lightweight, non-commercial web pages.
- **Tags**: indie-web, search-engine

### Wikimapia
- **URL**: https://wikimapia.org
- **Use Case**: Find user-written descriptions of places on a map
- **Description**: Collaborative map where users add descriptions to places around the world, browsable by country and by tag.
- **Tags**: maps, osint

### Wikipedia
- **URL**: https://wikipedia.org
- **Use Case**: Look up information on any topic
- **Description**: Most popular collection of knowledge online.
- **Tags**: reference & calculators

### Wikispaces Search Engine
- **URL**: https://cse.google.com/cse/publicurl?cx=005797772976587943970:afbre9pr2ly
- **Use Case**: Search a chosen set of Wikispaces wikis
- **Description**: Google Custom Search engine limited to a chosen set of Wikispaces wiki pages; the page does not list the sites it covers.
- **Tags**: google cse, osint

### Wikiwand
- **URL**: https://wikiwand.com
- **Use Case**: Read a Wikipedia article in a nicer layout
- **Description**: A cleaner, more readable reader skin for Wikipedia articles.
- **Tags**: reader, wikipedia

### Windy
- **URL**: https://windy.com/-Webcams/webcams
- **Use Case**: Browse webcams and weather forecasts on a map
- **Description**: Wind and weather forecast map; this link opens its webcams section.
- **Tags**: maps, osint

### Wolfram Alpha
- **URL**: https://wolframalpha.com
- **Use Case**: Get a computed answer or reference figure fast
- **Description**: Computational knowledge engine — answers quantitative questions and does math, unit conversion, and data lookups from curated sources.
- **Tags**: computation, data, data & research, education, math, reference

### WordHippo
- **URL**: https://wordhippo.com
- **Use Case**: Find rhymes/synonyms while writing children's-book verse.
- **Description**: Synonym, rhyme, and word-form lookup tool.
- **Tags**: reference, reference & calculators, writing

### WordPress.com
- **URL**: https://wordpress.com/reader/search
- **Use Case**: Find posts on WordPress.com blogs by keyword
- **Description**: Search box in the WordPress.com Reader that finds posts across WordPress.com blogs by keyword.
- **Tags**: osint, search engine

### World Bank Open Data
- **URL**: https://data.worldbank.org
- **Use Case**: Pull country-level economic or social indicators
- **Description**: Free access to global development indicators by country and year, with an API and bulk download.
- **Tags**: api, data & research, datasets, economics, research

### World Monitor
- **URL**: https://worldmonitor.app
- **Use Case**: Check a live dashboard of global events and markets
- **Description**: A live dashboard aggregating global news, markets, and conflict trackers in one view.
- **Tags**: dashboard, news

### Yahoo Search
- **URL**: https://search.yahoo.com
- **Use Case**: Search the web and get answers with sources
- **Description**: Web search engine from Yahoo, with Yahoo Scout, an AI box that answers a typed question with cited sources.
- **Tags**: osint, search engine

### Yandex
- **URL**: https://yandex.com
- **Use Case**: Search the web and images on Yandex
- **Description**: Web search engine from Yandex: type a query and get search results, with image, video, map and translate services linked.
- **Tags**: osint, search engine

### Yandex.Maps
- **URL**: https://yandex.com/maps
- **Use Case**: Search for places and plot a route on a map
- **Description**: Map and place-search service from Yandex with category search for places such as restaurants, pharmacies and ATMs, plus route planning.
- **Tags**: maps, osint

### Yassen
- **URL**: https://yassen.com
- **Use Case**: Run a web search on Yassen
- **Description**: Web search site named Yassen; its page shows a bot check, so what it searches could not be confirmed.
- **Tags**: osint, search engine

### yfinance
- **URL**: https://github.com/ranaroussi/yfinance
- **Use Case**: Grab quick-and-dirty price data while prototyping
- **Description**: Unofficial Yahoo Finance API for Python — quick prices, fundamentals, and options; fine for exploration, not production feeds.
- **Tags**: data & research, free, market data, python, trading-bot

### ZorexEye
- **URL**: https://zorexeye.com
- **Use Case**: Search the web for files, apps and software
- **Description**: Search engine for web pages, images, videos, apps, software, books and scripts, with free tools and Pro tools sold as a one-time paid plan.
- **Tags**: osint, search engine

## Security & Privacy
*347 tools.*

### 192.com
- **URL**: https://192.com
- **Use Case**: Find UK electoral roll and people-finder records
- **Description**: UK people-finder with electoral roll records from 2002 onward; searching electoral roll data needs an account and paid credits.
- **Tags**: osint, people search

### 1Password
- **URL**: https://1password.com
- **Use Case**: Store API keys/credentials securely, separate from tracked files.
- **Description**: Password manager and secure vault for credentials.
- **Tags**: passwords, security

### 411
- **URL**: https://411.com
- **Use Case**: Find a person's listing by name or phone number
- **Description**: White pages directory that finds people by name with an optional location, or by phone number through a reverse phone lookup.
- **Tags**: osint, people search

### 4K Stogram
- **URL**: https://4kdownload.com/de/products/product-stogram
- **Use Case**: Download an Instagram account's posts and Stories
- **Description**: Desktop app for Windows, macOS and Ubuntu that downloads Instagram photos, Reels, Stories and highlights by username, hashtag or location; no longer updated.
- **Tags**: instagram, osint, socmint

### ABA Routing Number Validator
- **URL**: https://fakenamegenerator.com/aba-validator.php
- **Use Case**: Check whether a US routing number is valid
- **Description**: Checks a nine-digit US bank routing number's prefix and check digit in the browser; it does not confirm the number belongs to a real bank.
- **Tags**: fake identity, osint

### AddMeS
- **URL**: https://addmes.io
- **Use Case**: List a Snapchat username in a friend-finding directory
- **Description**: Free Snapchat 'Add Me' directory: enter your username, age range and gender to be listed so other users can add you.
- **Tags**: osint, snapchat, socmint

### addy.io
- **URL**: https://addy.io
- **Use Case**: Give each website its own forwarding email address
- **Description**: Email forwarding service that gives each website its own alias address and forwards its mail to your real inbox; free plan needs signup.
- **Tags**: osint, throwaway contact

### AllMyTweets
- **URL**: https://allmytweets.net
- **Use Case**: Pull an X account's posts into one exportable list
- **Description**: Service that gathers up to 3,200 recent posts from an X account onto one page, with keyword and date filters and .txt or .csv export.
- **Tags**: osint, socmint, x-twitter

### Amazon SNS
- **URL**: https://aws.amazon.com/sns
- **Use Case**: Send SMS or email alerts from an app or service
- **Description**: Managed AWS messaging service that pushes each message published to a topic out to subscribed apps, SMS numbers, email addresses or mobile devices.
- **Tags**: osint, throwaway contact

### Anymail Finder
- **URL**: https://anymailfinder.com
- **Use Case**: Find and verify a work email for a contact
- **Description**: B2B email finder: enter a name with a company or domain, or a LinkedIn URL, to get a work address checked live against the mail server.
- **Tags**: email lookup, osint

### Aware Online E-mail Search Tool
- **URL**: https://aware-online.com/osint-tools/e-mail-search-tool
- **Use Case**: Pick a tool to research an email address
- **Description**: Page of search forms from Dutch training firm Aware Online that pass an email address to Hunter.io, Have I Been Pwned, ThatsThem, Whoxy and others.
- **Tags**: email lookup, osint

### Aware Online Facebook Search Tool
- **URL**: https://aware-online.com/osint-tools/facebook-search-tool
- **Use Case**: Find friends two Facebook users have in common
- **Description**: Web tool that lists the mutual friends of two Facebook users; it works only when at least one of them has a public friend list.
- **Tags**: facebook, osint, socmint

### Aware Online People Search Tool
- **URL**: https://aware-online.com/en/osint-tools/people-search-tool
- **Use Case**: Build name searches for a person across four engines
- **Description**: Form that turns details about a person into ready-made searches (exact name, first or surname unknown) that open in Google, Bing, Yandex and Baidu.
- **Tags**: osint, people search

### Aware Online Phone Number Search Tool
- **URL**: https://aware-online.com/en/osint-tools/phone-number-search-tool
- **Use Case**: Search a phone number in several formats at once
- **Description**: Search form that writes one phone number in several common formats and links each to a Google, Bing or Yandex search for that exact string.
- **Tags**: osint, phone lookup

### Aware Online Twitter Search Guide
- **URL**: https://aware-online.com/en/osint-tools/twitter-search-tool
- **Use Case**: Build an advanced X (Twitter) search query
- **Description**: Guide to X (Twitter) advanced search operators, listing query options for users, keywords, hashtags, location radius and date ranges.
- **Tags**: osint, socmint, x-twitter

### Aware Online Username Search Tool
- **URL**: https://aware-online.com/en/osint-tools/username-search-tool
- **Use Case**: Search a username across Google and social sites
- **Description**: Search form from Aware Online Academy that opens a username on Google, Bing, Yandex and social networks, sending you to each third-party site.
- **Tags**: osint, username search

### Aware Online Vimeo Search Tool
- **URL**: https://aware-online.com/en/osint-tools/vimeo-search-tool
- **Use Case**: Search Vimeo for videos, people and channels
- **Description**: Set of four Vimeo searches, for videos, users, channels and groups, with an option to include mature content, from Dutch training firm Aware Online.
- **Tags**: osint, social media, socmint

### BackTweets
- **URL**: https://backtweets.com
- **Use Case**: Trace where a web link has been shared and cited
- **Description**: Link tracker: paste a web link to see its history, which pages link to and mention it across the web, and how often AI answers cite it.
- **Tags**: osint, socmint, x-twitter

### Before Reddit
- **URL**: https://beforereddit.herokuapp.com
- **Use Case**: Check a Reddit post before submitting it
- **Description**: Web app titled 'optimize a post' for checking a Reddit post before you submit it; the page did not load, so its features are unconfirmed.
- **Tags**: osint, reddit, socmint

### Behind the Name Random Name Generator
- **URL**: https://behindthename.com/random
- **Use Case**: Generate random first names by gender and origin
- **Description**: Random name generator from the first-name history site Behind the Name: pick gender, origin and middle names, get random names with an optional surname.
- **Tags**: fake identity, osint

### Bellingcat TikTok Analysis Tool
- **URL**: https://bellingcat.com/resources/how-tos/2022/05/11/this-new-tool-lets-you-analyse-tiktok-hashtags
- **Use Case**: Find hashtags that appear alongside a TikTok hashtag
- **Description**: Bellingcat how-to article on a free command-line tool that collects TikTok posts by hashtag and shows which other hashtags appear with them.
- **Tags**: osint, socmint, tiktok

### Binsearch
- **URL**: https://binsearch.info
- **Use Case**: Search Usenet newsgroup posts by keyword
- **Description**: Search engine for Usenet newsgroup posts: enter a keyword on the front page to find matching posts.
- **Tags**: forums, osint, socmint

### BirdHunt
- **URL**: https://birdhunt.huntintel.io
- **Use Case**: Find tweets posted from a given location
- **Description**: Tweet search tool for finding posts by location, as its page title describes; the page body loaded empty, so inputs and outputs are unconfirmed.
- **Tags**: osint, socmint, x-twitter

### Bitwarden
- **URL**: https://bitwarden.com
- **Use Case**: Free/self-hostable alternative to 1Password.
- **Description**: Open-source password manager.
- **Tags**: open source, passwords, security

### BleepingComputer
- **URL**: https://bleepingcomputer.com
- **Use Case**: Read security news and malware removal tips
- **Description**: Security news and malware removal guides.
- **Tags**: security

### Brave
- **URL**: https://brave.com
- **Use Case**: Browse with built-in tracker blocking
- **Description**: The Brave browser is a fast, private and secure web browser for PC, Mac and mobile. Download now to enjoy a faster ad-free browsing experience that saves data and battery life by blocking tracking software.
- **Tags**: brave, browser, privacy

### Buster
- **URL**: https://github.com/sham00n/buster
- **Use Case**: Find social accounts and breaches tied to an email
- **Description**: Open-source Python command-line tool that takes an email address and finds linked social accounts, breaches, pastes and pages where it appears.
- **Tags**: email lookup, osint

### Canada411
- **URL**: https://canada411.ca
- **Use Case**: Find a Canadian person or business by phone or name
- **Description**: Canadian people-search and business directory: find a person by name and location, or look up a phone number, address or postal code.
- **Tags**: osint, people search

### Canadian SIN Validator
- **URL**: https://fakenamegenerator.com/social-insurance-number.php
- **Use Case**: Check a Canadian SIN's format and check digit
- **Description**: Validator that checks a Canadian Social Insurance Number's first digit and check digit in the browser, with sample numbers for test data.
- **Tags**: fake identity, osint

### CarrierLookup
- **URL**: https://carrierlookup.com
- **Use Case**: Identify the carrier of a US phone number
- **Description**: Lookup that returns the mobile carrier of a 10-digit U.S. phone number; a few free lookups, with paid credit packs for more.
- **Tags**: osint, phone lookup

### Cell2GPS
- **URL**: https://cell2gps.com
- **Use Case**: Place a GSM phone on a map from its cell ID
- **Description**: Free online locator that turns a GSM cell's LAC and Cell ID into coordinates shown on Google Maps.
- **Tags**: osint, phone lookup

### CellID Finder
- **URL**: https://cellidfinder.com
- **Use Case**: Locate a GSM cell tower from its LAC and Cell ID
- **Description**: Free online tool that finds the coordinates of a GSM base station from its LAC and Cell ID.
- **Tags**: osint, phone lookup

### Censys
- **URL**: https://censys.com
- **Use Case**: Trace a certificate or hostname to the servers behind it
- **Description**: Internet-wide scan data you can search by host, service, domain and TLS certificate, with a history of how each host changed.
- **Tags**: certificates, infrastructure, osint, recon

### Check Usernames
- **URL**: https://checkusernames.com
- **Use Case**: Find where a username is used
- **Description**: Website for checking a username across sites; its page returned a server error (HTTP 522), so its details are unconfirmed.
- **Tags**: osint, username search

### CheckUser
- **URL**: https://checkuser.org
- **Use Case**: Check whether a username is free on social sites
- **Description**: Username availability checker that shows where a chosen name may be free across more than 70 social network sites.
- **Tags**: osint, username search

### CityVibe
- **URL**: https://cityvibe.com
- **Use Case**: Check what the CityVibe site offers
- **Description**: Website named CityVibe whose pages fail to load with a TLS certificate error, so what it offers could not be confirmed.
- **Tags**: forums, osint, socmint

### Collector
- **URL**: https://github.com/galihap76/collector
- **Use Case**: Look up phone, IP, GitHub or Instagram details from a terminal
- **Description**: Open-source Python command-line tool that looks up phone numbers, IP addresses, GitHub users and Instagram accounts; archived in 2023.
- **Tags**: osint, phone lookup

### Comment Picker Facebook ID Finder
- **URL**: https://commentpicker.com/find-facebook-id.php
- **Use Case**: Get the numeric ID of a Facebook profile, page or group
- **Description**: Free lookup that returns the numeric ID, name and username of a Facebook profile, page or group from its link; no login is needed.
- **Tags**: facebook, osint, socmint

### Conversation Prism 5.0
- **URL**: https://briansolis.com/2017/07/conversation-prism-5-0-the-2017-social-media-universe-in-one-infographic
- **Use Case**: See how social networks group by user purpose
- **Description**: Infographic from 2017 mapping social networks and apps by how people use them in everyday life, free to download or sold as a poster.
- **Tags**: osint, social media, socmint

### Craigslist Forums
- **URL**: https://forums.craigslist.org
- **Use Case**: Browse Craigslist discussion boards by topic
- **Description**: Index of Craigslist discussion boards by topic, such as android, bicycling and gardening, linking to each board's threads.
- **Tags**: forums, osint, socmint

### Credit Card Number Validator
- **URL**: https://fakenamegenerator.com/credit-card-validator.php
- **Use Case**: Check whether a card number passes the Luhn test
- **Description**: Checks a card number's length and Luhn check digit and names its network from the leading digits, with the check run in the browser.
- **Tags**: fake identity, osint

### Cryptii
- **URL**: https://cryptii.com
- **Use Case**: Decode or encrypt a string without writing code
- **Description**: A modular encode/decode/encrypt playground for ciphers, hashes, and text formats.
- **Tags**: ciphers, encoding

### CSP Evaluator
- **URL**: https://csp-evaluator.withgoogle.com
- **Use Case**: Sanity-check a Content-Security-Policy
- **Description**: Google tool that checks a Content-Security-Policy for bypasses and weak directives before you ship it.
- **Tags**: csp, headers, security, web

### Custom timelines in TweetDeck
- **URL**: https://blog.twitter.com/official/en_us/a/2013/custom-timelines-in-tweetdeck.html?utm_campaign=elearningindustry.com&utm_source=%252Ftop-10-free-timeline-creation-tools-for-elearning-professionals&utm_medium=link
- **Use Case**: Set up a custom timeline in TweetDeck
- **Description**: 2013 X blog post about building custom timelines in TweetDeck, the X dashboard app, from searches and lists.
- **Tags**: osint, socmint, x-twitter

### Dating Profile Generator
- **URL**: https://dating-profile-generator.org.uk
- **Use Case**: Draft a sample dating profile text
- **Description**: Generator that writes a dating profile from the kind of partner you want to attract plus your own or randomly suggested keywords.
- **Tags**: fake identity, osint

### Dating Sites Search Engine
- **URL**: https://cse.google.com/cse?cx=c7b340447e1e12653
- **Use Case**: Search dating sites for a person's profile
- **Description**: Google Custom Search engine whose name says it covers dating sites; the search page itself does not list which sites are included.
- **Tags**: osint, people search

### Decoding Social Security Numbers
- **URL**: https://stevemorse.org/ssn/ssn.html
- **Use Case**: Work out where an older SSN was issued
- **Description**: Free decoder that reads the leading digits of a Social Security Number issued before June 25, 2011 and gives the state, and sometimes the years, it was issued.
- **Tags**: fake identity, osint

### Dewey
- **URL**: https://getdewey.co
- **Use Case**: Save and search social media bookmarks in one place
- **Description**: Bookmark manager that syncs saved posts from X, Bluesky, Mastodon and Reddit into one searchable library you can export to CSV or sync to Notion.
- **Tags**: osint, socmint, x-twitter

### Die Profiloptimierer
- **URL**: https://die-profiloptimierer.de
- **Use Case**: Get help optimizing a professional networking profile
- **Description**: German consultancy site by Holger Ahrens offering to create and optimize LinkedIn and XING profiles, plus employer branding and reputation work.
- **Tags**: osint, socmint, xing

### Digital 2022: Overview of Social Media Use
- **URL**: https://blog.hootsuite.com/wp-content/uploads/2022/01/Digital-2022-Slide-87-Overview-of-Social-Media-Use.png
- **Use Case**: Look up global social media user numbers for 2022
- **Description**: Single chart from the Digital 2022 report by We Are Social and Hootsuite, giving January 2022 global social media users, growth, daily time spent and gender split.
- **Tags**: osint, social media, socmint

### DISBOARD
- **URL**: https://disboard.org
- **Use Case**: Find a public Discord server by interest
- **Description**: Public directory of Discord servers you can browse by interest tag, where owners list their communities with a short description.
- **Tags**: discord, osint, socmint

### Discord Center
- **URL**: https://discord.center
- **Use Case**: Browse public Discord servers by category
- **Description**: Directory of public Discord servers you can filter by category and language and sort by rating or size, with a Join link for each listing.
- **Tags**: discord, osint, socmint

### Discord Me
- **URL**: https://discord.me
- **Use Case**: Browse public Discord servers by topic tag
- **Description**: Directory of public Discord servers you browse by topic tag, such as gaming, anime or programming, with a description and join link for each.
- **Tags**: discord, osint, socmint

### DiscordServers
- **URL**: https://discordservers.com
- **Use Case**: Search for public Discord servers by keyword
- **Description**: Search directory of public Discord servers on topics such as gaming, anime and music, where owners can also list their own server.
- **Tags**: discord, osint, socmint

### DoNotPay
- **URL**: https://donotpay.com/learn/temporary-phone-number
- **Use Case**: Get a temporary phone number for SMS verification
- **Description**: Article promoting DoNotPay's Burner Phone feature, a one-time number for SMS verification that the article says stays active for 10 minutes.
- **Tags**: osint, throwaway contact

### Dutchosintguy/SANS--mic-talk-Telegram-17AUG2020
- **URL**: https://github.com/Dutchosintguy/SANS--mic-talk-Telegram-17AUG2020
- **Use Case**: Find a list of Telegram OSINT tools from a 2020 talk
- **Description**: GitHub README from a 17 August 2020 SANS @mic talk, linking to Telegram search tools and scripts for saving Telegram chats and user data.
- **Tags**: osint, socmint, telegram

### Ecosia
- **URL**: https://ecosia.org
- **Use Case**: Search privately while supporting the environment
- **Description**: Privacy-focused search engine supporting environment.
- **Tags**: osint, search, search engine, security

### Email and Username OSINT Toolkit
- **URL**: https://one-plus.github.io/EmailUsername
- **Use Case**: Find third-party OSINT tools for a username or email
- **Description**: Link directory to third-party OSINT search tools for usernames and email addresses, plus a few miscellaneous lookups such as an email header analyzer.
- **Tags**: osint, username search

### Email Dossier
- **URL**: https://centralops.net/co/emaildossier.aspx
- **Use Case**: Check whether an email address can receive mail
- **Description**: Email address checker that tests syntax and contacts the domain's mail servers without sending mail, returning a 0-3 confidence rating and SMTP transcript.
- **Tags**: email lookup, osint

### Email Format
- **URL**: https://email-format.com
- **Use Case**: Find the email address format a company uses
- **Description**: Directory of company email address patterns: look up a company's domain to see the formats its staff use, each with an estimated share.
- **Tags**: email lookup, osint

### Email Header Analyzer
- **URL**: https://mxtoolbox.com/EmailHeaders.aspx
- **Use Case**: Trace the route and checks of a suspicious email
- **Description**: Web tool that takes pasted raw email headers and parses them into a readable form, showing hop delays and anti-spam results.
- **Tags**: email lookup, osint

### Email Permutator
- **URL**: https://metricsparrow.com/toolkit/email-permutator
- **Use Case**: Generate likely email addresses for a person at a company
- **Description**: Web tool that takes a person's name and a company domain and lists the likely email address patterns to try for that person.
- **Tags**: email lookup, osint

### Email Verifier
- **URL**: https://hunter.io/email-verifier
- **Use Case**: Check whether an email address is deliverable
- **Description**: Web tool that checks whether an email address can receive mail and returns valid, invalid, accept-all, disposable or unknown, without sending a message.
- **Tags**: email lookup, osint

### email2phonenumber
- **URL**: https://github.com/martinvigo/email2phonenumber
- **Use Case**: Recover hidden digits of an email's linked phone number
- **Description**: Open-source command-line script that takes an email address, starts password resets on websites and collects the masked phone-number digits they reveal.
- **Tags**: email lookup, osint

### EmailHarvester
- **URL**: https://pypi.org/project/EmailHarvester
- **Use Case**: Collect email addresses published for a domain
- **Description**: Python command-line tool that searches engines such as Google, Bing and Yahoo for a domain and collects the email addresses it finds, saving them to a file.
- **Tags**: email lookup, osint

### EmailRep
- **URL**: https://emailrep.io
- **Use Case**: Check an email address's reputation and risk flags
- **Description**: API that takes an email address and returns a reputation rating, a suspicious flag and details such as breaches, domain age and linked profiles.
- **Tags**: email lookup, osint

### Encoding and Decoding Driver's License Numbers
- **URL**: https://stevemorse.org/dl/dl.html
- **Use Case**: Encode or decode a driver's license number
- **Description**: Form that builds a driver's license number from a name, birth date, gender and eye color, or reads one back, for nine US states.
- **Tags**: fake identity, osint

### Epieos
- **URL**: https://epieos.com
- **Use Case**: Find accounts and a Google profile linked to an email
- **Description**: Lookup that takes an email address and shows public accounts linked to it, including a Google account's details where one exists.
- **Tags**: email lookup, osint

### Expand comments
- **URL**: https://com.hemiola.com/2015/08/29/expand-all
- **Use Case**: Expand all collapsed comments on a Facebook post
- **Description**: Browser bookmarklet from hemiola.com that expands the collapsed comments on a Facebook post.
- **Tags**: facebook, osint, socmint

### Facebook Ad Library Report
- **URL**: https://facebook.com/ads/library/report
- **Use Case**: See who pays for political and social-issue ads on Facebook
- **Description**: Downloadable report from Meta's Ad Library showing spending and funding for ads about social issues, elections or politics.
- **Tags**: facebook, osint, socmint

### Facebook Email Reverse Lookup
- **URL**: https://osint.support/chrome-extensions/2019/09/01/facebook-email-reverse-lookup.html
- **Use Case**: Find the Facebook profile tied to an email address
- **Description**: Chrome extension that takes an email address and returns the matching Facebook profile ID and picture; needs a logged-in Facebook account.
- **Tags**: facebook, osint, socmint

### Facebook Entity ID Parser
- **URL**: https://osint.support/chrome-extensions/2019/09/08/facebook-entity-id-parser.html
- **Use Case**: Parse a Facebook entity ID with a browser extension
- **Description**: Chrome extension from 2019 named for parsing Facebook entity IDs; its download page does not describe what goes in or comes out.
- **Tags**: facebook, osint, socmint

### Facebook Find your account
- **URL**: https://facebook.com/login/identify?ctx=recover
- **Use Case**: Locate a Facebook account from a phone number or email
- **Description**: Account-recovery page from Facebook that takes a mobile number or email address and looks for a matching Facebook account.
- **Tags**: facebook, osint, socmint

### Facebook Friends List Generator
- **URL**: https://osint.support/chrome-extensions/2019/10/20/facebook-friends-list-generator.html
- **Use Case**: Estimate the friends of a Facebook user with a hidden list
- **Description**: Chrome extension that speeds up working out a Facebook user's friends when their list is hidden, by checking who likes and comments on their timeline.
- **Tags**: facebook, osint, socmint

### Facebook Messenger
- **URL**: https://messenger.com
- **Use Case**: Read and send Facebook Messenger chats in a browser
- **Description**: Meta's web app for Facebook Messenger chats, which asks you to log in with a Facebook account before showing any content.
- **Tags**: facebook, osint, socmint

### Facebook Mobile
- **URL**: https://m.facebook.com
- **Use Case**: Browse Facebook from a phone browser
- **Description**: Mobile web version of Facebook meant for phone browsers; other browsers get an unsupported-browser notice instead of content.
- **Tags**: facebook, osint, socmint

### Facebook People Directory
- **URL**: https://facebook.com/directory/people
- **Use Case**: Browse Facebook profiles by name
- **Description**: Facebook's public directory of member profiles, browsable alphabetically by name; Facebook may show a login form to visitors who are not signed in.
- **Tags**: facebook, osint, socmint

### Facebook Photo Search Engine
- **URL**: https://cse.google.com/cse/publicurl?cx=013991603413798772546:jyvyp2ppxma
- **Use Case**: Search Google-indexed results for Facebook photos
- **Description**: Google Programmable Search engine listed as a Facebook photo search; its page shows no scope, so which sites it covers is unconfirmed.
- **Tags**: facebook, osint, socmint

### Facebook Profile ID Grabber
- **URL**: https://osint.support/chrome-extensions/2019/09/01/facebook-profile-id-grabber.html
- **Use Case**: Get the numeric ID behind a Facebook profile URL
- **Description**: Chrome extension that takes a Facebook profile URL, including custom usernames, and returns the account's numeric profile ID.
- **Tags**: facebook, osint, socmint

### Facebook Search Engine
- **URL**: https://cse.google.com/cse?cx=95ae46262a5f2958e
- **Use Case**: Run a Google custom search for Facebook content
- **Description**: Google Programmable Search Engine whose page does not say which sites or topics it searches.
- **Tags**: facebook, osint, socmint

### Fake Company Name Generator
- **URL**: https://fakeinfo.net/company-name-generator
- **Use Case**: Generate made-up company names for test data
- **Description**: Online generator on FakeInfo.Net, a set of fake-data generators, that produces made-up company names for test data.
- **Tags**: fake identity, osint

### Fake Driver's License Generator
- **URL**: https://fakeinfo.net/drivers-license-generator
- **Use Case**: Generate sample license details for form testing
- **Description**: Online generator on FakeInfo.Net, a set of fake-data generators, that produces made-up driver's license details for testing.
- **Tags**: fake identity, osint

### Fake ID Random Name Generator
- **URL**: https://businer.com/fakeid.php
- **Use Case**: Generate sample identity records for software testing
- **Description**: Random generator of made-up identity records: name, birthday, address, phone, email, username, and ID-style numbers such as SSN, passport and test card.
- **Tags**: fake identity, osint

### Fake Name Generator
- **URL**: https://fakenamegenerator.com
- **Use Case**: Generate sample identity records for software testing
- **Description**: Generator of fictional identities with name, address, phone, email, birthday and test card details, for testing software and seeding databases.
- **Tags**: fake identity, osint

### Fake TikTok Profile Generator
- **URL**: https://fakeinfo.net/fake-tiktok-profile-generator
- **Use Case**: Mock up a TikTok profile for a design or test
- **Description**: Online generator on FakeInfo.Net, a set of fake-data generators, that produces made-up TikTok profile details for mockups.
- **Tags**: fake identity, osint

### Fake Twitter Profile Generator
- **URL**: https://fakeinfo.net/fake-twitter-profile-generator
- **Use Case**: Generate a mock Twitter profile page
- **Description**: Generator page on FakeInfo.Net for mock Twitter profiles; the page body did not load, so its inputs and output are not confirmed.
- **Tags**: fake identity, osint

### Fake YouTube Channel Generator
- **URL**: https://fakeinfo.net/fake-youtube-channel-generator
- **Use Case**: Generate sample YouTube channel details for a mockup
- **Description**: Online generator on FakeInfo.Net, a set of fake-data generators, that produces made-up YouTube channel details for mockups.
- **Tags**: fake identity, osint

### FamilyTreeNow
- **URL**: https://familytreenow.com
- **Use Case**: Look up a person's relatives and past addresses
- **Description**: Genealogy and people-search site that lists a searched person's possible relatives, past and current addresses and contact details.
- **Tags**: osint, people search

### FastPeopleSearch
- **URL**: https://fastpeoplesearch.com
- **Use Case**: Look up a person's records by name or phone
- **Description**: People-search site that returns contact and address records for a name, phone number or street address.
- **Tags**: osint, people search

### FauxID Tools
- **URL**: https://fauxid.com/tools
- **Use Case**: Create made-up person details for a test account
- **Description**: Tools page of FauxID, a site of fake-identity generators for making up person details; the page blocks automated reading.
- **Tags**: fake identity, osint

### Fbdown
- **URL**: https://fbdown.github.io
- **Use Case**: Save a Facebook video by pasting its link
- **Description**: Web page that saves a Facebook video to your computer or phone when you paste the video's URL; the page says it is free and needs no software.
- **Tags**: facebook, osint, socmint

### FCC ID Search
- **URL**: https://fcc.io
- **Use Case**: Find the FCC filing for a device by its FCC ID
- **Description**: Search box and short-link service for FCC IDs: enter an ID, or link fcc.io/<ID>, to open the FCC's equipment records for that device.
- **Tags**: osint, phone lookup

### Find Instagram User ID
- **URL**: https://codeofaninja.com/tools/find-instagram-user-id
- **Use Case**: Look up an Instagram account's numeric user ID
- **Description**: Web form that takes an Instagram username, without the @, and returns the account's numeric user ID.
- **Tags**: instagram, osint, socmint

### Find My Snap
- **URL**: https://findmysnap.com
- **Use Case**: Look up a Snapchat account by name
- **Description**: Snapchat account finder site; the page could not be reached, so its search inputs and results are unconfirmed.
- **Tags**: osint, snapchat, socmint

### Find User ID Insta-Explore
- **URL**: https://ershad7.com/InstagramUserID
- **Use Case**: Look up an Instagram account's user ID
- **Description**: Web page titled as an Instagram user ID finder; its security certificate fails, so its inputs and outputs could not be checked.
- **Tags**: instagram, osint, socmint

### Foller.me
- **URL**: https://foller.me
- **Use Case**: Get follower and activity stats for an X profile
- **Description**: Analytics page for a public X (Twitter) profile: follower and following counts, topic and hashtag clouds, recent tweets and most active times.
- **Tags**: osint, socmint, x-twitter

### Followerwonk
- **URL**: https://followerwonk.com/bio
- **Use Case**: Find X or Bluesky accounts by words in their bios
- **Description**: Search engine for X (Twitter) and Bluesky bios, profiles and posts, filtered by follower count, account age, location and language, with CSV export; needs a free account.
- **Tags**: osint, socmint, x-twitter

### Followerwonk
- **URL**: https://followerwonk.com
- **Use Case**: Compare and audit an X account's followers
- **Description**: Twitter analytics tool that searches account bios by keyword and compares, audits and exports follower lists; now run through Fedica, which needs an account.
- **Tags**: osint, socmint, x-twitter

### Generate SA ID Numbers
- **URL**: https://chris927.github.io/generate-sa-idnumbers
- **Use Case**: Generate a South African ID-format number for form testing
- **Description**: Form that generates a South African ID-format number from a birth date and sex, with optional sequence and citizen-or-resident settings; source on GitHub.
- **Tags**: fake identity, osint

### GeoChirp
- **URL**: https://geochirp.com
- **Use Case**: Look up location-tagged posts on X
- **Description**: Geolocation search site for X (Twitter) posts, as its name suggests; its page came back blank when read, so features are unconfirmed.
- **Tags**: osint, socmint, x-twitter

### Geosocial Footprint
- **URL**: https://geosocialfootprint.com
- **Use Case**: See which locations an X account's posts reveal
- **Description**: Site for viewing the geosocial footprint of an X (Twitter) account, meaning the locations its posts reveal; its page could not be loaded to confirm how it works.
- **Tags**: osint, socmint, x-twitter

### GetDayTrends
- **URL**: https://getdaytrends.com
- **Use Case**: See which X topics are trending by country
- **Description**: Hourly ranking of trending X (Twitter) hashtags and topics, worldwide and by country, with a 24-hour top-hashtag list and scores.
- **Tags**: osint, socmint, x-twitter

### GitHub Dependabot & Code Scanning
- **URL**: https://github.com/features/security
- **Use Case**: Auto-alert on vulnerable dependencies in a repo
- **Description**: Built-in dependency vulnerability alerts, automated update PRs, and CodeQL static analysis for repos — free for public, available for private.
- **Tags**: dependencies, github, security, vulnerabilities

### Gitleaks
- **URL**: https://gitleaks.io
- **Use Case**: Catch a leaked API key before it's pushed
- **Description**: Scans a repo's history and diffs for committed secrets (API keys, tokens); runs as a pre-commit hook or in CI.
- **Tags**: git, open source, secrets, security

### Globfone
- **URL**: https://globfone.com/send-text
- **Use Case**: Send a text message from a browser
- **Description**: Web service that sends a text from your browser to a mobile number in a supported country; an account is required.
- **Tags**: osint, throwaway contact

### Google Groups
- **URL**: https://groups.google.com
- **Use Case**: Find and join online discussion groups
- **Description**: Google service for discussion groups and mailing lists, where members read and post threads on the web or by email.
- **Tags**: forums, osint, socmint

### Graphtreon
- **URL**: https://graphtreon.com
- **Use Case**: Compare Patreon creators by members and earnings
- **Description**: Ranked lists of Patreon creators by paid members, free members, growth and estimated monthly earnings.
- **Tags**: osint, social media, socmint

### GSMArena
- **URL**: https://gsmarena.com
- **Use Case**: Compare phone specs and prices by model
- **Description**: Phone specifications database covering phones, tablets and smartwatches, with specs, prices, ratings and a Phone Finder filter.
- **Tags**: osint, phone lookup

### GUID/UUID and Short GUID Generator
- **URL**: https://richardkundl.github.io/shortguid
- **Use Case**: Shorten a UUID into a compact string and back
- **Description**: Page that generates GUIDs/UUIDs, shortens a GUID into a short GUID string, and converts a short GUID back to the full form.
- **Tags**: fake identity, osint

### Gökbörü Intelligence
- **URL**: https://github.com/AzizKpln/Gokboru_Intel
- **Use Case**: Look up profiles and breaches linked to a phone or username
- **Description**: Open-source tool that looks up a phone number or username across chosen sources and reports linked profiles and breach findings, in a web interface or command line.
- **Tags**: osint, phone lookup

### h8mail
- **URL**: https://pypi.org/project/h8mail
- **Use Case**: Check if an email address appears in leaked breach data
- **Description**: Open-source Python command-line tool that searches online breach services or local breach files for an email address and lists any leaked passwords found.
- **Tags**: email lookup, osint

### Hashtagify
- **URL**: https://hashtagify.me
- **Use Case**: Find hashtags related to a topic on X
- **Description**: Hashtag research site for X (Twitter), as its name suggests; the server refused the connection, so its features are unconfirmed.
- **Tags**: osint, socmint, x-twitter

### Have I Been Pwned
- **URL**: https://haveibeenpwned.com
- **Use Case**: Audit personal/business email exposure periodically.
- **Description**: Checks whether an email/password has appeared in a data breach.
- **Tags**: osint, privacy, security

### Have I Been Zucked?
- **URL**: https://haveibeenzucked.com
- **Use Case**: Check whether a phone number was in the Facebook leak
- **Description**: Lookup that checks whether a phone number appeared in the 2021 Facebook data leak.
- **Tags**: facebook, osint, socmint

### holehe
- **URL**: https://pypi.org/project/holehe
- **Use Case**: Find which sites an email address is registered on
- **Description**: Open-source Python command-line tool that takes an email address and checks, mostly through password-reset forms, which of over 120 sites have an account for it.
- **Tags**: email lookup, osint

### Hootsuite
- **URL**: https://hootsuite.com
- **Use Case**: Schedule and track posts across social networks
- **Description**: Social media management platform for scheduling and publishing posts, a single inbox for messages and comments, and engagement analytics across networks.
- **Tags**: osint, socmint, x-twitter

### How to Find Anyone's Email Address & Phone Number in Under 30 Seconds
- **URL**: https://ere.net/how-to-find-anyones-email-address-phone-number-in-under-30-seconds
- **Use Case**: Compare Chrome extensions that find contact details
- **Description**: 2019 blog post testing more than 25 Chrome extensions that find email addresses and phone numbers from LinkedIn profiles.
- **Tags**: linkedin, osint, socmint

### Hunt Intelligence
- **URL**: https://huntintel.io
- **Use Case**: Find social media posts from a chosen location
- **Description**: Location-based social media search that returns posts from a chosen place on Instagram, Facebook, X, VK, Snapchat, YouTube and Flickr.
- **Tags**: osint, social media, socmint

### IDCrawl
- **URL**: https://idcrawl.com
- **Use Case**: Find accounts that share one username
- **Description**: People-search engine with a username search that checks many sites for profiles registered under the same handle.
- **Tags**: osint, people search

### IDCrawl
- **URL**: https://idcrawl.com/phone
- **Use Case**: Look up who owns a phone number
- **Description**: People-search site whose phone page takes a phone number and returns the name and general location linked to it.
- **Tags**: osint, phone lookup

### IDCrawl
- **URL**: https://idcrawl.com/username
- **Use Case**: Search a username on IDCrawl
- **Description**: Username search page on the IDCrawl site that looks up a handle across the web.
- **Tags**: osint, username search

### Identificator
- **URL**: https://identificator.space
- **Use Case**: Look up an email address on this site
- **Description**: Website whose pages could not be read (a bot check, then a server error), so what it offers is not yet confirmed.
- **Tags**: email lookup, osint

### ignorant
- **URL**: https://pypi.org/project/ignorant
- **Use Case**: Check which apps a phone number is registered on
- **Description**: Open-source Python command-line tool that checks whether a phone number, entered with its country code, is registered on Amazon, Instagram or Snapchat.
- **Tags**: osint, phone lookup

### IID Generator
- **URL**: https://georgybu.github.io/IID_Generator
- **Use Case**: Check whether an Israeli ID number passes validation
- **Description**: Page that generates Israeli ID numbers and checks whether an ID number is valid, made by Georgy Bunin with source on GitHub.
- **Tags**: fake identity, osint

### Infobel
- **URL**: https://infobel.com
- **Use Case**: Look up a phone number or business in many countries
- **Description**: Online phone directory for people and businesses in many countries, with reverse lookup of a phone number.
- **Tags**: osint, people search

### Inoitsu
- **URL**: https://hotsheet.com/inoitsu
- **Use Case**: Check whether an email appeared in a data breach
- **Description**: Free email breach checker: enter an address to see which known data breaches it appears in, with an exposure rating, using Have I Been Pwned data.
- **Tags**: email lookup, osint

### Instagram Explorer
- **URL**: https://osintcombine.com/instagram-explorer
- **Use Case**: Find Instagram photos by place and date
- **Description**: Free web tool from OSINT Combine that finds Instagram images taken at a chosen location, filtered by date.
- **Tags**: instagram, osint, socmint

### Instagram Password Reset
- **URL**: https://instagram.com/accounts/password/reset
- **Use Case**: Reset a forgotten Instagram password
- **Description**: Instagram's own password reset page, which sends a reset link to an account's email address, phone number or linked Facebook account.
- **Tags**: instagram, osint, socmint

### Instagram, Reddit & Snapchat
- **URL**: https://one-plus.github.io/Instagram
- **Use Case**: Find tools for researching Instagram, Reddit or Snapchat users
- **Description**: Web page listing tools for researching Instagram, Reddit and Snapchat accounts, such as profile lookups, hashtag search and Reddit comment search.
- **Tags**: osint, social media, socmint

### Intelligence Search
- **URL**: https://intel-sw.com/blog/search-linkedin
- **Use Case**: Search LinkedIn profiles with x-ray and in-app results
- **Description**: Blog post announcing a Chrome Web Store tool from Intelligence Software that searches LinkedIn by combining x-ray search with direct search inside LinkedIn.
- **Tags**: linkedin, osint, socmint

### Intelligence X Facebook Graph Searcher
- **URL**: https://intelx.io/tools?tab=facebook
- **Use Case**: Find Facebook posts from a set date or date range
- **Description**: Free web form that builds Facebook post searches by date or date range, plus filtered people, photo, page and event searches; needs a Facebook login.
- **Tags**: facebook, osint, socmint

### Intelligence X Tools
- **URL**: https://intelx.io/tools?tab=email
- **Use Case**: Run one email query across several lookup sites
- **Description**: Set of free web tools that take an email, domain, IP, phone number or username and open it on third-party search sites, plus built-in checks such as GeoIP.
- **Tags**: email lookup, osint

### Intelligence X Tools
- **URL**: https://intelx.io/tools?tab=person
- **Use Case**: Launch searches for a person's full name across sites
- **Description**: Free set of lookup tools that take a full name, email, phone, username, domain, IP or other identifier and open matching searches on outside sites.
- **Tags**: osint, people search

### Intelligence X Tools
- **URL**: https://intelx.io/tools?tab=username
- **Use Case**: Open a username across many OSINT search sites
- **Description**: Directory of free lookup tools that send an email, domain, IP or username to third-party sites, plus file text extraction and hashing utilities.
- **Tags**: osint, username search

### IntelTechniques Facebook Search
- **URL**: https://inteltechniques.com/tools/Facebook.html
- **Use Case**: Search Facebook from a page of prebuilt forms
- **Description**: Page of Facebook search forms in the IntelTechniques search tool collection, with year options running from 2010 to 2024.
- **Tags**: facebook, osint, socmint

### IntelTechniques Telephone
- **URL**: https://inteltechniques.com/tools/Telephone.html
- **Use Case**: Search a phone number with IntelTechniques' forms
- **Description**: Telephone-number page of the IntelTechniques Search Tool, a set of browser-based search forms for investigators.
- **Tags**: osint, phone lookup

### IntelTechniques Twitter Search Tool
- **URL**: https://inteltechniques.com/tools/Twitter.html
- **Use Case**: Look up an X (Twitter) account with IntelTechniques
- **Description**: Twitter page of the IntelTechniques Search Tool, a set of browser lookup pages grouped by what you search, such as email addresses, usernames and domains.
- **Tags**: osint, socmint, x-twitter

### iTools People Search
- **URL**: https://itools.com/search/people-search
- **Use Case**: Look up a named person on iTools
- **Description**: People search page on itools.com; the server refused the connection, so its inputs and results could not be confirmed.
- **Tags**: osint, people search

### Jens Farley's Facebook Bookmarklets
- **URL**: https://com.hemiola.com/bookmarklet
- **Use Case**: Run Facebook helper scripts from the bookmarks bar
- **Description**: Facebook bookmarklets on the hemiola.com site: small scripts you drag to the browser bookmarks bar and run on a Facebook page.
- **Tags**: facebook, osint, socmint

### Just Delete Me
- **URL**: https://justdeleteme.xyz
- **Use Case**: Find the direct link to delete an old account
- **Description**: A directory of direct links for deleting accounts from popular web services.
- **Tags**: account-deletion, directory

### JWT.io
- **URL**: https://jwt.io
- **Use Case**: Debug what's actually inside a JWT
- **Description**: Decode, verify, and inspect JSON Web Tokens in the browser, with a library directory and debugger.
- **Tags**: auth, debugging, jwt

### Kik
- **URL**: https://kik.me/username
- **Use Case**: Start a Kik chat with someone by their username
- **Description**: Profile link page for a Kik username: it tells visitors to download the Kik messaging app, create an account and enter that username to chat.
- **Tags**: osint, social media, socmint

### Kribrum
- **URL**: https://kribrum.io
- **Use Case**: Search social networks through a Russian service
- **Description**: Russian-language search service for social networks, titled on its page 'Kribrum: Search across social networks'.
- **Tags**: osint, social media, socmint

### LastPass
- **URL**: https://lastpass.com
- **Use Case**: Manage and secure all your passwords
- **Description**: Password manager protecting credentials with encryption.
- **Tags**: security

### LastPass Username Generator
- **URL**: https://lastpass.com/features/username-generator
- **Use Case**: Generate a random username and rate its strength
- **Description**: Free random username generator from LastPass: pick a length and character types, and it rates the result Weak, Average or Strong.
- **Tags**: fake identity, osint

### Leveraging Telegram for OSINT purposes
- **URL**: https://youtube.com/watch?v=e_aXQYq2l6U
- **Use Case**: Learn how investigators use Telegram for OSINT
- **Description**: Recorded SANS@MIC talk on YouTube about how investigators can use Telegram for open-source intelligence research.
- **Tags**: osint, socmint, telegram

### LinkedIn Advanced People Search
- **URL**: https://linkedin.com/search?trk=advsrch
- **Use Case**: Search LinkedIn members with advanced filters
- **Description**: LinkedIn's own advanced people search for narrowing member profiles with filters; the page blocked automated access.
- **Tags**: linkedin, osint, socmint

### LinkedIn Export Settings
- **URL**: https://linkedin.com/people/export-settings
- **Use Case**: Review LinkedIn's data export options
- **Description**: LinkedIn account settings page for exporting data; the page blocked automated access, so what it exports is unverified.
- **Tags**: linkedin, osint, socmint

### LinkedIn People Search
- **URL**: https://linkedin.com/pub/dir/People/Search
- **Use Case**: Look up public LinkedIn profiles by name
- **Description**: Public LinkedIn directory page for looking up member profiles by name.
- **Tags**: linkedin, osint, socmint

### LinkedIn Premium Essentials
- **URL**: https://linkedin.com/premium/essentialsProduct
- **Use Case**: Check what the LinkedIn Essentials plan included
- **Description**: LinkedIn product page for the Premium Essentials subscription plan; the page blocked automated access, so its current terms are unverified.
- **Tags**: linkedin, osint, socmint

### LinkedIn Public Profile Directory
- **URL**: https://de.linkedin.com/pub/dir/Bruno/Mortier
- **Use Case**: Find public LinkedIn profiles by first and last name
- **Description**: LinkedIn public directory page that lists public member profiles matching a first and last name; LinkedIn blocked the automated fetch.
- **Tags**: linkedin, osint, socmint

### LinkedInsider Deutschland
- **URL**: https://linkedinsiders.wordpress.com
- **Use Case**: Read German-language guidance on LinkedIn features
- **Description**: German-language blog by Stephan Koß on using LinkedIn, with posts on Premium, polls, company pages, spam outreach and LinkedIn versus XING.
- **Tags**: linkedin, osint, socmint

### List of social networking services
- **URL**: https://en.wikipedia.org/wiki/List_of_social_networking_websites
- **Use Case**: Look up what a social networking service is for
- **Description**: Wikipedia list of notable social networking services, in a table giving each one's name, type and focus or audience.
- **Tags**: osint, social media, socmint

### Lookup-ID
- **URL**: https://lookup-id.com
- **Use Case**: Get the numeric ID of a Facebook profile or group
- **Description**: Lookup that returns the numeric Facebook ID of a profile, group or page when you paste its link into the search bar.
- **Tags**: facebook, osint, socmint

### Lullar
- **URL**: https://com.lullar.com
- **Use Case**: Find profiles linked to an email, name or username
- **Description**: Free search site that takes an email address, name or username and checks it against many platforms for matching profiles.
- **Tags**: osint, username search

### Maigret
- **URL**: https://pypi.org/project/maigret
- **Use Case**: Build a dossier of accounts tied to a username
- **Description**: Open-source Python tool that takes a username and checks thousands of sites to build a dossier of matching accounts, with no API keys needed.
- **Tags**: osint, username search

### Maildrop
- **URL**: https://maildrop.cc
- **Use Case**: Get a disposable email inbox without signing up
- **Description**: Free disposable email inbox: pick any address at maildrop.cc and read the mail sent to it in the browser, with no signup.
- **Tags**: osint, throwaway contact

### Maltego
- **URL**: https://maltego.com
- **Use Case**: Map what one domain, email or username connects to
- **Description**: Link-analysis app that draws how domains, IP addresses, emails, people, companies and social accounts connect, as a graph you can expand.
- **Tags**: graph, investigation, link analysis, osint

### Mining Social Media
- **URL**: https://socialdata.site
- **Use Case**: Learn to collect and analyze social media data
- **Description**: Free web edition of Lam Thuy Vo's book Mining Social Media, teaching Python, pandas and Jupyter for collecting and analyzing social media data.
- **Tags**: osint, social media, socmint

### Mount Fuji flyover post on X
- **URL**: https://twitter.com/robertoglezcano/status/1133415705129488385
- **Use Case**: See an example of geolocating a post
- **Description**: Single X post linked as a geolocation example and titled as a Mount Fuji flyover; the page could not be read because X returned a payment-required error.
- **Tags**: osint, socmint, x-twitter

### Mozilla HTTP Observatory
- **URL**: https://observatory.mozilla.org
- **Use Case**: Get a prioritized web-security to-do list for a site
- **Description**: Automated site security scan covering headers, cookies, CSP, and TLS, with a prioritized checklist and score.
- **Tags**: audit, headers, security testing, web

### Myspace
- **URL**: https://myspace.com/discover/people
- **Use Case**: Browse Myspace profiles by type, gender or genre
- **Description**: Myspace people directory you can browse by profile type, such as musician or photographer, by gender and by music genre.
- **Tags**: osint, social media, socmint

### Nano ID Collision Calculator
- **URL**: https://zelark.github.io/nano-id-cc
- **Use Case**: Estimate how long a Nano ID needs to be
- **Description**: Calculator that estimates how many Nano IDs, or how much time at a set generation speed, it takes to reach a 1% collision chance for a chosen alphabet and length.
- **Tags**: fake identity, osint

### National Blacklist
- **URL**: https://nationalblacklist.com
- **Use Case**: Check what the National Blacklist site covers
- **Description**: Website named National Blacklist; its pages returned 403 Forbidden, so what it covers could not be confirmed.
- **Tags**: forums, osint, socmint

### New FB Search
- **URL**: https://gist.github.com/nemec/2ba8afa589032f20e2d6509512381114
- **Use Case**: Build a filtered Facebook search link for posts
- **Description**: Guide to building Facebook search URLs by Base64-encoding JSON filters, such as posts by a page, a date range or a location.
- **Tags**: facebook, osint, socmint

### noinstagram
- **URL**: https://github.com/datvance/noinstagram
- **Use Case**: Follow public Instagram accounts without an account
- **Description**: GitHub project that turns a list of public Instagram accounts and hashtags into a static GitHub Pages site of their photos, rebuilt every six hours.
- **Tags**: instagram, osint, socmint

### Nuwber
- **URL**: https://nuwber.com
- **Use Case**: Find the name tied to a phone number
- **Description**: People-search website with a reverse phone lookup that tries to match a phone number to the person or business behind it.
- **Tags**: osint, phone lookup

### NZBIndex
- **URL**: https://nzbindex.com/groups
- **Use Case**: Search Usenet posts and browse newsgroups
- **Description**: Search engine for Usenet newsgroup posts, with a Groups page for browsing posts by newsgroup.
- **Tags**: forums, osint, socmint

### Oldphonebook.com
- **URL**: https://oldphonebook.com
- **Use Case**: Look up historical US listings for a phone number
- **Description**: People-search directory with a reverse phone lookup over old US phone book listings.
- **Tags**: osint, phone lookup

### Omgili
- **URL**: https://omgili.com
- **Use Case**: Search web forums and discussion boards
- **Description**: Search engine for web forums and discussion boards; its site fails to load because its security certificate has expired.
- **Tags**: forums, osint, socmint

### Online Random IMEI Number Generator
- **URL**: https://dyrk.org/tools/imei
- **Use Case**: Generate a random IMEI-format number for testing
- **Description**: Online generator of random IMEI numbers, the serial numbers that identify mobile phones, using a script credited to lazyzhu.com.
- **Tags**: fake identity, osint

### Onlinesim
- **URL**: https://onlinesim.net
- **Use Case**: Receive an SMS verification code on a temporary number
- **Description**: Service that rents temporary virtual phone numbers for receiving SMS verification codes; the .net site failed a certificate check here.
- **Tags**: osint, throwaway contact

### OpenCelliD
- **URL**: https://opencellid.org
- **Use Case**: Map estimated cell tower locations near a place
- **Description**: Open database of cell towers: enter an address or latitude and longitude to see estimated cell locations on a map, or download CSV exports.
- **Tags**: osint, phone lookup

### OSINT & SOCMINT Tooling
- **URL**: https://osint.support/chrome-extensions/2019/09/29/osint-socmint-tooling.html
- **Use Case**: Run social platform tools from a Chrome extension
- **Description**: Downloadable Chrome extension with tools for Facebook, Instagram, Twitter, TikTok and LinkedIn that run on a tab where you are logged in.
- **Tags**: osint, social media, socmint

### Osint Support
- **URL**: https://osint.support
- **Use Case**: Find Chrome extensions made for OSINT research
- **Description**: Site that builds tools for OSINT researchers, with a blog and a section of Chrome extensions.
- **Tags**: facebook, osint, socmint

### OSINT Toolkit
- **URL**: https://one-plus.github.io/Facebook
- **Use Case**: Look up Facebook profiles, posts and group members
- **Description**: Page of about 50 Facebook search links, such as profile by name, posts by user, friends of user and group members; some need the target's account ID.
- **Tags**: facebook, osint, socmint

### OSINT Toolkit Twitter Tools
- **URL**: https://one-plus.github.io/Twitter
- **Use Case**: Pick an X lookup by keyword, account or date
- **Description**: Toolkit page grouping about 20 X (Twitter) lookups, such as post search by keyword, place or date, account ID lookup, user media and mutual follows.
- **Tags**: osint, socmint, x-twitter

### OSINT.SH Reverse Whois
- **URL**: https://osint.sh/reversewhois
- **Use Case**: Find the domain names registered to an email address
- **Description**: Web lookup that takes an email address and lists the domain names registered to it.
- **Tags**: email lookup, osint

### Outlook People
- **URL**: https://outlook.live.com/people
- **Use Case**: See LinkedIn details on an Outlook contact card
- **Description**: Outlook.com contacts page where a contact's profile card can show public LinkedIn details once a LinkedIn account is connected.
- **Tags**: linkedin, osint, socmint

### OWASP Cheat Sheet Series
- **URL**: https://cheatsheetseries.owasp.org
- **Use Case**: Get the secure way to implement a risky feature
- **Description**: Concise, authoritative how-to guides for doing auth, input validation, session management, and more securely.
- **Tags**: best practices, owasp, reference, security

### OWASP Top 10
- **URL**: https://owasp.org/www-project-top-ten
- **Use Case**: Know the vulnerability classes to defend against first
- **Description**: The reference list of the most critical web application security risks, with explanations and prevention.
- **Tags**: owasp, reference, security, vulnerabilities

### OWASP ZAP
- **URL**: https://zaproxy.org
- **Use Case**: Run a DIY security scan against your own web app
- **Description**: Free, open-source web app security scanner — passive and active scanning for common vulnerabilities, with a spider and proxy.
- **Tags**: free, open source, owasp, pentest, security testing

### Passweird
- **URL**: https://passweird.com
- **Use Case**: Generate a secure password no one would want to steal or type
- **Description**: Generates secure passwords deliberately disgusting enough that no one would want to type them.
- **Tags**: humor, passwords

### Pentest-Tools Website Scanner
- **URL**: https://pentest-tools.com/website-vulnerability-scanning/website-scanner
- **Use Case**: Quick external vulnerability sweep of your own site
- **Description**: Hosted light vulnerability scan of a URL (headers, TLS, common issues) with a free single-target check.
- **Tags**: audit, scanner, security testing

### People Search Engine (Google CSE)
- **URL**: https://cse.google.com/cse?cx=14db36e158cd791c0
- **Use Case**: Search a curated set of sites for a person
- **Description**: Google Custom Search engine set up for finding people online; its page shows no list of the sites it covers.
- **Tags**: osint, people search

### PeopleFinder
- **URL**: https://peoplefinder.com
- **Use Case**: Look up public records for a person by name or phone
- **Description**: People-search site that takes a name, phone number or street address and returns public-records reports such as addresses, phone numbers and criminal records.
- **Tags**: osint, people search

### Periscopemap
- **URL**: https://periscopemap.live?ll=28.4419,-16.141899999999964&zoom=3
- **Use Case**: Open a map centred on a chosen place
- **Description**: Map on a Periscope-named domain, linked at a set latitude, longitude and zoom; the page would not load, so its contents are unconfirmed.
- **Tags**: osint, periscope, socmint

### Phone Scoop
- **URL**: https://phonescoop.com/phones
- **Use Case**: Compare phone specs side by side
- **Description**: Database of mobile phones by manufacturer and carrier, with a finder that filters by specs and side-by-side comparison of up to five models.
- **Tags**: osint, phone lookup

### Phonebook.cz
- **URL**: https://phonebook.cz
- **Use Case**: Find the emails and subdomains linked to a domain
- **Description**: Intelligence X search that takes a domain and lists the domains, email addresses or URLs tied to it; needs a paid Intelligence X license.
- **Tags**: email lookup, osint

### PhoneInfoga
- **URL**: https://github.com/sundowndev/PhoneInfoga
- **Use Case**: Gather carrier, line type and web traces for a phone number
- **Description**: Open-source framework that takes a phone number, reports country, area, carrier and line type, and runs scanners for owner clues; no longer maintained.
- **Tags**: osint, phone lookup

### Phonerator
- **URL**: https://martinvigo.com/tools/phonerator
- **Use Case**: Generate valid US phone numbers for a rate center
- **Description**: Generator of valid-format US phone numbers: choose a state and rate center, then search to produce numbers for that area.
- **Tags**: osint, phone lookup

### PIC/CIC Code Database
- **URL**: https://allredtech.com
- **Use Case**: Look up the carrier behind a PIC or CIC code
- **Description**: Lookup of telephone carrier identification codes (PIC and CIC) for North America and the Caribbean, filtered by state, country, postal code or company name.
- **Tags**: fake identity, osint

### Picodash
- **URL**: https://picodash.com
- **Use Case**: Export an account's Instagram followers or hashtag posts
- **Description**: Web tool, formerly Gramfeed, for exporting Instagram data such as an account's followers or a hashtag's posts.
- **Tags**: instagram, osint, socmint

### Pictame
- **URL**: https://pictame.com
- **Use Case**: Look up an Instagram account or post
- **Description**: Web tool for Instagram accounts and posts; the site refused an automated fetch, so its features could not be confirmed.
- **Tags**: instagram, osint, socmint

### Privnote
- **URL**: https://privnote.com
- **Use Case**: Share notes that auto-delete
- **Description**: Creates self-destructing notes.

### Proofy
- **URL**: https://proofy.io
- **Use Case**: Check whether email addresses are deliverable
- **Description**: Email verifier that checks one address, a CSV or TXT list, or API input and returns Valid, Invalid, Risky or Unknown for each.
- **Tags**: email lookup, osint

### ProtOSINT
- **URL**: https://github.com/pixelbubble/ProtOSINT
- **Use Case**: Check whether an address has a Proton Mail account
- **Description**: Python script that checks whether a Proton Mail address exists, when its encryption key was created, and whether a custom domain uses Proton Mail.
- **Tags**: email lookup, osint

### Pwned Passwords
- **URL**: https://haveibeenpwned.com/Passwords
- **Use Case**: Block breached passwords at registration
- **Description**: Check (via k-anonymity, so the password never leaves your machine in full) whether a password has appeared in known breaches — usable as an API in signup flows.
- **Tags**: api, auth, passwords, security

### quidam
- **URL**: https://pypi.org/project/quidam
- **Use Case**: Retrieve account details through password-reset pages
- **Description**: Python package from PyPI that retrieves account information from some websites through their forgotten-password function.
- **Tags**: osint, username search

### Quora
- **URL**: https://quora.com/Web-Search
- **Use Case**: Find Quora questions and answers by keyword
- **Description**: Question-and-answer site whose search box finds questions, answers, topics and people by keyword.
- **Tags**: forums, osint, socmint

### r/OSINT
- **URL**: https://reddit.com/r/OSINT
- **Use Case**: Discuss open-source intelligence methods and tools
- **Description**: Reddit community for learning and discussing open-source intelligence methods and tools; its stated rules bar using it to target individuals.
- **Tags**: osint, reddit, socmint

### r/whatisthisthing
- **URL**: https://reddit.com/r/whatisthisthing
- **Use Case**: Get strangers to identify an unknown object
- **Description**: Reddit community where people post photos of unidentified objects and ask other users to name them.
- **Tags**: osint, reddit, socmint

### r/whatisthisthing: engraved metal plate
- **URL**: https://reddit.com/r/whatisthisthing/comments/i63122/a_metal_plate_with_random_words_engraved_found
- **Use Case**: See how users identified an engraved metal plate
- **Description**: Single Reddit thread in r/whatisthisthing asking other users to identify a found metal plate engraved with random words.
- **Tags**: osint, reddit, socmint

### Random Face Generator
- **URL**: https://fakeinfo.net/random-face-generator
- **Use Case**: Generate a random face image
- **Description**: Generator page on FakeInfo.Net for random face images; the page body did not load, so its options and output are not confirmed.
- **Tags**: fake identity, osint

### Receive SMS Online
- **URL**: https://hs3x.com
- **Use Case**: Get a verification text on a temporary number
- **Description**: Free website that lists temporary US, UK and other virtual phone numbers and shows the texts sent to each one, for receiving verification codes.
- **Tags**: osint, throwaway contact

### Receive SMS Online for Free
- **URL**: https://freesmsverification.com
- **Use Case**: Get a verification text on a temporary number
- **Description**: Website that offers free virtual phone numbers for receiving SMS verification codes online; the page could not be read to confirm this.
- **Tags**: osint, throwaway contact

### Recherche auf Twitter (c't magazine)
- **URL**: https://heise.de/select/ct/2023/1/softlinks/yqh5?wt_mc=pred.red.ct.ct012023.168.softlink.softlink
- **Use Case**: Find Twitter research tools from c't magazine
- **Description**: Companion page to a 2023 c't magazine article listing tools for researching Twitter profiles, followers and location-tagged tweets.
- **Tags**: osint, socmint, x-twitter

### RecruitEm
- **URL**: https://recruitin.net/twitter.php
- **Use Case**: Find X profiles by city and skill keywords
- **Description**: Free form that builds a Google search for X (Twitter) profiles from a city or country and skill keywords to include or exclude.
- **Tags**: osint, socmint, x-twitter

### RecruitEm
- **URL**: https://recruitin.net/dribbble.php
- **Use Case**: Find Dribbble designers by skill keyword
- **Description**: Free form that builds a Google search for Dribbble profiles from skill keywords to include or exclude, with an option to skip profiles with no contact info.
- **Tags**: osint, social media, socmint

### RecruitEm
- **URL**: https://recruitin.net/xing.php
- **Use Case**: Find candidate profiles on Xing by job title
- **Description**: Free form that builds a Google search for Xing profiles from a job title, location and keywords to include or exclude.
- **Tags**: osint, social media, socmint

### RecruitEm
- **URL**: https://recruitin.net
- **Use Case**: Build a Google search for public LinkedIn profiles
- **Description**: Free form that builds a Google X-ray search for public LinkedIn profiles from country, job title, keywords, education, employer and certification.
- **Tags**: linkedin, osint, socmint

### Reddit Bureau of Investigation
- **URL**: https://reddit.com/r/rbi
- **Use Case**: Get crowd help investigating a mystery on Reddit
- **Description**: Reddit community where members post puzzles, odd objects and unexplained encounters for others to help investigate.
- **Tags**: osint, reddit, socmint

### Reddit Investigator
- **URL**: https://redditinvestigator.com
- **Use Case**: Look up a Reddit user's posts and comments
- **Description**: Reddit user lookup for researching an account's posts and comments; a third-party listing reports it as discontinued.
- **Tags**: osint, reddit, socmint

### Reddit Search
- **URL**: https://reddit.com/search
- **Use Case**: Search Reddit posts and communities by keyword
- **Description**: Reddit's built-in search for finding posts, comments and communities across the site by keyword.
- **Tags**: osint, reddit, socmint

### Report URI
- **URL**: https://report-uri.com
- **Use Case**: Roll out a strict CSP without guesswork
- **Description**: Collects and charts CSP and other browser security violation reports so you can tighten policy without breaking the site.
- **Tags**: csp, headers, monitoring, security

### Resume Builder
- **URL**: https://vinaysomawat.github.io/Resume-Builder
- **Use Case**: Build a resume from a choice of templates
- **Description**: Online resume builder offering Basic, Standard and Modern templates to fill in with your own details; the page calls the Standard and Modern ones free.
- **Tags**: fake identity, osint

### ReversePhoneCheck
- **URL**: https://reversephonecheck.com
- **Use Case**: Find names tied to a phone number
- **Description**: People-search site that takes a phone number and lists the names and addresses associated with it.
- **Tags**: osint, phone lookup

### Saltify
- **URL**: https://saltify.io
- **Use Case**: Share secrets securely
- **Description**: Shares sensitive information via encrypted links.

### Scam Detector
- **URL**: https://scam-detector.com/find-scams
- **Use Case**: Check if a website or company is a scam
- **Description**: Fraud prevention resource.
- **Tags**: security

### Search All Junk
- **URL**: https://searchalljunk.com
- **Use Case**: Search several classifieds sites at once
- **Description**: Search tool that queries Craigslist, Recycler, Penny Saver, Oodle and Facebook Marketplace classifieds together from one search box.
- **Tags**: forums, osint, socmint

### Search is Back!
- **URL**: https://searchisback.com
- **Use Case**: Find Facebook people by place, school or employer
- **Description**: Web form that builds Facebook searches for people, events, posts and photos by location, relationship, school or employer; Facebook changes may break it.
- **Tags**: facebook, osint, socmint

### Search.buzz.im
- **URL**: https://search.buzz.im
- **Use Case**: Search Telegram accounts, posts or groups
- **Description**: Search site listed for Telegram research; its page would not load, so what it searches and what it returns are unconfirmed.
- **Tags**: osint, socmint, telegram

### SearchPOF
- **URL**: https://searchpof.com
- **Use Case**: Find a Plenty of Fish user without username search
- **Description**: Guide to finding Plenty of Fish (POF) users, with a search box powered by Google Custom Search; the page says POF removed username search.
- **Tags**: osint, username search

### Security Headers
- **URL**: https://securityheaders.com
- **Use Case**: Check and harden a site's security headers
- **Description**: Scans a URL's HTTP response headers (CSP, HSTS, X-Frame-Options, etc.) and grades them with fix guidance.
- **Tags**: csp, headers, security testing, web

### SecurityTrails
- **URL**: https://securitytrails.com
- **Use Case**: See how a domain's DNS has changed over time
- **Description**: Current and historical DNS records, subdomains, WHOIS and IP history for any domain.
- **Tags**: dns, infrastructure, osint, recon

### SendaText
- **URL**: https://sendatext.co
- **Use Case**: Send or receive a text without a phone
- **Description**: Website for sending or receiving text messages online; the page could not be read to confirm what the service offers.
- **Tags**: osint, throwaway contact

### ShadowCrypt Phone Number Lookup
- **URL**: https://shadowcrypt.net/tools/phone
- **Use Case**: Check the carrier and country of an international number
- **Description**: Phone-number checker that takes an international number in E.164 format and reports its carrier, country, validity and standard formats.
- **Tags**: osint, phone lookup

### Sherlock
- **URL**: https://github.com/sherlock-project/sherlock
- **Use Case**: Check which social networks use a username
- **Description**: Open-source command-line tool that checks whether usernames exist on 400+ social networks, saving results to a text file per username.
- **Tags**: osint, username search

### Shodan
- **URL**: https://shodan.io
- **Use Case**: See what a server or network exposes to the internet
- **Description**: Search engine for internet-connected devices: indexes the open ports, service banners and software that servers show to the public internet.
- **Tags**: infrastructure, osint, recon, search

### SimpleLogin
- **URL**: https://simplelogin.io
- **Use Case**: Hide your real email behind aliases
- **Description**: Open-source email alias service that forwards mail sent to alias addresses to your real inbox and lets you reply from the alias.
- **Tags**: osint, throwaway contact

### Simplescraper OSINT
- **URL**: https://airtable.com/shrceHfvukijgln9q
- **Use Case**: Open the shared Simplescraper OSINT Airtable base
- **Description**: Shared Airtable base named Simplescraper OSINT; the fetch got only Airtable's unsupported-browser notice, so the base's contents could not be read.
- **Tags**: osint, socmint, x-twitter

### Skopenow
- **URL**: https://skopenow.com
- **Use Case**: Run an entity search and map links between entities
- **Description**: Online research and security software for qualified organizations, with entity search, link analysis, location-based threat monitoring and risk pre-checks.
- **Tags**: osint, social media, socmint

### Smart_SearchBot
- **URL**: https://t.me/Smart_SearchBot
- **Use Case**: Look up information through a Telegram search bot
- **Description**: Telegram bot @Smart_SearchBot; its Telegram contact page names the bot but does not say what it searches or returns.
- **Tags**: osint, socmint, telegram

### SMSToMe
- **URL**: https://smstome.com
- **Use Case**: Receive a text on a temporary number
- **Description**: Website for receiving text messages on temporary phone numbers; the site refused access, so this description is unconfirmed.
- **Tags**: osint, throwaway contact

### Snap Map
- **URL**: https://snapchat.com
- **Use Case**: Browse friend locations and public Snaps on a map
- **Description**: Map inside the Snapchat app that shows friends who share their location and public Snaps posted from places; the old web map now redirects to the app download page.
- **Tags**: osint, snapchat, socmint

### Snapchat Usernames
- **URL**: https://snapchat-usernames.com
- **Use Case**: Look up Snapchat usernames
- **Description**: Snapchat username lookup site; the page could not be reached, so what it returns is unconfirmed.
- **Tags**: osint, snapchat, socmint

### Snapdex
- **URL**: https://snapdex.com
- **Use Case**: Search for Snapchat accounts by name
- **Description**: Snapchat search site; the page could not be reached, so what it searches is unconfirmed.
- **Tags**: osint, snapchat, socmint

### Snoop
- **URL**: https://github.com/snooppr/snoop
- **Use Case**: Find which sites a username has accounts on
- **Description**: Open-source tool that searches a username across a database of about 5,400 websites and saves the matches as txt, csv or html reports.
- **Tags**: osint, username search

### SnoopSnoo
- **URL**: https://snoopsnoo.com
- **Use Case**: See a summary of a Reddit user's activity
- **Description**: Free site that summarized a Reddit user's or subreddit's activity from recent posts and comments; third-party listings report it as abandoned.
- **Tags**: osint, reddit, socmint

### snscrape
- **URL**: https://pypi.org/project/snscrape
- **Use Case**: Pull posts from social networks in the terminal
- **Description**: Open-source Python command-line tool and library that scrapes profiles, posts and searches from Twitter, Reddit, Instagram, Telegram and other networks, as URLs or JSONL.
- **Tags**: osint, social media, socmint

### Snyk
- **URL**: https://snyk.io
- **Use Case**: Find and fix vulnerable packages in a project
- **Description**: Scans your dependencies, containers, and IaC for known vulnerabilities and opens fix PRs; free tier for small projects.
- **Tags**: dependencies, devsecops, security, vulnerabilities

### Social Analyzer
- **URL**: https://pypi.org/project/social-analyzer
- **Use Case**: Find a person's profiles across about 1,000 sites
- **Description**: API, command-line and web app that checks a username against about 1,000 social media websites and rates each match from 0 to 100.
- **Tags**: osint, username search

### Social Media Prisma (Ethority)
- **URL**: https://ethority.de/social-media-prisma
- **Use Case**: View Ethority's map of the social media landscape
- **Description**: Social media landscape infographic published by Ethority on its own site; the page could not be loaded to confirm its contents.
- **Tags**: osint, social media, socmint

### Social Search Engine
- **URL**: https://socialsearchengine.org
- **Use Case**: Search several social networks at once
- **Description**: Web tool from Open Admin Tools for searching social information across several networks, including Facebook, Twitter, Steemit and LinkedIn.
- **Tags**: osint, social media, socmint

### Social Searcher
- **URL**: https://social-searcher.com/search-users
- **Use Case**: Search public social media posts by keyword
- **Description**: Social media search page that takes a keyword query with exact phrases, exclusions and OR, and returns public posts through a Google Programmable Search Engine.
- **Tags**: osint, social media, socmint

### Social Searcher Facebook Search
- **URL**: https://social-searcher.com/facebook-search
- **Use Case**: Find public Facebook posts and profiles by keyword
- **Description**: Unofficial search page that finds public Facebook posts and person profiles through third-party search engines, with quote, minus and OR operators.
- **Tags**: facebook, osint, socmint

### SocialGrep
- **URL**: https://socialgrep.com
- **Use Case**: Search Reddit posts and comments by keyword and date
- **Description**: Reddit search and analytics service that filters posts and comments by keyword, subreddit, domain and date, with data exports and an API.
- **Tags**: osint, reddit, socmint

### socialscan
- **URL**: https://pypi.org/project/socialscan
- **Use Case**: Check if a username or email is taken on sites
- **Description**: Python library and command-line tool that checks whether usernames or email addresses are free or taken on online platforms.
- **Tags**: osint, username search

### socid-extractor
- **URL**: https://pypi.org/project/socid-extractor
- **Use Case**: Pull account fields out of a profile page
- **Description**: Python library and command-line tool that turns a social profile page or API response into a structured record of account fields.
- **Tags**: osint, username search

### SOCMINT
- **URL**: https://start.me/p/Wp1kpe/socmint
- **Use Case**: Browse a set of social media investigation links
- **Description**: Bookmark page on the start.me service that gathers links for social media investigation on one screen.
- **Tags**: osint, social media, socmint

### SOWEL: SOcmint Weaknesses Enumeration List
- **URL**: https://sowel.soxoj.com/about
- **Use Case**: Look up weak points and techniques for social media OSINT
- **Description**: Reference wiki listing the weaknesses, techniques and platform features investigators can use to get more information from social media accounts.
- **Tags**: osint, social media, socmint

### SowSearch
- **URL**: https://sowsearch.info
- **Use Case**: Build Facebook search links with date and location filters
- **Description**: Free, open web page that builds Facebook search links from keyword, date, location and poster filters for posts, people, photos, videos, events and pages.
- **Tags**: facebook, osint, socmint

### Spokeo
- **URL**: https://spokeo.com
- **Use Case**: Look up someone's contact information
- **Description**: People search and contact finder.
- **Tags**: search

### Spoonbill
- **URL**: https://spoonbill.io
- **Use Case**: Get alerted when an X profile bio changes
- **Description**: Alert tool for X accounts that flags changes to a profile's bio; details unverified because the site returned errors.
- **Tags**: osint, socmint, x-twitter

### Spy Dialer
- **URL**: https://spydialer.com
- **Use Case**: Check who owns a US phone number and whether it is spam
- **Description**: Free reverse phone lookup for U.S. numbers that shows the owner name when available, line type, carrier and spam flags; no sign-up.
- **Tags**: osint, phone lookup

### SSL Labs Server Test
- **URL**: https://ssllabs.com/ssltest
- **Use Case**: Verify HTTPS on a deployed site is configured correctly
- **Description**: Deep analysis of a site's TLS/SSL configuration with a letter grade and specific weaknesses to fix.
- **Tags**: essential, https, security testing, tls, web

### StatCounter Global Stats
- **URL**: https://gs.statcounter.com
- **Use Case**: Compare browser or search engine market share
- **Description**: Free charts of browser, OS, search engine and social media usage share, filterable by period and region, exportable as PNG or CSV.
- **Tags**: osint, social media, socmint

### StayFriends
- **URL**: https://stayfriends.de
- **Use Case**: Find former classmates from a German school
- **Description**: German site for finding former schoolmates by federal state and school, with class photos to view; the page says the search is free.
- **Tags**: osint, social media, socmint

### Symbols.com
- **URL**: https://symbols.com/what-is-this-symbol.php
- **Use Case**: Identify an unknown symbol, tattoo or engraving
- **Description**: Community page where you post an image of an unknown symbol, tattoo or engraving and site editors and other commenters try to identify it.
- **Tags**: osint, reddit, socmint

### Sync.me
- **URL**: https://sync.me
- **Use Case**: Identify an unknown caller or check a text
- **Description**: Caller ID and spam-blocking app that shows the name behind an unknown number and scans suspicious text messages for scams.
- **Tags**: osint, phone lookup

### Tagged
- **URL**: https://tagged.com
- **Use Case**: Meet new people through chat or live video
- **Description**: Social and dating site for meeting new people through chat, profiles filtered by shared interests, and live video chat.
- **Tags**: osint, social media, socmint

### Telegago
- **URL**: https://cse.google.com/cse?&cx=006368593537057042503:efxu7xprihg
- **Use Case**: Search public Telegram channels and posts by keyword
- **Description**: Google Custom Search engine for Telegram content: type a keyword and get Google results from public Telegram channels, groups and posts.
- **Tags**: osint, socmint, telegram

### Telegram Channels
- **URL**: https://telegramchannels.me
- **Use Case**: Browse popular Telegram channels by topic
- **Description**: Directory of Telegram channels sorted by category, with top charts of the most popular channels in each topic.
- **Tags**: osint, socmint, telegram

### Telegram.im
- **URL**: https://telegram.im/tools/index.php
- **Use Case**: Compare Telegram channels and groups by member count
- **Description**: Catalog of Telegram channels, groups, users and bots, sortable by popularity, member count or date added, with a statistics page for each entry.
- **Tags**: osint, socmint, telegram

### TelegramDB
- **URL**: https://telegramdb.org
- **Use Case**: Find public Telegram groups and channels by keyword
- **Description**: Search index of public Telegram groups and channels you query by keyword, also offered through the Telegram bot @tgdb_bot.
- **Tags**: osint, socmint, telegram

### TGStat
- **URL**: https://tgstat.ru
- **Use Case**: Compare Telegram channels by audience and growth
- **Description**: Statistics catalog of Telegram channels and chats with search across their posts; an API offers the same statistics, search and callbacks.
- **Tags**: osint, socmint, telegram

### ThatsThem
- **URL**: https://thatsthem.com
- **Use Case**: Look up a person by phone number or email
- **Description**: People search site that third-party reviews describe as offering lookups by name, phone, email, address, IP address and VIN.
- **Tags**: osint, people search

### The Endorser
- **URL**: https://github.com/eth0izzle/the-endorser
- **Use Case**: Map who endorses whom for skills on LinkedIn
- **Description**: Python command-line tool that logs into LinkedIn and draws a graph of which people endorse each other for which skills; no longer maintained.
- **Tags**: linkedin, osint, socmint

### The Erotic Review
- **URL**: https://theeroticreview.com
- **Use Case**: Read member reviews and forum discussions
- **Description**: Member-review community with discussion boards and reviews of adult-industry services.
- **Tags**: forums, osint, socmint

### The Facebook Matrix
- **URL**: https://plessas.net/facebookmatrix
- **Use Case**: Narrow Facebook search results with URL filter formulas
- **Description**: Reference of JSON filter formulas for Facebook search URLs, by city, school, employer, group, author, location or date, that you Base64-encode and paste in.
- **Tags**: facebook, osint, socmint

### The new Facebook Graph Search – part 1
- **URL**: https://osintcurio.us/2019/08/22/the-new-facebook-graph-search-part-1
- **Use Case**: Build filtered Facebook search URLs by hand
- **Description**: Blog post that explains how to build filtered Facebook search URLs with Base64-encoded JSON, written after Graph Search closed in June 2019.
- **Tags**: facebook, osint, socmint

### The new Facebook Graph Search – part 2
- **URL**: https://osintcurio.us/2019/08/22/the-new-facebook-graph-search-part-2
- **Use Case**: Combine Facebook search filters into one URL
- **Description**: Blog post on merging several same-category Facebook search filters into one Base64 URL, with a worked example of people in Mountain View who work at Google.
- **Tags**: facebook, osint, socmint

### The Strategic Recruiter: Custom Search Engines
- **URL**: https://linkedin.com/pulse/strategic-recruiter-custom-search-engines-chris-bell
- **Use Case**: Find recruiter-built Google custom searches for sourcing
- **Description**: LinkedIn article by Chris Bell (2018) that shares about a dozen of his Google Custom Search Engines for sourcing on LinkedIn, GitHub, Stack Overflow and more.
- **Tags**: linkedin, osint, socmint

### This Rental Does Not Exist
- **URL**: https://thisrentaldoesnotexist.com
- **Use Case**: See an example of an AI-generated rental listing
- **Description**: Demo site that shows a machine-made vacation rental listing, with StyleGAN photos and text from a language model trained on Airbnb listings.
- **Tags**: fake identity, osint

### This Resume Does Not Exist
- **URL**: https://thisresumedoesnotexist.com
- **Use Case**: Browse sample resume layouts for inspiration
- **Description**: Library of over 1,000 AI-written sample resumes for famous people, sorted into categories such as Acting, Music, Sports and Politics.
- **Tags**: fake identity, osint

### Thread Reader
- **URL**: https://threadreaderapp.com
- **Use Case**: Read a long X thread as one page
- **Description**: Paste an X (Twitter) thread's link or ID, or mention @ThreadReaderApp with "unroll", and get the thread's posts on one readable page.
- **Tags**: osint, socmint, x-twitter

### TikTok Quick Search
- **URL**: https://osintcombine.com/tiktok-quick-search
- **Use Case**: Search TikTok accounts, posts and groups
- **Description**: Search tool for looking up TikTok accounts, posts and groups, from the batch title; the page returned only an icon, not its text.
- **Tags**: osint, socmint, tiktok

### Tinfoleak
- **URL**: https://kitploit.com/2018/04/tinfoleak-v24-most-complete-open-source.html
- **Use Case**: Profile a Twitter account's timeline and places
- **Description**: Open-source tool that analyzes a Twitter account, keyword or location and outputs structured analyst reports; needs your own Twitter API keys.
- **Tags**: osint, socmint, x-twitter

### Top.gg
- **URL**: https://top.gg/servers
- **Use Case**: Find public Discord servers ranked by votes
- **Description**: Directory of public Discord servers that sits beside a Discord bot list, where member votes raise a server's placement.
- **Tags**: discord, osint, socmint

### Tor Project
- **URL**: https://torproject.org
- **Use Case**: Access the internet anonymously
- **Description**: Browser enabling safe anonymous web browsing.
- **Tags**: browser, security

### ToS;DR
- **URL**: https://tosdr.org
- **Use Case**: Understand a website's terms of service
- **Description**: Summarizes website terms of service.
- **Tags**: security

### Treeverse
- **URL**: https://github.com/paulgb/Treeverse/blob/master/README.md
- **Use Case**: Visualize how a Bluesky conversation branches
- **Description**: Web app that displays a Bluesky conversation as a tree of replies, so branches show visually.
- **Tags**: osint, socmint, x-twitter

### Trendsmap
- **URL**: https://trendsmap.com
- **Use Case**: See which X (Twitter) hashtags are trending
- **Description**: Site listing trending X (Twitter) hashtags and topics; this check could not load the page to confirm how it displays them.
- **Tags**: osint, socmint, x-twitter

### Truecaller
- **URL**: https://truecaller.com
- **Use Case**: Identify an unknown caller by phone number
- **Description**: Caller ID and spam-blocking phone app that looks up any local or international number and shows the name linked to it.
- **Tags**: osint, phone lookup

### Truecaller Search Engine
- **URL**: https://cse.google.com/cse?cx=c46b76bce1848d976
- **Use Case**: Search the sites this osintme.com engine covers
- **Description**: Google Custom Search engine, branded with an osintme.com logo, that searches a set of sites the page itself does not list.
- **Tags**: osint, phone lookup

### TruePeopleSearch
- **URL**: https://truepeoplesearch.com
- **Use Case**: Find who is listed under a phone number
- **Description**: People search site with reverse phone lookup that returns names, addresses and related people, as described in third-party reviews.
- **Tags**: osint, people search

### Trumail
- **URL**: https://github.com/trumail/trumail
- **Use Case**: Check whether an email address can receive mail
- **Description**: Open-source Go email verification service you host yourself: takes an address and checks over SMTP whether its inbox accepts mail; archived since 2018.
- **Tags**: email lookup, osint

### TruthFinder
- **URL**: https://truthfinder.com
- **Use Case**: Run a paid background check on a person
- **Description**: Paid people search and background check service that looks up public records by name, phone, email or address, according to reviews.
- **Tags**: osint, people search

### TruthNest
- **URL**: https://app.truthnest.com
- **Use Case**: Request corporate access to X account profiling
- **Description**: Twitter (X) account profiling service; its page says free access ended after Twitter's pricing changes and corporate access is by email request.
- **Tags**: osint, socmint, x-twitter

### Tweepsect
- **URL**: https://tweepsect.com
- **Use Case**: Check who follows an X account and who follows back
- **Description**: Analysis tool for X accounts that lists who follows whom, including follow-backs.
- **Tags**: osint, socmint, x-twitter

### Tweet Archive Search
- **URL**: https://cse.google.com/cse/publicurl?cx=005797772976587943970:kffjgylvzwu
- **Use Case**: Search archived tweets through a Google search box
- **Description**: Google Programmable Search Engine for searching archived tweets, going by its name; the fetched page did not show which sites it covers.
- **Tags**: osint, socmint, x-twitter

### Tweet Binder
- **URL**: https://tweetbinder.com
- **Use Case**: Measure the reach of a hashtag or keyword on X
- **Description**: Hashtag and keyword analytics for X (Twitter): enter a hashtag or keyword to get an impact report, free for up to 200 posts from the last 7 days.
- **Tags**: osint, socmint, x-twitter

### Tweet Finder
- **URL**: https://cse.google.com/cse/publicurl?cx=016621447308871563343:u4r_fupvs-e
- **Use Case**: Search for tweets through a Google search box
- **Description**: Google Programmable Search Engine for finding tweets, going by its name; the fetched page did not show which sites it covers.
- **Tags**: osint, socmint, x-twitter

### Tweet Topic Explorer
- **URL**: https://tweettopicexplorer.neoformix.com
- **Use Case**: Explore the topics in a set of tweets
- **Description**: Browser app by Neoformix for exploring the topics in a set of tweets, going by its name; the page shows only an Explore button and a 2011 copyright.
- **Tags**: osint, socmint, x-twitter

### TweetDeck
- **URL**: https://tweetdeck.twitter.com
- **Use Case**: Watch several X timelines and searches side by side
- **Description**: X's multi-column web dashboard for watching several timelines, searches and lists side by side.
- **Tags**: osint, socmint, x-twitter

### TweeterID
- **URL**: https://tweeterid.com
- **Use Case**: Convert an X username to its numeric account ID
- **Description**: Converts an X account's numeric ID to its @username, or an @handle to its ID.
- **Tags**: osint, socmint, x-twitter

### Tweetmap
- **URL**: https://omnisci.com/demos/tweetmap
- **Use Case**: View tweets plotted on a map
- **Description**: OmniSci demo page meant to plot tweets on a map; the page could not be read, so its data and controls are unconfirmed.
- **Tags**: osint, socmint, x-twitter

### Tweetmapper
- **URL**: https://danielezrajohnson.shinyapps.io/tweetmapper
- **Use Case**: Map Twitter data in an interactive app
- **Description**: Shiny web app on shinyapps.io for mapping Twitter data; the page stayed on a loading screen.
- **Tags**: osint, socmint, x-twitter

### Tweettioc
- **URL**: https://tweettioc.com
- **Use Case**: Research an X (Twitter) account or post
- **Description**: Website listed for X (Twitter) research; its page could not be read because of a certificate error, so its inputs and outputs are unconfirmed.
- **Tags**: osint, socmint, x-twitter

### Twiangulate
- **URL**: https://twiangulate.com/search
- **Use Case**: Find accounts that a set of X users have in common
- **Description**: Search tool that finds X (Twitter) accounts followed by, following or reaching a set of users, shown in a table you can export or save as a list.
- **Tags**: osint, socmint, x-twitter

### Twiangulate
- **URL**: https://twiangulate.com
- **Use Case**: Find accounts shared between X users' followers and friends
- **Description**: Shows the accounts that overlap between the followers and friends of one or more X accounts, with keyword filters.
- **Tags**: osint, socmint, x-twitter

### Twilio
- **URL**: https://twilio.com
- **Use Case**: Send SMS or voice messages from your own app
- **Description**: Cloud communications platform with APIs for sending SMS, voice calls and email from your own code, with a free trial.
- **Tags**: osint, throwaway contact

### Twint
- **URL**: https://pypi.org/project/twint
- **Use Case**: Scrape public X posts and profiles without the API
- **Description**: Open-source Python tool that scrapes X (Twitter) posts, followers and likes without the API, saving to text, CSV, JSON or SQLite; archived in 2023.
- **Tags**: osint, socmint, x-twitter

### Twipho Photo Search
- **URL**: https://twipho.net
- **Use Case**: Find images posted on X by keyword or account
- **Description**: Search engine for images on X (Twitter): enter a keyword, hashtag or @username and get image-rich public posts to preview and download. Free, no sign-up.
- **Tags**: osint, socmint, x-twitter

### Twitonomy
- **URL**: https://twitonomy.com
- **Use Case**: Track followers and non-followers on an X account
- **Description**: Analytics tool for an X (Twitter) account: connect it to list followers and non-followers, track follower growth, map locations and export to Excel.
- **Tags**: osint, socmint, x-twitter

### Twitter Advanced Search
- **URL**: https://github.com/igorbrigadir/twitter-advanced-search
- **Use Case**: Build an X search with date, engagement and account filters
- **Description**: Reference guide to X search operators such as from:, since: and min_faves:, with links that run each query in X's own search.
- **Tags**: osint, socmint, x-twitter

### Twitter Location Data
- **URL**: https://keitharm.me/projects/tweet
- **Use Case**: Look up location data on Twitter posts
- **Description**: Personal project page on keitharm.me offering Twitter location data, as its title says; the server returned an error, so the page could not be read.
- **Tags**: osint, socmint, x-twitter

### Twitter Monitoring
- **URL**: https://one-plus.github.io/TwitterMonitor
- **Use Case**: Monitor X posts by keyword, hashtag or account
- **Description**: Web page with boxes for an X account name or a keyword or hashtag, meant to show matching posts in a search output box.
- **Tags**: osint, socmint, x-twitter

### Twitter Photo Search
- **URL**: https://cse.google.com/cse/publicurl?cx=006290531980334157382:_ltcjq0robu
- **Use Case**: Search for X (Twitter) photos through Google
- **Description**: Google Custom Search engine named for X (Twitter) photo search; the page shows only a search shell, so the sites it covers are unconfirmed.
- **Tags**: osint, socmint, x-twitter

### Twitter Profiles Directory
- **URL**: https://x.com/i/directory
- **Use Case**: Browse public X profiles in X's directory
- **Description**: X's directory of public profiles at its old Twitter address; the new page could not be read, so its contents are unconfirmed.
- **Tags**: osint, socmint, x-twitter

### Twitter Search Engine
- **URL**: https://cse.google.com/cse?cx=5857bab69c8b8e37e
- **Use Case**: Search X (Twitter) content through Google
- **Description**: Google Custom Search engine named for X (Twitter) search; the page shows only a search shell, so the sites it covers are unconfirmed.
- **Tags**: osint, socmint, x-twitter

### uFind.name
- **URL**: https://ufind.name
- **Use Case**: Look up public records about a named person
- **Description**: People search engine that compiles public online records for a name, including vehicle, business, patent and court records; the page says it is free.
- **Tags**: osint, people search

### UK National Insurance Number Validator
- **URL**: https://fakenamegenerator.com/national-insurance-number.php
- **Use Case**: Check a UK National Insurance number's format
- **Description**: Validator that checks whether a UK National Insurance number has a valid format and prefix, runs in the browser, and lists sample numbers for testing.
- **Tags**: fake identity, osint

### UK-OSINT
- **URL**: https://uk-osint.net/facebook.html
- **Use Case**: Find tools and methods for researching Facebook accounts
- **Description**: Page of Facebook research links: account ID and creation-date lookups, Google search methods, comment exporters, video downloaders and the Ad Library.
- **Tags**: facebook, osint, socmint

### UK-OSINT X Links
- **URL**: https://uk-osint.net/xtwitter.html
- **Use Case**: Find how-to links for researching X accounts
- **Description**: Curated page of links and short how-to notes for researching X (Twitter) accounts, such as converting usernames to IDs and checking creation dates.
- **Tags**: osint, socmint, x-twitter

### Ultimate Social Scrapers
- **URL**: https://github.com/harismuneer/Ultimate-Social-Scrapers
- **Use Case**: Look up the former Ultimate Facebook Scraper project
- **Description**: GitHub repo for Facebook, Instagram and X scrapers that now holds only a README, which says Cyfy Labs is no longer active.
- **Tags**: facebook, osint, socmint

### US Social Security Number Validator
- **URL**: https://fakenamegenerator.com/social-security-number.php
- **Use Case**: Check a US SSN against SSA numbering rules
- **Description**: Validator that checks in the browser whether a US Social Security number follows SSA numbering rules; full sample numbers need a sign-in.
- **Tags**: fake identity, osint

### US SSN / Driver License / Tax ID Generator
- **URL**: https://businer.com/usssndriverlicenseidgen.php
- **Use Case**: Generate random US ID numbers for a chosen state
- **Description**: Generator that outputs random US SSN, driver's license, state ID, passport and tax ID numbers for a chosen state, stating they match no real person.
- **Tags**: fake identity, osint

### UVRX Social Search
- **URL**: https://uvrx.com/social.html
- **Use Case**: Search social network posts and profiles with UVRX
- **Description**: Social search mode of the UVRX search engine, which also has a file search mode for online storage services.
- **Tags**: osint, social media, socmint

### Valid Number
- **URL**: https://validnumber.com
- **Use Case**: Check a number's line type and caller name
- **Description**: Free reverse phone lookup that checks whether a number is a landline, cell or fax line and shows the caller associated with it.
- **Tags**: osint, phone lookup

### VIN Check Digit Validator
- **URL**: https://fakenamegenerator.com/vehicle-identification-number.php
- **Use Case**: Check whether a VIN's check digit is valid
- **Description**: Browser-based checker that tests a vehicle identification number's characters and ninth check digit, reads its model year, and offers random sample VINs.
- **Tags**: fake identity, osint

### VirusTotal
- **URL**: https://virustotal.com
- **Use Case**: Check a suspicious file or link before opening it.
- **Description**: Scans files/URLs against multiple antivirus engines.
- **Tags**: osint, scanning, security

### Vizit: Visual Reddit
- **URL**: https://redditstuff.github.io/sna/vizit
- **Use Case**: Explore a network graph of Reddit content
- **Description**: Interactive network graph of Reddit content built with sigma.js, explored through a search box, a group selector and a legend.
- **Tags**: osint, reddit, socmint

### VK Search Engine
- **URL**: https://cse.google.com/cse?cx=f5e7cd4c6e33954ec
- **Use Case**: Search VK pages through a Google custom search
- **Description**: Google Custom Search engine listed as a VK search: type a keyword and get Google results from the sites the engine is set to cover.
- **Tags**: osint, social media, socmint

### Washington State Driver's License Generator
- **URL**: https://mmarvick.github.io/wa-drivers-license
- **Use Case**: See how a Washington license number is built from a name
- **Description**: Form that takes a first, middle and last name and a birth date and generates a Washington State driver's license number, adapted from a Marist College check-digit page.
- **Tags**: fake identity, osint

### Wayback Tweets
- **URL**: https://waybacktweets.streamlit.app
- **Use Case**: Pull archived tweets for a username
- **Description**: Open-source Python tool that pulls archived tweets for a username from the Wayback Machine and saves them as HTML, CSV or JSON.
- **Tags**: osint, socmint, x-twitter

### Webmii
- **URL**: https://webmii.com
- **Use Case**: Find web pages that mention a person's full name
- **Description**: People search engine that takes a first and last name, with optional keywords to filter out homonyms, and searches public web pages.
- **Tags**: osint, people search

### What Is Discord?
- **URL**: https://digitaltrends.com/gaming/what-is-discord
- **Use Case**: Learn how Discord servers and channels work
- **Description**: Digital Trends explainer on how Discord works: servers, text and voice channels, direct messages, and the free app's optional paid Nitro tier.
- **Tags**: discord, osint, socmint

### WhatBreach
- **URL**: https://github.com/Ekultek/WhatBreach
- **Use Case**: Find the data breaches an email address appears in
- **Description**: Command-line tool that takes one email address or a file of addresses and lists the known breaches, database dumps and pastes each one appears in.
- **Tags**: email lookup, osint

### WhatsMyName Web
- **URL**: https://whatsmyname.app
- **Use Case**: Find which listed sites use a username
- **Description**: Free, browser-based username checker that searches over 700 websites from the community WhatsMyName dataset.
- **Tags**: osint, username search

### Whitepages
- **URL**: https://whitepages.com
- **Use Case**: Look up a person's contact details and address
- **Description**: People search site offering person, phone and address lookups and background checks, according to third-party descriptions.
- **Tags**: osint, people search

### Who Called Me
- **URL**: https://whocalledme.com
- **Use Case**: Look up a caller's name and linked details
- **Description**: Reverse phone lookup site that takes a phone number and returns a caller report with the name and other details linked to it.
- **Tags**: osint, phone lookup

### Who Posted What?
- **URL**: https://whopostedwhat.com
- **Use Case**: Search Facebook posts by keyword, date and place
- **Description**: Facebook keyword search for posts filtered by date, location or profile, built for journalists and researchers.
- **Tags**: osint, social media, socmint

### Windows Phone IMEI Generator
- **URL**: https://wpimeigenerator.github.io
- **Use Case**: Generate a sample IMEI for a Windows Phone
- **Description**: Single web page by kolyanok, linked to a 4PDA forum post, titled as an IMEI number generator for Windows Phone devices; no controls loaded when checked.
- **Tags**: fake identity, osint

### World Map of Social Networks
- **URL**: https://vincos.it/world-map-of-social-networks
- **Use Case**: Compare which social networks lead in each country
- **Description**: Series of world maps, June 2009 to January 2023, showing the most popular social network in each country, based mainly on Alexa and SimilarWeb traffic data.
- **Tags**: osint, social media, socmint

### Worldcam
- **URL**: https://worldc.am
- **Use Case**: Look up an Instagram account or post
- **Description**: Instagram-related site whose page returned only its domain name to a text fetch, so what it offers is unconfirmed.
- **Tags**: instagram, osint, socmint

### X Advanced Search
- **URL**: https://x.com/search-advanced
- **Use Case**: Search X posts with advanced filters
- **Description**: X's advanced search form for finding posts, moved from the old Twitter address; the new page could not be read to confirm its filters.
- **Tags**: osint, socmint, x-twitter

### X Developer Docs
- **URL**: https://docs.x.com
- **Use Case**: Look up how to build X API search queries
- **Description**: Developer documentation for X's API covering posts, users, spaces, DMs, lists and trends; access needs an account, API keys and pay-per-use credits.
- **Tags**: osint, socmint, x-twitter

### X Explore Search
- **URL**: https://twitter.com/explore
- **Use Case**: Search posts on X from the Explore page
- **Description**: Explore page on X (formerly Twitter) for searching posts and accounts; signed-out visitors are sent to the login page.
- **Tags**: osint, socmint, x-twitter

### X Password Reset
- **URL**: https://x.com/i/jf/web/password_reset
- **Use Case**: Recover access to an X account by password reset
- **Description**: Account recovery page on X (formerly Twitter) where a password reset for an account can be requested.
- **Tags**: osint, socmint, x-twitter

### X Profiles Directory
- **URL**: https://x.com/i/directory/profiles
- **Use Case**: Browse the X profiles directory
- **Description**: Directory page on X (formerly Twitter) that lists user profiles, reached at the path /i/directory/profiles.
- **Tags**: osint, socmint, x-twitter

### X Search for Periscope
- **URL**: https://twitter.com/search?q=periscope
- **Use Case**: Find X posts that mention Periscope
- **Description**: X's own search results for the word periscope, listing posts that mention the Periscope live-video app.
- **Tags**: osint, periscope, socmint

### Xing
- **URL**: https://xing.com
- **Use Case**: Look up a professional profile on XING
- **Description**: Professional networking site where members keep a profile and make business contacts.
- **Tags**: osint, socmint, xing

### Xlek
- **URL**: https://xlek.com
- **Use Case**: Look up addresses and phone numbers for a name
- **Description**: People search site over public records, looking up a name and location to find addresses and phone numbers, per third-party sources.
- **Tags**: osint, people search

### Yasni
- **URL**: https://yasni.com
- **Use Case**: Search what the web says about a named person
- **Description**: People-search engine that takes a name plus optional keywords such as location or profession and lists what the web says about that person.
- **Tags**: osint, people search

### ZabaSearch
- **URL**: https://zabasearch.com
- **Use Case**: Look up a U.S. person's age and address
- **Description**: Free people-search site for U.S. residents: search a name to see listed ages and addresses, with links out to paid background reports.
- **Tags**: osint, people search

### ZLOOKUP
- **URL**: https://zlookup.com
- **Use Case**: Find the owner of a mobile number
- **Description**: Free reverse phone lookup that takes a mobile or landline number and country and returns the owner's name, or a business name and location.
- **Tags**: osint, phone lookup

## Vfx & 3D
*35 tools.*

### 3DTuning
- **URL**: https://3dtuning.com
- **Use Case**: Visualize custom modifications on a 3D car model
- **Description**: Lets car enthusiasts visually customize and modify 3D car models in the browser.
- **Tags**: cars, customization

### ambientCG
- **URL**: https://ambientcg.com
- **Use Case**: Find a seamless PBR material for a surface
- **Description**: 2000+ CC0 PBR materials, HDRIs, and models, each with a full map set (albedo/normal/roughness/displacement).
- **Tags**: cc0, free, materials, pbr, textures

### Blend Swap
- **URL**: https://blendswap.com
- **Use Case**: Study a complete .blend scene or reuse a CC rig
- **Description**: Community library of shared .blend files under Creative Commons — full scenes and rigs you can open and dissect.
- **Tags**: 3d, blender, cc, models

### Blender
- **URL**: https://blender.org
- **Use Case**: Do essentially any 3D or motion task without buying software
- **Description**: Free, open-source 3D suite — modeling, sculpting, UV, shading, animation, simulation, Grease Pencil 2D, plus the Eevee and Cycles renderers and a full compositor.
- **Tags**: 3d, animation, essential, free, gamedev, modeling, open source, rendering

### BlenderKit
- **URL**: https://blenderkit.com
- **Use Case**: Pull assets straight into Blender while working
- **Description**: In-Blender asset browser — thousands of free models, materials, brushes, and HDRIs downloadable without leaving the app.
- **Tags**: 3d, assets, blender, materials

### CadX Studio
- **URL**: https://cadxstudio.in
- **Use Case**: Generate a basic CAD model from a text prompt
- **Description**: Generates CAD models from a text description.
- **Tags**: ai, cad

### CGTrader
- **URL**: https://cgtrader.com
- **Use Case**: Buy or find free game-ready 3D models
- **Description**: Large 3D model marketplace with a substantial free section and a good filter for game-ready / low-poly / PBR assets.
- **Tags**: 3d, assets, marketplace, models

### Coverr
- **URL**: https://coverr.co
- **Use Case**: Find a free background video loop
- **Description**: Free stock video focused on clean, loopable background footage for sites and title cards.
- **Tags**: background, free, stock video

### DaVinci Resolve
- **URL**: https://blackmagicdesign.com/products/davinciresolve
- **Use Case**: Edit, color-grade, and composite without a subscription
- **Description**: Free professional edit / color / audio / VFX app. Bundles Fusion, a node-based compositor and motion-graphics tool comparable to After Effects + Nuke.
- **Tags**: color, compositing, editing, essential, free, vfx, video

### Dora
- **URL**: https://dora.run
- **Use Case**: Build a 3D animated website without code
- **Description**: A browser-based builder for animated, interactive 3D websites.
- **Tags**: 3d, website-builder

### EbSynth
- **URL**: https://ebsynth.com
- **Use Case**: Stylize a whole video by painting only a few frames
- **Description**: Free tool that propagates a few hand-painted keyframes across an entire video clip — painterly rotoscope-style stylization.
- **Tags**: animation, free, stylization, video

### Fab (Epic Games marketplace)
- **URL**: https://fab.com
- **Use Case**: Buy or grab free game/VFX assets across engines
- **Description**: Epic's unified content marketplace — consolidates the old Unreal Marketplace, Quixel Bridge, and Sketchfab store. 3D models, materials, VFX, audio, and engine plugins; a rotating set of free assets.
- **Tags**: 3d, assets, marketplace, unreal, vfx

### GIMP
- **URL**: https://gimp.org
- **Use Case**: Edit or composite raster images without Photoshop
- **Description**: Free, open-source raster image editor — the long-standing Photoshop alternative for retouching, compositing, and texture work.
- **Tags**: free, image editing, open source, raster

### Krita
- **URL**: https://krita.org
- **Use Case**: Paint textures, concept art, or hand-drawn animation frames
- **Description**: Free, open-source painting app built for concept art, textures, matte painting, and 2D frame animation.
- **Tags**: 2d, animation, concept art, free, open source, painting

### Luma AI
- **URL**: https://lumalabs.ai
- **Use Case**: Capture a photoreal 3D scene or splat from video
- **Description**: Consumer NeRF / Gaussian-splatting capture and AI 3D/video generation from a phone or the web.
- **Tags**: 3d scanning, ai, gaussian splatting, nerf

### Meshroom (AliceVision)
- **URL**: https://alicevision.org
- **Use Case**: Reconstruct a real object as a 3D model from photos
- **Description**: Free, open-source photogrammetry pipeline — turn a set of photos into a textured 3D mesh.
- **Tags**: 3d, free, open source, photogrammetry, scanning

### Meshy
- **URL**: https://meshy.ai
- **Use Case**: Generate a 3D model from a text prompt
- **Description**: Generates 3D models and textures from text or images using AI.
- **Tags**: 3d, ai

### Mixamo
- **URL**: https://mixamo.com
- **Use Case**: Rig and animate a character in minutes for free
- **Description**: Adobe's free service for auto-rigging humanoid meshes and applying a big library of mocap animations — export to FBX/glTF.
- **Tags**: 3d, animation, characters, free, gamedev, mocap, rigging

### Mixkit
- **URL**: https://mixkit.co
- **Use Case**: Grab a free B-roll clip or motion template
- **Description**: Free stock video clips, music, sound effects, and After Effects / Premiere templates, licensed for commercial use.
- **Tags**: free, music, stock video, templates

### Natron
- **URL**: https://natrongithub.github.io
- **Use Case**: Do node-based compositing without a Nuke license
- **Description**: Free, open-source node-based compositor with an interface and workflow close to Nuke; supports OpenFX plugins.
- **Tags**: compositing, free, open source, vfx

### Pacdora
- **URL**: https://pacdora.com
- **Use Case**: Preview flat packaging art as a 3D mockup
- **Description**: Generates 3D packaging mockups from flat die-line designs.
- **Tags**: mockups, packaging

### Photopea
- **URL**: https://photopea.com
- **Use Case**: Open and edit a PSD when you don't have Photoshop
- **Description**: Full-featured Photoshop clone that runs in the browser and opens PSD/XCF/Sketch/XD files — no install.
- **Tags**: browser, free, image editing, psd

### Poly Haven
- **URL**: https://polyhaven.com
- **Use Case**: Grab free HDRIs, textures, or props with zero license worry
- **Description**: Fully CC0 library of HDRIs, PBR textures, and 3D models — no paywall, no signup, usable for anything including commercial work.
- **Tags**: 3d, assets, cc0, essential, free, hdri, textures

### Polycam
- **URL**: https://poly.cam
- **Use Case**: Scan a real object or space with your phone
- **Description**: Phone/desktop 3D capture — photogrammetry, LiDAR, and Gaussian-splat scanning, with a library of free downloadable scans.
- **Tags**: 3d scanning, assets, gaussian splatting, photogrammetry

### Quixel Megascans
- **URL**: https://quixel.com/megascans
- **Use Case**: Get photoreal scanned surfaces and scatter assets
- **Description**: Library of photo-scanned surfaces, 3D assets, and plants, now distributed through Fab. Mostly paid since 2025 but some packs stay free; still the gold standard for scanned realism.
- **Tags**: 3d, assets, scanned, textures, vfx

### RenderDoc
- **URL**: https://renderdoc.org
- **Use Case**: Debug a rendering bug or profile a frame
- **Description**: Free, open-source frame-capture and graphics debugger for Vulkan/D3D/GL/Metal — inspect draw calls, buffers, and shaders.
- **Tags**: debugging, free, gamedev, graphics, open source, shaders

### Shadertoy
- **URL**: https://shadertoy.com
- **Use Case**: Prototype or learn a shader effect in the browser
- **Description**: Browser GLSL playground — write fragment shaders live, see thousands of others' shaders with full source.
- **Tags**: glsl, graphics, learning, shaders

### SideFX Houdini (Apprentice)
- **URL**: https://sidefx.com/products/houdini
- **Use Case**: Learn procedural modeling and FX (destruction, fluids, pyro)
- **Description**: Industry procedural/FX tool; the free Apprentice edition is full-featured for learning (watermarked, non-commercial).
- **Tags**: 3d, free, procedural, simulation, vfx

### Sketchfab
- **URL**: https://sketchfab.com
- **Use Case**: Preview a 3D model in-browser or download free community assets
- **Description**: Web 3D viewer and community with millions of models, a large downloadable free/CC section, and in-browser inspection of topology and materials.
- **Tags**: 3d, assets, community, gamedev, models

### Spline
- **URL**: https://spline.design
- **Use Case**: Build an interactive 3D scene for a website
- **Description**: A browser-based 3D design tool for building interactive 3D scenes for the web.
- **Tags**: 3d, web-design

### Text-to-CAD
- **URL**: https://text-to-cad.zoo.dev
- **Use Case**: Generate a CAD model from a text description
- **Description**: Generates parametric CAD models directly from a text description.
- **Tags**: ai, cad

### Textures.com
- **URL**: https://textures.com
- **Use Case**: Find a specific real-world surface reference or texture
- **Description**: Huge reference and PBR texture library (formerly CGTextures). Free tier with daily download credits; large paid catalog.
- **Tags**: assets, pbr, reference, textures

### The Book of Shaders
- **URL**: https://thebookofshaders.com
- **Use Case**: Actually learn how shaders work from zero
- **Description**: Free, gentle, interactive guide to fragment shaders and generative graphics with editable examples.
- **Tags**: free, glsl, learning, reference, shaders

### TopoExport
- **URL**: https://topoexport.com
- **Use Case**: Export real terrain as a 3D model
- **Description**: Exports real-world terrain data as a 3D model for rendering or 3D printing.
- **Tags**: 3d-printing, terrain

### TurboSquid
- **URL**: https://turbosquid.com
- **Use Case**: Source a high-detail film/broadcast 3D model
- **Description**: One of the oldest 3D model marketplaces (owned by Shutterstock); strong for broadcast/film-quality models, with a free section.
- **Tags**: 3d, assets, marketplace, models

## Writing & Publishing
*28 tools.*

### Blurb
- **URL**: https://blurb.com
- **Use Case**: Print high-quality proofs of illustrated children's books.
- **Description**: Self-publishing platform specializing in photo and illustrated books.
- **Tags**: books, print, publishing

### Book Brush
- **URL**: https://bookbrush.com
- **Use Case**: Make promo graphics for a finished book
- **Description**: Templates and tools for making book-marketing graphics — 3D covers, ad images, social posts, animated mockups.
- **Tags**: graphics, little-sprout, marketing, publishing

### BookBaby
- **URL**: https://bookbaby.com
- **Use Case**: Compare distribution/royalty terms against KDP.
- **Description**: Self-publishing and distribution service for print/ebooks.
- **Tags**: books, publishing, self-publishing

### BookBub
- **URL**: https://bookbub.com
- **Use Case**: Promote Little Sprout Stories launches/discounts to readers.
- **Description**: Book deal newsletter and author marketing platform.
- **Tags**: books, marketing, publishing

### Bowker ISBN (MyIdentifiers)
- **URL**: https://myidentifiers.com
- **Use Case**: Register ISBNs for Little Sprout Stories titles.
- **Description**: Official U.S. ISBN registration agency.
- **Tags**: books, isbn, publishing

### Draft2Digital
- **URL**: https://draft2digital.com
- **Use Case**: Distribute ebooks to Apple Books, Kobo, and others at once.
- **Description**: Free ebook formatting and multi-store distribution service.
- **Tags**: books, distribution, free, publishing

### Goodreads Author Program
- **URL**: https://goodreads.com/author/program
- **Use Case**: Build an author presence and track reader reviews.
- **Description**: Author profile and reader-engagement tools on Goodreads.
- **Tags**: books, marketing, publishing

### Grammarly
- **URL**: https://grammarly.com
- **Use Case**: Proofread tutoring content, marketing copy, or student-facing text.
- **Description**: AI-powered grammar and writing-clarity checker.
- **Tags**: ai, editing, file, writing

### Hemingway Editor
- **URL**: https://hemingwayapp.com
- **Use Case**: Simplify customer-facing copy before publishing.
- **Description**: Readability and clarity checker for prose.
- **Tags**: editing, writing

### IngramSpark
- **URL**: https://ingramspark.com
- **Use Case**: Get Little Sprout Stories into wider retail distribution.
- **Description**: Print-on-demand and distribution service reaching bookstores/libraries.
- **Tags**: books, print on demand, publishing

### Notion AI
- **URL**: https://notion.com/product/ai
- **Use Case**: Draft/refine notes directly inside the existing Notion workspace.
- **Description**: AI writing assistant built into Notion.
- **Tags**: ai, writing

### PaperRater
- **URL**: https://paperrater.com
- **Use Case**: Check essays for plagiarism and grammar
- **Description**: Essay plagiarism and grammar checker.
- **Tags**: writing

### Pinterest
- **URL**: https://pinterest.com
- **Use Case**: Collect and share visual inspiration
- **Description**: Platform for sharing and collecting visual content albums.
- **Tags**: osint, pinterest, socmint, writing

### Print Friendly
- **URL**: https://printfriendly.com
- **Use Case**: Make web pages printer-friendly
- **Description**: Makes web content printer-friendly.
- **Tags**: writing

### ProWritingAid
- **URL**: https://prowritingaid.com
- **Use Case**: Line-edit longer manuscripts (e.g. children's-book text).
- **Description**: Style and grammar editor aimed at long-form writing/fiction.
- **Tags**: editing, writing

### Publisher Rocket
- **URL**: https://publisherrocket.com
- **Use Case**: Research search terms/categories for children's-book listings.
- **Description**: Keyword and category research tool for Amazon book publishing.
- **Tags**: amazon, books, publishing, research

### QuillBot
- **URL**: https://quillbot.com
- **Use Case**: Rephrase copy for tone or reduce repetition.
- **Description**: AI paraphrasing and grammar tool.
- **Tags**: ai, editing, writing

### Reedsy
- **URL**: https://reedsy.com
- **Use Case**: Hire a freelance illustrator or editor for a book project.
- **Description**: Marketplace connecting authors with editors, illustrators, and designers.
- **Tags**: books, freelance, illustration, publishing

### SCBWI
- **URL**: https://scbwi.org
- **Use Case**: Learn the children's-book publishing landscape
- **Description**: Society of Children's Book Writers and Illustrators — craft resources, market surveys, contract guidance, critique groups, events.
- **Tags**: childrens books, community, little-sprout, publishing, writing

### Scrivener
- **URL**: https://scrivener.net
- **Use Case**: Organize a multi-chapter or multi-book writing project.
- **Description**: Long-form writing software for organizing manuscripts.
- **Tags**: software, writing

### StoryJumper
- **URL**: https://storyjumper.com
- **Use Case**: Prototype layouts or let kids co-create story drafts.
- **Description**: Platform for creating and publishing illustrated children's storybooks.
- **Tags**: books, children, education, publishing

### StoryWeaver
- **URL**: https://storyweaver.org.in
- **Use Case**: Study leveled-reader structure/pacing for children's books.
- **Description**: Free open-licensed children's storybook repository, many illustrated.
- **Tags**: books, children, free, publishing

### The Oatmeal
- **URL**: https://theoatmeal.com
- **Use Case**: Read clever educational comics
- **Description**: Educational comics and content.
- **Tags**: writing

### TinyWow
- **URL**: https://tinywow.com
- **Use Case**: Convert media or create content
- **Description**: Collection of productivity tools for media and content.
- **Tags**: writing

### Tumblr
- **URL**: https://tumblr.com
- **Use Case**: Create a blog or share original content
- **Description**: Blogging platform for creating and sharing original content.
- **Tags**: osint, social media, socmint, writing

### Vellum
- **URL**: https://vellum.pub
- **Use Case**: Format Little Sprout Stories manuscripts for KDP/print.
- **Description**: Mac app for formatting books for ebook and print.
- **Tags**: books, publishing, software

### Write for Kids (CBI)
- **URL**: https://writeforkids.online
- **Use Case**: Improve picture-book manuscript craft
- **Description**: Children's Book Insider's articles and courses on writing picture books, chapter books, and MG/YA, plus submission tips.
- **Tags**: childrens books, little-sprout, publishing, writing

### Writesonic
- **URL**: https://writesonic.com
- **Use Case**: Generate SEO-optimized web content
- **Description**: SEO-friendly content generation tool.
- **Tags**: writing

