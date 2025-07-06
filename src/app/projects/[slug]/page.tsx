import PageTitle from "@/components/page-title";
import { getProjectBySlug } from "@/sanity/projects";
import { SanityImageAssetDocument } from "next-sanity";

export default async function SingleProjectPage() {
  // const id = await props.params;
  // const project = await getProjectBySlug(id.slug);

  return <div className="grid grid-cols-1 md:grid-cols-3 gap-4"></div>;
}
