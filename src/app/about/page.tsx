import PageTitle from "@/components/page-title";

export default function Page() {
  return (
    <div className="space-y-4">
      <PageTitle title="About" />
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem,
            suscipit beatae veritatis delectus nobis minima temporibus ut
            voluptatem. Atque, nulla quidem. Natus laborum commodi repellat
            voluptatum odio! Hic eos cumque est, quibusdam tempore et vel
            accusantium ullam reprehenderit suscipit maxime excepturi obcaecati.
            Officiis sunt nesciunt sapiente molestias, facere expedita incidunt?
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="hero.jpg"
            alt="hero"
            className="w-[500px] h-[500px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
