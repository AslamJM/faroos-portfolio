import { createClient } from "next-sanity";
import builder from '@sanity/image-url'

export const client = createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: false,
});

const b = builder(client);

export const urlFor = (source: any) => {
    const url = b.image(source).url()
    return url
}