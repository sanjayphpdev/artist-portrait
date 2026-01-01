import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { trackWhatsAppClick } from "../utils/whatsappTracker";

export default function CorporateGifting() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Corporate Gifting, Made Personal
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600">
          Thoughtful handmade pencil portraits for managers, teammates, and
          leadership — a gift they’ll truly remember.
        </p>

        <a
          href="https://wa.me/919702512779?text=Hi%20I%20want%20to%20enquire%20about%20corporate%20gifting"
          target="_blank"
          onClick={() => trackWhatsAppClick("Corporate Gifting Hero CTA")}
          className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-md"
        >
          Enquire on WhatsApp
        </a>
      </section>

      {/* WHY */}
      <section className="py-14 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Why Choose Handmade Portraits for Corporate Gifting?
        </h2>

        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
          <p>
            Corporate gifts are often forgotten. A handmade portrait, however,
            creates an emotional connection that lasts for years.
          </p>
          <p>
            Each portrait is 100% hand-drawn from photographs — no AI, no
            digital shortcuts — making every gift truly one of a kind.
          </p>
        </div>
      </section>

      {/* USE CASES */}
      <section className="bg-gray-100 py-14 px-6">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Ideal for Corporate Occasions
        </h2>

        <ul className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4 text-gray-700">
          <li>🎉 Team appreciation & achievements</li>
          <li>👋 Farewell & retirement gifts</li>
          <li>🎂 Manager & colleague birthdays</li>
          <li>🏆 Promotions & leadership recognition</li>
          <li>🚀 Startup milestones & anniversaries</li>
        </ul>
      </section>

      {/* TRUST */}
      <section className="py-14 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Professional, Respectful & Secure
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-gray-700 text-center">
          <div>
            <h3 className="font-medium mb-2">Confidentiality</h3>
            <p>
              All photos are handled with care and used only for the
              commissioned artwork.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-2">Consent First</h3>
            <p>
              Portraits are created only with approval from the recipient or
              gifting team.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-2">Professional Packaging</h3>
            <p>
              Delivered in premium packaging suitable for corporate gifting.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-16 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Planning a Corporate or Team Gift?
        </h2>
        <p className="mb-6">
          Let’s create something meaningful for your colleagues.
        </p>

        <a
          href="https://wa.me/919702512779?text=Hi%20I%20am%20interested%20in%20corporate%20portrait%20gifting"
          target="_blank"
          onClick={() => trackWhatsAppClick("Corporate Gifting Bottom CTA")}
          className="inline-block bg-white text-black px-6 py-3 rounded-md"
        >
          Talk to Us on WhatsApp
        </a>
      </section>

      <Footer />
    </>
  );
}
