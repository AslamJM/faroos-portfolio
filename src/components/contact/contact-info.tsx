"use client";

import { Mail, MessageCircle, Phone } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../ui/card";

export default function ContactMethods({ methods }: { methods: any[] }) {
  const contactMethods = methods.map((m) => ({
    ...m,
    icon:
      m.type === "Phone" ? Phone : m.type === "Email" ? Mail : MessageCircle,
  }));

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Multiple Ways to Reach Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the communication method that works best for you. We're here
            to help and respond quickly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              //onClick={() => window.open(method.action, "_blank")}
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <method.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-900 font-medium mb-2">{method.value}</p>
                <p className="text-sm text-gray-600">{method.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
