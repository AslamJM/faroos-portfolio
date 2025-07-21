"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";

type Props = {
  images: string[];
  lightboxImage: number | null;
  setLightboxImage: React.Dispatch<React.SetStateAction<number | null>>;
};

export default function LightBox({
  lightboxImage,
  images,
  setLightboxImage,
}: Props) {
  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = "unset";
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    if (lightboxImage === null) return;

    if (direction === "prev") {
      setLightboxImage(
        lightboxImage > 0 ? lightboxImage - 1 : images.length - 1
      );
    } else {
      setLightboxImage(
        lightboxImage < images.length - 1 ? lightboxImage + 1 : 0
      );
    }
  };

  if (lightboxImage !== null) {
    return (
      <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={closeLightbox}
          className="absolute top-4 right-4 z-10 text-white hover:bg-white/20 h-12 w-12"
        >
          <X className="h-6 w-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigateLightbox("prev")}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20 h-12 w-12"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigateLightbox("next")}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20 h-12 w-12"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src={images[lightboxImage!]}
              alt={`Image ${lightboxImage! + 1}`}
              fill
              className="object-contain"
              quality={95}
              priority
            />
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white">
          <p className="text-sm text-gray-300">
            {lightboxImage + 1} of {images.length}
          </p>
        </div>

        <div className="absolute inset-0 -z-10" onClick={closeLightbox} />
      </div>
    );
  }
}
