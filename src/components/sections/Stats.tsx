import { motion, useMotionValue, useSpring, useInView, useMotionValueEvent } from 'motion/react';
import { useEffect, useRef } from 'react';

export default function Stats() {
  const stats = [
    { value: 12, suffix: '+', label: 'Active deployments across Nepal SMEs' },
    { value: 214, suffix: 'k', label: 'Workflows executed in the last 90 days' },
    { value: 3.2, suffix: 's', label: 'Average first-response across all channels', decimal: true },
    { value: 99.4, suffix: '%', label: 'System uptime last 12 months', decimal: true },
  ];

  return (
    <section id="stats" className="py-32 px-6 md:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <StatCard key={i} stat={stat} index={i} />
        ))}
      </div>
    </section>
  );
}

function StatCard({ stat, index }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.01
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(stat.value);
    }
  }, [isInView, stat.value, motionValue]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass rounded-3xl p-8 flex flex-col justify-center items-center text-center relative group overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="text-5xl md:text-6xl font-medium mb-4 flex items-baseline gap-1">
        <Counter value={springValue} decimal={stat.decimal} />
        <span className="text-2xl text-neon-blue">{stat.suffix}</span>
      </div>
      <p className="text-[10px] font-mono tracking-widest uppercase text-ink-dim leading-relaxed">
        {stat.label}
      </p>
    </motion.div>
  );
}

function Counter({ value, decimal }: any) {
  const ref = useRef<HTMLSpanElement>(null);

  useMotionValueEvent(value, "change", (latestValue: any) => {
    const latest = typeof latestValue === 'number' ? latestValue : 0;
    if (ref.current) {
      ref.current.textContent = decimal ? latest.toFixed(1) : Math.round(latest).toString();
    }
  });

  return <span ref={ref}>0</span>;
}
