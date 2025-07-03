import { SanityDocument, SanityImageAssetDocument } from "next-sanity";
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
    client,
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

const IMAGES_PORTFOLIO = `*[_type == "project"] | order(_createdAt desc) {
    "image": media[0]{
    asset->{
        _id,
      url
    }
  }
}`

export async function getPortfolioImages() {
  const projects = await client.fetch<SanityDocument[]>(IMAGES_PORTFOLIO)
  return projects.map((p) => p.image.asset) as SanityImageAssetDocument[];
}

