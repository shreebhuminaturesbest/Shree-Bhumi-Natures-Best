"use client";

import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const reviews = [
  {
    name: "Michael Chen",
    role: "Import Director, UK",
    text: "SBNB Global has been our primary spice and grain supplier for 7 years. Their quality consistency is unmatched. The packaging and documentation always meet strict UK import standards.",
    date: "2 days ago"
  },
  {
    name: "Elena Rodriguez",
    role: "CEO, Gourmet Foods Spain",
    text: "The fresh vegetables and fruits we receive from India are handled with extreme care. Their cold-chain logistics team ensures that perishables reach our European hubs in peak condition.",
    date: "1 week ago"
  },
  {
    name: "Rajesh Malhotra",
    role: "Global Procurement, Retail India",
    text: "Having worked with SBNB as one of their 100+ local partners, I can vouch for their honesty and fair pricing. They are the true bridge between Indian farms and the global market.",
    date: "3 days ago"
  },
  {
    name: "Ahmed Al-Farsi",
    role: "Wholesaler, Dubai",
    text: "Authentic Indian flavors and brilliant aroma. SBNB spices have become a favorite in our region, and their commitment to 25+ global clients shows in their impeccable service.",
    date: "5 days ago"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-primary/5 overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-secondary text-sm font-bold uppercase tracking-[0.3em] mb-4 block">Client Success Stories</span>
          <h2 className="text-4xl md:text-6xl font-black text-primary mb-6 uppercase tracking-tighter italic">Trusted Globally</h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto font-medium">Voices from our 25+ global partners and 100+ local Indian network who trust SBNB for excellence.</p>
        </div>

        <Carousel className="max-w-6xl mx-auto">
          <CarouselContent className="-ml-4 md:-ml-8">
            {reviews.map((review, i) => (
              <CarouselItem key={i} className="pl-4 md:pl-8 md:basis-1/2 lg:basis-1/3">
                <div className="flex flex-col justify-between bg-white p-8 h-full shadow-lg border border-border/50">
                  <div className="flex gap-0.5 text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  
                  <div className="mt-4 flex flex-col flex-1">
                    <p className="text-[#073fd8] text-xs font-semibold mb-2 uppercase tracking-wide">
                      {review.date}
                    </p>
                    <p className="text-muted-foreground text-[15px] leading-[1.625] mb-8 italic">
                      "{review.text}"
                    </p>
                  </div>
                  
                  <div className="mt-auto pt-6 border-t border-border/30">
                    <p className="text-sm font-bold text-primary uppercase tracking-tight">
                      — {review.name}
                    </p>
                    <p className="text-[10px] text-secondary font-black uppercase tracking-widest mt-1">
                      {review.role}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-12 gap-4">
            <CarouselPrevious className="static translate-y-0 border-2 border-primary text-primary hover:bg-primary hover:text-white" />
            <CarouselNext className="static translate-y-0 border-2 border-primary text-primary hover:bg-primary hover:text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
