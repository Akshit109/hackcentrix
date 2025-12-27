"use client";

import { motion } from "framer-motion";
import { Brain, Rocket, ShieldAlert, Heart } from "lucide-react";

const visions = [
  {
    title: "Deep Thinking",
    description:
      "Beyond surface solutions. We dive deep into the core of the problem.",
    icon: Brain,
  },
  {
    title: "Bold Innovation",
    description:
      "Push boundaries fearlessly. The future is built by the brave.",
    icon: Rocket,
  },
  {
    title: "Real Solutions",
    description:
      "Address genuine problems. We build for impact, not just for show.",
    icon: ShieldAlert,
  },
  {
    title: "Love Building",
    description:
      "Passion over paychecks. We code because we can't imagine not building.",
    icon: Heart,
  },
];

export function Vision() {
  return (
    <section id="vision" className="py-20 sm:py-24 md:py-32 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter italic mb-4">
            Our Vision
          </h2>
          <div className="h-1 w-16 sm:w-20 bg-primary mx-auto" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {visions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 sm:p-8 border border-primary/10 bg-primary/5 hover:border-primary/40 transition-all relative overflow-hidden"
            >
              <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary mb-4 sm:mb-6" />
              <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight mb-2 sm:mb-3 italic">
                {item.title}
              </h3>
              <p className="font-mono text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
              <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="font-mono text-3xl sm:text-4xl font-black">
                  0{index + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
