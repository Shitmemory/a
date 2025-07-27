import { useInView } from "react-intersection-observer";
import PropertyCard, { Property } from "./property-card";

type LazyCardProps = {
  property: Property;
};

export default function LazyPropertyCard({ property }: LazyCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "200px", // start loading just before it scrolls in
  });

  return (
    <div ref={ref}>
      {inView ? (
        <PropertyCard property={property} />
      ) : (
        <div className="w-full h-64 sm:h-80 md:h-96 bg-neutral-200 animate-pulse rounded" />
      )}
    </div>
  );
}
