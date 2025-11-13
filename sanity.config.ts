import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import schema from "./schemas/schema";

export const config = defineConfig({
  name: "default",
  title: "Pfau Bar Website",
  projectId: "your_project_id",
  dataset: "production",
  plugins: [deskTool(), visionTool()],
  schema,
});
