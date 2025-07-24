"use client";

import React, { forwardRef } from "react";
import ProcessSection from "../sections/process-section";

import { HiChevronDown } from "react-icons/hi";
import ServicesCarousel from "../services-carousel";

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
        <ProcessSection scrollTargetRef={scrollTargetRef} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto border-t border-gray-700 z-50" />

        <ServicesCarousel />
        {/* Stat Section */}

        {/* <Stat label="Properties Sold" value="500+" />
          <Stat label="Total Sales Value" value="£2.5B+" />
          <Stat label="Client Satisfaction" value="98%" />
          <Stat label="Years Experience" value="15+" /> */}
        {/* </div> */}

        {/* Scroll Down Button */}

        {/* Subtle Bottom Gradient */}
        <div
          className="absolute bottom-0 left-0 w-full h-[10%] pointer-events-none z-5"
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
