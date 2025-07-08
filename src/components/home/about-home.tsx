import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Building, Calendar } from "lucide-react";
import Link from "next/link";

const stats = [
  {
    icon: Building,
    value: "200+",
    label: "Projects Completed",
  },
  {
    icon: Users,
    value: "150+",
    label: "Happy Clients",
  },
  {
    icon: Award,
    value: "25+",
    label: "Awards Won",
  },
  {
    icon: Calendar,
    value: "6+",
    label: "Years Experience",
  },
];

export default function AboutHome() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/hero.jpg"
                alt="Modern architectural building showcase"
                fill
                className="object-cover"
                quality={90}
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating stats card */}
            <Card className="absolute -bottom-8 -right-4 lg:-right-8 bg-white shadow-xl border-0">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  {stats.slice(0, 2).map((stat, index) => (
                    <div key={index} className="space-y-1">
                      <stat.icon className="h-5 w-5 mx-auto text-gray-600" />
                      <div className="text-2xl font-bold text-gray-900">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-600 leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-black/5 text-sm font-medium text-gray-700">
                About Our Studio
              </div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                Crafting Spaces That{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
                  Inspire & Endure
                </span>
              </h2>
            </div>

            {/* Main Content Card */}
            <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  For over 6 years, we've been at the forefront of architectural
                  innovation, transforming visions into reality through
                  thoughtful design and meticulous execution. Our team of
                  talented architects combines creativity with technical
                  expertise to deliver exceptional results.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  We believe that great architecture goes beyond aesthetics—it
                  creates experiences, tells stories, and enhances the way
                  people live and work. From sustainable residential homes to
                  cutting-edge commercial spaces, every project reflects our
                  commitment to excellence and innovation.
                </p>

                {/* Key Points */}
                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Sustainable Design
                      </h4>
                      <p className="text-sm text-gray-600">
                        Eco-friendly solutions for the future
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Client-Centered
                      </h4>
                      <p className="text-sm text-gray-600">
                        Your vision is our priority
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Talented</h4>
                      <p className="text-sm text-gray-600">
                        Recognized excellence in design
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Full Service
                      </h4>
                      <p className="text-sm text-gray-600">
                        From concept to completion
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="p-4 text-center space-y-2">
                    <stat.icon className="h-6 w-6 mx-auto text-gray-600" />
                    <div className="text-xl font-bold text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-600 leading-tight">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/portfolio" passHref>
                <Button
                  size="lg"
                  className="bg-black text-white hover:bg-gray-800 px-8 cursor-pointer"
                >
                  View Our Portfolio
                </Button>
              </Link>
              <Link href="/about" passHref>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 bg-transparent cursor-pointer"
                >
                  Meet Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
