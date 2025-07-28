"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import HeroSection from "./hero";
import Loader from "@/components/layout/loading";
import { useFullPageScroll } from "@/hooks/useFullPageScroll";

// Lazy load below-the-fold components
const SocialProof = dynamic(() => import("./social-proof"), { ssr: false });
const FeaturedSection = dynamic(() => import("./featured-section"), {
  ssr: false,
});

export default function HeroWrapper() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const nextSectionRef = useRef<HTMLDivElement | null>(null);
  const featuredRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);

  // Activate scroll snapping only after loading is complete
  useFullPageScroll([heroRef, nextSectionRef, featuredRef]);

  useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVH();
    window.addEventListener("resize", setVH);

    const video = videoRef.current;
    let didLoad = false;

    const endLoading = () => {
      if (!didLoad) {
        setLoading(false);
        didLoad = true;
      }
    };

    if (video) {
      video.addEventListener("canplaythrough", endLoading);
    }

    const fallbackTimeout = setTimeout(() => {
      endLoading();
    }, 2000);

    return () => {
      clearTimeout(fallbackTimeout);
      if (video) {
        video.removeEventListener("canplaythrough", endLoading);
      }
      window.removeEventListener("resize", setVH);
    };
  }, []);

  return (
    <main
      style={{
        height: "calc(var(--vh, 1vh) * 100)",
      }}
      className="relative overflow-x-hidden bg-neutral-900"
    >
      {/* Loading Overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-black transition-opacity duration-500 ${
          loading
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <Loader />
      </div>

      {/* Dark Overlay for Search */}
      {searchOpen && (
        <div
          id="overlay"
          className="fixed inset-0 z-40 bg-black/40 transition-opacity duration-500"
        />
      )}

      {/* Main Content */}
      <div className="transition-all duration-500 relative z-10 bg-neutral-900">
        <HeroSection
          ref={heroRef}
          scrollTargetRef={nextSectionRef}
          videoRef={videoRef}
          ready={!loading}
        />

        <SocialProof ref={nextSectionRef} scrollTargetRef={featuredRef} />
        <FeaturedSection ref={featuredRef} />
      </div>
    </main>
  );
}
