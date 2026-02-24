import { motion } from "motion/react";
import { Calendar } from "lucide-react";

export function Timeline() {
  const dates = [
    { date: "June 15, 2025", event: "Abstract Submission Deadline", passed: true },
    { date: "July 30, 2025", event: "Full Paper Submission", passed: false },
    { date: "August 20, 2025", event: "Notification of Acceptance", passed: false },
    { date: "Sept 10, 2025", event: "Registration Deadline", passed: false },
    { date: "Oct 15-17, 2025", event: "Conference Dates", passed: false, active: true },
  ];

  return (
    <section id="dates" className="py-24 bg-[#FAFAFA] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#C6A75E] font-bold uppercase tracking-widest text-xs">Mark Your Calendar</span>
          <h2 className="text-3xl lg:text-5xl font-light text-slate-900 mt-4 mb-6">Important <span className="font-bold">Dates</span></h2>
          <div className="w-16 h-px bg-[#C6A75E] mx-auto opacity-50" />
        </div>

        <div className="relative pt-12">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-[#C6A75E]/30 -translate-y-1/2 hidden lg:block" />
          
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-0">
            {dates.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Connector Dot */}
                <div className={`relative z-10 w-4 h-4 rounded-full border border-[#C6A75E] bg-white transition-all duration-300 mb-8 lg:mb-12 ${
                  item.active ? "bg-[#C6A75E] scale-150 shadow-[0_0_0_4px_rgba(198,167,94,0.1)]" : "group-hover:bg-[#C6A75E]"
                }`}>
                  {item.active && <div className="absolute inset-0 animate-ping bg-[#C6A75E] rounded-full opacity-20" />}
                </div>
                
                {/* Content Card */}
                <div className={`
                  p-6 rounded-lg border border-slate-100 bg-white shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-[200px]
                  ${item.active ? "border-[#C6A75E]/50 shadow-md" : ""}
                `}>
                  <div className="flex justify-center mb-3">
                    <Calendar className={`w-5 h-5 ${item.active ? "text-[#C6A75E]" : "text-slate-400"}`} />
                  </div>
                  <h4 className={`font-bold text-lg mb-2 text-slate-900`}>{item.date}</h4>
                  <p className="text-slate-500 text-xs uppercase tracking-wide font-medium leading-snug">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
