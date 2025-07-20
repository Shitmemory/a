"use client";

import { motion } from "framer-motion";
import {
  Scale,
  Camera,
  Send,
  Users,
  FileText,
  ChevronRight,
} from "lucide-react";
import FeatureList from "./feature-list";
import { DefaultDemo } from "./demo";
import { UtilityButtonDefaultDemo } from "./utility";
import { DarkCard } from "./card";
import { FiStar } from "react-icons/fi";
import InfoCard from "./info-card";

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

export default function ProcessSection() {
  return (
    <section className="py-20 px-6 text-white">
      <div className="  mb-16">
        {/* <h2 className="text-4xl md:text-5xl tracking-tight mb-4 mt-16">
          Our Proven Process
        </h2> */}
        <p className=" max-w-6xl mt-10 text-gray-200 text-3xl">
          Thinking of selling your home? We help homeowners get the highest
          possible sale price. With strategic marketing, expert staging, and a
          stress-free selling process. <br />{" "}
          <span className="font-extrabold text-white tracking-tight">
            Our Agency
          </span>{" "}
          delivers clarity, service, and results that speak for themselves.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {/* {steps.map(({ icon, title, description }, i) => (
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
        ))} */}
      </div>
      {/* <DefaultDemo /> */}
      <div className="flex flex-col md:flex-row gap-5 ml-9">
        {/* Left Column: DarkCards */}
        <div className="flex flex-col space-y-5 font-bold">
          <div className="flex space-x-5">
            <DarkCard
              title="4K+"
              description="Happy clients"
              theme="dark"
              className="max-w-sm bg-neutral-900"
            />
            <DarkCard
              title="25+"
              description="Years Experience"
              className="max-w-sm bg-white"
            />
          </div>

          <div className="flex space-x-5">
            <DarkCard
              title="97%"
              description="Satisfaction rate"
              className="max-w-sm bg-neutral-800"
              theme="dark"
            />
            <DarkCard
              title="1:1"
              description="Personal Support"
              className="max-w-sm bg-neutral-900"
              theme="dark"
            />
          </div>
        </div>

        {/* Right Column: InfoCard + CTA */}
        <div className="flex flex-col justify-between h-[320px] w-full md:w-[600px]">
          <InfoCard
            testimonials={[
              {
                quote: "This agency made the process seamless.",
                author: "Jane Doe",
              },
              {
                quote: "Incredible service and results!",
                author: "John Smith",
              },
              {
                quote: "Would highly recommend to anyone selling.",
                author: "Emily T.",
              },
            ]}
            theme="light"
            wrapperClassName="w-full md:w-[600px]"
            interval={4000}
          />
          <button className="mt-6 px-5 py-2 text-sm font-extrabold rounded-full bg-white text-black hover:bg-neutral-200 transition self-start flex items-center gap-2">
            See What Customers Say
            <ChevronRight className="w-4 h-4 mr-1" />
          </button>
        </div>
      </div>

      {/* <FeatureList /> */}

      {/* <UtilityButtonDefaultDemo /> */}
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

// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function ProcessSection() {
//   return (
//     <section className="bg-neutral-900 text-white py-24 px-6">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
//         {/* Left: Headline and Image */}
//         <div>
//           <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
//             A proficient team <br />
//             <span className="italic font-light text-gray-300">
//               with extensive knowledge
//             </span>
//           </h2>
//           <p className="text-gray-400 text-lg max-w-md mb-8">
//             From valuations to completion, we’re redefining the real estate
//             experience for modern sellers and buyers.
//           </p>

//           {/* Image block — optional or replace with brand video loop */}
//           <div className="aspect-[16/9] rounded-xl overflow-hidden border border-neutral-700">
//             <Image
//               src="/team-placeholder.jpg" // replace with your own asset
//               alt="Our team"
//               width={800}
//               height={450}
//               className="object-cover w-full h-full"
//             />
//           </div>
//         </div>

//         {/* Right: Yellow Info Box with Stats */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="bg-yellow-400 text-neutral-900 rounded-xl p-8 shadow-lg"
//         >
//           <h3 className="text-xl font-semibold mb-4">
//             We are a boutique real estate firm representing a global portfolio
//             of standout properties.
//           </h3>
//           <p className="text-sm text-neutral-800 mb-6">
//             We merge deep market knowledge with a sharp creative edge — helping
//             clients unlock value, faster. Our results speak for themselves.
//           </p>

//           {/* Stats */}
//           <div className="grid grid-cols-3 gap-4">
//             <div>
//               <p className="text-2xl font-bold">50+</p>
//               <p className="text-xs font-medium text-neutral-700 mt-1">
//                 Team Members
//               </p>
//             </div>
//             <div>
//               <p className="text-2xl font-bold">9+</p>
//               <p className="text-xs font-medium text-neutral-700 mt-1">
//                 Countries
//               </p>
//             </div>
//             <div>
//               <p className="text-2xl font-bold">7+</p>
//               <p className="text-xs font-medium text-neutral-700 mt-1">
//                 Offices
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
