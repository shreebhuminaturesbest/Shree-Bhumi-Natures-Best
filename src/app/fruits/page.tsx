"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const fruits = [
  {
    name: "Alphonso Mangoes",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=800",
    description: "King of fruits. Rich, creamy, and tender textured mangoes.",
    origin: "Maharashtra",
    grade: "Grade A"
  },
  {
    name: "Bhagwa Pomegranate",
    image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=800",
    description: "Deep red pearls with soft seeds and high juice content.",
    origin: "Maharashtra",
    grade: "Export Quality"
  },
  {
    name: "Cavendish Banana",
    image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?q=80&w=800",
    description: "Large, firm, and uniform bananas for international markets.",
    origin: "Andhra Pradesh",
    grade: "Premium"
  },
  {
    name: "Thompson Grapes",
    image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?q=80&w=800",
    description: "Sweet seedless green grapes with crisp texture.",
    origin: "Nashik",
    grade: "AAA Export"
  },
  {
    name: "Fresh Pink Guava",
    image: "https://images.unsplash.com/photo-1536511132770-e5088929944b?q=80&w=800",
    description: "Aromatic pink guavas, rich in Vitamin C and fiber.",
    origin: "Southern India",
    grade: "Select Quality"
  }
];

export default function FruitsPage() {
  const { toast } = useToast();

  const handleQuoteClick = (productName: string) => {
    const whatsappMessage = encodeURIComponent(
      `*Export Inquiry: ${productName}*\n\n` +
      `I am interested in importing premium fruits from Srinikia Exports. Please provide current export rates and availability details.`
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
              Premium Indian Fruits Exporter
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
              From the sun-kissed orchards of India to the world, we supply the finest Mangoes, Pomegranates, and Grapes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => handleQuoteClick("General Fruits Inquiry")}
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
              Premium Fruit Export from India
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                India's tropical and subtropical climate makes it ideal for growing a wide variety of premium fruits. At <strong>Srinikia Exports</strong>, we source the finest fruits directly from certified orchards and farmers.
              </p>
              <p>
                We maintain strict quality control from harvest to delivery, ensuring proper cold chain management and careful packaging to preserve freshness during international shipping.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {["Farm Fresh", "Cold Chain", "Global Export"].map((feature, i) => (
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
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Our Fruit Products</h2>
            <p className="text-muted-foreground">Premium quality fruits sourced directly from Indian orchards</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fruits.map((product, idx) => (
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
                      Fresh
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
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Import Indian Fruits?</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Contact us today for competitive pricing and reliable delivery of premium Indian fruits to your market.
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
