import { useState } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ImageModal from "../components/portfolio/ImageModal";
const images = [
  "/images/portfolio/p1.jpeg",
  "/images/portfolio/p2.jpeg",
  "/images/portfolio/p3.jpeg",
  "/images/portfolio/p4.jpeg",
  "/images/portfolio/p5.jpeg",
  "/images/portfolio/p6.jpeg",
  "/images/portfolio/p7.jpeg",
  "/images/portfolio/p8.jpeg",
  "/images/portfolio/p9.jpeg",
  "/images/portfolio/p10.jpeg",
  "/images/portfolio/p11.jpeg",
  "/images/portfolio/p12.jpeg",
  "/images/portfolio/p13.jpeg",
];
export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <>
      <Navbar />
      <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow"
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img}
              alt="Handmade Portrait"
              className="w-full h-64 object-contain hover:scale-110 transition duration-300"
            />
          </div>
        ))}
      </section>
      <Footer />

      {/* Modal */}
      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
}
