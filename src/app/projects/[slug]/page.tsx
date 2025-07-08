import { getProjectBySlug } from "@/sanity/projects";

export default async function SingleProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>{project.title}</div>
    </div>
  );
}
