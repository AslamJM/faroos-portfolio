export default function ProjectHeader() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
            Our Projects
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Explore our diverse portfolio of architectural projects, from
            innovative residential designs to groundbreaking commercial
            developments. Each project represents our commitment to excellence,
            sustainability, and client satisfaction.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">200+</div>
              <div className="text-gray-300 text-sm">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">8</div>
              <div className="text-gray-300 text-sm">Project Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-gray-300 text-sm">Awards Won</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-gray-300 text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
