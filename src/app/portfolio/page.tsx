import PageTitle from "@/components/page-title";
import { getPortfolioImages } from "@/sanity/projects";

export default async function Page() {
  const images = await getPortfolioImages();

  return (
    <div className="space-y-4">
      <PageTitle title="Portfolio" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {images.map((im) => (
          <img className="h-[300px] object-cover" src={im.url} key={im._id} />
        ))}
      </div>
    </div>
  );
}
