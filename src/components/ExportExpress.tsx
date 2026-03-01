"use client";

import { Button } from "@/components/ui/button";

export function ExportExpress() {
  const stats = [
    { number: "700+", label: "Tonnes of fresh fruit sold." },
    { number: "500+", label: "Customers in worldwide." },
    { number: "200+", label: "Around Employees." },
    { number: "500+", label: "containers successfully shipped" },
  ];

  return (
    <section className="bg-[#1a1a1a] py-20 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row shadow-2xl">
          {/* Left Green Block */}
          <div className="lg:w-1/2 bg-[#4caf50] p-10 md:p-16 flex flex-col justify-center">
            <span className="text-black text-lg font-bold mb-4 uppercase tracking-tight">
              Fresh Export Express
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-black leading-[1.1] mb-8 uppercase tracking-tighter">
              Global Fresh Fruits &<br />
              Vegetables Supply
            </h2>
            <p className="text-black/80 text-lg leading-relaxed mb-10 max-w-xl font-medium">
              Driven by a passion for delivering fresh, high-quality produce, our mission 
              is to consistently provide a wide array of organically cultivated vegetables 
              and fruits, ensuring that our clients across the globe experience the 
              authentic flavors and nourishment that nature offers.
            </p>
            <div>
              <Button 
                variant="outline" 
                className="rounded-none border-black text-black hover:bg-black hover:text-white px-8 py-6 text-sm font-bold uppercase transition-all"
              >
                Download Brochure
              </Button>
            </div>
          </div>

          {/* Right Stats Grid */}
          <div className="lg:w-1/2 bg-white grid grid-cols-2">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className={`p-10 md:p-16 flex flex-col justify-center border-gray-100 ${
                  idx === 0 ? "border-r border-b" : 
                  idx === 1 ? "border-b" : 
                  idx === 2 ? "border-r" : ""
                }`}
              >
                <span className="text-4xl md:text-6xl font-black text-[#1a1a1a] mb-4">
                  {stat.number}
                </span>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
