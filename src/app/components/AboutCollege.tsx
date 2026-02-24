import { motion } from "motion/react";
import { Award, BookOpen, MapPin } from "lucide-react";

export function AboutCollege() {
  return (
    <section id="about-college" className="py-24 bg-[#FAFAFA] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="text-[#C6A75E] font-bold uppercase tracking-widest text-xs mb-2 block">
                
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
                Adi Shankara College of <br /> Engineering & Technology
              </h2>
              <div className="w-20 h-1 bg-[#C6A75E] rounded-full" />
            </div>

            <p className="text-lg text-slate-600 leading-relaxed font-light">
              Located in the serene surroundings of Kalady, Kerala—the birthplace of Adi Shankara—our institution stands as a beacon of academic excellence and innovation. As an autonomous institution, we are dedicated to fostering a learning environment that blends traditional values with modern technological advancements.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#C6A75E]/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-[#C6A75E]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">Excellence</h4>
                  <p className="text-sm text-slate-500">Top-tier academic programs and research facilities.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#C6A75E]/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-[#C6A75E]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">Innovation</h4>
                  <p className="text-sm text-slate-500">Focus on emerging technologies and industry needs.</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-slate-500 text-sm font-medium pt-4">
              <MapPin className="w-4 h-4 text-[#C6A75E]" />
              <span>Kalady, Kerala, India</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Soft Shadow Image */}
            <div className="absolute inset-0 bg-[#C6A75E] transform translate-x-4 translate-y-4 rounded-2xl opacity-10" />
            <img
              src="https://media.licdn.com/dms/image/v2/C4E1BAQHvvhFplI65-Q/company-background_10000/company-background_10000/0/1596308997892/adi_shankara_institute_of_engineering_and_technology_sankar_nagar_mattoor_kalady__683_547_cover?e=2147483647&v=beta&t=L94JPCq1ZxuX0vGvWVlceJyApYxMTSnNDFfBiJm8xwg"
              alt="Adi Shankara College Campus"
              className="relative w-full h-[500px] object-cover rounded-2xl shadow-xl border border-white"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
