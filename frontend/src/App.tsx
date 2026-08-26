import { useState } from "react";

import BrowsePage from "./pages/BrowsePage";
import CapturePage from "./pages/CapturePage";

type Tab = "browse" | "capture";

export default function App() {
  const [tab, setTab] = useState<Tab>("browse");

  return (
    <div>
      <h1>Atlas</h1>
      <nav>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setTab("browse");
          }}
          style={{ opacity: tab === "browse" ? 1 : 0.5 }}
        >
          Browse
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setTab("capture");
          }}
          style={{ opacity: tab === "capture" ? 1 : 0.5 }}
        >
          Capture
        </a>
      </nav>
      {tab === "browse" ? <BrowsePage /> : <CapturePage />}
    </div>
  );
}
