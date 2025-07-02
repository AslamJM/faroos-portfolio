export default async function Home() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div></div>
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
