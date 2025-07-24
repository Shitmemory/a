"use client";

import classNames from "classnames";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

type DarkCardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  theme?: "light" | "dark";
  className?: string;
};

export const DarkCard = ({
  title,
  description,
  icon,
  theme = "light",
  className,
}: DarkCardProps) => {
  const baseClasses =
    theme === "light" ? "bg-gray-100 text-black" : "bg-[#1a1d21] text-white";

  const descriptionText = theme === "light" ? "text-black" : "text-white";

  const numericMatch = title.match(/^(\d+)([^\d]*)$/);
  const isNumeric = !!numericMatch;
  const targetNumber = isNumeric ? parseInt(numericMatch![1], 10) : 0;
  const suffix = isNumeric ? numericMatch![2] : "";

  const [count, setCount] = useState(0);
  const [textDisplay, setTextDisplay] = useState("");
  const [hasAnimated, setHasAnimated] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (!inView || hasAnimated) return;

    if (isNumeric && targetNumber > 0) {
      // Count up animation
      let start = 0;
      const duration = 1000;
      const steps = 60;
      const increment = targetNumber / steps;
      const interval = duration / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= targetNumber) {
          clearInterval(timer);
          setCount(targetNumber);
          setHasAnimated(true);
        } else {
          setCount(Math.floor(start));
        }
      }, interval);

      return () => clearInterval(timer);
    } else {
      // Typing animation for non-numeric titles like "1:1"
      let index = 0;
      const typingSpeed = 150;

      const typingTimer = setInterval(() => {
        setTextDisplay((prev) => prev + title[index]);
        index++;

        if (index >= title.length) {
          clearInterval(typingTimer);
          setHasAnimated(true);
        }
      }, typingSpeed);

      return () => clearInterval(typingTimer);
    }
  }, [inView, hasAnimated, isNumeric, targetNumber, title]);

  return (
    <div
      ref={ref}
      className={classNames(
        baseClasses,
        "dark-card",
        "relative group overflow-hidden", // 🔥 for hover effect
        "rounded-2xl shadow-lg flex flex-col justify-between gap-3",
        "p-2 sm:p-6 md:p-8",
        "w-full sm:w-[20rem] md:w-[22rem] lg:w-[24rem] xl:w-[34rem] max-w-full",
        className
      )}
    >
      {icon ? (
        <div className="text-xl h-[1.5rem]">{icon}</div>
      ) : (
        <div className="h-[0.5rem]" />
      )}

      <h3 className="font-semibold max-h-[7rem] text-4xl sm:text-5xl md:text-6xl lg:text-8xl">
        {isNumeric ? `${count}${suffix}` : textDisplay}
      </h3>

      <p
        className={classNames(
          "leading-relaxed min-h-[2.5rem] lg:min-h-[3rem] md:min-h-[5rem]",
          "text-base sm:text-lg md:text-xl",
          descriptionText
        )}
      >
        {description}
      </p>
    </div>
  );
};

// export const Styles = styled.div`
//   .cards {
//     display: flex;
//     flex-direction: column;
//     gap: 15px;
//   }

//   .cards .red {
//     background-color: #f43f5e;
//   }

//   .cards .blue {
//     background-color: #3b82f6;
//   }

//   .cards .green {
//     background-color: #22c55e;
//   }

//   .cards .card {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-direction: column;
//     text-align: center;
//     height: 100px;
//     width: 250px;
//     border-radius: 10px;
//     color: white;
//     cursor: pointer;
//     transition: 400ms;
//   }

//   .cards .card p.tip {
//     font-size: 1em;
//     font-weight: 700;
//   }

//   .cards .card p.second-text {
//     font-size: 0.7em;
//   }

//   .cards .card:hover {
//     transform: scale(1.1, 1.1);
//   }

//   .cards:hover > .card:not(:hover) {
//     filter: blur(10px);
//     transform: scale(0.9, 0.9);
//   }
// `;

// const HoverEffect = () => {
//   return (
//     <StyledWrapper>
//       <div className="card">HOVER</div>
//     </StyledWrapper>
//   );
// };

// const StyledWrapper = styled.div`
//   .card {
//     position: relative;
//     width: 220px;
//     height: 320px;
//     background: mediumturquoise;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     font-size: 25px;
//     font-weight: bold;
//     border-radius: 15px;
//     cursor: pointer;
//   }

//   .card::before,
//   .card::after {
//     position: absolute;
//     content: "";
//     width: 20%;
//     height: 20%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     font-size: 25px;
//     font-weight: bold;
//     background-color: lightblue;
//     transition: all 0.5s;
//   }

//   .card::before {
//     top: 0;
//     right: 0;
//     border-radius: 0 15px 0 100%;
//   }

//   .card::after {
//     bottom: 0;
//     left: 0;
//     border-radius: 0 100% 0 15px;
//   }

//   .card:hover::before,
//   .card:hover:after {
//     width: 100%;
//     height: 100%;
//     border-radius: 15px;
//     transition: all 0.5s;
//   }

//   .card:hover:after {
//     content: "HELLO";
//   }
// `;

// export default HoverEffect;
