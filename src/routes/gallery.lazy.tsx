import { createLazyFileRoute } from "@tanstack/react-router";
import { Gallery } from "../components/gallery";

export const Route = createLazyFileRoute("/gallery")({
  component: Gallery,
});
