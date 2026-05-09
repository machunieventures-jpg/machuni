import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function Ventures() {
  const ventures = [
    {
      id: 'hub',
      name: 'Machuni Hub',
      status: 'Live · 12 deployments',
      tags: ['Workflow automation', 'AI integrations', 'Chatbots', 'CRM systems'],
      size: 'large',
      color: 'blue'
    },
    {
      id: 'vidhira',
      name: 'Vidhira',
      status: 'In development',
      tags: ['Civic AI', 'Governance platform'],
      size: 'small',
      color: 'purple'
    },
    {
      id: 'arka',
      name: 'Arka Base',
      status: 'In development',
      tags: ['SME automation', 'Infrastructure'],
      size: 'small',
      color: 'blue'
    },
    {
      id: 'ma',
      name: 'MA Records',
      status: 'Active',
      tags: ['Music', 'Cultural production'],
      size: 'small',
      color: 'purple'
    },
    {
      id: '36t',
      name: '36T Network',
      status: 'Active',
      tags: ['Content pipeline', 'YouTube'],
      size: 'small',
      color: 'blue'
    },
    {
      id: 'consulting',
      name: 'Premium Consulting',
      status: 'Open',
      tags: ['Strategy', 'Execution'],
      size: 'small',
      color: 'purple'
    }
  ];

  return (
    <section id="ventures" className="py-32 px-6 md:px-24">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-medium tracking-tight"
        >
          The <span className="italic font-serif">Venture</span> <br /> Portfolio.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-ink-dim max-w-sm text-sm md:text-base font-mono uppercase tracking-widest leading-relaxed"
        >
          A coordinated network of entities building infrastructure for Nepal and beyond.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {ventures.map((v, i) => (
          <motion.div
            key={v.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className={cn(
              "group relative overflow-hidden rounded-3xl glass p-8 min-h-[320px] flex flex-col justify-between transition-all duration-500 hover:border-ink-faint",
              v.size === 'large' ? "md:col-span-4" : "md:col-span-2"
            )}
          >
            {/* Hover Background Glow */}
            <div className={cn(
              "absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none",
              v.color === 'blue' ? "bg-[radial-gradient(circle_at_50%_0%,var(--color-neon-blue),transparent_70%)]" : "bg-[radial-gradient(circle_at_50%_0%,var(--color-neon-purple),transparent_70%)]"
            )} />

            <div>
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <div className={cn(
                    "w-1.5 h-1.5 rounded-full",
                    v.color === 'blue' ? "bg-neon-blue" : "bg-neon-purple"
                  )} />
                  <span className="text-[10px] font-mono tracking-widest uppercase text-ink-dim">
                    {v.status}
                  </span>
                </div>
                <button className="w-10 h-10 rounded-full border border-glass-edge flex items-center justify-center transition-all group-hover:bg-ink group-hover:text-bg">
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              <h3 className={cn(
                "font-medium tracking-tight group-hover:scale-[1.02] transition-transform origin-left",
                v.size === 'large' ? "text-4xl md:text-5xl" : "text-3xl"
              )}>
                {v.name}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {v.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-bg-alt/50 border border-glass-edge rounded-full text-[10px] font-mono tracking-wider uppercase text-ink-faint group-hover:text-ink-dim transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
