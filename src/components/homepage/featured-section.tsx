import { forwardRef } from "react";
import PropertyCard from "./property-card";
import { featuredProperties } from "@/data/featured-properties";
import { memo } from "react";
import LazyPropertyCard from "./lazy-property-card";

const FeaturedSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      ref={ref}
      className="snap-start text-white min-h-screen pt-16 pb-8 sm:pt-20 sm:pb-12 md:pt-24 md:pb-16 px-4 sm:px-6 md:px-8 relative"
    >
      {/* Gradient Background */}
      <div
        className="absolute inset-0 -z-10 bg-[rgb(37,43,51)]"
        // style={{
        //   background: "rgb(37, 43, 51)",
        // }} this is a minor peformance issuse
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center text-white">
          Featured Sales
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {featuredProperties.map((property, i) => (
            // <PropertyCard key={i} property={property} /> this can cause issues when fetching data fixed below
            <LazyPropertyCard
              key={`${property.title}-${property.price}`}
              property={property}
            />
          ))}
          {/* Every time parent re renders each card also re renderseven if the property obj hasnt changed  
          so wrapping it in PropertyCard with React.memo means it prevents re renders unless props change */}
        </div>
      </div>
    </section>
  );
});

FeaturedSection.displayName = "FeaturedSection";

export default FeaturedSection;
