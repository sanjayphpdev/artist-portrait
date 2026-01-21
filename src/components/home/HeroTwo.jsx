import { trackWhatsAppClick } from "../../utils/whatsappTracker";

export default function HeroTwo() {
  return (
    <section className="bg-white py-20 px-6 text-center">
      <h1 className="text-3xl md:text-5xl font-bold leading-tight">
        A Handmade Gift They’ll Remember Forever
      </h1>

      <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
        Turn a photo into a beautiful hand-drawn portrait — perfect for gifting
        someone you care about.
      </p>

      <p className="mt-3 text-sm text-gray-500">
        🎁 Loved ones • ❤️ Couples • 🧑‍💼 Colleagues • 🎉 Special moments
      </p>

      <div className="mt-8">
        <a
          href="https://wa.me/919702512779"
          className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
          onClick={() => trackWhatsAppClick("Hero 2 button click")}
        >
          Gift a Portrait on WhatsApp
        </a>
      </div>
    </section>
  );
}
