export type Property = {
  title: string;
  location: string;
  price: string;
  image: string;
  status?: "new" | "under-offer" | "sold" | null;
};

export default function PropertyCard({ property }: { property: Property }) {
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
      {/* Image */}
      <img
        src={property.image}
        alt="Property image"
        className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Status Badge */}
      <div className="group-hover:opacity-0">
        {property.status && (
          <div className="absolute top-0 left-0 w-full bg-black/30 text-white text-xs px-4 py-2 z-10 flex items-center justify-between">
            <div className="flex items-center gap-2 ">
              <span className={`w-2 h-2 rounded-full ${getStatusColor()}`} />
              <span className="font-bold tracking-wide uppercase ">
                {getStatusLabel()}
              </span>
            </div>
          </div>
        )}

        {/* Overlay text container with hover disappear */}
        <div className="absolute bottom-0 left-0 w-full bg-black/30 text-white p-4 z-10 transition-opacity duration-300">
          <h3 className="text-lg font-semibold">{property.title}</h3>
          <p className="text-sm text-gray-200">{property.location}</p>
          <p className="text-sm font-semibold mt-1">{property.price}</p>
        </div>
      </div>
    </div>
  );
}
