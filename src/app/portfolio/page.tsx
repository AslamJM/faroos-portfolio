import Gallery from "@/components/portfolio/galley";
import { getPortfolioImages } from "@/sanity/projects";

const sizes = ["tall", "wide", "square"];

export default async function PortfolioPage() {
  const images = await getPortfolioImages();
  return (
    <Gallery
      images={images.map((im, index) => ({
        ...im,
        id: index + 1,
        size: sizes[index],
      }))}
    />
  );
}
