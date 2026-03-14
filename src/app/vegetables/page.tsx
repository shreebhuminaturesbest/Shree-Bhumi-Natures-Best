"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const vegetables = [
  {
    name: "Fresh Tomatoes",
    image: "/vegetables/Tomatos.jpg",
    description: "Premium sun-ripened tomatoes, hand-picked for global standards.",
    origin: "Southern India",
    grade: "Export Grade A"
  },
  {
    name: "Red & Pink Onions",
    image: "/vegetables/red onions.jpg",
    description: "Firm onions with excellent pungency and shelf life.",
    origin: "Nashik, Maharashtra",
    grade: "Premium Export"
  },
  {
    name: "White Garlic",
    image: "/vegetables/white garlic.jpg",
    description: "Bold cloves with strong aroma and natural nourishment.",
    origin: "Madhya Pradesh",
    grade: "Superior"
  },
  {
    name: "Natural Potatoes",
    image: "/vegetables/potatos.jpg",
    description: "Multi-purpose export quality potatoes with minimal moisture.",
    origin: "Uttar Pradesh",
    grade: "Grade A"
  },
  {
    name: "Mixed Peppers",
    image: "/vegetables/mixed pepper.jpg",
    description: "Crisp and colorful peppers grown under natural sunlight.",
    origin: "Karnataka",
    grade: "Top Selection"
  },
  {
    name: "Fresh Carrots",
    image: "/vegetables/carrots.jpg",
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
      `I am interested in importing premium vegetables from Shree bhumi Nature's best Pvt Ltd. Please provide current export rates and capacity details.`
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
              Premium Indian Vegetables Exporter
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
              Leading exporter of fresh vegetables from India, supplying the finest varieties including Tomatoes, Onions, and Potatoes to global buyers worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => handleQuoteClick("General Vegetable Inquiry")}
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
              Vegetable Export from India
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                India's diverse climate allows us to grow a wide variety of vegetables year-round. At <strong>Shree bhumi Nature's best Pvt Ltd</strong>, we leverage our direct farmer network to source only the freshest produce. Our vegetables are grown in nutrient-rich soil hub regions across India, ensuring they retain their natural flavor and nutritional value.
              </p>
              <p>
                From sorting and grading to moisture-proof packaging, every step of our process is designed to maintain global export standards. We ensure that our perishables reach international markets in peak condition through efficient cold-chain logistics and pre-shipment quality audits.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              "Direct Farm Sourcing",
              "Quality Graded Export",
              "Global Shipping"
            ].map((feature, i) => (
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
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Our Vegetable Products</h2>
            <p className="text-muted-foreground">Premium quality vegetables sourced directly from Indian farms</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {vegetables.map((product, idx) => (
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
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Import Fresh Vegetables?</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Contact us today for competitive pricing and reliable delivery of premium Indian vegetables to your market.
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
