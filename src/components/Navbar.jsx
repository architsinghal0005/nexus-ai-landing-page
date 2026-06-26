import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-[#114C5A] flex items-center justify-center text-white font-bold">
              AI
            </div>

            <span className="font-bold text-xl">Nexus AI</span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 font-medium">
            <li>
              <a
                href="#features"
                className="hover:text-[#FFC801] transition-colors"
              >
                Features
              </a>
            </li>

            <li>
              <a
                href="#pricing"
                className="hover:text-[#FFC801] transition-colors"
              >
                Pricing
              </a>
            </li>

            <li>
              <a
                href="#testimonials"
                className="hover:text-[#FFC801] transition-colors"
              >
                Testimonials
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="hover:text-[#FFC801] transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Desktop Button */}
          <button className="hidden md:block bg-[#114C5A] text-white px-6 py-3 rounded-xl hover:bg-[#172B36] transition-all">
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl"
            aria-label="Toggle navigation menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-6 rounded-2xl bg-white shadow-lg p-6">
            <div className="flex flex-col gap-5 text-lg">
              <a href="#features" onClick={() => setMenuOpen(false)}>
                Features
              </a>

              <a href="#pricing" onClick={() => setMenuOpen(false)}>
                Pricing
              </a>

              <a href="#testimonials" onClick={() => setMenuOpen(false)}>
                Testimonials
              </a>

              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>

              <button className="bg-[#114C5A] text-white py-3 rounded-xl">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
