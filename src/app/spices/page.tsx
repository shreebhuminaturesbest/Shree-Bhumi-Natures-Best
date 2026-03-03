
"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const spices = [
  {
    name: "Black Pepper",
    image: "https://images.unsplash.com/photo-1532431110031-15b565780598?q=80&w=800",
    description: "Bold and pungent black peppercorns from the Western Ghats.",
    origin: "Kerala",
    grade: "Bold 550GL"
  },
  {
    name: "Turmeric Powder",
    image: "https://images.unsplash.com/photo-1698556735172-1b5b3cd9d2ce?q=80&w=800",
    description: "High-curcumin turmeric, sun-dried and finely polished.",
    origin: "Salem/Erode",
    grade: "Export A-Grade"
  },
  {
    name: "Cumin Seeds",
    image: "https://images.unsplash.com/photo-1530588625438-7c5504971c2a?q=80&w=800",
    description: "Aromatic and machine-cleaned cumin seeds with high oil content.",
    origin: "Gujarat",
    grade: "Premium Eagle"
  },
  {
    name: "Green Cardamom",
    image: "https://images.unsplash.com/photo-1599307734173-03027b872b53?q=80&w=800",
    description: "Exquisite green cardamom pods with intense natural fragrance.",
    origin: "Idukki, Kerala",
    grade: "8mm+ Bold"
  },
  {
    name: "Cinnamon Bark",
    image: "https://images.unsplash.com/photo-1614734892376-74e6f6630044?q=80&w=800",
    description: "Pure and sweet cinnamon sticks, perfect for gourmet exports.",
    origin: "Southern India",
    grade: "Penta/Alba"
  },
  {
    name: "Dried Red Chili",
    image: "https://images.unsplash.com/photo-1607672632458-9eb56696346b?q=80&w=800",
    description: "Fiery red chilies with natural color and heat levels.",
    origin: "Guntur, Andhra Pradesh",
    grade: "Premium Teja"
  },
  {
    name: "Natural Cloves",
    image: "https://images.unsplash.com/photo-1590401819777-628f8059868e?q=80&w=800",
    description: "Hand-picked cloves, rich in eugenol and natural aroma.",
    origin: "Southern India",
    grade: "Hand Picked"
  }
];

export default function SpicesPage() {
  const { toast } = useToast();

  const handleQuoteClick = (productName: string) => {
    const whatsappMessage = encodeURIComponent(
      `*Spice Export Inquiry: ${productName}*\n\n` +
      `I am looking for a reliable Indian spice partner. Please send the latest lab reports and export pricing for your ${productName}.`
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
            Authentic Indian Spice Exporter
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
            Discover the soul of Indian cuisine. We export premium, laboratory-tested spices including Turmeric, Cardamom, and Chili to the world's most demanding markets.
          </p>
          <Button 
            onClick={() => handleQuoteClick("General Spice Inquiry")}
            className="h-16 px-10 bg-white text-primary hover:bg-secondary hover:text-white rounded-full font-bold text-lg transition-all"
          >
            Request a Spice Quote <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Brand Matter */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-8 uppercase tracking-tight">Spices: The Pride of India</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-justify">
              <p>
                Indian spices have been celebrated for centuries for their unparalleled aroma, flavor, and medicinal properties. At <strong>Shree Bhumi Nature's Best</strong>, we honor this heritage by delivering spices that are pure, honest, and sourced directly from the finest spice clusters in Salem, Guntur, and the Western Ghats.
              </p>
              <p>
                Our quality control process is rigorous. We monitor everything from sun-drying and polishing to final laboratory testing for moisture and volatile oil content. By eliminating middlemen and working directly with farmer groups, we ensure full traceability—allowing our global partners to trust the origin and purity of every pinch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {spices.map((product, idx) => (
              <div key={idx} className="bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group">
                <div className="relative h-72 overflow-hidden">
                  <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-secondary text-white rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest">Lab Tested</Badge>
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-bold text-primary mb-4 uppercase">{product.name}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>
                  <div className="space-y-2 mb-8 border-t border-primary/5 pt-6">
                    <p className="text-sm font-bold text-secondary uppercase tracking-widest flex items-center gap-2">
                      <ChevronRight className="w-4 h-4" /> Origin: {product.origin}
                    </p>
                    <p className="text-sm font-bold text-primary/40 uppercase tracking-widest flex items-center gap-2">
                      <ChevronRight className="w-4 h-4" /> Grade: {product.grade}
                    </p>
                  </div>
                  <Button 
                    onClick={() => handleQuoteClick(product.name)}
                    className="w-full h-14 bg-primary hover:bg-secondary rounded-full font-bold uppercase tracking-widest text-xs"
                  >
                    Get Quote via WhatsApp
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
