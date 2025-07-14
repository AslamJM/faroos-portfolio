import AboutInfo from "@/components/about/about-info";
import Navbar from "@/components/navbar";
import Teams from "./teams";

const options = { next: { revalidate: 30 } };

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
