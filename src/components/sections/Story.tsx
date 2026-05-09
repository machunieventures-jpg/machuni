import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Story() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });

  const steps = [
    {
      id: '01',
      title: "The leak isn't effort. It's latency.",
      content: "63% of potential business in modern markets is lost past the 11-minute response threshold. We build systems that eliminate this friction at the architecture level."
    },
    {
      id: '02',
      title: "Not a chatbot. Infrastructure.",
      content: "We move beyond the gimmick. Our systems are predictable, audit-trailed, and built with human-handoff thresholds that protect your brand voice at all times."
    },
    {
      id: '03',
      title: "Built in Kathmandu. Deployed everywhere.",
      content: "Most software was built for elsewhere. Our local-first architecture is specifically engineered to handle the unique operational nuances of the South Asian market while scaling globally."
    }
  ];

  return (
    <section id="story" ref={scrollRef} className="py-32 px-6 md:px-24 flex flex-col md:flex-row gap-24 relative">
      {/* Sticky Left Section */}
      <div className="md:w-1/2 md:sticky md:top-32 md:h-fit">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl font-medium tracking-tight leading-[0.9]"
        >
          Most software <br />
          was built for <br />
          <span className="italic font-serif">elsewhere.</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-ink-dim mt-8 max-w-sm text-lg leading-relaxed"
        >
          We are rebuilding the operational stack from the ground up, starting with the systems that mediate the most important relationship in your business: your customers.
        </motion.p>
      </div>

      {/* Scrolling Right Section */}
      <div className="md:w-1/2 flex flex-col gap-32">
        {steps.map((step, i) => (
          <StoryStep key={step.id} step={step} index={i} />
        ))}
      </div>
    </section>
  );
}

function StoryStep({ step, index }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative pl-12 border-l border-glass-edge"
    >
      {/* Timeline Node */}
      <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-neon-blue shadow-[0_0_10px_var(--color-neon-blue)]" />
      
      <span className="text-[10px] font-mono tracking-widest text-neon-blue/60 mb-4 block">
        STEP {step.id}
      </span>
      <h3 className="text-2xl md:text-3xl font-medium mb-6">
        {step.title}
      </h3>
      <p className="text-ink-dim leading-relaxed text-lg">
        {step.content}
      </p>
    </motion.div>
  );
}
