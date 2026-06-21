import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PromptMaster AI — Generate Perfect Prompts in Seconds" },
      {
        name: "description",
        content:
          "Generate professional AI prompts for ChatGPT, Claude, Gemini, Midjourney, Cursor, and more. Powered by Gemini AI.",
      },
      { property: "og:title", content: "PromptMaster AI" },
      {
        property: "og:description",
        content: "Generate professional AI prompts in seconds, powered by Gemini.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/app.html");
  }, []);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <p>Loading PromptMaster AI…</p>
    </div>
  );
}
