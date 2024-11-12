import CallToAction from "@/components/main/call_to_action";
import Features from "@/components/main/features";
import Hero from "@/components/main/hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <CallToAction />
    </div>
  );
}
