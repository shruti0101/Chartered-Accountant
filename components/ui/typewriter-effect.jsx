"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "motion/react";
import { useEffect } from "react";

/* ===== 1. TypewriterEffect (animated reveal) ===== */
export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}) => {
  const wordsArray = words.map((w) => ({ ...w, text: w.text.split("") }));
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  /* stagger‑in when visible */
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        { display: "inline-block", opacity: 1 },
        { duration: 0.3, delay: stagger(0.08) }
      );
    }
  }, [isInView]);

  /* render */
  return (
    <div
      className={cn(
        "relative inline-flex items-end gap-1", // keeps cursor beside text
        className
      )}
    >
      {/* typed letters */}
      <motion.div ref={scope} className="inline !leading-snug">
        {wordsArray.map((word, wi) => (
          <span key={wi} className="inline-block whitespace-nowrap">
            {word.text.map((char, ci) => (
              <motion.span
                key={ci}
                className={cn("opacity-0", word.className)}
                style={{
                  fontSize: "clamp(1rem, 6vw, 3rem)", // 📱→🖥 auto‑scaling
                }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.div>

      {/* blinking cursor */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        className={cn(
          "inline-block bg-blue-500 rounded-sm",
          cursorClassName
        )}
        style={{
          width: "4px",
          height: "clamp(1.4rem, 6vw, 3.2rem)",
        }}
      />
    </div>
  );
};

/* ===== 2. TypewriterEffectSmooth (no per‑letter reveal) ===== */
export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}) => {
  const wordsArray = words.map((w) => ({ ...w, text: w.text.split("") }));

  return (
    <div className={cn("inline-flex items-end gap-1", className)}>
      {/* sliding mask */}
      <motion.div
        className="overflow-hidden"
        initial={{ width: 0 }}
        whileInView={{ width: "fit-content" }}
        transition={{ duration: 2, ease: "linear", delay: 0.8 }}
      >
        <span
          className="whitespace-nowrap !leading-snug"
          style={{ fontSize: "clamp(1rem, 6vw, 3rem)" }}
        >
          {wordsArray.map((word, wi) => (
            <span key={wi} className="inline-block">
              {word.text.map((char, ci) => (
                <span key={ci} className={word.className}>
                  {char}
                </span>
              ))}
            </span>
          ))}
        </span>
      </motion.div>

      {/* blinking cursor */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className={cn("bg-blue-500 rounded-sm", cursorClassName)}
        style={{
          width: "4px",
          height: "clamp(1.4rem, 6vw, 3.2rem)",
        }}
      />
    </div>
  );
};
