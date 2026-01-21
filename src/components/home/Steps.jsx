import { trackWhatsAppClick } from "../../utils/whatsappTracker";

export default function Steps() {
  return (
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-2xl md:text-4xl font-semibold">How It Works</h2>

      <p className="mt-3 text-gray-600 max-w-xl mx-auto">
        A simple process to turn memories into timeless handmade art.
      </p>

      <div className="mt-6 max-w-6xl mx-auto overflow-hidden">
        <img
          src="/images/How-it-works.png"
          alt="How handmade portrait works"
          className="w-full -mt-48 md:-mt-56"
          loading="lazy"
        />
      </div>
    </section>
  );
}
