import Navbar from "@/components/navbar";
import AllProjects from "@/components/projects/all-projects";
import ProjectHeader from "@/components/projects/project-header";
import { getProjects } from "@/sanity/projects";

export default async function AllProjectsPage() {
  //const projects = await getProjects();
  return (
    <div>
      <Navbar variant="solid" />
      <main className="pt-8">
        <ProjectHeader />
        <AllProjects />
      </main>
    </div>
  );
}
