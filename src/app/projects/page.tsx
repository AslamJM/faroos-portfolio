import PageTitle from "@/components/page-title";
import ProjectCard from "@/components/project-card";
import { getProjects } from "@/sanity/projects";

export default async function AllProjectsPage() {
  const projects = await getProjects();
  return (
    <div className="space-y-4">
      <PageTitle title="Projects" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {projects.map((project) => (
          <ProjectCard project={project} key={project._id} />
        ))}
      </div>
    </div>
  );
}
