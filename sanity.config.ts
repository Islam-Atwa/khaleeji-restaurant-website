import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./src/sanity/schemaTypes";

export default defineConfig({
    basePath: "/studio",
    name: "restaurant",
    title: "Restaurant Studio",

    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "mockProjectId",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",

    plugins: [structureTool()],

    schema: {
        types: schema.types,
    },
});
