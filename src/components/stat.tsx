"use client";

import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

export default function Stat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) setStartCount(true);
  }, [inView]);

  const numberOnly = parseFloat(value.replace(/[^0-9.]/g, ""));
  const isBillion = value.includes("B");
  const isPercent = value.includes("%");
  const isPlus = value.includes("+");
  const prefix = value.includes("\u00a3") ? "\u00a3" : "";

  return (
    <div className="text-center z-50" ref={ref}>
      <div className="text-3xl md:text-4xl font-light mb-2 text-white">
        {startCount ? (
          <>
            {prefix}
            <CountUp
              end={numberOnly}
              duration={2}
              decimals={isBillion ? 1 : 0}
              suffix={isBillion ? "B" : isPercent ? "%" : isPlus ? "+" : ""}
            />
          </>
        ) : (
          value
        )}
      </div>
      <div className="text-gray-400 text-sm uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
