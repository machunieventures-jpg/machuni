import { motion } from 'motion/react';
import { Mail, MessageCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section id="cta" className="py-32 px-6 md:px-24 flex flex-col items-center justify-center text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass rounded-[3rem] p-12 md:p-24 max-w-4xl w-full relative overflow-hidden"
      >
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-neon-blue/20 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-neon-purple/20 blur-[100px] pointer-events-none" />

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl font-medium tracking-tight mb-8 leading-[0.9]"
        >
          Build with a <br />
          team that <span className="italic font-serif text-gradient">ships.</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-ink-dim text-lg mb-12 max-w-md mx-auto"
        >
          No friction. No contact forms. Just a direct line to the people who build.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <a 
            href="https://wa.me/9779840389804" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex gap-3 items-center px-8 py-4 bg-ink text-bg rounded-full font-medium transition-all hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-5 h-5" />
            Open WhatsApp
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse ml-2" />
          </a>
          <a 
            href="mailto:hello@machuni.com" 
            className="group flex gap-3 items-center px-8 py-4 border border-glass-edge bg-bg-alt/50 rounded-full font-medium transition-all hover:bg-glass"
          >
            <Mail className="w-5 h-5 text-ink-faint group-hover:text-ink transition-colors" />
            hello@machuni.com
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-24 pt-12 border-t border-glass-edge flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="text-left">
            <p className="text-[10px] font-mono tracking-widest uppercase text-ink-faint mb-1">Manoj Shrestha</p>
            <p className="text-xs text-ink-dim">Founder / Managing Partner</p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] font-mono tracking-widest uppercase text-ink-faint hover:text-neon-blue transition-colors">LinkedIn</a>
            <a href="#" className="text-[10px] font-mono tracking-widest uppercase text-ink-faint hover:text-neon-blue transition-colors">X / Twitter</a>
          </div>
          <p className="text-[10px] font-mono tracking-widest uppercase text-ink-faint">
            © 2026 Machuni Holdings
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
