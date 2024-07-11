import { createFileRoute } from "@tanstack/react-router";
import { Search } from "../components/search";

export const Route = createFileRoute("/")({
  component: () => <h1>LANDING PAGE</h1>,
});
