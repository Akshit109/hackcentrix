"use client";

import { useState, useEffect } from "react";
import { AlertCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function SystemAlert() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="fixed bottom-8 right-8 z-50 w-80 border-2 border-primary bg-background p-4 shadow-[0_0_20px_rgba(255,9,9,0.3)]"
        >
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2 text-primary">
              <AlertCircle size={18} className="animate-pulse" />
              <span className="font-mono text-sm font-bold uppercase tracking-tighter">
                System Update
              </span>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-muted-foreground hover:text-primary"
            >
              <X size={18} />
            </button>
          </div>

          {/* Message */}
          <div className="mt-3 space-y-3">
            <p className="font-mono text-xs leading-relaxed">
               The first round has concluded successfully.
              <br />
              <span className="text-primary font-bold underline">
                Results will be announced tomorrow.
              </span>
            </p>

            {/* CTA */}
            <a
              href="https://vision.hack2skill.com/event/gdgoc-25-hackcentrix"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full border border-primary bg-primary/10 py-2 font-mono text-xs uppercase tracking-widest text-primary hover:bg-primary hover:text-white transition-all duration-75 text-center"
            >
              Access Portal
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
