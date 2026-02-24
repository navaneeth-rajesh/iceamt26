import { motion } from "motion/react";

export function AboutConference() {
  return (
    <section id="about-conference" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#C6A75E] font-medium text-xs tracking-[0.2em] uppercase mb-4 block">
            About The Conference
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-8 leading-tight">
            Advancing Knowledge in <br />
            <span className="font-bold">Management & Technology</span>
          </h2>
          
          <div className="w-24 h-px bg-[#C6A75E] mx-auto mb-12" />

          <p className="text-xl text-slate-600 leading-relaxed font-light mb-10">
            ICEAMT 2025 serves as a premier international platform for researchers, practitioners, and educators to present and discuss the most recent innovations, trends, and concerns as well as practical challenges encountered and solutions adopted in the fields of Management and Technology.
          </p>

          <div className="grid sm:grid-cols-3 gap-8 text-center pt-8 border-t border-slate-100">
            <div>
              <span className="block text-4xl font-bold text-[#C6A75E] mb-2">3</span>
              <span className="text-sm text-slate-500 uppercase tracking-widest">Days</span>
            </div>
            <div>
              <span className="block text-4xl font-bold text-[#C6A75E] mb-2">50+</span>
              <span className="text-sm text-slate-500 uppercase tracking-widest">Speakers</span>
            </div>
            <div>
              <span className="block text-4xl font-bold text-[#C6A75E] mb-2">500+</span>
              <span className="text-sm text-slate-500 uppercase tracking-widest">Delegates</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
