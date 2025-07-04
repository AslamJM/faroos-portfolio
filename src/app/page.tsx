import AboutHome from "@/components/home/about-home";
import HeroSlider from "@/components/home/hero-slider";
import PortfolioGallery from "@/components/home/home-portfolio";
import TestimonialsSection from "@/components/home/testimonials";

export default async function Home() {
  return (
    <div className="space-y-4">
      <HeroSlider />
      <AboutHome />
      <PortfolioGallery />
      <TestimonialsSection />
    </div>
  );
}
