"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { SanityDocument } from "next-sanity";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "CEO",
    company: "Urban Development Corp",
    project: "Modern Residential Complex",
    rating: 5,
    review:
      "Working with this architectural team was an absolute pleasure. They transformed our vision into a stunning reality that exceeded all expectations. The attention to detail and innovative design solutions were remarkable.",
    avatar: "/placeholder.svg?height=80&width=80",
    projectImage: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Property Developer",
    company: "Chen Holdings",
    project: "Sustainable Office Tower",
    rating: 5,
    review:
      "The team's expertise in sustainable architecture is unmatched. They delivered a LEED Platinum certified building that not only looks incredible but also significantly reduces our operational costs.",
    avatar: "/placeholder.svg?height=80&width=80",
    projectImage: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    title: "Director",
    company: "Cultural Arts Foundation",
    project: "Cultural Arts Center",
    rating: 5,
    review:
      "They understood our vision for a space that would inspire creativity and community engagement. The final design is both functional and breathtakingly beautiful. Our visitors are constantly amazed.",
    avatar: "/placeholder.svg?height=80&width=80",
    projectImage: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    name: "David Thompson",
    title: "Homeowner",
    company: "Private Client",
    project: "Luxury Villa Estate",
    rating: 5,
    review:
      "From concept to completion, the process was seamless. They listened to our needs and created a home that perfectly reflects our lifestyle. The craftsmanship and attention to detail are exceptional.",
    avatar: "/placeholder.svg?height=80&width=80",
    projectImage: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    name: "Lisa Park",
    title: "Project Manager",
    company: "Tech Innovations Inc",
    project: "Corporate Headquarters",
    rating: 5,
    review:
      "The new headquarters has transformed our company culture. The open, collaborative spaces and innovative design elements have boosted productivity and employee satisfaction significantly.",
    avatar: "/placeholder.svg?height=80&width=80",
    projectImage: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    name: "Robert Martinez",
    title: "Community Leader",
    company: "Portland Community Board",
    project: "Eco-Friendly Community Center",
    rating: 5,
    review:
      "This community center has become the heart of our neighborhood. The sustainable design and thoughtful layout create a welcoming space that brings people together. Truly outstanding work.",
    avatar: "/placeholder.svg?height=80&width=80",
    projectImage: "/placeholder.svg?height=200&width=300",
  },
];

type Props = {
  testimonials: SanityDocument[];
};

export default function TestimonialsSection({ testimonials }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex(
        (prev) => (prev + 1) % Math.ceil(testimonials.length / 3)
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + Math.ceil(testimonials.length / 3)) %
        Math.ceil(testimonials.length / 3)
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  // Get testimonials for current slide (3 per slide on desktop)
  const getCurrentTestimonials = () => {
    const start = currentIndex * 3;
    return testimonials.slice(start, start + 3);
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white text-sm font-medium text-gray-700 mb-4">
            Client Testimonials
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
              Clients Say
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about their experience working with our architectural team.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Desktop Grid (3 columns) */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-12">
            {getCurrentTestimonials().map((testimonial) => (
              <Card
                key={testimonial._id}
                className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote className="h-8 w-8 text-gray-300 group-hover:text-gray-400 transition-colors" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-4">{renderStars(5)}</div>

                  {/* Review Text */}
                  <p className="text-gray-700 leading-relaxed mb-6 line-clamp-4">
                    {testimonial.review}
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center space-x-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 truncate">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600 truncate">
                        {testimonial.title}, {testimonial.company}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {testimonial.project}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile/Tablet Single Column */}
          <div className="lg:hidden">
            <div className="grid gap-6 mb-8">
              {testimonials
                .slice(currentIndex, currentIndex + 1)
                .map((testimonial) => (
                  <Card
                    key={testimonial._id}
                    className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      {/* Quote Icon */}
                      <div className="mb-4">
                        <Quote className="h-6 w-6 text-gray-300" />
                      </div>

                      {/* Rating */}
                      <div className="flex items-center mb-4">
                        {renderStars(5)}
                      </div>

                      {/* Review Text */}
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {testimonial.review}
                      </p>

                      {/* Client Info */}
                      <div className="flex items-center space-x-4">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">
                            {testimonial.name}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {testimonial.project}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="h-10 w-10 rounded-full border-gray-300 hover:bg-gray-50 bg-transparent"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {Array.from(
                { length: Math.ceil(testimonials.length / 3) },
                (_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === currentIndex
                        ? "bg-gray-900 w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                )
              )}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="h-10 w-10 rounded-full border-gray-300 hover:bg-gray-50 bg-transparent"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-gray-900 to-gray-800 border-0 text-white">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join our satisfied clients and let us bring your architectural
                vision to life with our award-winning design expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100 px-8"
                >
                  Get Free Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-gray-900 px-8 bg-transparent"
                >
                  View Our Portfolio
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
