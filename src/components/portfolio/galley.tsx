"use client";
import { SanityDocument } from "next-sanity";
import { useEffect, useState } from "react";
import Navbar from "../navbar";
import { portfolioCategories } from "@/data/portfolio";
import { Button } from "../ui/button";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Grid, Maximize2, X } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  images: SanityDocument[];
};

export default function Gallery({ images }: Props) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);

  const filteredImages = images.filter(
    (image) => selectedCategory === "All" || image.category === selectedCategory
  );

  const openLightbox = (imageId: number) => {
    setLightboxImage(imageId);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = "unset";
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    if (lightboxImage === null) return;

    const currentIndex = filteredImages.findIndex(
      (img) => img.id === lightboxImage
    );
    let newIndex;

    if (direction === "prev") {
      newIndex =
        currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex =
        currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }

    setLightboxImage(filteredImages[newIndex].id);
  };

  const currentLightboxImage = filteredImages.find(
    (img) => img.id === lightboxImage
  );

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (lightboxImage === null) return;

      switch (e.key) {
        case "Escape":
          closeLightbox();
          break;
        case "ArrowLeft":
          navigateLightbox("prev");
          break;
        case "ArrowRight":
          navigateLightbox("next");
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [lightboxImage]);

  return (
    <div>
      <Navbar variant="solid" />

      <main className="pt-8">
        {/* Hero Section */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
                Visual{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
                  Portfolio
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A curated collection of our finest architectural work. Each
                image tells a story of innovation, craftsmanship, and design
                excellence.
              </p>
              <div className="text-sm text-gray-500">
                {filteredImages.length}{" "}
                {filteredImages.length === 1 ? "Project" : "Projects"} • Click
                any image to view full size
              </div>
            </div>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="py-8  border-b border-gray-200 sticky top-0 z-40 backdrop-blur-sm bg-gray-50/95">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <div className="flex flex-wrap justify-center gap-2 bg-white rounded-full p-2 shadow-lg">
                {portfolioCategories.map((category) => (
                  <Button
                    key={category}
                    variant={
                      selectedCategory === category ? "default" : "ghost"
                    }
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={cn(
                      "rounded-full px-6 transition-all duration-300",
                      selectedCategory === category
                        ? "bg-gray-900 text-white shadow-md"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    )}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  className="break-inside-avoid group cursor-pointer"
                  onClick={() => openLightbox(image.id)}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
                    <div
                      className={cn(
                        "relative",
                        image.size === "tall" && "aspect-[3/4]",
                        image.size === "wide" && "aspect-[4/3]",
                        image.size === "square" && "aspect-square"
                      )}
                    >
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        quality={90}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />

                      {/* Hover Content */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <Maximize2 className="h-8 w-8 mx-auto mb-2" />
                          <p className="text-sm font-medium px-4">
                            {image.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredImages.length === 0 && (
              <div className="text-center py-16">
                <Grid className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No projects found
                </h3>
                <p className="text-gray-600 mb-6">
                  Try selecting a different category to view more projects.
                </p>
                <Button onClick={() => setSelectedCategory("All")}>
                  View All Projects
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Lightbox */}
        {lightboxImage && currentLightboxImage && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 text-white hover:bg-white/20 h-12 w-12"
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Navigation Buttons */}
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

            {/* Image */}
            <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src={currentLightboxImage.src || "/placeholder.svg"}
                  alt={currentLightboxImage.title}
                  fill
                  className="object-contain"
                  quality={95}
                  priority
                />
              </div>
            </div>

            {/* Image Info */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white">
              <h3 className="text-lg font-semibold mb-1">
                {currentLightboxImage.title}
              </h3>
              <p className="text-sm text-gray-300">
                {filteredImages.findIndex((img) => img.id === lightboxImage) +
                  1}{" "}
                of {filteredImages.length}
              </p>
            </div>

            {/* Click outside to close */}
            <div className="absolute inset-0 -z-10" onClick={closeLightbox} />
          </div>
        )}

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Inspired by What You See?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Every project in our portfolio represents a unique collaboration
              between our team and our clients. Let's create something
              extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gray-900 text-white hover:bg-gray-800 px-8"
              >
                Start Your Project
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 bg-transparent"
              >
                View Project Details
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
