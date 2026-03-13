"use client";

import Image from "next/image";

export function Hero() {
  const heroImageUrl = "/welcome_h_r_2 (1).png";

  return (
    <section className="relative w-full pt-20 md:pt-24">
      {/* Full Width Hero Image */}
      <div className="relative w-full" style={{ aspectRatio: '966 / 403' }}>
        <Image
          src={heroImageUrl}
          alt="Srinikia Exports"
          fill
          className="object-cover object-center"
          priority
          quality={100}
          sizes="100vw"
        />
      </div>
    </section>
  );
}
