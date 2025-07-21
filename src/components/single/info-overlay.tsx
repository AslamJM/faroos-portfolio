import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ArrowLeft, Calendar, MapPin, Square, User } from "lucide-react";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { SanityDocument } from "next-sanity";

type Props = {
  project: SanityDocument;
};

export default function InfoOverlay({ project }: Props) {
  return (
    <section className="relative h-[70vh] lg:h-[80vh] overflow-hidden">
      <Image
        src={project.image || "/placeholder.svg"}
        alt={project.title}
        fill
        className="object-cover"
        priority
        quality={95}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Navigation */}
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

      {/* Project Info Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-white/20 text-white backdrop-blur-sm border-white/30">
              {project.category}
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-white/90 mb-6 max-w-3xl">
              {project.description}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-white/70" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-white/70" />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center">
                <Square className="h-4 w-4 mr-2 text-white/70" />
                <span>{project.area}</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2 text-white/70" />
                <span>{project.client}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
