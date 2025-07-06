import PageTitle from "@/components/page-title";
import { getProjectBySlug } from "@/sanity/projects";
import { SanityImageAssetDocument } from "next-sanity";
import { PageProps } from "../../../../.next/types/app/projects/[slug]/page";

export default async function SingleProjectPage(props: PageProps) {
  const id = await props.params;
  const project = await getProjectBySlug(id.slug);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="col-span-1 space-y-2">
        <PageTitle title={project.title} />
        <p className="font-semibold">{project.client}</p>
        <p>{project.description}</p>
      </div>
      <div className=" col-span-2 grid grid-cols-3 gap-4">
        {project.media.map((m: SanityImageAssetDocument, i: number) => (
          <img src={m.asset.url} key={`image=${i}`} className="rounded" />
        ))}
      </div>
    </div>
  );
}
