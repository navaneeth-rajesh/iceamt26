import { motion } from "motion/react";
import { ArrowRight, Code, Database, Globe, TrendingUp, Cpu, Briefcase } from "lucide-react";

const domains = [
  { icon: <Briefcase className="w-6 h-6" />, title: "Management", desc: "Strategy, HR, Operations, Entrepreneurship" },
  { icon: <Cpu className="w-6 h-6" />, title: "Emerging Tech", desc: "IoT, Blockchain, Cloud Computing, Cyber Security" },
  { icon: <Database className="w-6 h-6" />, title: "AI & Data Science", desc: "Machine Learning, Big Data, Neural Networks" },
  { icon: <TrendingUp className="w-6 h-6" />, title: "Finance", desc: "FinTech, Crypto, Banking, Risk Management" },
  { icon: <Globe className="w-6 h-6" />, title: "Marketing", desc: "Digital Marketing, Consumer Behavior, Branding" },
  { icon: <Code className="w-6 h-6" />, title: "Engineering", desc: "Robotics, Automation, Sustainable Energy" },
];

export function CallForPapers() {
  return (
    <section id="papers" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#C6A75E] font-bold uppercase tracking-widest text-xs">Research Tracks</span>
          <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mt-4 mb-6">Call For <span className="font-bold">Papers</span></h2>
          <div className="w-16 h-px bg-[#C6A75E] mx-auto opacity-50" />
          <p className="text-slate-500 max-w-2xl mx-auto mt-8 font-light text-lg">
            We invite original research papers in the following domains. All accepted papers will be published in Scopus-indexed proceedings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-[0_4px_20px_-12px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-12px_rgba(198,167,94,0.2)] transition-all duration-300 border border-slate-50 group cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-[#C6A75E]" />
              
              <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 mb-6 group-hover:border-[#C6A75E] group-hover:text-[#C6A75E] transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#C6A75E] transition-colors">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light">{item.desc}</p>
              
              <div className="flex items-center text-[#C6A75E] font-medium text-xs uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                <span>View Details</span>
                <ArrowRight className="w-3 h-3 ml-2" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#submit"
            className="inline-flex items-center justify-center px-10 py-4 bg-[#C6A75E] text-white font-bold rounded-lg hover:bg-[#b09350] transition-colors gap-2 shadow-lg shadow-[#C6A75E]/20"
          >
            Submit Your Paper
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
