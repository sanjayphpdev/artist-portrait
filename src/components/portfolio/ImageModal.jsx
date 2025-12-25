import { useEffect } from "react";

export default function ImageModal({ image, onClose }) {
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Modal Content */}
      <div className="absolute bottom-2 left-2 bg-white text-xs px-2 py-1 rounded shadow">
        100% Hand-Drawn
      </div>

      <div
        className="relative max-w-4xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white text-3xl"
        >
          ✕
        </button>

        <img
          src={image}
          alt="Portrait Preview"
          className="w-full max-h-[80vh] object-contain rounded-lg"
        />

        {/* CTA */}
        <div className="bg-white p-4 flex justify-between items-center rounded-b-lg">
          <p className="font-medium">Want a portrait like this?</p>
          <a
            href="https://wa.me/919702512779?text=Hi%20I%20want%20a%20handmade%20portrait"
            target="_blank"
            className="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            WhatsApp Now
          </a>
        </div>
      </div>
    </div>
  );
}
