import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { getProjectBySlug } from "@/sanity/projects";
import { ArrowLeft, Calendar, MapPin, Square, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
        <div className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-black/30" />

          {/* Back Button */}
          <div className="absolute top-8 left-8 z-10">
            <Link href="/projects">
              <Button
                variant="ghost"
                className="bg-white/20 text-white backdrop-blur-sm hover:bg-white/30"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-sm font-medium text-gray-700 mb-4">
                {project.category}
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {project.title}
              </h1>

              {/* Project Meta */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{project.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{project.year}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <User className="h-4 w-4" />
                  <span className="text-sm">{project.client}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Square className="h-4 w-4" />
                  <span className="text-sm">{project.area}</span>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        </div>

        {/* Additional Images */}
        <div className="grid md:grid-cols-2 gap-6">
          {project.gallery.map((image: string, index: number) => (
            <div
              key={index}
              className="relative h-[300px] rounded-lg overflow-hidden"
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${project.title} - Image ${index + 2}`}
                fill
                className="object-cover"
                quality={90}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
