"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Layout, Search, Copy, Check } from "lucide-react";
import { generateMarketingCopy } from "@/ai/flows/generate-marketing-copy";
import { generateSeoMetaTags } from "@/ai/flows/generate-seo-meta-tags";
import { useToast } from "@/hooks/use-toast";

export default function ToolsPage() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  // Marketing Copy State
  const [details, setDetails] = useState("");
  const [marketingResult, setMarketingResult] = useState<any>(null);

  // SEO State
  const [pageContent, setPageContent] = useState("");
  const [seoResult, setSeoResult] = useState<any>(null);

  const handleMarketingSubmit = async () => {
    if (!details) return;
    setLoading(true);
    try {
      const result = await generateMarketingCopy({
        contentType: "product_description",
        details,
        tone: "premium and appetizing"
      });
      setMarketingResult(result);
    } catch (error) {
      toast({ variant: "destructive", title: "Generation failed" });
    } finally {
      setLoading(false);
    }
  };

  const handleSeoSubmit = async () => {
    if (!pageContent) return;
    setLoading(true);
    try {
      const result = await generateSeoMetaTags({ pageContent });
      setSeoResult(result);
    } catch (error) {
      toast({ variant: "destructive", title: "Generation failed" });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast({ title: "Copied to clipboard" });
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary text-sm font-semibold rounded-full mb-6">
              Internal Tools
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Content & SEO Manager
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-0 leading-relaxed">
              Leverage AI to generate high-converting marketing copy and SEO-optimized meta tags for your products.
            </p>
          </div>
        </div>
      </section>

      <div className="section-padding">
        <div className="container-custom">
          <Tabs defaultValue="marketing" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="marketing" className="py-3">
                <Sparkles className="w-4 h-4 mr-2" />
                Marketing Copy
              </TabsTrigger>
              <TabsTrigger value="seo" className="py-3">
                <Search className="w-4 h-4 mr-2" />
                SEO Meta Tags
              </TabsTrigger>
            </TabsList>

            {/* Marketing Copy Tab */}
            <TabsContent value="marketing">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-secondary" />
                    Generate Marketing Copy
                  </CardTitle>
                  <CardDescription>
                    Enter product details to generate compelling marketing copy
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Product Details</label>
                    <Textarea 
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      placeholder="e.g., Fresh Alphonso mangoes from Maharashtra, premium quality, export grade A..."
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button 
                    onClick={handleMarketingSubmit} 
                    disabled={loading || !details}
                    className="w-full bg-secondary hover:bg-secondary/90"
                  >
                    {loading ? "Generating..." : "Generate Copy"}
                  </Button>
                  
                  {marketingResult && (
                    <div className="mt-6 p-4 bg-muted rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Generated Copy:</span>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => copyToClipboard(marketingResult.copy)}
                        >
                          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </Button>
                      </div>
                      <p className="text-sm whitespace-pre-wrap">{marketingResult.copy}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* SEO Tab */}
            <TabsContent value="seo">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="w-5 h-5 text-secondary" />
                    Generate SEO Meta Tags
                  </CardTitle>
                  <CardDescription>
                    Enter page content to generate optimized meta title and description
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Page Content</label>
                    <Textarea 
                      value={pageContent}
                      onChange={(e) => setPageContent(e.target.value)}
                      placeholder="Enter the main content or description of your page..."
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button 
                    onClick={handleSeoSubmit} 
                    disabled={loading || !pageContent}
                    className="w-full bg-secondary hover:bg-secondary/90"
                  >
                    {loading ? "Generating..." : "Generate SEO Tags"}
                  </Button>
                  
                  {seoResult && (
                    <div className="mt-6 p-4 bg-muted rounded-lg space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">Title:</span>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => copyToClipboard(seoResult.metaTitle)}
                          >
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                        <p className="text-sm">{seoResult.metaTitle}</p>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">Description:</span>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => copyToClipboard(seoResult.metaDescription)}
                          >
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                        <p className="text-sm">{seoResult.metaDescription}</p>
                      </div>
                      {seoResult.keywords && (
                        <div>
                          <span className="text-sm font-medium block mb-2">Keywords:</span>
                          <div className="flex flex-wrap gap-2">
                            {seoResult.keywords.map((kw: string, i: number) => (
                              <Badge key={i} variant="secondary">{kw}</Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </main>
  );
}
