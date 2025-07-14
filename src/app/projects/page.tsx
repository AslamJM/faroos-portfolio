import Navbar from "@/components/navbar";
import AllProjects from "@/components/projects/all-projects";
import ProjectHeader from "@/components/projects/project-header";

const options = { next: { revalidate: 30 } };

export default async function AllProjectsPage() {
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
