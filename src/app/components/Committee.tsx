import { motion } from "motion/react";

const committee = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Conference Chair",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE2ODQ0OTYwMjR8MA&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    name: "Prof. Sarah Williams",
    role: "Technical Program Chair",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTY4NDQ5NjAyNHww&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    name: "Dr. Michael Chen",
    role: "Publication Chair",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBzbWlsaW5nfGVufDF8fHx8MTY4NDQ5NjAyNHww&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    name: "Prof. Anjali Gupta",
    role: "Organizing Secretary",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHNtaWxpbmZ8ZW58MXx8fDE2ODQ0OTYwMjR8MA&ixlib=rb-4.0.3&q=80&w=400",
  },
];

export function Committee() {
  return (
    <section id="committee" className="py-24 bg-[#FAFAFA] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#C6A75E] font-bold uppercase tracking-widest text-xs">Organizing Committee</span>
          <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mt-4 mb-6">Meet The <span className="font-bold">Team</span></h2>
          <div className="w-16 h-px bg-[#C6A75E] mx-auto opacity-50" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {committee.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center group"
            >
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full border-2 border-[#C6A75E]/20 group-hover:border-[#C6A75E] transition-colors duration-300" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full p-1"
                />
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h3>
              <div className="w-8 h-px bg-[#C6A75E] mx-auto my-3 opacity-50" />
              <p className="text-slate-500 text-sm font-light uppercase tracking-wide">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
