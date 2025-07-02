import { SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  project: SanityDocument;
};

export default function ProjectCard({ project }: Props) {
  return (
    <Link
      key={project.id}
      href={`/projects/${project.slug.current}`}
      className="group block"
    >
      <div className="relative aspect-[3/2] rounded-2xl overflow-hidden bg-muted">
        {/* Project Image */}
        <Image
          src={project.image.asset.url}
          alt={project.title}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

        {/* Project Title */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-white text-xl md:text-2xl font-bold transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            {project.title}
          </h3>

          {/* Hover Arrow */}
          <div className="flex items-center mt-2 text-white/80 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
            <span className="text-sm font-medium">View Project</span>
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>

        {/* Corner Accent */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </Link>
  );
}
