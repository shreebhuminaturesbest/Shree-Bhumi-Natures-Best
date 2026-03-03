
"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const vegetables = [
  {
    name: "Fresh Tomatoes",
    image: "https://images.unsplash.com/photo-1546470427-227c736c2841?q=80&w=800",
    description: "Premium sun-ripened tomatoes, hand-picked for global standards.",
    origin: "Southern India",
    grade: "Export Grade A"
  },
  {
    name: "Red & Pink Onions",
    image: "https://images.unsplash.com/photo-1508747703725-719777637510?q=80&w=800",
    description: "Firm onions with excellent pungency and shelf life.",
    origin: "Nashik, Maharashtra",
    grade: "Premium Export"
  },
  {
    name: "White Garlic",
    image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?q=80&w=800",
    description: "Bold cloves with strong aroma and natural nourishment.",
    origin: "Madhya Pradesh",
    grade: "Superior"
  },
  {
    name: "Natural Potatoes",
    image: "https://images.unsplash.com/photo-1518977676601-b53f02ac6d31?q=80&w=800",
    description: "Multi-purpose export quality potatoes with minimal moisture.",
    origin: "Uttar Pradesh",
    grade: "Grade A"
  },
  {
    name: "Mixed Peppers",
    image: "https://images.unsplash.com/photo-1592924357228-91a4bcadcfea?q=80&w=800",
    description: "Crisp and colorful peppers grown under natural sunlight.",
    origin: "Karnataka",
    grade: "Top Selection"
  },
  {
    name: "Fresh Carrots",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=800",
    description: "Sweet and crunchy carrots, cleaned and graded for export.",
    origin: "Ooty, Tamil Nadu",
    grade: "Premium"
  }
];

export default function VegetablesPage() {
  const { toast } = useToast();

  const handleQuoteClick = (productName: string) => {
    const whatsappMessage = encodeURIComponent(
      `*Export Inquiry: ${productName}*\n\n` +
      `I am interested in importing premium vegetables from SBNB Global. Please provide current export rates and capacity details.`
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
            Premium Indian Vegetable Exporter
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
            We are a leading exporter of fresh vegetables from India, supplying the finest varieties including Tomatoes, Onions, and Potatoes to global buyers. Secure your fresh import today.
          </p>
          <Button 
            onClick={() => handleQuoteClick("General Vegetable Inquiry")}
            className="h-16 px-10 bg-white text-primary hover:bg-secondary hover:text-white rounded-full font-bold text-lg transition-all"
          >
            Request a Vegetable Quote <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Brand Matter */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-8 uppercase tracking-tight">Vegetable Export from India</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-justify">
              <p>
                India's diverse climate allows us to grow a wide variety of vegetables year-round. At <strong>Shree Bhumi Nature's Best</strong>, we leverage our direct farmer network to source only the freshest produce. Our vegetables are grown in nutrient-rich soil hub regions across India, ensuring they retain their natural flavor and nutritional value.
              </p>
              <p>
                From sorting and grading to moisture-proof packaging, every step of our process is designed to maintain global export standards. We ensure that our perishables reach international markets in peak condition through efficient cold-chain logistics and pre-shipment quality audits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {vegetables.map((product, idx) => (
              <div key={idx} className="bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group">
                <div className="relative h-72 overflow-hidden">
                  <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-secondary text-white rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest">Premium Export</Badge>
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
