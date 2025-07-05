import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { teamMembers } from "@/data/team";
import { Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Teams() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our diverse team of architects, designers, and specialists brings
            together decades of experience and a shared passion for creating
            exceptional spaces.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card
              key={member.id}
              className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={member.image || "/vercel.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Social Links Overlay */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 bg-white/20 text-white backdrop-blur-sm hover:bg-white/30"
                    >
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 bg-white/20 text-white backdrop-blur-sm hover:bg-white/30"
                    >
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 bg-white/20 text-white backdrop-blur-sm hover:bg-white/30"
                    >
                      <Twitter className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 font-medium">{member.title}</p>
                </div>

                <div className="space-y-2 text-sm text-gray-600">
                  <div>
                    <span className="font-medium">Specialization:</span>{" "}
                    {member.specialization}
                  </div>
                  <div>
                    <span className="font-medium">Experience:</span>{" "}
                    {member.experience}
                  </div>
                  <div>
                    <span className="font-medium">Education:</span>{" "}
                    {member.education}
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
