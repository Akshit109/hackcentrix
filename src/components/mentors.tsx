"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const mentors = [
  {
    name: "Vanshika Agrawal",
    role: "Community Manager @ OSCode",
    image:
      "https://res.cloudinary.com/df6t1dmcs/image/upload/v1766516080/Anshika_mentor_oikpzi.jpg",
    desc: "Drives engagement, collaborations, and growth within the open-source ecosystem.",
  },
  {
    name: "Anubhav Singh",
    role: "Cyber Threat Researcher @ Xpectro Solutions",
    image:
      "https://res.cloudinary.com/df6t1dmcs/image/upload/v1766555050/Anubhav_singh_mentor_tyh3e0.jpg",
    desc: "Cyber Threat intelligence researcher.",
  },
];

export function Mentors() {
  return (
    <section className="py-20 sm:py-24 md:py-32 px-4 bg-card/30">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 sm:mb-16 md:mb-20 text-center">
          <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-widest text-primary mb-3 sm:mb-4">
            [ The Mentors ]
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground font-mono italic">
            Overseeing the Multiverse Breach
          </p>
        </div>

        <div className="grid gap-8 sm:gap-10 md:gap-12 md:grid-cols-2">
          {mentors.map((mentor, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="group relative flex flex-col lg:flex-row border-2 border-primary/20 bg-background overflow-hidden hover:border-primary transition-all duration-75"
            >
              <div className="relative h-64 sm:h-72 lg:h-auto w-full lg:w-64 shrink-0 grayscale group-hover:grayscale-0 transition-all duration-300 overflow-hidden">
                <Image
                  src={mentor.image || "/placeholder.svg"}
                  alt={mentor.name}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 256px"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity" />
              </div>
              <div className="p-6 sm:p-8 flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-1">
                  {mentor.name}
                </h3>
                <div className="font-mono text-[10px] sm:text-xs font-bold text-primary uppercase tracking-widest mb-3 sm:mb-4">
                  {mentor.role}
                </div>
                <p className="text-muted-foreground font-mono text-xs sm:text-sm leading-relaxed italic">
                  "{mentor.desc}"
                </p>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
