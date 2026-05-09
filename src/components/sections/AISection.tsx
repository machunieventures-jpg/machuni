import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Smartphone, CheckCircle2, MessageSquare } from 'lucide-react';

export default function AISection() {
  const [messages, setMessages] = useState<any[]>([]);
  const chatScript = [
    { sender: 'user', text: 'Hi, I need to book an appointment for tomorrow at 2 PM.' },
    { sender: 'ai', text: 'Checking availability... We have a slot at 2:00 PM with the creative team. Would you like to confirm?' },
    { sender: 'user', text: 'Yes, please. Can I pay via eSewa?' },
    { sender: 'ai', text: 'Absolutely. I’ve sent a secure payment link to your WhatsApp. Once paid, your slot is locked.' },
    { sender: 'user', text: 'Done! Just got the confirmation. Thanks!' },
    { sender: 'ai', text: 'You’re all set. Our team will see you tomorrow at 2:00 PM. Have a great day!', last: true }
  ];

  useEffect(() => {
    let currentIdx = 0;
    let isResetting = false;

    const interval = setInterval(() => {
      if (isResetting) return;

      if (currentIdx < chatScript.length) {
        setMessages(prev => [...prev, chatScript[currentIdx]]);
        currentIdx++;
      } else {
        isResetting = true;
        setTimeout(() => {
          setMessages([]);
          currentIdx = 0;
          isResetting = false;
        }, 5000);
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="ai" className="py-32 px-6 md:px-24 flex flex-col lg:flex-row gap-24 items-center overflow-hidden">
      <div className="lg:w-1/2">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-purple/20 bg-neon-purple/5 mb-8"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-neon-purple animate-pulse" />
          <span className="text-[10px] font-mono tracking-widest uppercase text-neon-purple/80">
            Intelligent Automation
          </span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-medium tracking-tight mb-8"
        >
          Automation that <br />
          thinks in <span className="italic font-serif">your brand voice.</span>
        </motion.h2>

        <ul className="space-y-6">
          <FeatureItem delay={0.2} text="Bilingual handling (Nepali/English) with full context awareness" />
          <FeatureItem delay={0.3} text="Real-time qualification and appointment locking" />
          <FeatureItem delay={0.4} text="Graceful human-handoff thresholds with instant alerts" />
          <FeatureItem delay={0.5} text="End-to-end audit trails for every interaction" />
        </ul>
      </div>

      {/* Chat Mockup */}
      <div className="lg:w-1/2 w-full max-w-lg relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/20 to-neon-purple/20 blur-3xl opacity-30" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative glass rounded-[2.5rem] p-4 border-4 border-bg-alt shadow-2xl h-[500px] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-bottom border-glass-edge mb-4 px-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-bg-alt flex items-center justify-center border border-glass-edge">
                <MessageSquare className="w-5 h-5 text-neon-blue" />
              </div>
              <div>
                <p className="text-xs font-medium">Customer Assistant</p>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span className="text-[10px] text-ink-faint">Live Assistant</span>
                </div>
              </div>
            </div>
            <Smartphone className="w-5 h-5 text-ink-faint" />
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto space-y-4 px-2 scrollbar-hide">
            <AnimatePresence initial={false}>
              {messages.filter(msg => msg && msg.sender).map((msg, i) => {
                const isUser = msg.sender === 'user';
                return (
                  <motion.div
                    key={`${i}-${msg.sender}`}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[80%] px-4 py-2 rounded-2xl text-[13px] leading-relaxed ${
                      isUser 
                        ? 'bg-ink text-bg rounded-tr-none' 
                        : 'bg-bg-alt border border-glass-edge rounded-tl-none'
                    }`}>
                      {msg.text}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
            {/* Typing indicator placeholder */}
            {messages.length < chatScript.length && (
               <motion.div 
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="flex gap-1 p-2"
               >
                 <div className="w-1 h-1 bg-ink-faint rounded-full" />
                 <div className="w-1 h-1 bg-ink-faint rounded-full" />
                 <div className="w-1 h-1 bg-ink-faint rounded-full" />
               </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FeatureItem({ text, delay }: any) {
  return (
    <motion.li 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="flex items-center gap-3 text-ink-dim"
    >
      <CheckCircle2 className="w-5 h-5 text-neon-blue flex-shrink-0" />
      <span className="text-sm font-light tracking-wide">{text}</span>
    </motion.li>
  );
}
