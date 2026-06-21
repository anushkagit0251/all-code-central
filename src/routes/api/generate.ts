import { createFileRoute } from "@tanstack/react-router";

const GATEWAY_URL = "https://ai.gateway.lovable.dev/v1/chat/completions";
const MODEL = "google/gemini-3-flash-preview";

export const Route = createFileRoute("/api/generate")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env.LOVABLE_API_KEY;
        if (!apiKey) {
          return new Response("Server missing LOVABLE_API_KEY", { status: 500 });
        }

        let body: { messages?: Array<{ role: string; content: string }>; stream?: boolean };
        try {
          body = await request.json();
        } catch {
          return new Response("Invalid JSON", { status: 400 });
        }

        const messages = body.messages;
        if (!Array.isArray(messages) || messages.length === 0) {
          return new Response("messages[] required", { status: 400 });
        }

        const stream = body.stream !== false;

        const upstream = await fetch(GATEWAY_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({ model: MODEL, messages, stream }),
        });

        if (!upstream.ok) {
          const text = await upstream.text();
          if (upstream.status === 429) {
            return new Response("Rate limit reached. Please try again shortly.", { status: 429 });
          }
          if (upstream.status === 402) {
            return new Response("AI credits exhausted. Please add credits in your workspace billing.", { status: 402 });
          }
          return new Response(text || "AI gateway error", { status: upstream.status });
        }

        return new Response(upstream.body, {
          status: 200,
          headers: {
            "Content-Type": stream ? "text/event-stream" : "application/json",
            "Cache-Control": "no-cache",
          },
        });
      },
    },
  },
});
