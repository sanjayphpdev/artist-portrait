import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          Tanmay <span className="font-light">Artbox</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="hover:text-gray-600">
            Home
          </Link>
          <Link to="/portfolio" className="hover:text-gray-600">
            Portfolio
          </Link>
          <Link to="/pricing" className="hover:text-gray-600">
            Pricing
          </Link>
          <a
            href="https://wa.me/919702512779"
            className="bg-black text-white px-4 py-2 rounded-md"
          >
            Order Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-white px-4 py-6">
          <nav className="flex flex-col gap-4 text-lg">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="py-2 border-b"
            >
              Home
            </Link>

            <Link
              to="/portfolio"
              onClick={() => setOpen(false)}
              className="py-2 border-b"
            >
              Portfolio
            </Link>

            <Link
              to="/pricing"
              onClick={() => setOpen(false)}
              className="py-2 border-b"
            >
              Pricing
            </Link>

            <a
              href="https://wa.me/919702512779"
              className="mt-4 bg-black text-white py-3 rounded-md text-center"
            >
              Order Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
