import { createClient } from "@sanity/client";

export const client = createClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: "production",
    useCdn: true,
    apiVersion: "2026-03-08",
});