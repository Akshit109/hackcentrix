"use client";

import { motion } from "framer-motion";

const timeline = [
  { date: "5-31 Dec", title: "Registration", desc: "Team Formation" },
  { date: "26 Dec - 1 Jan", title: "PPT Submission", desc: "Project Proposal" },
  { date: "3 Jan", title: "Shortlist", desc: "PPT Round Results" },
  { date: "4-10 Jan", title: "Prototyping", desc: "Build Phase" },
  { date: "13 Jan", title: "Finalists", desc: "Top 20 Revealed" },
  { date: "17 Jan", title: "Grand Finale", desc: "Offline Hackathon @ GLAU" },
];

export function Timeline() {
  return (
    <section className="relative py-20 sm:py-24 md:py-32 px-4">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 sm:mb-16 md:mb-20 text-center font-mono text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-widest text-primary">
          [ Mission Phase History ]
        </h2>

        <div className="relative border-l-2 border-primary/30 pl-6 sm:pl-8 ml-4 md:ml-0 md:pl-0 md:border-none">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 -translate-x-1/2" />

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative mb-12 sm:mb-16 md:flex md:w-full md:items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Dot */}
              <div className="absolute -left-7 sm:-left-8 top-1 md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 h-3 w-3 bg-primary shadow-[0_0_10px_#ff0909]" />

              <div className="md:w-1/2 md:px-8 lg:px-12">
                <div
                  className={`border-2 border-primary/20 bg-card p-4 sm:p-6 transition-all hover:border-primary hover:shadow-[0_0_20px_rgba(255,9,9,0.1)]`}
                >
                  <div className="mb-2 font-mono text-[10px] sm:text-xs font-bold text-primary uppercase tracking-widest">
                    {item.date}
                  </div>
                  <h3 className="mb-2 text-xl sm:text-2xl font-black uppercase tracking-tighter">
                    {item.title}
                  </h3>
                  <p className="font-mono text-xs sm:text-sm text-muted-foreground italic tracking-tight">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
