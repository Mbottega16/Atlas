import { FormEvent, useEffect, useState } from "react";

import { authStatus, login } from "../api/client";

/** Wraps the whole app. While the backend auth gate is on and this browser
 * has no valid session, nothing but the password form renders. When the gate
 * is off (local dev, no ADMIN_PASSWORD) this is transparent. */
export default function LoginGate({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<"checking" | "locked" | "open">("checking");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    authStatus()
      .then((s) => setState(!s.required || s.authenticated ? "open" : "locked"))
      .catch(() => setState("locked"));
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      await login(password);
      setState("open");
    } catch {
      setError("Wrong password.");
      setPassword("");
    } finally {
      setSubmitting(false);
    }
  };

  if (state === "checking") return null;
  if (state === "open") return <>{children}</>;

  return (
    <div style={{ maxWidth: 320, margin: "12vh auto", textAlign: "center" }}>
      <h1>Atlas</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          autoFocus
          style={{ width: "100%", padding: 8, boxSizing: "border-box" }}
        />
        <button type="submit" disabled={submitting || !password} style={{ marginTop: 8 }}>
          {submitting ? "…" : "Enter"}
        </button>
      </form>
      {error && <p style={{ color: "crimson" }}>{error}</p>}
    </div>
  );
}
