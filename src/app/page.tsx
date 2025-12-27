import { Hero } from "@/components/hero";
import { Timeline } from "@/components/timeline";
import { Mentors } from "@/components/mentors";
import { SystemAlert } from "@/components/system-alert";
import { Vision } from "@/components/vision";

export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className="fixed top-0 z-50 w-full border-b border-primary/10 bg-background/80 backdrop-blur-md px-4 sm:px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="hidden md:flex gap-4 lg:gap-8 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            <a href="#vision" className="hover:text-primary transition-colors ">
              Vision
            </a>
            <a href="#about" className="hover:text-primary transition-colors ">
              Mission
            </a>
            <a
              href="#timeline"
              className="hover:text-primary transition-colors "
            >
              Timeline
            </a>
            <a href="#bounty" className="hover:text-primary transition-colors ">
              Bounty
            </a>
            <a
              href="#mentors"
              className="hover:text-primary transition-colors "
            >
              Mentors
            </a>
          </div>
          <div className="md:hidden font-mono text-xs uppercase tracking-widest text-primary">
            Hackcentrix
          </div>
          <a
            href="https://vision.hack2skill.com/event/gdgoc-25-hackcentrix"
            target="_blank"
            className="border border-primary px-3 sm:px-4 py-1.5 font-mono text-[9px] sm:text-[10px] uppercase tracking-tighter text-primary hover:bg-primary hover:text-white transition-all"
            rel="noreferrer"
          >
            Access System
          </a>
        </div>
      </nav>

      <Hero />

      <Vision />

      <section
        id="about"
        className="py-20 sm:py-32 px-4 border-y border-primary/10"
      >
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-block border border-primary/20 bg-primary/5 px-3 sm:px-4 py-1 mb-6 sm:mb-8 font-mono text-[10px] sm:text-xs text-primary uppercase tracking-[0.15em] sm:tracking-[0.2em]">
            Classified: Hackcentrix Protocol
          </div>
          <h2 className="mb-6 sm:mb-10 text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter italic">
            Mission Briefing
          </h2>
          <p className="font-mono text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
            The multiverse is fractured. Logic is breaking. Hackcentrix is
            calling upon the world's most elite architects to re-engineer
            reality. Open Innovation is the only cure. No silos. No boundaries.
            Just pure, unadulterated code.
          </p>
        </div>
      </section>

      <div id="timeline">
        <Timeline />
      </div>

      <section
        id="bounty"
        className="py-24 sm:py-32 md:py-40 px-4 bg-primary/5 border-y border-primary/20 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, #ff0909 0%, transparent 70%)",
          }}
        />
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <h2 className="mb-4 sm:mb-6 font-mono text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-[0.3em] sm:tracking-[0.5em] text-primary">
            [ Total Bounty ]
          </h2>
          <div className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-3 sm:mb-4">
            ₹50,000
          </div>
          <div className="font-mono text-xs sm:text-sm text-muted-foreground uppercase tracking-wide sm:tracking-widest px-4">
            Grant Total Issued by Stark-Mind Flayer Conglomerate
          </div>
        </div>
      </section>

      <div id="mentors">
        <Mentors />
      </div>

      <footer className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 border-t border-primary/10 bg-black/40">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 sm:mb-6">
                // Contact_Relay
              </h4>
              <div className="space-y-2 sm:space-y-3 font-mono text-xs sm:text-sm text-muted-foreground">
                <p>+91 8533806906</p>
                <p>+91 8445936898</p>
                <p className="text-primary/80 break-all">
                  gdgmathura85@gmail.com
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 sm:mb-6">
                // Uplinks
              </h4>
              <div className="flex flex-col gap-2 sm:gap-3 font-mono text-xs sm:text-sm uppercase tracking-tighter">
                <a
                  href="https://www.linkedin.com/company/gdg-glau/"
                  className="hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/gdgglau/"
                  className="hover:text-primary transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 sm:mb-6">
                // Status
              </h4>
              <div className="space-y-2 font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                <div className="flex justify-between border-b border-primary/10 pb-1">
                  <span>Connection</span>
                  <span className="text-primary animate-pulse">
                    Established
                  </span>
                </div>
                <div className="flex justify-between border-b border-primary/10 pb-1">
                  <span>Encryption</span>
                  <span>AES-256</span>
                </div>
                <div className="flex justify-between">
                  <span>Location</span>
                  <span>GLA University</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 pt-8 sm:pt-10 border-t border-primary/10">
            <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest text-center md:text-left">
              © 2025 GDG On Campus GLAU // Hackcentrix Alpha
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 font-mono text-[10px] text-primary text-center">
              <span className="animate-pulse">System Status: Optimal</span>
              <span>Uptime: 99.9%</span>
            </div>
          </div>
        </div>
      </footer>

      <SystemAlert />
    </main>
  );
}
