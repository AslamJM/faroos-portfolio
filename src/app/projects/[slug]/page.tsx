import PageTitle from "@/components/page-title";
import { getProjectBySlug } from "@/sanity/projects";

export default async function SingleProjectPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const project = await getProjectBySlug(slug);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="col-span-1">
        <PageTitle title={project.title} />
        <p>{project.description}</p>
      </div>
      <div className=" col-span-2 grid grid-cols-3 gap-4">
        {project.media.map((m, i) => (
          <img src={m.asset.url} key={`image=${i}`} />
        ))}
      </div>
    </div>
  );
}
