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
  { name: "Fresh Tomatoes", category: "Vegetables", image: "/vegetables/Tomatos.jpg", description: "Premium sun-ripened tomatoes.", origin: "Southern India", grade: "Export Grade A" },
  { name: "Red Onions", category: "Vegetables", image: "/vegetables/red onions.jpg", description: "Firm onions with excellent shelf life.", origin: "Maharashtra", grade: "Premium" },
  { name: "White Garlic", category: "Vegetables", image: "/vegetables/white garlic.jpg", description: "Bold cloves with strong aroma.", origin: "Madhya Pradesh", grade: "Superior" },
  { name: "Fresh Potatoes", category: "Vegetables", image: "/vegetables/potatos.jpg", description: "Multi-purpose export quality.", origin: "Uttar Pradesh", grade: "Grade A" },

  // Grains
  { name: "Aromatic Rice", category: "Grains", image: "/grains/aromotic_rice.jpg", description: "Premium aged rice varieties.", origin: "North India", grade: "Supreme" },
  { name: "Premium Wheat", category: "Grains", image: "/grains/Premium Wheat.jpg", description: "High-protein wheat grains.", origin: "Central India", grade: "Sharbati" },
  { name: "Golden Corn", category: "Grains", image: "/grains/Golden Corn.jpg", description: "Cleaned and dried yellow maize.", origin: "Andhra Pradesh", grade: "Export" },
  { name: "Finger Millets", category: "Grains", image: "/grains/Finger Millets.jpg", description: "Traditional superfood grains.", origin: "Maharashtra", grade: "Premium" },

  // Spices
  { name: "Black Pepper", category: "Spices", image: "/spices/Black Pepper.jpg", description: "Bold and pungent peppercorns.", origin: "Kerala", grade: "Bold 550GL" },
  { name: "Turmeric", category: "Spices", image: "/spices/Turmeric Powder.jpg", description: "High-curcumin turmeric.", origin: "Nizamabad, Telangana", grade: "Export A" },
  { name: "Cumin Seeds", category: "Spices", image: "/spices/Cumin Seeds.jpg", description: "Aromatic with high oil content.", origin: "Gujarat", grade: "Premium" },
  { name: "Green Cardamom", category: "Spices", image: "/spices/Green Cardamom.png", description: "Exquisite green cardamom pods.", origin: "Kerala", grade: "8mm+ Bold" },

  // Fruits
  { name: "Alphonso Mangoes", category: "Fruits", image: "/fruits/Alphonso Mangoes.jpg", description: "King of fruits - rich and creamy.", origin: "Maharashtra", grade: "Grade A" },
  { name: "Pomegranate", category: "Fruits", image: "/fruits/Bhagwa Pomegranate.jpg", description: "Deep red pearls.", origin: "Maharashtra", grade: "Export" },
  { name: "Cavendish Banana", category: "Fruits", image: "/fruits/Cavendish Banana.jpg", description: "Large and firm bananas.", origin: "Andhra Pradesh", grade: "Premium" },
  { name: "Thompson Grapes", category: "Fruits", image: "/fruits/Thompson Grapes.jpg", description: "Sweet seedless grapes.", origin: "Nashik", grade: "AAA" },
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
          <Link href={`/${activeTab.toLowerCase()}`} className="btn-primary inline-flex items-center gap-2">
            View All {activeTab} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
