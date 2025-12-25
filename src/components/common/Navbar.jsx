import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow">
      <h1 className="text-xl font-bold">Tanmay Artbox</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/contact" className="bg-black text-white px-4 py-2 rounded">
          Order Now
        </Link>
      </div>
    </nav>
  );
}
