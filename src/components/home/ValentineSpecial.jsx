import { trackWhatsAppClick } from "../../utils/whatsappTracker";

const images = [
  "/images/portfolio/p2.jpeg",
  "/images/portfolio/p6.jpeg",
  "/images/portfolio/p7.jpeg",
];

export default function ValentineSpecial() {
  return (
    <section className="bg-pink-50 py-16 px-6 text-center">
      <h2 className="text-2xl md:text-4xl font-semibold">
        This Valentine’s, Gift Something Truly Personal ❤️
      </h2>

      <p className="mt-4 text-gray-600 max-w-xl mx-auto">
        Flowers fade. Chocolates finish. A handmade portrait stays forever.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {images.map((img, index) => (
          <div
            key={index}
            className="bg-white rounded-xl h-64 shadow overflow-hidden"
          >
            <img
              src={img}
              alt="Handmade portrait artwork"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <div className="mt-10">
        <a
          href="https://wa.me/919702512779"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick("Order Valentine Portrait")}
          className="inline-block bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition"
        >
          Order Valentine Portrait
        </a>
      </div>
    </section>
  );
}
