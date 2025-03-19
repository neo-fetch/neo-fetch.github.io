"use client";

import { useRef } from "react";
import ParallaxImage from "@/components/fancy/parallax-image";

function Hero() {
  const container = useRef<HTMLDivElement>(null);

  return (
    <section
      className="bg-background/[0.96] relative w-full overflow-hidden"
      ref={container}
    >
      <div className="relative z-10 h-[42.5dvh] md:h-[51.2dvh] md:min-h-[50dvh] xl:h-[61.2dvh]">
        <div className="relative flex h-full flex-col items-center justify-center">
          <div className="flex w-full items-center justify-center px-4 md:px-6">
            <h1 className="text-4xl font-light sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
              <span>Hello</span>
            </h1>
          </div>
        </div>
      </div>

      <ParallaxImage
        src="/images/hero.jpg"
        containerRef={container}
        alt="Hero image"
        containerClassName="aspect-4/2 w-screen lg:mt-28"
        priority
        parallaxOptions={{
          yStart: "-10%",
          yEnd: "10%",
          scaleStart: 1,
          scaleEnd: 1.5,
        }}
      />
    </section>
  );
}

export default Hero;
