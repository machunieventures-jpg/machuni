import { motion } from 'motion/react';
import { MousePointer2, Activity, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 md:px-24 py-32 relative">
      <div className="max-w-5xl">
         {/* Tagline Chip */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-blue/20 bg-neon-blue/5 mb-8"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse" />
          <span className="text-[10px] font-mono tracking-widest uppercase text-neon-blue/80">
            EST. 2025 · Kathmandu · Live System
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-5xl md:text-8xl font-medium tracking-tight mb-8 leading-[0.9]"
        >
          Architects of <br />
          <span className="italic font-serif">future-ready</span> <br />
          <span className="text-gradient">brands.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-ink-dim text-lg md:text-xl max-w-xl mb-12 leading-relaxed"
        >
          A holdings group building AI infrastructure, smart automation, and creative intelligence for ambitious teams. Operated from Kathmandu. Deployed across the network.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a 
            href="#ventures" 
            className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full text-bg font-medium text-sm transition-transform hover:scale-105 active:scale-95 text-center"
          >
            Explore the system
          </a>
          <a 
            href="#cta" 
            className="px-8 py-4 border border-neon-blue/30 rounded-full text-ink hover:bg-neon-blue/5 transition-all text-sm text-center"
          >
            Open conversation
          </a>
        </motion.div>
      </div>

      {/* Floating Holo Cards - Laptop/Desktop Only */}
      <div className="hidden lg:block absolute right-24 top-1/2 -translate-y-1/2 perspective-1000">
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <HoloCard 
            icon={<Activity className="w-5 h-5 text-neon-blue" />}
            title="AI Operating Layer"
            stats="Always on · 99.4% uptime"
            sub="Last 90d metrics"
            delay={0}
          />
          <HoloCard 
            icon={<Zap className="w-5 h-5 text-neon-purple" />}
            title="Active Workflows"
            stats="214,089 executed"
            sub="Across 12 deployed clients"
            delay={0.2}
            className="translate-x-12"
          />
          <HoloCard 
            icon={<MousePointer2 className="w-5 h-5 text-neon-blue" />}
            title="Response Time"
            stats="< 3.2s average"
            sub="Across all channels"
            delay={0.4}
            className="-translate-x-4"
          />
        </motion.div>
      </div>

      {/* Scroll Cue */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase text-ink-faint">
          Scroll to enter
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-neon-blue to-transparent" />
      </motion.div>
    </section>
  );
}

function HoloCard({ icon, title, stats, sub, delay, className = "" }: any) {
  return (
    <motion.div 
      whileHover={{ y: -5, rotateY: -10 }}
      className={`glass p-6 rounded-2xl w-72 transition-all cursor-default ${className}`}
    >
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-xl bg-bg-alt border border-glass-edge shadow-lg">
          {icon}
        </div>
        <div>
          <h4 className="text-[10px] font-mono tracking-widest uppercase text-ink-faint mb-1">
            {title}
          </h4>
          <p className="text-xl font-medium text-ink mb-1">{stats}</p>
          <p className="text-[10px] text-ink-dim font-mono">{sub}</p>
        </div>
      </div>
    </motion.div>
  );
}
