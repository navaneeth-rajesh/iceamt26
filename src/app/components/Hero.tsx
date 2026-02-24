import { motion } from "motion/react";
import { ArrowRight, Download, Calendar, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Background Texture */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1688748807457-d8926e351596?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGFic3RyYWN0JTIwbWluaW1hbCUyMHRleHR1cmUlMjBwYXR0ZXJufGVufDF8fHx8MTc3MTQ4NDgxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-amber-50/50 to-transparent -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-slate-50 to-transparent -z-10" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#C6A75E]/30 text-slate-600 font-medium text-sm mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#C6A75E] animate-pulse" />
            International Conference 2026
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-6 leading-tight tracking-tight font-sans">
            ICEAMT <span className="text-[#C6A75E]">2026</span>
          </h1>
          
          <p className="text-xl md:text-3xl text-slate-600 font-light mb-4 max-w-4xl mx-auto leading-relaxed tracking-wide">
            International Conference on Emerging Advances in Management & Technology
          </p>
          
          <p className="text-lg md:text-xl text-slate-500 font-normal mb-10">
            Organized by: <span className="font-semibold text-slate-700">Adi Shankara College of Engineering & Technology</span>
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-slate-500 mb-12 font-medium">
            <div className="flex items-center gap-2">
              <Calendar className="text-[#C6A75E] w-5 h-5" />
              <span>October 15-17, 2026</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-slate-300" />
            <div className="flex items-center gap-2">
              <MapPin className="text-[#C6A75E] w-5 h-5" />
              <span>Kalady, Kerala</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="#registration"
              className="w-full sm:w-auto px-8 py-4 bg-[#C6A75E] text-white font-semibold rounded-lg hover:bg-[#b09350] transition-colors shadow-lg shadow-[#C6A75E]/20 flex items-center justify-center gap-2"
            >
              Register Now
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#brochure"
              className="w-full sm:w-auto px-8 py-4 bg-white border border-[#C6A75E] text-[#C6A75E] font-semibold rounded-lg hover:bg-amber-50 transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <Download className="w-4 h-4" />
              Download Brochure
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#C6A75E]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#C6A75E] to-transparent opacity-50" />
      </motion.div>
    </section>
  );
}
