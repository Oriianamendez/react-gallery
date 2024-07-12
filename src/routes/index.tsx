import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => <LandingPage />,
});

const LandingPage = () => {
  return (
    <>
      <h1>Welcome to BB Gallery</h1>
      <a href="/gallery">To Gallery!</a>
    </>
  );
};
