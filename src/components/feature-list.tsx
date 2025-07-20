"use client";

interface Feature {
  id: string;
  title: string;
}

const features: Feature[] = [
  { id: "01", title: "On-Demand Capital, Anytime" },
  { id: "02", title: "Tailored Financing for Every Deal" },
  { id: "03", title: "Funding Solutions, Coast to Coast" },
  { id: "04", title: "Designed for Long-Term Growth" },
];

export default function FeatureList() {
  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-y-2 gap-x-10 pt-6">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex items-start gap-4 border-t border-gray-700 pb-4"
        >
          <span className="relative top-3 text-gray-400 text-xl w-4  text-center">
            {feature.id}
          </span>
          <h4 className="text-lg font-bold text-white leading-tight relative top-4">
            {feature.title}
          </h4>
        </div>
      ))}
    </div>
  );
}
