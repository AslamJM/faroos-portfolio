import Navbar from "@/components/navbar";
import PageTitle from "@/components/page-title";
import ProjectCard from "@/components/project-card";
import ProjectHeader from "@/components/projects/project-header";
import { getProjects } from "@/sanity/projects";

export default async function AllProjectsPage() {
  const projects = await getProjects();
  return (
    <div>
      <Navbar variant="solid" />
      <main className="pt-8">
        <ProjectHeader />
      </main>
    </div>
  );
}
