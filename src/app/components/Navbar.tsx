import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about-college" }, // Updated to point to About College section
  { name: "Committee", to: "committee" },
  { name: "Call for Papers", to: "papers" },
  { name: "Important Dates", to: "dates" },
  { name: "Registration", to: "registration" },
  { name: "Contact", to: "footer" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-white py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Logo Placeholder - assuming no image provided */}
          <div className="w-10 h-10 bg-[#C6A75E] rounded-lg flex items-center justify-center font-bold text-white text-xl shadow-sm">
            A
          </div>
          <div className="flex flex-col leading-tight">
             <span className="text-slate-900 font-bold text-lg tracking-wide font-sans">
              ICEAMT <span className="text-[#C6A75E]">2026</span>
            </span>
            <span className="text-slate-500 text-[10px] uppercase tracking-wider hidden sm:block">
              Adi Shankara College
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="relative text-slate-600 hover:text-[#C6A75E] cursor-pointer text-sm font-medium transition-colors group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C6A75E] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-slate-900 hover:text-[#C6A75E] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-600 hover:text-[#C6A75E] text-lg font-medium cursor-pointer border-b border-slate-50 pb-2 last:border-0"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
