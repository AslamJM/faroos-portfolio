import { getProjects } from "@/sanity/projects";
import Link from "next/link";

export default async function AllProjectsPage() {
  const projects = await getProjects();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {projects.map((project) => (
        <Link key={project._id} href={`/projects/${project.slug.current}`}>
          <div>
            <h2>{project.title}</h2>
            <img src={project.image.asset.url} alt={project.title} />
          </div>
        </Link>
      ))}
    </div>
  );
}
