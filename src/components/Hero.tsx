
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1606914469725-e398d2f1d7ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    welcome: "SHREE BHUMI NATURE'S BEST",
    title: "From Indian Farms to Global Tables",
    hint: "indian spices"
  },
  {
    image: "https://ml0k8npvi8h7.i.optimole.com/cb:K2_q.4551d/w:1000/h:667/q:mauto/f:best/https://freshlineexim.com/wp-content/uploads/2023/02/5a874b9ace.jpg",
    welcome: "FARMER-BASED EXPORT",
    title: "Uplifting Communities Globally",
    hint: "green farms"
  },
  {
    image: "https://firebasestorage.googleapis.com/v0/b/studio-2215204146-270ef.firebasestorage.app/o/shreebhumi%2FChatGPT%20Image%20Mar%201%2C%202026%2C%2010_41_41%20PM.png?alt=media&token=1036b945-2f29-45d7-901b-795db1f7de99",
    welcome: "PREMIUM QUALITY",
    title: "Nature's Best. Trusted Worldwide.",
    hint: "food factory"
  }
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handleNextSlide = () => {
    setCurrent((prevIdx) => (prevIdx + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrent((prevIdx) => (prevIdx === 0 ? slides.length - 1 : prevIdx - 1));
  };

  return (
    <section id="home" className="relative h-[85vh] md:h-screen w-full overflow-hidden bg-black">
      {/* Background Slides with Classic Fade Transition */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className={cn(
                "object-cover transition-transform duration-[10000ms]",
                index === current ? "scale-110" : "scale-100"
              )}
              priority={index === 0}
              data-ai-hint={slide.hint}
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-30 h-full flex flex-col items-center justify-center text-center px-6">
        {slides.map((slide, index) => (
          index === current && (
            <div key={`text-${index}`} className="flex flex-col items-center w-full max-w-6xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <span className="text-white/70 text-xs sm:text-sm md:text-xl font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase mb-4 md:mb-6">
                {slide.welcome}
              </span>
              
              <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 md:mb-12 leading-[1.2] md:leading-[1.05] uppercase drop-shadow-2xl px-4">
                {slide.title}
              </h1>

              <div className="flex justify-center w-full sm:w-auto">
                <Link href="#contact" className="boton-elegante no-underline py-3 px-8 text-sm md:text-base md:py-4 md:px-10">
                  Contact Us Now
                </Link>
              </div>
            </div>
          )
        ))}
      </div>

      {/* Navigation Controls */}
      <button
        onClick={handlePrevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 p-3 text-white/30 hover:text-secondary transition-colors hidden sm:block"
        aria-label="Previous slide"
      >
        <ChevronLeft size={64} strokeWidth={1} />
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 p-3 text-white/30 hover:text-secondary transition-colors hidden sm:block"
        aria-label="Next slide"
      >
        <ChevronRight size={64} strokeWidth={1} />
      </button>

      {/* Progress Indicators */}
      <div className="absolute bottom-10 md:bottom-16 left-1/2 -translate-x-1/2 z-40 flex gap-4 md:gap-6">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={cn(
              "h-1 md:h-1.5 transition-all duration-300 rounded-none",
              i === current ? "w-8 md:w-24 bg-white" : "w-3 md:w-6 bg-white/20 hover:bg-white/50"
            )}
          />
        ))}
      </div>
    </section>
  );
}
