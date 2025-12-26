const images = [
  "/images/portfolio/p14.jpeg",
  "/images/portfolio/p2.jpeg",
  "/images/portfolio/p6.jpeg",
  "/images/portfolio/p7.jpeg",
];

export default function PortfolioPreview() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Recent Handmade Portraits
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Each artwork is hand-crafted with love and precision
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow">
              <img
                src={img}
                alt="Portrait"
                className="hover:scale-110 transition duration-300"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/portfolio"
            className="inline-block bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800"
          >
            View Full Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
