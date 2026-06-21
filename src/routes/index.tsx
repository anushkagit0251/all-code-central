import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div style={{ padding: 40 }}>
      <h1>PromptMaster AI is Live 🚀</h1>
      <p>Your deployment is working now.</p>
    </div>
  );
}

function Index() {
  return (
    <div>
      <h1>PromptMaster AI is Live 🚀</h1>
      <p>Deployment successful!</p>
    </div>
  );
}
