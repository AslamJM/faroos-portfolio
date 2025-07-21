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

const ABOUT_CONTENT = `*[_type == "aboutContent"][0] {
    title,
    paragraphs,
    "image":image.asset->url,
    projects,
    clients
}
    `

const TESTIMONIALS = `*[_type == "review"]  {
    _id,
    name,
    position,
    project,
    review,
    "image":projectImage.asset->url
}`

const HERO_SLIDES = `*[_type == "homeSlider"] | order(_createdAt asc) {
    _id,
    title,
    subtitle,
    text,
    "image":image.asset->url
}`

const CONTACT_DETAILS = `*[_type == "contacts"]| order(_createdAt desc){
    _id,
    type,
    value,
    description
}`

export async function getTeamMembers() {
    const teamMembers = await client.fetch<SanityDocument[]>(TEAM_QUERY);
    return teamMembers;
}

export async function fetchAboutContent() {
    const aboutContent = await client.fetch<SanityDocument>(ABOUT_CONTENT);
    return aboutContent;
}

export async function getTestimonials() {
    return await client.fetch<SanityDocument[]>(TESTIMONIALS)
}

export async function getHeroSlides() {
    return await client.fetch<SanityDocument[]>(HERO_SLIDES);
}

export async function getContactDetails() {
    return await client.fetch<SanityDocument[]>(CONTACT_DETAILS)
}