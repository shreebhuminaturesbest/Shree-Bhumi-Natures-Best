"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const reviews = [
  { name: "Michael Chen", role: "Import Director, UK", text: "Quality consistency and adherence to global export standards are excellent." },
  { name: "Elena Rodriguez", role: "CEO, Spain", text: "Fresh vegetables handled with extreme care. Logistics team ensures peak condition." },
  { name: "Ahmed Al-Farsi", role: "Wholesaler, Dubai", text: "Authentic Indian flavors. Commitment to service excellence is truly professional." },
  { name: "Rajesh Malhotra", role: "Procurement, India", text: "Honest and direct sourcing model. Essential bridge between fields and buyers." }
];

export function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">Testimonials</h2>
          <p className="text-muted-foreground">What our global clients say</p>
        </div>

        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent className="-ml-4">
            {reviews.map((review, i) => (
              <CarouselItem key={i} className="pl-4 md:basis-1/2">
                <div className="card-corporate p-6 h-full">
                  <p className="text-muted-foreground text-sm mb-4 italic">"{review.text}"</p>
                  <div className="pt-4 border-t border-border">
                    <p className="font-semibold text-primary text-sm">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.role}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6 gap-3">
            <CarouselPrevious className="static translate-y-0 border border-primary text-primary hover:bg-primary hover:text-white" />
            <CarouselNext className="static translate-y-0 border border-primary text-primary hover:bg-primary hover:text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
