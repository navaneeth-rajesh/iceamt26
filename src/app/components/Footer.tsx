import { motion } from "motion/react";
import { Link } from "react-scroll";
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer id="footer" className="bg-white border-t border-[#C6A75E] relative pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-[#C6A75E] rounded-md flex items-center justify-center font-bold text-white text-lg">
                A
              </div>
              <span className="text-slate-900 font-bold text-lg tracking-wide">
                ICEAMT <span className="text-[#C6A75E]">2025</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light">
              International Conference on Emerging Advances in Management & Technology. Organizing by Adi Shankara College of Engineering & Technology.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-[#C6A75E] hover:text-[#C6A75E] transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Committee", "Registration"].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    className="text-slate-500 hover:text-[#C6A75E] text-sm cursor-pointer transition-colors font-light"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Information</h4>
            <ul className="space-y-3">
              {["Call for Papers", "Important Dates", "Venue", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-500 hover:text-[#C6A75E] text-sm transition-colors font-light">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Newsletter</h4>
            <p className="text-slate-500 text-sm mb-4 font-light">Subscribe to get latest conference updates.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-2 border border-slate-200 rounded-l-md focus:outline-none focus:border-[#C6A75E] text-sm bg-slate-50"
              />
              <button className="bg-[#C6A75E] text-white px-4 py-2 rounded-r-md hover:bg-[#b09350] transition-colors">
                <ArrowUp className="w-4 h-4 rotate-90" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-light uppercase tracking-wider">
          <p>© 2025 Adi Shankara College of Engineering & Technology</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#C6A75E]">Privacy Policy</a>
            <a href="#" className="hover:text-[#C6A75E]">Terms of Service</a>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-white border border-[#C6A75E] text-[#C6A75E] p-3 rounded-full shadow-lg hover:bg-[#C6A75E] hover:text-white transition-all duration-300 z-40 hidden md:block"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
}
