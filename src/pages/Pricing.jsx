import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

export default function Pricing() {
  const pricing = [
    { type: "Single", price: "800" },
    { type: "Couple", price: "1100" },
    { type: "Custom", price: "XXXX" },
    { type: "Color Single", price: "1100" },
    { type: "Color Couple", price: "1400" },
    { type: "Color Custom", price: "XXXX" },
  ];
  return (
    <>
      <Navbar />
      <section className="p-6 grid md:grid-cols-3 gap-6">
        {pricing.map((type) => (
          <div key={type.type} className="border p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-2">{type.type} Portrait</h2>
            <p>Starting from ₹{type.price}</p>
            <a
              href={
                "https://wa.me/918657134924?text=Hi%20I%20want%20a%20handmade%20" +
                type.type +
                " Portrait"
              }
              className="block mt-4 bg-black text-white text-center py-2 rounded"
            >
              Get Exact Price
            </a>
          </div>
        ))}
      </section>
      <Footer />
    </>
  );
}
