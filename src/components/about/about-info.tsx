import Image from "next/image";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const achievements = [
  { number: "200+", label: "Projects Completed" },
  { number: "25+", label: "Awards Won" },
  { number: "15+", label: "Years Experience" },
  { number: "150+", label: "Happy Clients" },
];

export default function AboutInfo() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-sm font-medium text-gray-700">
                About Our Studio
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Designing the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
                  Future of Architecture
                </span>
              </h1>
            </div>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Founded in 2008, our architectural studio has been at the
                forefront of innovative design, creating spaces that inspire,
                function beautifully, and stand the test of time. We believe
                that great architecture goes beyond aesthetics—it shapes
                experiences, tells stories, and enhances the way people live and
                work.
              </p>
              <p>
                Our multidisciplinary team combines creative vision with
                technical expertise, sustainable practices, and a deep
                understanding of our clients' needs. From residential
                masterpieces to commercial landmarks, every project reflects our
                commitment to excellence and innovation.
              </p>
              <p>
                We're not just architects; we're storytellers, problem-solvers,
                and visionaries who transform ideas into reality. Our
                award-winning designs have been recognized internationally, but
                our greatest achievement is the satisfaction of our clients and
                the positive impact our buildings have on communities.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-black text-white hover:bg-gray-800 px-8"
              >
                View Our Portfolio
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 bg-transparent"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-[600px] lg:h-[700px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/about.jpg"
                alt="Our architectural studio workspace"
                fill
                className="object-cover"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Achievement Card */}
            <Card className="absolute -bottom-8 -left-8 bg-white shadow-xl border-0">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  {achievements.slice(0, 2).map((achievement, index) => (
                    <div key={index} className="space-y-1">
                      <div className="text-2xl font-bold text-gray-900">
                        {achievement.number}
                      </div>
                      <div className="text-xs text-gray-600 leading-tight">
                        {achievement.label}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
