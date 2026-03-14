"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ShieldCheck, Users, Globe, Award } from "lucide-react";

export default function AboutPage() {
  const factoryImageUrl = "https://firebasestorage.googleapis.com/v0/b/studio-2215204146-270ef.firebasestorage.app/o/shreebhumi%2FChatGPT%20Image%20Mar%201%2C%202026%2C%2010_41_41%20PM.png?alt=media&token=1036b945-2f29-45d7-901b-795db1f7de99";
  const welcomeImageUrl = "https://ml0k8npvi8h7.i.optimole.com/cb:K2_q.4551d/w:1000/h:667/q:mauto/f:best/https://freshlineexim.com/wp-content/uploads/2023/02/5a874b9ace.jpg";

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary text-sm font-semibold rounded-full mb-6">
              About Us
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Your Trusted Export Partner
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Delivering premium Indian agricultural products to global markets since 2018
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                Experience the Taste of Premium Quality Exports
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At <strong>Shree bhumi Nature's best Pvt Ltd</strong>, we pride ourselves on exporting the freshest, tastiest produce from India. With a deep focus on quality control and customer satisfaction, we provide end-to-end services, including procurement, packing, and delivery. Trust us to deliver excellence in every shipment.
                </p>
                <p>
                  We are a premier export company based in Hyderabad, India that specializes in the export of premium-quality fresh fruits, vegetables, spices, and grains. We are dedicated to providing our customers with the freshest and most flavorful produce sourced from the fertile lands of India.
                </p>
                <p>
                  Our product range includes a wide selection of <strong>Onions, Tomatoes, Grapes, Pomegranates, Green Chillies, Lemons, and various spices</strong>. We provide both premium export quality and domestic quality products to meet your packaging specifications.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl">
                <Image src={welcomeImageUrl} alt="Our Farm" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: "100+", label: "Farm Partners" },
              { icon: Globe, value: "25+", label: "Countries Served" },
              { icon: Award, value: "7+", label: "Years Experience" },
              { icon: ShieldCheck, value: "50+", label: "Products" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-secondary" />
                </div>
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-subtitle mx-auto mt-4">
              We are committed to delivering the best quality products to our global clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Quality Assured", desc: "ISO certified processes with rigorous quality checks at every stage" },
              { icon: Globe, title: "Global Reach", desc: "Strong logistics network serving 25+ countries worldwide" },
              { icon: Users, title: "Direct Sourcing", desc: "Partnerships with 100+ farms for direct farm-to-export supply chain" }
            ].map((item, i) => (
              <div key={i} className="card-corporate-hover p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-secondary/10 rounded-full mb-4">
                  <item.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment to Quality */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">Our Commitment to Quality</h2>
            <p className="text-muted-foreground leading-relaxed text-center">
              At Shree Bhumi Nature's Best Pvt Ltd, quality is at the heart of everything we do. From selecting the right farms to ensuring proper packaging and timely delivery, every step of our process is carefully monitored to maintain freshness and international export standards. Our experienced team works closely with farmers and suppliers to ensure that only the best produce reaches our customers.
            </p>
          </div>
        </div>
      </section>

      {/* Strong Farmer Network */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">Strong Farmer Network</h2>
            <p className="text-muted-foreground leading-relaxed text-center">
              We maintain strong relationships with trusted farmers across India who follow responsible and sustainable farming practices. This close collaboration allows us to source fresh produce directly from farms, ensuring superior quality, traceability, and consistent supply throughout the year.
            </p>
          </div>
        </div>
      </section>

      {/* Advanced Packaging & Logistics */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">Advanced Packaging & Logistics</h2>
            <p className="text-muted-foreground leading-relaxed text-center">
              Our packaging process is designed to preserve freshness and protect the quality of the produce during transportation. With efficient logistics and reliable shipping partners, we ensure that our products reach international markets safely, on time, and in excellent condition.
            </p>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">Global Reach</h2>
            <p className="text-muted-foreground leading-relaxed text-center">
              We proudly serve clients across multiple international markets by delivering high-quality agricultural products from India. Our focus on reliability, transparency, and customer satisfaction has helped us build long-term partnerships with buyers around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Customer-Centric Approach */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">Customer-Centric Approach</h2>
            <p className="text-muted-foreground leading-relaxed text-center">
              Customer satisfaction is our top priority. We understand the diverse requirements of global markets and offer flexible packaging, customized orders, and reliable export services to meet our clients' specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Partner With Us?</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your export requirements and discover how we can serve you better.
          </p>
          <Link href="/#contact">
            <Button className="bg-secondary hover:bg-secondary/90 text-white h-12 px-8 font-semibold">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
