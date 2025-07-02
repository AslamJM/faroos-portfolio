import { getProjectBySlug } from "@/sanity/projects";

export default async function SingleProjectPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const project = await getProjectBySlug(slug);

  return (
    <div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="grid grid-cols-3">
        {project.media.map((m, i) => (
          <img src={m.asset.url} key={`image=${i}`} />
        ))}
      </div>
    </div>
  );
}
