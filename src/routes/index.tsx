import { createFileRoute } from "@tanstack/react-router";
import { StoreProvider } from "@/components/store/store";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Collections } from "@/components/site/Collections";
import { BestSellers } from "@/components/site/BestSellers";
import { Discovery } from "@/components/site/Discovery";
import { Story } from "@/components/site/Story";
import { Signature } from "@/components/site/Signature";
import { Trust } from "@/components/site/Trust";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { Vip } from "@/components/site/Vip";
import { Footer } from "@/components/site/Footer";
import { CartDrawer } from "@/components/site/CartDrawer";
import { SearchOverlay } from "@/components/site/SearchOverlay";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Casa de Aroma — The Art of Scent | Luxury Fragrance House" },
      {
        name: "description",
        content:
          "Curated luxury fragrances — oud, oriental, floral and niche. Authentic bottles, personally vetted, delivered worldwide in 3–7 days.",
      },
      { property: "og:title", content: "Casa de Aroma — The Art of Scent" },
      {
        property: "og:description",
        content:
          "A curated house of authentic luxury fragrance. Discover signature scents, modern classics and the private collection.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <StoreProvider>
      <Nav />
      <main>
        <Hero />
        <Collections />
        <BestSellers />
        <Discovery />
        <Story />
        <Signature />
        <Trust />
        <Testimonials />
        <Faq />
        <Vip />
      </main>
      <Footer />
      <CartDrawer />
      <SearchOverlay />
    </StoreProvider>
  );
}
