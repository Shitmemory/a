import { Suspense } from "react";

import Loading from "@/components/layout/loading";
import HeroWrapper from "@/components/homepage/hero-wrapper";

// Dynamic import for HeroWrapper since it contains client-side logic

export default function Home() {
  return <HeroWrapper />;
}
