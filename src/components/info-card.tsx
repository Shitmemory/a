"use client";

import React, { useEffect, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

interface Testimonial {
  quote: string;
  author?: string;
}

type InfoCardProps = {
  testimonials: Testimonial[];
  theme?: "light" | "dark";
  textClassName?: string;
  wrapperClassName?: string;
  interval?: number;
  children?: ReactNode;
};

export default function InfoCard({
  testimonials = [],
  theme = "light",
  textClassName = "",
  wrapperClassName = "",
  interval = 5000,
  children,
}: InfoCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, interval);

    return () => clearInterval(timer);
  }, [testimonials, interval]);

  const currentTestimonial = testimonials[currentIndex];
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "relative rounded-3xl overflow-hidden p-6 md:p-10 h-[280px] transition-all duration-1000 ease-in-out",
        "bg-neutral-900 text-white border border-white",
        "flex items-center justify-center text-center",
        wrapperClassName
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTestimonial.quote + currentTestimonial.author}
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(4px)" }}
          transition={{ duration: 0.5 }}
          className={cn("relative z-10 max-w-xl", textClassName)}
        >
          <p className="text-xl italic mb-2">"{currentTestimonial.quote}"</p>
          {currentTestimonial.author && (
            <p className="text-sm font-light">– {currentTestimonial.author}</p>
          )}
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
