"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../navbar";
import { SanityDocument } from "next-sanity";

type Props = {
  heroSlides: SanityDocument[];
};

export default function HeroSlider({ heroSlides }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Navbar variant="overlay" />
      {/* Background Images */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide._id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
              quality={90}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div
              key={currentSlide}
              className="animate-in fade-in slide-in-from-bottom-4 duration-700"
            >
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                {heroSlides[currentSlide].title}
              </h1>
              <h2 className="mb-6 text-xl font-light text-white/90 sm:text-2xl md:text-3xl">
                {heroSlides[currentSlide].subtitle}
              </h2>
              <p className="mb-8 max-w-2xl text-lg text-white/80 sm:text-xl">
                {heroSlides[currentSlide].text}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/projects" passHref>
                  <Button
                    size="lg"
                    className="bg-white text-black hover:bg-white/90 px-8 py-3 text-lg font-semibold"
                  >
                    View Our Work
                  </Button>
                </Link>
                <Link href="/contact" passHref>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg font-semibold bg-transparent"
                  >
                    Get Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute left-4 top-1/2 z-20 -translate-y-1/2 sm:left-8">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="h-12 w-12 rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/30"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      </div>

      <div className="absolute right-4 top-1/2 z-20 -translate-y-1/2 sm:right-8">
        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="h-12 w-12 rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/30"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-8 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white"
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Auto-play Control */}
      <div className="absolute bottom-8 right-8 z-20">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleAutoPlay}
          className="h-10 w-10 rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/30"
        >
          <Play
            className={`h-4 w-4 ${
              isAutoPlaying ? "opacity-100" : "opacity-50"
            }`}
          />
        </Button>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 z-20 h-1 w-full bg-white/20">
        <div
          className="h-full bg-white transition-all duration-300 ease-linear"
          style={{
            width: `${((currentSlide + 1) / heroSlides.length) * 100}%`,
          }}
        />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-16 left-1/2 z-20 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-white/70">
          <div className="mb-2 h-6 w-px bg-white/50" />
          <div className="text-xs uppercase tracking-wider">Scroll</div>
        </div>
      </div>
    </section>
  );
}
