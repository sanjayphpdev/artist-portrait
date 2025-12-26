import { trackWhatsAppClick } from "../../utils/whatsappTracker";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/918657134924"
      target="_blank"
      className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg"
      onClick={() => trackWhatsAppClick("Float button click")}
    >
      WhatsApp
    </a>
  );
}
