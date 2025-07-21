"use client";

import { Maximize2 } from "lucide-react";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import { Button } from "../ui/button";
import { useState } from "react";
import LightBox from "./lightbox";

type Props = {
  project: SanityDocument;
};

export default function Overview({ project }: Props) {
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxImage(index);
    document.body.style.overflow = "hidden";
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Project Description
              </h2>
              <div className="prose prose-gray max-w-none">
                {project.description
                  .split("\n\n")
                  .map((paragraph: string, index: number) => (
                    <p
                      key={index}
                      className="text-gray-700 leading-relaxed mb-4"
                    >
                      {paragraph}
                    </p>
                  ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Project Gallery
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {project.gallery
                .slice(0, 4)
                .map((image: string, index: number) => (
                  <div
                    key={index}
                    className="relative aspect-square cursor-pointer group overflow-hidden rounded-lg"
                    onClick={() => openLightbox(index)}
                  >
                    <Image
                      src={image}
                      alt={`${project.title} - Image ${index + 2}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      quality={90}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                      <Maximize2 className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                ))}
            </div>
            <Button
              variant="outline"
              className="w-full mt-4 bg-transparent"
              onClick={() => openLightbox(0)}
            >
              View All Images ({project.gallery.length})
            </Button>
          </div>
          <LightBox
            images={project.gallery}
            lightboxImage={lightboxImage}
            setLightboxImage={setLightboxImage}
          />
        </div>
      </div>
    </section>
  );
}
