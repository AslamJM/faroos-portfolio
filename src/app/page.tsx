import AboutHome from "@/components/home/about-home";
import HeroSlider from "@/components/home/hero-slider";
import PortfolioGallery from "@/components/home/home-portfolio";
import TestimonialsSection from "@/components/home/testimonials";
import { getHeroSlides, getTestimonials } from "@/sanity/team";

export default async function Home() {
  const heroSlides = await getHeroSlides();
  const testimonials = await getTestimonials();
  return (
    <div className="space-y-4">
      <HeroSlider heroSlides={heroSlides} />
      <AboutHome />
      <PortfolioGallery />
      <TestimonialsSection testimonials={testimonials} />
    </div>
  );
}
