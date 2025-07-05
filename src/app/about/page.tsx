import AboutInfo from "@/components/about/about-info";
import Navbar from "@/components/navbar";
import Teams from "./teams";

export default function Page() {
  return (
    <div>
      <Navbar variant="solid" />
      <main className="pt-8">
        <AboutInfo />
        <Teams />
      </main>
    </div>
  );
}
