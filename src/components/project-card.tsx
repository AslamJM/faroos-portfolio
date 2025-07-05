import { SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card, CardContent } from "./ui/card";
import { ArrowRight, Calendar, MapPin, Square } from "lucide-react";
import { Badge } from "./ui/badge";

type Props = {
  project: any;
};

export default function ProjectCard({ project }: Props) {
  return (
    <Link key={project.id} href={`/project/${project.slug}`} className="group">
      <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

          {/* Status Badge */}
          <div className="absolute top-4 left-4">
            <Badge
              variant={
                project.status === "Completed"
                  ? "default"
                  : project.status === "In Progress"
                  ? "secondary"
                  : "outline"
              }
            >
              {project.status}
            </Badge>
          </div>

          {/* Featured Badge */}
          <div className="absolute top-4 right-4">
            <Badge className="bg-yellow-500 text-black">Featured</Badge>
          </div>

          {/* Hover Arrow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
              <ArrowRight className="h-5 w-5 text-gray-900" />
            </div>
          </div>
        </div>

        <CardContent className="p-6">
          <div className="mb-3">
            <Badge variant="outline" className="mb-2">
              {project.category}
            </Badge>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
              {project.title}
            </h3>
          </div>

          <p className="text-gray-600 mb-4 line-clamp-2">
            {project.description}
          </p>

          <div className="space-y-2 text-sm text-gray-500">
            <div className="flex items-center">
              <MapPin className="h-3 w-3 mr-2" />
              {project.location}
            </div>
            <div className="flex items-center">
              <Calendar className="h-3 w-3 mr-2" />
              {project.year}
            </div>
            <div className="flex items-center">
              <Square className="h-3 w-3 mr-2" />
              {project.area}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-1">
            {project.tags.slice(0, 3).map((tag: string) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
