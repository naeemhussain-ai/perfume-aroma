import acqua from "@/assets/p-acqua.jpg";
import si from "@/assets/p-si.jpg";
import roseArabie from "@/assets/p-rose-arabie.jpg";
import bloom from "@/assets/p-bloom.jpg";
import vetiver from "@/assets/p-vetiver.jpg";
import code from "@/assets/p-code.jpg";
import milkyway from "@/assets/p-milkyway.jpg";
import discovery from "@/assets/collection-discovery.jpg";

export type Family =
  | "Floral"
  | "Woody"
  | "Fresh"
  | "Citrus"
  | "Amber"
  | "Musk"
  | "Oriental";

export interface Product {
  id: string;
  brand: string;
  name: string;
  family: Family;
  price: number;
  compareAt?: number;
  rating: number;
  reviews: number;
  image: string;
  altImage: string;
  note: string;
  size: string;
  feature?: boolean;
}

export const products: Product[] = [
  {
    id: "acqua-profumo",
    brand: "Giorgio Armani",
    name: "Acqua di Giò Profumo",
    family: "Fresh",
    price: 119.99,
    compareAt: 149.99,
    rating: 4.8,
    reviews: 412,
    image: acqua,
    altImage: vetiver,
    note: "Marine accord, patchouli, incense",
    size: "75 ml",
    feature: true,
  },
  {
    id: "armani-si",
    brand: "Giorgio Armani",
    name: "Sì Eau de Parfum",
    family: "Floral",
    price: 99.99,
    compareAt: 129.99,
    rating: 4.9,
    reviews: 638,
    image: si,
    altImage: bloom,
    note: "Blackcurrant nectar, rose, vanilla",
    size: "100 ml",
    feature: true,
  },
  {
    id: "rose-darabie",
    brand: "Armani Privé",
    name: "Rose d'Arabie",
    family: "Oriental",
    price: 219.99,
    compareAt: 259.99,
    rating: 5.0,
    reviews: 187,
    image: roseArabie,
    altImage: code,
    note: "Oud, Turkish rose, honeyed amber",
    size: "100 ml",
    feature: true,
  },
  {
    id: "gucci-bloom",
    brand: "Gucci",
    name: "Bloom",
    family: "Floral",
    price: 128.0,
    rating: 4.7,
    reviews: 305,
    image: bloom,
    altImage: si,
    note: "Tuberose, jasmine, Rangoon creeper",
    size: "50 ml",
  },
  {
    id: "vetiver-roots",
    brand: "Casa Atelier",
    name: "Vetiver Roots",
    family: "Woody",
    price: 142.0,
    rating: 4.6,
    reviews: 96,
    image: vetiver,
    altImage: acqua,
    note: "Haitian vetiver, cedar, dry moss",
    size: "100 ml",
  },
  {
    id: "armani-code",
    brand: "Giorgio Armani",
    name: "Code Parfum",
    family: "Amber",
    price: 134.0,
    compareAt: 158.0,
    rating: 4.8,
    reviews: 274,
    image: code,
    altImage: roseArabie,
    note: "Tonka bean, amber, green apple",
    size: "75 ml",
  },
  {
    id: "milky-way",
    brand: "Neesh",
    name: "Milky Way",
    family: "Musk",
    price: 88.0,
    rating: 4.5,
    reviews: 141,
    image: milkyway,
    altImage: bloom,
    note: "White musk, almond milk, iris",
    size: "50 ml",
  },
  {
    id: "citrus-edit",
    brand: "Casa Atelier",
    name: "Bergamot Discovery Set",
    family: "Citrus",
    price: 64.0,
    compareAt: 82.0,
    rating: 4.7,
    reviews: 203,
    image: discovery,
    altImage: vetiver,
    note: "Four 8 ml travel parfums",
    size: "4 × 8 ml",
  },
];

export const families: Family[] = [
  "Floral",
  "Woody",
  "Fresh",
  "Citrus",
  "Amber",
  "Musk",
  "Oriental",
];

export const formatPrice = (v: number) =>
  v.toLocaleString("en-US", { style: "currency", currency: "USD" });
