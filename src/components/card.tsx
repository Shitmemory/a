"use client";

import classNames from "classnames";
import { useEffect, useState } from "react";

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

  // Extract number and suffix (e.g. 4K+, 97%)
  const match = title.match(/^(\d+)([^\d]*)$/);
  const targetNumber = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000; // in ms
    const steps = 60;
    const increment = targetNumber / steps;
    const interval = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        clearInterval(timer);
        setCount(targetNumber);
      } else {
        setCount(Math.floor(start));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [targetNumber]);

  return (
    <div
      className={classNames(
        baseClasses,
        "rounded-2xl p-6 shadow-lg flex flex-col gap-3 w-[17rem] max-w-full",
        className
      )}
    >
      {icon && <div className="text-xl">{icon}</div>}
      <h3 className="text-7xl font-semibold">
        {count}
        {suffix}
      </h3>
      <p className={`text-xl leading-relaxed ${descriptionText}`}>
        {description}
      </p>
    </div>
  );
};
