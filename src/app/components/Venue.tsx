import { motion } from "motion/react";
import { MapPin, Phone, Mail } from "lucide-react";

export function Venue() {
  return (
    <section id="venue" className="py-24 bg-[#FAFAFA] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <span className="text-[#C6A75E] font-bold uppercase tracking-widest text-xs mb-2 block">
                Venue & Contact
              </span>
              <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 leading-tight">
                Get In <span className="font-bold">Touch</span>
              </h2>
              <div className="w-16 h-px bg-[#C6A75E]" />
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center flex-shrink-0 text-[#C6A75E]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-2">Conference Venue</h4>
                  <p className="text-slate-500 leading-relaxed font-light">
                    Adi Shankara College of Engineering & Technology<br />
                    Vidya Bharathi Nagar, Mattoor,<br />
                    Kalady, Ernakulam, Kerala 683574
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center flex-shrink-0 text-[#C6A75E]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-2">Phone Support</h4>
                  <p className="text-slate-500 leading-relaxed font-light">
                    +91 484 246 3825<br />
                    +91 987 654 3210
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center flex-shrink-0 text-[#C6A75E]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-2">Email Us</h4>
                  <p className="text-slate-500 leading-relaxed font-light">
                    info@iceamt2025.org<br />
                    support@adishankara.ac.in
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[500px] w-full bg-slate-200 rounded-2xl overflow-hidden shadow-xl border border-white relative"
          >
            {/* Map Placeholder */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d490.8784425743731!2d76.43030400106277!3d10.178416708730314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0807bfa8906d61%3A0x11ad08dbd85357dc!2sAdi%20Shankara%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1771914298840!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale opacity-80 hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 pointer-events-none border-[16px] border-white/50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
