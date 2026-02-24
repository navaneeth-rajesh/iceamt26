import { motion } from "motion/react";
import { Check } from "lucide-react";

export function Registration() {
  const plans = [
    {
      name: "Student / Scholar",
      price: "₹3,000",
      features: ["Access to all sessions", "Conference Kit", "Lunch & Refreshments", "Certificate of Participation", "Digital Proceedings"],
      highlight: false,
    },
    {
      name: "Industry / Faculty",
      price: "₹5,000",
      features: ["Access to all sessions", "Premium Conference Kit", "Networking Dinner", "Certificate of Presentation", "Scopus Publication Support"],
      highlight: true,
    },
  ];

  return (
    <section id="registration" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#C6A75E] font-bold uppercase tracking-widest text-xs">Join Us</span>
          <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mt-4 mb-6">Registration <span className="font-bold">Details</span></h2>
          <div className="w-16 h-px bg-[#C6A75E] mx-auto opacity-50" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`
                relative p-10 rounded-2xl transition-all duration-300
                ${plan.highlight 
                  ? "bg-white border-2 border-[#C6A75E] shadow-[0_20px_40px_-12px_rgba(198,167,94,0.3)] transform lg:-translate-y-4" 
                  : "bg-white border border-slate-100 shadow-lg hover:shadow-xl hover:border-[#C6A75E]/50"}
              `}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#C6A75E] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-md">
                  Most Popular
                </div>
              )}

              <h3 className="text-lg font-medium text-slate-500 uppercase tracking-widest mb-4">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className={`text-5xl font-bold ${plan.highlight ? "text-[#C6A75E]" : "text-slate-800"}`}>{plan.price}</span>
                <span className="text-slate-400 font-light">/ person</span>
              </div>

              <div className="w-full h-px bg-slate-100 mb-8" />

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className={`mt-1 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${plan.highlight ? "bg-[#C6A75E]/20 text-[#C6A75E]" : "bg-slate-100 text-slate-400"}`}>
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-slate-600 font-light">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`
                  w-full py-4 rounded-lg font-bold transition-all duration-300
                  ${plan.highlight 
                    ? "bg-[#C6A75E] text-white hover:bg-[#b09350] shadow-lg shadow-[#C6A75E]/30" 
                    : "bg-slate-50 text-slate-900 hover:bg-[#C6A75E] hover:text-white border border-slate-200 hover:border-[#C6A75E]"}
                `}
              >
                Register Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
