import ContactMethods from "@/components/contact/contact-info";
import Navbar from "@/components/navbar";
import { getContactDetails } from "@/sanity/team";
import React from "react";

export default async function Page() {
  const methods = await getContactDetails();

  const contactMethods = methods.map((m) => ({
    id: m._id,
    title: m.type,
    value: m.value,
    description: m.description,

    color:
      m.type === "Phone"
        ? "bg-blue-500"
        : m.type === "Email"
        ? "bg-emerald-500"
        : "bg-green-500",
  }));

  return (
    <div>
      <Navbar variant="solid" />
      <ContactMethods methods={contactMethods} />
    </div>
  );
}
