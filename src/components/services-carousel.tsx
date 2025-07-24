"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { ArrowRight } from "lucide-react";

const services = [
  { title: "", image: "/services/advice.jpg" },
  { title: "Property Sales", image: "/services/invest.jpg" },
  { title: "Property Lettings", image: "/services/buy.jpg" },
  { title: "Property Valuations", image: "/services/sell.jpg" },
  { title: "Mortgage Advice", image: "/services/manage.jpg" },
];

export default function ServicesCarousel() {
  return (
    <div className="  z-50">
      <div className="max-w-6xl mx-auto ">
        <h2 className="text-4xl font-semibold text-white mb-4 mt-8">
          Our Services
        </h2>

        <Swiper
          slidesPerView={1.2}
          spaceBetween={20}
          navigation
          breakpoints={{
            640: { slidesPerView: 2.2 },
            768: { slidesPerView: 3.2 },
            1024: { slidesPerView: 4.2 },
          }}
          modules={[Navigation]}
          className="relative"
        >
          {services.map((service, i) => (
            <SwiperSlide key={i}>
              <div className="rounded-xl overflow-hidden h-full relative group">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[350px] md:h-[400px] object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black/30 flex items-end p-4 justify-between text-white">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
