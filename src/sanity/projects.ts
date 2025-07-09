import { SanityDocument, defineQuery } from "next-sanity";
import { client } from "./client";

const PROJECTS_QUERY = `*[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    "image":image.asset->url,
    category,
    description,
    area,
    year,
    location,
}`;

export async function getProjects() {
  const projects = await client.fetch<SanityDocument[]>(PROJECTS_QUERY);
  return projects;
}

const SINGLE_PROJECT_QUERY = `*[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    client,
    "image":image.asset->url,
    "gallery":media[].asset->url,
    category,
    description,
    area,
    year,
    location,
}`;


export async function getProjectBySlug(slug: string) {
  const project = await client.fetch<SanityDocument>(SINGLE_PROJECT_QUERY, { slug });
  return project;
}

const IMAGES_PORTFOLIO = defineQuery(`*[_type == "project"] {
    _id,
    title,
    "src":image.asset->url,
    category,
  }
`)

export async function getPortfolioImages() {
  const projects = await client.fetch<SanityDocument[]>(IMAGES_PORTFOLIO)
  return projects
}

