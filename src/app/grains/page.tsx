"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const grains = [
  {
    name: "Aromatic Rice",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=800",
    description: "Premium aged rice varieties with exquisite aroma and length.",
    origin: "North India",
    grade: "Supreme"
  },
  {
    name: "Premium Wheat",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=800",
    description: "High-protein wheat grains sourced directly from farm clusters.",
    origin: "Central India",
    grade: "Sharbati"
  },
  {
    name: "Golden Corn",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=800",
    description: "Cleaned and dried yellow maize for food and feed industries.",
    origin: "Andhra Pradesh",
    grade: "Standard Export"
  },
  {
    name: "Pearl Barley",
    image: "https://images.unsplash.com/photo-1601314112185-334be10878ca?q=80&w=800",
    description: "Nutritious barley grains processed to preserve natural goodness.",
    origin: "Rajasthan",
    grade: "Export Ready"
  },
  {
    name: "Finger Millets",
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=800",
    description: "Traditional superfood grains for the health-conscious global market.",
    origin: "Maharashtra",
    grade: "Premium"
  },
  {
    name: "Sorghum Grains",
    image: "https://images.unsplash.com/photo-1605333396915-47ed6b68a00e?q=80&w=800",
    description: "Naturally grown white and yellow sorghum, rich in minerals.",
    origin: "Telangana",
    grade: "High Quality"
  }
];

export default function GrainsPage() {
  const { toast } = useToast();

  const handleQuoteClick = (productName: string) => {
    const whatsappMessage = encodeURIComponent(
      `*Export Inquiry: ${productName}*\n\n` +
      `I am interested in importing premium grains from SBNB Global. Please share the latest specifications and export pricing.`
    );
    window.open(`https://wa.me/919550696255?text=${whatsappMessage}`, "_blank");
    toast({ title: "Connecting to WhatsApp..." });
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-primary text-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter">
            Premium Indian Grains Exporter
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
            From the fertile heartlands of India to the world, we export the finest Basmati rice, high-protein wheat, and nutritious millets. Partner with us for reliable global supply.
          </p>
          <Button 
            onClick={() => handleQuoteClick("General Grains Inquiry")}
            className="h-16 px-10 bg-white text-primary hover:bg-secondary hover:text-white rounded-full font-bold text-lg transition-all"
          >
            Request a Grains Quote <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Brand Matter */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-8 uppercase tracking-tight">Grain Export Excellence</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-justify">
              <p>
                Grains are the backbone of global nutrition. At <strong>Shree Bhumi Nature's Best</strong>, we take pride in being a trusted source for India's finest agricultural grains. Our sourcing model connects us directly with farm clusters that specialize in traditional and sustainable cultivation methods.
              </p>
              <p>
                Whether it's long-grain aromatic Basmati or nutrient-dense Sorghum, our grains undergo rigorous cleaning, grading, and testing to meet international food safety standards. We offer various packaging options, from bulk containers to customized retail branding, ensuring that the integrity and freshness of the grain are preserved throughout the journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid - Swipeable on Mobile */}
      <section className="py-24 bg-primary/5 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex overflow-x-auto pb-10 gap-4 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:overflow-visible md:pb-0">
            {grains.map((product, idx) => (
              <div key={idx} className="min-w-[48%] md:min-w-0 snap-center bg-white rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group shrink-0 md:shrink">
                <div className="relative h-48 md:h-72 overflow-hidden">
                  <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 md:top-6 md:left-6">
                    <Badge className="bg-secondary text-white rounded-full px-2 py-0.5 md:px-4 md:py-1 text-[8px] md:text-xs font-bold uppercase tracking-widest">Global Standard</Badge>
                  </div>
                </div>
                <div className="p-4 md:p-10">
                  <h3 className="text-sm md:text-2xl font-bold text-primary mb-2 md:mb-4 uppercase line-clamp-1">{product.name}</h3>
                  <p className="text-muted-foreground text-[10px] md:text-base mb-4 md:mb-6 leading-relaxed line-clamp-2">{product.description}</p>
                  <div className="space-y-1 md:space-y-2 mb-4 md:mb-8 border-t border-primary/5 pt-3 md:pt-6">
                    <p className="text-[8px] md:text-sm font-bold text-secondary uppercase tracking-widest flex items-center gap-1 md:gap-2">
                      <ChevronRight className="w-3 h-3 md:w-4 md:h-4" /> Origin: {product.origin}
                    </p>
                    <p className="text-[8px] md:text-sm font-bold text-primary/40 uppercase tracking-widest flex items-center gap-1 md:gap-2">
                      <ChevronRight className="w-3 h-3 md:w-4 md:h-4" /> Grade: {product.grade}
                    </p>
                  </div>
                  <Button 
                    onClick={() => handleQuoteClick(product.name)}
                    className="w-full h-9 md:h-14 bg-primary hover:bg-secondary rounded-full font-bold uppercase tracking-widest text-[8px] md:text-xs"
                  >
                    Get Quote
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
