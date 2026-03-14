"use client";

import Image from "next/image";
import { CheckCircle2, Globe, Heart, ShieldCheck, Sprout, Award, Truck, Factory } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function About() {
  const welcomeImageUrl = "https://ml0k8npvi8h7.i.optimole.com/cb:K2_q.4551d/w:1000/h:667/q:mauto/f:best/https://freshlineexim.com/wp-content/uploads/2023/02/5a874b9ace.jpg";
  
  return (
    <section id="about" className="relative">
      {/* Floating WhatsApp */}
      <Link 
        href="https://wa.me/919550696255" 
        target="_blank"
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] flex items-center justify-center w-14 h-14 bg-[#00d757] rounded-full shadow-lg hover:bg-[#00c853] transition-colors"
      >
        <svg className="w-7 h-7 fill-white" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
        </svg>
      </Link>

      {/* About Section - Matching hnrinternational.com style */}
      <div className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                About Shree bhumi Nature's best Pvt Ltd
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Your trusted partner for premium Indian agricultural exports. We connect the rich farmlands of India with global markets, delivering authentic spices, fresh vegetables, premium grains, and fresh fruits of the highest quality.
                </p>
                <p>
                  With years of experience in international trade, we understand the importance of quality, reliability, and timely delivery. Our robust network of farm partners ensures direct-from-source procurement, giving you the best products at competitive prices.
                </p>
              </div>
              
              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span className="font-medium text-sm">Quality Assured</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span className="font-medium text-sm">Global Export</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span className="font-medium text-sm">Direct Sourcing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span className="font-medium text-sm">Competitive Pricing</span>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/about">
                  <Button className="bg-secondary hover:bg-secondary/90 text-white font-semibold">
                    More About Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-lg">
                <Image src={welcomeImageUrl} alt="About Us" fill className="object-cover" sizes="50vw" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Certifications() {
  const logos = [
    { name: "APEDA", url: "https://jbrotherexports.com/wp-content/uploads/2023/02/Apeda.png" },
    { name: "FSSAI", url: "https://jbrotherexports.com/wp-content/uploads/2023/02/fssai.png" },
    { name: "Spices Board", url: "https://jbrotherexports.com/wp-content/uploads/2023/02/spices-board-india.png" },
    { name: "MSME", url: "https://jbrotherexports.com/wp-content/uploads/2023/02/MSME.png" },
    { name: "Quality", url: "https://etimg.etb2bimg.com/photo/86677229.cms" },
    { name: "DGFT", url: "https://content.dgft.gov.in/NCSTC/ncstc-sliderlogo/dgft-logo.jpg" },
    { name: "ISO Certified", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvL40lg1W82c9jrAWVbR4UFZeQvOGZ3b0c3g&s" }
  ];

  return (
    <section id="certifications" className="section-padding bg-white border-t border-b border-border">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-primary">Our Certifications</h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {logos.map((logo, i) => (
            <div key={i} className="relative w-20 h-20 md:w-24 md:h-24 transition-all hover:scale-110">
              <Image src={logo.url} alt={logo.name} fill className="object-contain" sizes="96px" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  const points = [
    "Integrated Farm-to-Fork traceability and quality control systems.",
    "B2B specialized logistics network serving 10+ global markets.",
    "Certified laboratory testing for every product batch for maximum purity.",
    "Direct-from-source model to ensure fair and competitive pricing.",
    "Sustainable procurement practices supporting over 100 local farm clusters."
  ];

  return (
    <section id="why-choose-us" className="section-padding bg-primary text-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Global Partners Choose Us</h2>
            <div className="space-y-4">
              {points.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <p className="text-white/80 text-sm">{point}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="bg-white/5 p-6 rounded-lg text-center">
              <h4 className="text-secondary text-3xl font-bold mb-1">24/7</h4>
              <p className="text-white/60 text-sm">Logistics Support</p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg text-center">
              <h4 className="text-secondary text-3xl font-bold mb-1">100%</h4>
              <p className="text-white/60 text-sm">Direct Sourcing</p>
            </div>
            <div className="col-span-2 bg-secondary p-4 rounded-lg text-center text-primary">
              <p className="font-semibold">Global Presence: Europe | Middle East | Asia | North America</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
