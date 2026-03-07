export interface CompanyInfo {
  name: string;
  location: string;
  email: string;
  phone: string;
  whatsapp: string;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  slug: string;
  tags: string[];
  shortDesc: string;
  description: string;
  specs: Record<string, string>;
  image: string;
  countries: string[];
}

export const companyInfo: CompanyInfo = {
  name: "GlobalTrade Exports Pvt Ltd",
  location: "Ahmedabad, Gujarat, India",
  email: "export@globaltradeexports.com",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  description: "A premier export house dedicated to bringing the finest Indian agricultural commodities and crafted goods to the global market with uncompromising quality, rigorous lab testing, and reliable logistics."
};

export const categories: Category[] = [
  { id: 'spices', name: 'Whole & Ground Spices', slug: 'spices' },
  { id: 'herbal', name: 'Herbal & Botanical Extracts', slug: 'herbal' },
  { id: 'leather', name: 'Premium Leather Goods', slug: 'leather' },
  { id: 'grains', name: 'Food Grains & Cereals', slug: 'grains' },
];

export const products: Product[] = [
  {
    id: "p1",
    name: "Premium Kashmiri Saffron",
    category: "spices",
    slug: "premium-kashmiri-saffron",
    tags: ["Organic", "High Demand", "Retail Ready"],
    shortDesc: "Highest grade A++ Kashmiri Saffron threads.",
    description: "Hand-harvested Kashmiri Saffron threads (Crocus sativus), known worldwide for their intense aroma, deep red color, and high crocin content. Perfect for premium culinary use and medicinal applications.",
    specs: { "Origin": "Kashmir, India", "Grade": "A++ (Mongra)", "Moisture": "< 8%", "Packaging": "Glass Jar / 1kg Bulk Tin" },
    image: "/images/saffron.png",
    countries: ["USA", "UAE", "UK", "Germany"]
  },
  {
    id: "p2",
    name: "Alleppey Finger Turmeric",
    category: "spices",
    slug: "alleppey-finger-turmeric",
    tags: ["Bulk", "Industrial", "Organic"],
    shortDesc: "High Curcumin naturally polished Turmeric Fingers.",
    description: "Naturally grown turmeric fingers sourced directly from prime agricultural regions in Southern India. Boasts a consistently high curcumin content, making it ideal for spice blends and pharmaceutical extracts.",
    specs: { "Origin": "Kerala, India", "Curcumin": "3.5% - 5%", "Form": "Polished Fingers", "Packaging": "25kg / 50kg Jute Bags" },
    image: "/images/turmeric.png",
    countries: ["Global"]
  },
  {
    id: "p3",
    name: "Indian Cumin Seeds (Jeera)",
    category: "spices",
    slug: "indian-cumin-seeds",
    tags: ["Bulk", "Essential"],
    shortDesc: "Machine-cleaned, sortexed Cumin Seeds.",
    description: "Premium quality Indian cumin seeds with an intense, warm flavor. 99% purity achieved through advanced sortex machinery, ensuring zero foreign matter.",
    specs: { "Origin": "Gujarat, India", "Purity": "99% Sortex Cleaned", "Moisture": "9% Max", "Packaging": "25kg PP Bags" },
    image: "/images/jeera.png", 
    countries: ["Middle East", "Europe", "USA"]
  },
  {
    id: "p4",
    name: "Ashwagandha Root Extract (KSM-66)",
    category: "herbal",
    slug: "ashwagandha-root-extract",
    tags: ["Extracts", "Pharmaceutical", "Organic"],
    shortDesc: "Standardized Withania somnifera extract.",
    description: "Highly potent and standardized Ashwagandha extract. Manufactured in a GMP-certified facility, ensuring high withanolide concentration for the global dietary supplement market.",
    specs: { "Form": "Fine Powder", "Withanolides": "> 5%", "Solubility": "Water Soluble", "Packaging": "25kg HDPE Drum" },
    image: "/images/ashwagandha.png",
    countries: ["USA", "Germany", "Australia", "Canada"]
  },
  {
    id: "p5",
    name: "Organic Moringa Leaf Powder",
    category: "herbal",
    slug: "organic-moringa-leaf-powder",
    tags: ["Superfood", "Organic", "Bulk"],
    shortDesc: "Nutrient-dense, vibrant green Moringa powder.",
    description: "Shade-dried and finely milled organic Moringa Oleifera leaves. Retains maximum nutritional value, perfect for superfood blends, capsules, and health drinks.",
    specs: { "Origin": "Tamil Nadu, India", "Color": "Vibrant Green", "Mesh Size": "80-100 Mesh", "Packaging": "20kg Paper Kraft Bag" },
    image: "/images/moringa.png",
    countries: ["UK", "USA", "Japan"]
  },
  // {
  //   id: "p6",
  //   name: "Executive Leather Briefcase",
  //   category: "leather",
  //   slug: "executive-leather-briefcase",
  //   tags: ["Retail Ready", "OEM Available"],
  //   shortDesc: "Full-grain genuine leather professional briefcase.",
  //   description: "Expertly stitched using premium full-grain leather by master craftsmen. Designed for durability and professional elegance. OEM and private labeling services available for bulk buyers.",
  //   specs: { "Material": "Full-grain Cowhide", "Colors": "Tan, Black, Chestnut", "Hardware": "Brass Finish", "MOQ": "100 Pieces" },
  //   image: "/images/briefcase.png",
  //   countries: ["UK", "Canada", "France", "Italy"]
  // },
  // {
  //   id: "p7",
  //   name: "Industrial Leather Safety Gloves",
  //   category: "leather",
  //   slug: "industrial-leather-safety-gloves",
  //   tags: ["Industrial", "Bulk", "Safety"],
  //   shortDesc: "Heavy-duty split leather work gloves.",
  //   description: "CE certified heavy-duty leather gloves for construction, welding, and industrial applications. Provides excellent heat resistance and durability.",
  //   specs: { "Material": "Cow Split Leather", "Grade": "AB Grade", "Certification": "CE EN 388", "Packaging": "120 Pairs / Carton" },
  //   image: "https://images.unsplash.com/photo-1584857416738-4e897914eb12?q=80&w=800&auto=format&fit=crop", 
  //   countries: ["Middle East", "Russia", "USA"]
  // },
  // {
  //   id: "p8",
  //   name: "1121 Sella Basmati Rice",
  //   category: "grains",
  //   slug: "1121-sella-basmati-rice",
  //   tags: ["Bulk", "High Demand"],
  //   shortDesc: "Extra-long grain aromatic Basmati Rice.",
  //   description: "Premium 1121 Sella (Parboiled) Basmati rice, aged to perfection. Known for its extraordinary grain length, non-sticky texture after cooking, and distinct aroma.",
  //   specs: { "Grain Length": "8.35mm+", "Moisture": "12% Max", "Broken": "1% Max", "Packaging": "10kg / 25kg Non-woven Bags" },
  //   image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=800&auto=format&fit=crop",
  //   countries: ["Saudi Arabia", "Iran", "USA", "Kuwait"]
  // },
  // {
  //   id: "p9",
  //   name: "Sharbati Wheat",
  //   category: "grains",
  //   slug: "sharbati-wheat",
  //   tags: ["Bulk", "Commodity"],
  //   shortDesc: "Premium golden Sharbati wheat grains.",
  //   description: "Sourced from the fertile regions of Madhya Pradesh, India. Known as the golden wheat, it produces the softest flour ideal for flatbreads and premium bakery products.",
  //   specs: { "Origin": "MP, India", "Moisture": "10% Max", "Foreign Matter": "0.5% Max", "Packaging": "50kg PP Bags" },
  //   image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=800&auto=format&fit=crop",
  //   countries: ["UAE", "Oman", "Singapore"]
  // },
  // {
  //   id: "p10",
  //   name: "Non-Basmati White Rice (IR64)",
  //   category: "grains",
  //   slug: "non-basmati-white-rice-ir64",
  //   tags: ["Commodity", "High Volume"],
  //   shortDesc: "5% Broken IR64 Long Grain White Rice.",
  //   description: "High-quality, sortexed IR64 raw white rice. A highly demanded staple commodity globally due to its consistent quality and affordable pricing.",
  //   specs: { "Broken": "5% Max", "Moisture": "14% Max", "Chalky Grains": "3% Max", "Packaging": "50kg Jute / PP Bags" },
  //   image: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?q=80&w=800&auto=format&fit=crop", 
  //   countries: ["Africa", "Southeast Asia"]
  // }
];