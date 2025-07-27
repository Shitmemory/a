// hooks/useFullPageScroll.ts
import { useEffect, useRef } from "react";

export function useFullPageScroll(
  sections: React.RefObject<HTMLElement | null>[]
) {
  const currentSection = useRef(0);
  const isScrolling = useRef(false);

  useEffect(() => {
    const scrollToSection = (index: number) => {
      const ref = sections[index];
      if (ref?.current) {
        isScrolling.current = true;
        ref.current.scrollIntoView({ behavior: "smooth" });

        // Lock scroll for animation duration
        setTimeout(() => {
          isScrolling.current = false;
        }, 800); // Match animation duration
      }
    };

    const handleScroll = (e: WheelEvent) => {
      if (isScrolling.current) return;
      if (e.deltaY > 30) {
        if (currentSection.current < sections.length - 1) {
          currentSection.current++;
          scrollToSection(currentSection.current);
        }
      } else if (e.deltaY < -30) {
        if (currentSection.current > 0) {
          currentSection.current--;
          scrollToSection(currentSection.current);
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling.current) return;
      if (["ArrowDown", "PageDown"].includes(e.key)) {
        if (currentSection.current < sections.length - 1) {
          currentSection.current++;
          scrollToSection(currentSection.current);
        }
      } else if (["ArrowUp", "PageUp"].includes(e.key)) {
        if (currentSection.current > 0) {
          currentSection.current--;
          scrollToSection(currentSection.current);
        }
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [sections]);
}
