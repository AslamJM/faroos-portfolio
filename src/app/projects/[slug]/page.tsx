import Navbar from "@/components/navbar";
import InfoOverlay from "@/components/single/info-overlay";
import Overview from "@/components/single/overview";
import { getProjectBySlug } from "@/sanity/projects";

export default async function SingleProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  return (
    <div>
      <Navbar variant="solid" />
      <main className="pt-8">
        <InfoOverlay project={project} />
        <Overview project={project} />
      </main>
    </div>
  );
}
