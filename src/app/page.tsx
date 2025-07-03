export default async function Home() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-4xl font-bold">
            Your Vision. Our Headache. One Epic Building.
          </h2>
          <p className="text-xl font-semibold">
            Let’s collaborate on something that will confuse the neighbors and
            your accountant.
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
