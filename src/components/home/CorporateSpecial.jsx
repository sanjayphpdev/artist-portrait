import { trackWhatsAppClick } from "../../utils/whatsappTracker";

export default function CorporateSpecial() {
  return (
    <section className="bg-gray-50 py-16 px-6 text-center">
      <h2 className="text-2xl md:text-4xl font-semibold">
        Thoughtful Corporate Gifting
      </h2>

      <p className="mt-4 text-gray-600 max-w-xl mx-auto">
        Move beyond mugs and vouchers. Gift a handmade portrait to managers,
        team members, or farewell colleagues.
      </p>

      <div className="mt-6">
        <a
          href="/corporate-gifting"
          className="inline-block border border-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition"
        >
          Corporate Gifting Enquiry
        </a>
      </div>
    </section>
  );
}
