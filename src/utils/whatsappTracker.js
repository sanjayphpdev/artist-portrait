export const trackWhatsAppClick = (label = "Unknown") => {
  if (window.gtag) {
    window.gtag("event", "whatsapp_click", {
      event_category: "engagement",
      event_label: label,
    });
  }
};
