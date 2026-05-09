import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

export default function Cases() {
  const cases = [
    {
      title: 'Restaurant Chain · WhatsApp Orders',
      tag: 'F&B · Automation',
      metrics: '18,300+ orders processed',
      outcome: '3 outlets · full automation',
      gradient: 'from-blue-600/20 to-purple-600/20'
    },
    {
      title: 'Real Estate · Lead Qualifier',
      tag: 'Real Estate · AI',
      metrics: '42% conversion lift',
      outcome: '6-week deployment cycle',
      gradient: 'from-blue-400/20 to-cyan-400/20'
    },
    {
      title: 'Tarakeshwor · Digital Governance',
      tag: 'Civic · Internal Ops',
      metrics: 'Communication layer',
      outcome: 'Active internal deployment',
      gradient: 'from-purple-400/20 to-blue-400/20'
    }
  ];

  return (
    <section id="cases" className="py-32 px-6 md:px-24">
      <div className="mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-medium tracking-tight mb-4"
        >
          Proven in the <span className="italic font-serif">field.</span>
        </motion.h2>
        <p className="text-ink-dim font-mono text-xs uppercase tracking-widest">Selected Case Files · Active Systems</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {cases.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group relative h-[450px] rounded-[2rem] overflow-hidden glass border border-glass-edge flex flex-col justify-end p-8"
          >
            {/* Abstract Background Visual */}
            <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-40 group-hover:opacity-60 transition-opacity duration-700`} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,var(--color-bg)_0%,transparent_100%)] opacity-80" />

            {/* Content */}
            <div className="relative z-10">
               <span className="inline-block px-3 py-1 rounded-full border border-glass-edge bg-bg/50 text-[10px] font-mono tracking-widest uppercase text-ink-dim mb-4 group-hover:text-neon-blue transition-colors">
                {card.tag}
              </span>
              <h3 className="text-2xl font-medium mb-6 leading-tight group-hover:text-ink transition-colors">
                {card.title}
              </h3>
              
              <div className="space-y-3 border-t border-glass-edge pt-6">
                <div className="flex justify-between items-center text-[10px] font-mono tracking-widest uppercase">
                  <span className="text-ink-faint">Metric</span>
                  <span className="text-ink">{card.metrics}</span>
                </div>
                <div className="flex justify-between items-center text-[10px] font-mono tracking-widest uppercase">
                  <span className="text-ink-faint">Result</span>
                  <span className="text-ink">{card.outcome}</span>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button className="p-3 rounded-full border border-glass-edge hover:bg-ink hover:text-bg transition-all">
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
