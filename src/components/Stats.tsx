
"use client";

import React from 'react';

const features = [
  { title: "Premium Quality", desc: "Highest standards of purity and taste in every batch." },
  { title: "Global Export", desc: "Seamless supply chain across 25+ countries worldwide." },
  { title: "Fast Delivery", desc: "Swift processing and reliable logistics for your orders." },
  { title: "Organic Source", desc: "100% natural products direct from certified farms." },
  { title: "Expert Support", desc: "Dedicated export managers available for 24/7 assistance." },
];

export function Stats() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-10 md:gap-14">
          {features.map((item, i) => (
            <div key={i} className="group relative w-[220px] h-[300px] rounded-[30px] bg-white p-8 border-2 border-border transition-all duration-500 ease-out overflow-visible hover:border-primary hover:shadow-[0_10px_30px_-5px_rgba(0,90,43,0.15)] flex flex-col items-center justify-center text-center cursor-pointer">
              <div className="h-full flex flex-col items-center justify-center gap-4">
                <div className="mb-2 transform transition-transform duration-500 group-hover:scale-110">
                  <img 
                    src="https://jbrotherexports.com/wp-content/themes/jbrotherexports/assets/img/key.png" 
                    alt="Key Feature" 
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <p className="text-xl font-bold text-primary uppercase tracking-tight leading-tight">
                  {item.title}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
              
              <button className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[125%] w-[70%] rounded-full border-none bg-primary text-white text-sm font-bold py-3 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-[-50%] group-hover:opacity-100 shadow-xl whitespace-nowrap">
                More info
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
