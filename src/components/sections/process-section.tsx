import {
  Scale,
  Camera,
  Send,
  Users,
  FileText,
  ChevronRight,
} from "lucide-react";
import FeatureList from "../feature-list";
import { DefaultDemo } from "../demo";
import { UtilityButtonDefaultDemo } from "../utility";
import { DarkCard } from "../card";
import { FiStar } from "react-icons/fi";
import InfoCard from "../info-card";
import { useState } from "react";

const steps = [
  {
    icon: <Scale className="w-6 h-6 text-white mb-3" />,
    title: "Accurate Valuations",
    description:
      "We combine local knowledge and data analysis to give you a realistic price that attracts serious buyers — without undervaluing your home.",
  },
  {
    icon: <Camera className="w-6 h-6 text-white mb-3" />,
    title: "Professional Photography",
    description:
      "Stunning visuals that highlight your property's best features, making it stand out online and generate more interest.",
  },
  {
    icon: <Send className="w-6 h-6 text-white mb-3" />,
    title: "Targeted Marketing",
    description:
      "We advertise your property across the right platforms — from Rightmove to social — reaching active and passive buyers.",
  },
  {
    icon: <Users className="w-6 h-6 text-white mb-3" />,
    title: "Managed Viewings",
    description:
      "We coordinate and conduct every viewing personally — giving buyers a premium experience while keeping you completely hands-free.",
  },

  {
    icon: <FileText className="w-6 h-6 text-white mb-3" />,
    title: "Offer to Completion",
    description:
      "From negotiation to legal paperwork, we guide the process to a smooth and timely completion — with no nasty surprises.",
  },
];

export default function ProcessSection({
  scrollTargetRef,
}: {
  scrollTargetRef: React.RefObject<HTMLElement | null>;
}) {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-10 lg:px-20 text-white w-full">
      <div className="mb-12 max-w-6xl mx-auto">
        {/* <h2 className="text-4xl md:text-5xl tracking-tight mb-4 mt-16">
          Our Proven Process
        </h2>  */}
        <p className="-mb-6 mt-8 text-gray-200 text-lg md:text-2xl lg:text-3xl font-bold text-center">
          Sell Your Home With Confidence.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-1 gap-5 ">
          {/* CARDS ON MOBILE */}
          <div className="grid grid-cols-2 gap-5 px-8 sm:px-17 md:px-0 md:hidden">
            <DarkCard
              title="4K+"
              description="Happy clients"
              theme="dark"
              className="max-w-full bg-neutral-900 flex-1"
            />
            <DarkCard
              title="25+"
              description="Years Experience"
              className="max-w-full bg-white flex-1"
            />
            <DarkCard
              title="97%"
              description="Satisfaction rate"
              className="max-w-full bg-neutral-800 flex-1"
              theme="dark"
            />
            <DarkCard
              title="1:1"
              description="Personal Support"
              className="max-w-full bg-neutral-900 flex-1"
              theme="dark"
            />
          </div>

          {/* ALL CARDS: unified blur effect */}
          <div className="hidden md:grid grid-cols-2 gap-5 font-bold w-full h-[440px] md:col-start-1 md:row-start-1 md:row-span-2 cards">
            <DarkCard
              title="4K+"
              description="Happy clients"
              theme="dark"
              className="max-w-full bg-neutral-900 flex-1 card"
            />
            <DarkCard
              title="25+"
              description="Years Experience"
              className="max-w-full bg-white flex-1 card"
            />
            <DarkCard
              title="97%"
              description="Satisfaction rate"
              className="max-w-full bg-neutral-800 flex-1 card"
              theme="dark"
            />
            <DarkCard
              title="1:1"
              description="Personal Support"
              className="max-w-full bg-neutral-900 flex-1 card"
              theme="dark"
            />
          </div>

          {/* VALUE PROPOSITION CARD */}
          <div className="w-full col-span-2 flex flex-col self-stretch px-4 sm:px-6 md:px-0 md:col-start-2 md:row-start-1 mt-5 md:mt-0 h-auto md:h-[440px]">
            <div
              className="relative rounded-3xl bg-gradient-to-br from-white via-gray-50 to-gray-100 text-black shadow-2xl border border-gray-200 flex flex-col items-center text-center h-full"
              style={{
                padding:
                  "clamp(1.25rem, 5vw, 2.5rem) clamp(1.25rem, 5vw, 2.5rem) 0 clamp(1.25rem, 5vw, 2.5rem)", // Remove bottom padding
              }}
            >
              {/* Subtle Badge */}
              <div
                className="absolute font-semibold rounded-full shadow-sm"
                style={{
                  top: "clamp(0.75rem, 2vw, 1.5rem)",
                  left: "clamp(0.75rem, 2vw, 1.5rem)",
                  background: "#d1fae5",
                  color: "#047857",
                  fontSize: "clamp(0.7rem, 1.5vw, 0.9rem)",
                  padding:
                    "clamp(0.3rem, 1vw, 0.5rem) clamp(0.7rem, 2vw, 1.2rem)",
                }}
              >
                Free Service
              </div>
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <img
                  src="/globe.svg"
                  alt="Global Reach"
                  style={{
                    width: "clamp(2.5rem, 7vw, 4rem)",
                    height: "clamp(2.5rem, 7vw, 4rem)",
                    opacity: 0.8,
                  }}
                />
              </div>
              {/* Headline */}
              <div
                className="font-extrabold mb-3 break-words leading-tight text-center"
                style={{
                  fontSize: "clamp(1.1rem, 3vw, 2.25rem)",
                }}
              >
                Reach More Buyers,
                <br />
                Sell for More
              </div>
              {/* Short Description */}
              <div
                className="font-medium text-gray-700 mb-8"
                style={{
                  fontSize: "clamp(0.9rem, 2vw, 1.3rem)",
                }}
              >
                Your home, everywhere buyers look. <br />
                <span className="text-black font-semibold">
                  Rightmove, Zoopla, Social & more.
                </span>
              </div>
              {/* One Trust Signal */}
              <div className="flex items-center justify-center gap-2 mb-8">
                <svg
                  style={{
                    width: "clamp(1rem, 2vw, 1.25rem)",
                    height: "clamp(1rem, 2vw, 1.25rem)",
                  }}
                  className="text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                </svg>
                <span
                  className="text-green-700 font-semibold"
                  style={{
                    fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
                  }}
                >
                  Trusted by 4,000+ sellers
                </span>
              </div>
              {/* CTA - Positioned as part of the card border */}
              <button
                onClick={() =>
                  scrollTargetRef.current?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="absolute bottom-0 left-0 right-0 font-bold border-2 border-black bg-black text-white shadow-md transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 active:scale-95 hover:shadow-lg flex items-center justify-center gap-2"
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.25rem)",
                  padding: "clamp(0.7rem, 2vw, 1.2rem)",
                  borderTopLeftRadius: "0",
                  borderTopRightRadius: "0",
                  borderBottomLeftRadius: "1.5rem",
                  borderBottomRightRadius: "1.5rem",
                }}
              >
                Get a Free Valuation
                <svg
                  style={{
                    width: "clamp(1rem, 2vw, 1.25rem)",
                    height: "clamp(1rem, 2vw, 1.25rem)",
                  }}
                  className="ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* FEATURED PROPERTIES BUTTON */}
          {/* <div
        className="
        col-span-2 flex flex-col h-full md:col-start-2 md:row-start-2 bg-neutral-900"
        >
        <div className="flex h-full text-white relative">
            <div className="flex-1 flex items-center  text-center p-6 md:p-10 pt-8">
            <div className="max-w-xl w-full">
                <button
                onClick={() =>
                    scrollTargetRef.current?.scrollIntoView({
                    behavior: "smooth",
                    })
                }
                className="text-lg md:text-lg lg:text-xl font-bold rounded-full border-2 border-white bg-white/20 text-white shadow-md px-4 sm:px-6 md:px-8 py-2 sm:py-3 transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 active:scale-95 hover:shadow-lg backdrop-blur-lg"
                >
                Featured Properties
                </button>
            </div>
            </div>
        </div>
        </div> */}
        </div>
      </div>
    </section>
  );
}

{
  /* shadow-[0_0_60px_10px_rgba(255,255,255,0.15)] */
}

{
  /* {steps.map(({ icon, title, description }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="border-l-4 border-white pl-6"
          >
            {icon}
            <h3 className="text-xl font-bold mb-1">{title}</h3>
            <p className="text-gray-300">{description}</p>
          </motion.div>
        ))} */
}
