import { SanityDocument } from "next-sanity";
import { client } from "./client";

const PROJECTS_QUERY = `*[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    "image": media[0]{
    asset->{
      url
    }
  }
}`;

export async function getProjects() {
    const projects = await client.fetch<SanityDocument[]>(PROJECTS_QUERY);
    return projects;
}

const SINGLE_PROJECT_QUERY = `*[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    description,
    media[] {
    asset-> {
        url
    }
    }
}`;


export async function getProjectBySlug(slug: string) {
    const project = await client.fetch<SanityDocument>(SINGLE_PROJECT_QUERY, { slug });
    return project;
}    