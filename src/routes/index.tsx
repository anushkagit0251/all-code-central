import { createFileRoute } from "@tanstack/react-router";


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
  return (
    <div>
      <h1>PromptMaster AI is Live 🚀</h1>
      <p>Deployment successful!</p>
    </div>
  );
}
