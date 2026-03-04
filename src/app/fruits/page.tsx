"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, ArrowRight } from "lucide-react";
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
      `I am interested in importing premium fruits from SBNB Global. Please provide current export rates and availability details.`
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
            Premium Indian Fruits Exporter
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
            From the sun-kissed orchards of India to the world, we supply the finest Mangoes, Pomegranates, and Grapes. Quality you can taste, service you can trust.
          </p>
          <Button 
            onClick={() => handleQuoteClick("General Fruits Inquiry")}
            className="h-16 px-10 bg-white text-primary hover:bg-secondary hover:text-white rounded-full font-bold text-lg transition-all"
          >
            Request a Fruit Quote <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Brand Matter */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-8 uppercase tracking-tight">Fruit Export Excellence</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-justify">
              <p>
                India is often referred to as the 'Fruit Basket of the World' due to its diverse agro-climatic zones. At <strong>Shree Bhumi Nature's Best</strong>, we harness this advantage to bring you the best that Mother Earth has to offer. Our fruits are sourced from expert cultivators who prioritize natural growth and peak ripeness.
              </p>
              <p>
                From the legendary Alphonso Mangoes of Maharashtra to the juicy Thompson Grapes of Nashik, every fruit is carefully harvested, sorted, and packed using international cold-chain standards. We ensure that our produce reaches global markets with its nutritional value and natural sweetness intact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid - Swipeable on Mobile */}
      <section className="py-24 bg-primary/5 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex overflow-x-auto pb-10 gap-4 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:overflow-visible md:pb-0">
            {fruits.map((product, idx) => (
              <div key={idx} className="min-w-[48%] md:min-w-0 snap-center bg-white rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group shrink-0 md:shrink">
                <div className="relative h-48 md:h-72 overflow-hidden">
                  <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 md:top-6 md:left-6">
                    <Badge className="bg-secondary text-white rounded-full px-2 py-0.5 md:px-4 md:py-1 text-[8px] md:text-xs font-bold uppercase tracking-widest">Premium Export</Badge>
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
