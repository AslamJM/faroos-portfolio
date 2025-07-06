import ContactMethods from "@/components/contact/contact-info";
import Navbar from "@/components/navbar";
import PageTitle from "@/components/page-title";
import React from "react";

export default function Page() {
  return (
    <div>
      <Navbar variant="solid" />
      <ContactMethods />
    </div>
  );
}
