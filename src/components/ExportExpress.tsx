"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ExportExpress() {
  const factoryImageUrl = "https://firebasestorage.googleapis.com/v0/b/studio-2215204146-270ef.firebasestorage.app/o/shreebhumi%2FChatGPT%20Image%20Mar%201%2C%202026%2C%2010_41_41%20PM.png?alt=media&token=1036b945-2f29-45d7-901b-795db1f7de99";

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row shadow-xl overflow-hidden rounded-2xl">
          {/* Left Block */}
          <div className="lg:w-3/5 bg-gradient-to-br from-primary to-secondary p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <span className="text-white/80 text-sm font-semibold mb-3 uppercase tracking-wider">
              Export Services
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Global Fresh Produce &<br />
              Spices Exporter
            </h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Driven by a passion for delivering premium agricultural exports, our mission is to consistently provide a wide array of high-quality vegetables, grains, fruits, and authentic Indian spices to global markets.
            </p>
            <div>
              <Link href="/#contact">
                <Button className="bg-white text-primary hover:bg-white/90 h-12 px-8 font-semibold">
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Block */}
          <div className="lg:w-2/5 relative min-h-[300px] lg:min-h-auto">
            <Image 
              src={factoryImageUrl} 
              alt="Our Facility" 
              fill 
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
