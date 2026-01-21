import { trackWhatsAppClick } from "../../utils/whatsappTracker";

export default function FinalCTA() {
  return (
    <section className="bg-black text-white py-16 px-6 text-center">
      <h2 className="text-2xl md:text-4xl font-semibold">
        Make Someone Feel Truly Special
      </h2>

      <p className="mt-4 text-gray-300 max-w-xl mx-auto">
        If you’re confused what to gift — a handmade portrait is always the
        right choice.
      </p>

      <div className="mt-8">
        <a
          href="https://wa.me/919702512779"
          onClick={() => trackWhatsAppClick("Final CTA")}
          className="inline-block bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200"
        >
          Gift a Handmade Portrait
        </a>
      </div>
    </section>
  );
}
