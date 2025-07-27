"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { ArrowRight } from "lucide-react";

const services = [
  { title: "" },
  { title: "Property Sales" },
  { title: "Property Lettings" },
  { title: "Property Valuations" },
  { title: "Mortgage Advice" },
];

export default function ServicesCarousel() {
  return (
    <div className="z-50 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6 mt-8">
          Our Services
        </h2>

        <Swiper
          slidesPerView={1.2}
          spaceBetween={16}
          navigation
          breakpoints={{
            480: { slidesPerView: 1.5, spaceBetween: 20 },
            640: { slidesPerView: 2.2, spaceBetween: 20 },
            768: { slidesPerView: 3.2, spaceBetween: 24 },
            1024: { slidesPerView: 4.2, spaceBetween: 24 },
          }}
          modules={[Navigation]}
          className="relative"
        >
          {services.map((service, i) => (
            <SwiperSlide key={i}>
              <div className="rounded-2xl overflow-hidden h-full relative group">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 flex items-end p-4 justify-between text-white">
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {service.title}
                  </h3>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
