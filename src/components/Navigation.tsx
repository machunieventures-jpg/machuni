import { motion } from 'motion/react';

export default function Navigation() {
  const navLinks = [
    { name: 'Ventures', href: '#ventures' },
    { name: 'Story', href: '#story' },
    { name: 'Stats', href: '#stats' },
    { name: 'AI', href: '#ai' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 md:px-12 md:py-8 pointer-events-none"
    >
      <div className="flex items-center gap-3 pointer-events-auto group cursor-pointer">
        <div className="w-8 h-8 rounded-full bg-neon-blue flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-blue to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="relative z-10 font-bold text-bg text-sm">M</span>
        </div>
        <span className="text-ink font-mono text-[10px] tracking-[0.2em] uppercase hidden sm:block">
          Machuni Holdings
        </span>
      </div>

      <div className="hidden md:flex gap-8 pointer-events-auto">
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href}
            className="text-[10px] font-mono tracking-[0.2em] uppercase text-ink-dim hover:text-neon-blue transition-colors"
          >
            {link.name}
          </a>
        ))}
        <a 
          href="#cta"
          className="text-[10px] font-mono tracking-[0.2em] uppercase text-neon-blue border border-neon-blue/30 rounded-full px-4 py-1 hover:bg-neon-blue hover:text-bg transition-all"
        >
          Contact
        </a>
      </div>
    </motion.nav>
  );
}
