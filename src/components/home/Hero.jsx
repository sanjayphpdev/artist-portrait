import { trackWhatsAppClick } from "../../utils/whatsappTracker";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Turn Your Photos Into <br />
            <span className="text-gray-600">Timeless Hand-Drawn Art</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            100% handmade pencil portraits • No AI • Museum-quality finish
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/contact"
              className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
            >
              Get Your Portrait
            </a>

            <a
              href="https://wa.me/918657134924"
              target="_blank"
              className="border border-black px-6 py-3 rounded-md hover:bg-black hover:text-white transition"
              onClick={() => trackWhatsAppClick("Hero button click")}
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src="/images/hero/hero1.jpeg"
            alt="Handmade Portrait"
            className="rounded-lg shadow-lg"
          />
          <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded shadow text-sm">
            ✏️ 100% Hand-Drawn
          </div>
        </div>
      </div>
    </section>
  );
}
