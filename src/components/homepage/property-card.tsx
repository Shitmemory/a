import Image from "next/image";
import { memo } from "react";

export type Property = {
  title: string;
  location: string;
  price: string;
  image: string;
  status?: "new" | "under-offer" | "sold" | null;
};

function PropertyCard({ property }: { property: Property }) {
  const getStatusLabel = () => {
    switch (property.status) {
      case "new":
        return "New";
      case "under-offer":
        return "Under Offer";
      case "sold":
        return "Sold";
      default:
        return null;
    }
  };

  const getStatusColor = () => {
    switch (property.status) {
      case "new":
        return "bg-green-500";
      case "under-offer":
        return "bg-yellow-400";
      case "sold":
        return "bg-red-600";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div className="group relative overflow-hidden bg-white select-none cursor-pointer">
      {/* Image Wrapper with fixed height */}
      <div className="relative w-full h-64 sm:h-80 md:h-96">
        <Image
          src={property.image || "./fallback"}
          alt={property.title || "Property image"}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Status Badge */}
      <div className="group-hover:opacity-0">
        {property.status && (
          <div className="absolute top-0 left-0 w-full bg-black/30 text-white text-xs px-3 sm:px-4 py-2 z-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${getStatusColor()}`} />
              <span className="font-bold tracking-wide uppercase text-xs">
                {getStatusLabel()}
              </span>
            </div>
          </div>
        )}

        {/* Overlay text container with hover disappear */}
        <div className="absolute bottom-0 left-0 w-full bg-black/30 text-white p-3 sm:p-4 z-10 transition-opacity duration-300">
          <h3 className="text-base sm:text-lg font-semibold">
            {property.title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-200">
            {property.location}
          </p>
          <p className="text-xs sm:text-sm font-semibold mt-1">
            {property.price}
          </p>
        </div>
      </div>
    </div>
  );
}

export default memo(PropertyCard); // memo prevents unnecessary re-renders
