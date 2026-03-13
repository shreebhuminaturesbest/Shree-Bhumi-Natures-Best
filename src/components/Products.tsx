"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const categories = ["Vegetables", "Grains", "Spices", "Fruits"];

const products = [
  // Vegetables
  { name: "Fresh Tomatoes", category: "Vegetables", image: "https://images.unsplash.com/photo-1546470427-227c736c2841?q=80&w=800", description: "Premium sun-ripened tomatoes.", origin: "Southern India", grade: "Export Grade A" },
  { name: "Red Onions", category: "Vegetables", image: "https://images.unsplash.com/photo-1508747703725-719777637510?q=80&w=800", description: "Firm onions with excellent shelf life.", origin: "Maharashtra", grade: "Premium" },
  { name: "White Garlic", category: "Vegetables", image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?q=80&w=800", description: "Bold cloves with strong aroma.", origin: "Madhya Pradesh", grade: "Superior" },
  { name: "Fresh Potatoes", category: "Vegetables", image: "https://images.unsplash.com/photo-1518977676601-b53f02ac6d31?q=80&w=800", description: "Multi-purpose export quality.", origin: "Uttar Pradesh", grade: "Grade A" },

  // Grains
  { name: "Aromatic Rice", category: "Grains", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=800", description: "Premium aged rice varieties.", origin: "North India", grade: "Supreme" },
  { name: "Premium Wheat", category: "Grains", image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=800", description: "High-protein wheat grains.", origin: "Central India", grade: "Sharbati" },
  { name: "Golden Corn", category: "Grains", image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=800", description: "Cleaned and dried yellow maize.", origin: "Andhra Pradesh", grade: "Export" },
  { name: "Finger Millets", category: "Grains", image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=800", description: "Traditional superfood grains.", origin: "Maharashtra", grade: "Premium" },

  // Spices
  { name: "Black Pepper", category: "Spices", image: "https://images.unsplash.com/photo-1532431110031-15b565780598?q=80&w=800", description: "Bold and pungent peppercorns.", origin: "Kerala", grade: "Bold 550GL" },
  { name: "Turmeric Powder", category: "Spices", image: "https://images.unsplash.com/photo-1698556735172-1b5b3cd9d2ce?q=80&w=800", description: "High-curcumin turmeric.", origin: "Salem", grade: "Export A" },
  { name: "Cumin Seeds", category: "Spices", image: "https://images.unsplash.com/photo-1530588625438-7c5504971c2a?q=80&w=800", description: "Aromatic with high oil content.", origin: "Gujarat", grade: "Premium" },
  { name: "Green Cardamom", category: "Spices", image: "https://images.unsplash.com/photo-1599307734173-03027b872b53?q=80&w=800", description: "Exquisite green cardamom pods.", origin: "Kerala", grade: "8mm+ Bold" },

  // Fruits
  { name: "Alphonso Mangoes", category: "Fruits", image: "https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=800", description: "King of fruits - rich and creamy.", origin: "Maharashtra", grade: "Grade A" },
  { name: "Pomegranate", category: "Fruits", image: "https://images.unsplash.com/photo-1541344999736-83eca872f2fa?q=80&w=800", description: "Deep red pearls.", origin: "Maharashtra", grade: "Export" },
  { name: "Cavendish Banana", category: "Fruits", image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?q=80&w=800", description: "Large and firm bananas.", origin: "Andhra Pradesh", grade: "Premium" },
  { name: "Thompson Grapes", category: "Fruits", image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?q=80&w=800", description: "Sweet seedless grapes.", origin: "Nashik", grade: "AAA" },
];

export function Products() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("Vegetables");

  const filteredProducts = products.filter(p => p.category === activeTab);

  const handleQuoteSubmit = (e: React.FormEvent<HTMLFormElement>, productName: string) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const company = formData.get("company");
    const country = formData.get("country");
    const quantity = formData.get("quantity");

    const whatsappMessage = encodeURIComponent(
      `*Quote Request: ${productName}*\nCompany: ${company}\nCountry: ${country}\nQuantity: ${quantity}`
    );

    window.open(`https://wa.me/919550696255?text=${whatsappMessage}`, "_blank");
    toast({ title: "Opening WhatsApp..." });
  };

  return (
    <section id="products" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">Our Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Premium quality agricultural products sourced directly from Indian farms
          </p>
        </div>

        {/* Category Tabs */}
        <Tabs value={activeTab} className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-muted p-1 rounded-lg h-auto flex-wrap gap-1">
              {categories.map(cat => (
                <TabsTrigger 
                  key={cat} 
                  value={cat} 
                  className="px-6 py-2.5 data-[state=active]:bg-secondary data-[state=active]:text-white transition-all font-medium rounded-md"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-0 focus-visible:ring-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product, idx) => (
                <div key={idx} className="card-corporate group">
                  <div className="relative h-48 overflow-hidden">
                    <Image 
                      src={product.image} 
                      alt={product.name} 
                      fill 
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-secondary text-white text-xs">{product.category}</Badge>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-bold text-primary mb-1">{product.name}</h3>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-1">{product.description}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                      <span>{product.origin}</span>
                      <span className="font-medium">{product.grade}</span>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full bg-secondary hover:bg-secondary/90 text-sm h-9">
                          Get Quote
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[450px]">
                        <DialogHeader>
                          <DialogTitle className="text-lg font-bold">Request Quote</DialogTitle>
                          <DialogDescription>{product.name}</DialogDescription>
                        </DialogHeader>
                        <form className="space-y-3" onSubmit={(e) => handleQuoteSubmit(e, product.name)}>
                          <div className="grid grid-cols-2 gap-3">
                            <Input name="company" required placeholder="Company" className="h-10" />
                            <Input name="country" required placeholder="Country" className="h-10" />
                          </div>
                          <Input name="quantity" required placeholder="Quantity (MT)" className="h-10" />
                          <DialogFooter>
                            <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 h-10">
                              Submit
                            </Button>
                          </DialogFooter>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Link href="/#contact" className="btn-primary inline-flex items-center gap-2">
            View All Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
