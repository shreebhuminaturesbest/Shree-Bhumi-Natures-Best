"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle } from "lucide-react";
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
      `I am interested in importing premium grains from Srinikia Exports. Please share the latest specifications and export pricing.`
    );
    window.open(`https://wa.me/919550696255?text=${whatsappMessage}`, "_blank");
    toast({ title: "Connecting to WhatsApp..." });
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary text-sm font-semibold rounded-full mb-6">
              Export Category
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Premium Indian Grains Exporter
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
              From the fertile heartlands of India to the world, we export the finest Basmati rice, high-protein wheat, and nutritious millets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => handleQuoteClick("General Grain Inquiry")}
                className="bg-secondary hover:bg-secondary/90 text-white h-12 px-8 font-semibold"
              >
                Request a Quote <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Link href="/#contact">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary h-12 px-8 font-semibold">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Premium Grain Export from India
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                India is one of the world's largest producers of grains, with a diverse range of high-quality rice, wheat, and millets. At <strong>Srinikia Exports</strong>, we partner directly with farmers to ensure the best quality grains reach global markets.
              </p>
              <p>
                Our grains are processed using state-of-the-art machinery, cleaned, sorted, and packaged to maintain their nutritional value and freshness during international transit.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {["Direct Farm Sourcing", "Quality Certified", "Global Shipping"].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span className="font-medium text-primary">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Our Grain Products</h2>
            <p className="text-muted-foreground">Premium quality grains sourced directly from Indian farms</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {grains.map((product, idx) => (
              <div key={idx} className="card-corporate group overflow-hidden">
                <div className="relative h-56 overflow-hidden">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-secondary text-white font-medium text-xs">
                      Premium
                    </Badge>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4 pb-4 border-b border-border">
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-secondary" />
                      {product.origin}
                    </span>
                    <span className="font-medium">{product.grade}</span>
                  </div>
                  <Button 
                    onClick={() => handleQuoteClick(product.name)}
                    className="w-full bg-secondary hover:bg-secondary/90"
                  >
                    Get Quote
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Import Indian Grains?</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Contact us today for competitive pricing and reliable delivery of premium Indian grains to your market.
          </p>
          <Button 
            onClick={() => handleQuoteClick("General Inquiry")}
            className="bg-secondary hover:bg-secondary/90 text-white h-12 px-8 font-semibold"
          >
            Get Started <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
