import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, MapPin, Calendar } from "lucide-react";

const portfolioProjects = [
  {
    id: 1,
    slug: "modern-residential-complex",
    title: "Modern Residential Complex",
    category: "Residential",
    location: "New York, NY",
    year: "2023",
    image: "/hero1.jpg",
    featured: true,
  },
  {
    id: 2,
    slug: "sustainable-office-tower",
    title: "Sustainable Office Tower",
    category: "Commercial",
    location: "San Francisco, CA",
    year: "2023",
    image: "/hero2.jpg",
    featured: false,
  },
  {
    id: 3,
    slug: "cultural-arts-center",
    title: "Cultural Arts Center",
    category: "Cultural",
    location: "Chicago, IL",
    year: "2022",
    image: "/hero3.jpg",
    featured: true,
  },
  {
    id: 4,
    slug: "luxury-villa-estate",
    title: "Luxury Villa Estate",
    category: "Residential",
    location: "Miami, FL",
    year: "2022",
    image: "/hero4.jpg",
    featured: false,
  },
  //   {
  //     id: 5,
  //     slug: "urban-mixed-use-development",
  //     title: "Urban Mixed-Use Development",
  //     category: "Mixed-Use",
  //     location: "Seattle, WA",
  //     year: "2023",
  //     image: "/placeholder.svg?height=500&width=600",
  //     featured: true,
  //   },
  //   {
  //     id: 6,
  //     slug: "minimalist-house-design",
  //     title: "Minimalist House Design",
  //     category: "Residential",
  //     location: "Los Angeles, CA",
  //     year: "2021",
  //     image: "/placeholder.svg?height=400&width=400",
  //     featured: false,
  //   },
  //   {
  //     id: 7,
  //     slug: "corporate-headquarters",
  //     title: "Corporate Headquarters",
  //     category: "Commercial",
  //     location: "Austin, TX",
  //     year: "2022",
  //     image: "/placeholder.svg?height=600&width=400",
  //     featured: false,
  //   },
  //   {
  //     id: 8,
  //     slug: "eco-friendly-community-center",
  //     title: "Eco-Friendly Community Center",
  //     category: "Public",
  //     location: "Portland, OR",
  //     year: "2023",
  //     image: "/placeholder.svg?height=500&width=500",
  //     featured: true,
  //   },
];

export default function PortfolioGallery() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-sm font-medium text-gray-700 mb-4">
            Our Portfolio
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
              Projects
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our diverse portfolio of architectural projects, from
            residential masterpieces to commercial landmarks that define modern
            living and working spaces.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {portfolioProjects.map((project, index) => (
            <Link
              key={project.id}
              href={`/project/${project.slug}`}
              className={`group block ${
                // Create varied grid layout
                index === 0
                  ? "md:col-span-2 md:row-span-2"
                  : index === 2
                  ? "lg:row-span-2"
                  : index === 4
                  ? "md:col-span-2"
                  : ""
              }`}
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] h-full">
                <div className="relative overflow-hidden">
                  <div
                    className={`relative ${
                      index === 0
                        ? "h-[400px] md:h-[500px]"
                        : index === 2
                        ? "h-[300px] lg:h-[500px]"
                        : index === 4
                        ? "h-[250px] md:h-[300px]"
                        : "h-[300px]"
                    }`}
                  >
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      quality={90}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-900 backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-black/80 text-white backdrop-blur-sm">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-white/80">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-3 w-3" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <ArrowRight className="h-5 w-5 text-gray-900" />
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link href="/portfolio">
            <Button
              size="lg"
              className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg font-semibold group"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
