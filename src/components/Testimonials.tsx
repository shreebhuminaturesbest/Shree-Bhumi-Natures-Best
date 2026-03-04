
"use client";

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
    text: "SBNB Global has been our primary spice and grain supplier for years. Their quality consistency and adherence to global export standards are absolutely unmatched.",
    date: "2 days ago"
  },
  {
    name: "Elena Rodriguez",
    role: "CEO, Gourmet Foods Spain",
    text: "The fresh vegetables we receive are handled with extreme care. Their logistics team ensures that perishables reach our European hubs in peak condition every time.",
    date: "1 week ago"
  },
  {
    name: "Rajesh Malhotra",
    role: "Global Procurement, Retail India",
    text: "As a local procurement partner, I can vouch for their honesty and direct sourcing model. They are the essential bridge between Indian fields and international buyers.",
    date: "3 days ago"
  },
  {
    name: "Ahmed Al-Farsi",
    role: "Wholesaler, Dubai",
    text: "Authentic Indian flavors and brilliant aroma. SBNB spices have become a favorite in our region, and their commitment to service excellence is truly professional.",
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
          <p className="text-muted-foreground max-w-xl mx-auto font-medium">Voices from our 25+ global partners who trust SBNB for excellence in international trade.</p>
        </div>

        <Carousel className="max-w-6xl mx-auto">
          <CarouselContent className="-ml-4 md:-ml-8">
            {reviews.map((review, i) => (
              <CarouselItem key={i} className="pl-4 md:pl-8 md:basis-1/2 lg:basis-1/3">
                <div className="flex flex-col justify-between bg-white p-6 md:p-8 h-full shadow-lg border border-border/50 group hover:border-secondary transition-all">
                  <div className="flex gap-0.5 text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <div className="mt-4 flex flex-col flex-1">
                    <p className="text-[#073fd8] text-[12px] font-semibold mb-2 uppercase tracking-wide">
                      {review.date}
                    </p>
                    <p className="text-[#6b7280] text-[15px] leading-[1.625] mb-8 italic">
                      "{review.text}"
                    </p>
                  </div>
                  
                  <div className="mt-auto pt-6 border-t border-border/30 text-[#6b7280] text-sm">
                    — {review.name}
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
