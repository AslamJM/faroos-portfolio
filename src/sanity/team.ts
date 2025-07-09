import { SanityDocument } from "next-sanity";
import { client } from "./client";

const TEAM_QUERY = `*[_type == "team"] | order(_createdAt desc) {
    _id,
    name,
    title,
    "image":image.asset->url,
    specialization,
    experience,
    education,
    bio
}`

export async function getTeamMembers() {
    const teamMembers = await client.fetch<SanityDocument[]>(TEAM_QUERY);
    return teamMembers;
}