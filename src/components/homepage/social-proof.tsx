"use client";

import React, { forwardRef } from "react";
import ProcessSection from "../processSection";
import Stat from "../stat";
import { HiChevronDown } from "react-icons/hi";

interface SocialProofProps {
  scrollTargetRef: React.RefObject<HTMLElement | null>;
}

const SocialProof = forwardRef<HTMLDivElement, SocialProofProps>(
  ({ scrollTargetRef }, ref) => {
    const scrollToNext = () => {
      if (scrollTargetRef.current) {
        scrollTargetRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };

    return (
      <section
        ref={ref}
        className="min-h-screen snap-start bg-neutral-900 text-white px-6 relative z-10"
      >
        {/* Process Section */}
        <ProcessSection />

        {/* Stat Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto pt-20 border-t border-gray-700 mt-16 z-50">
          <Stat label="Properties Sold" value="500+" />
          <Stat label="Total Sales Value" value="£2.5B+" />
          <Stat label="Client Satisfaction" value="98%" />
          <Stat label="Years Experience" value="15+" />
        </div>

        {/* Scroll Down Button */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30"></div>

        {/* Subtle Bottom Gradient */}
        <div
          className="absolute bottom-0 left-0 w-full h-[20%] pointer-events-none z-20"
          style={{
            background:
              "linear-gradient(to bottom, rgba(23, 23, 23, 1) 0%,rgb(37, 43, 51) 100%)",
          }}
        />
      </section>
    );
  }
);

SocialProof.displayName = "SocialProof";

export default SocialProof;
