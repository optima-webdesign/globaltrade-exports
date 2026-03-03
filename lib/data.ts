export const companyInfo = {
    name: "GlobalTrade Exports Pvt Ltd",
    location: "Ahmedabad, Gujarat, India",
    email: "info@globaltradeexports.com",
    phone: "+91 98765 43210",
    description: "A premier export house dedicated to bringing the finest Indian products to the global market with uncompromising quality and reliability."
  };
  
  export const categories = [
    { id: 'spices', name: 'Spices', slug: 'spices' },
    { id: 'herbal', name: 'Herbal Products', slug: 'herbal' },
    { id: 'leather', name: 'Leather Goods', slug: 'leather' },
    { id: 'grains', name: 'Food Grains', slug: 'grains' },
  ];
  
  export const products = [
    {
      id: "p1",
      name: "Premium Saffron",
      category: "spices",
      shortDesc: "Highest grade Kashmiri Saffron.",
      description: "Hand-harvested Kashmiri Saffron threads, known for intense aroma and deep color. Perfect for culinary and medicinal use.",
      specs: { Origin: "India", Grade: "A++", Packaging: "Glass Jar/Bulk" },
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop",
      countries: ["USA", "UAE", "UK"]
    },
    {
      id: "p2",
      name: "Turmeric Finger",
      category: "spices",
      shortDesc: "High Curcumin Turmeric Fingers.",
      description: "Naturally grown turmeric fingers sourced from prime agricultural regions, boasting a high curcumin content.",
      specs: { Origin: "India", Curcumin: "3-5%", Packaging: "Jute Bag/PP Bag" },
      image: "https://images.unsplash.com/photo-1615486171439-0bd46059d040?q=80&w=800&auto=format&fit=crop",
      countries: ["Global"]
    },
    {
      id: "p3",
      name: "Ashwagandha Root Extract",
      category: "herbal",
      shortDesc: "Pure Ashwagandha (Withania somnifera) extract.",
      description: "Standardized Ashwagandha extract ensuring high potency. Ideal for dietary supplements.",
      specs: { Form: "Powder", Purity: "99%", Packaging: "HDPE Drum" },
      image: "https://images.unsplash.com/photo-1611078564115-99882a933cb6?q=80&w=800&auto=format&fit=crop",
      countries: ["USA", "Germany", "Australia"]
    },
    {
      id: "p4",
      name: "Handcrafted Leather Briefcase",
      category: "leather",
      shortDesc: "Full-grain genuine leather briefcase.",
      description: "Expertly stitched using premium full-grain leather. Designed for durability and professional elegance.",
      specs: { Material: "Full-grain Leather", Color: "Tan/Black", Size: "15-inch Laptop" },
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
      countries: ["UK", "Canada", "France"]
    },
    {
      id: "p5",
      name: "Basmati Rice (1121 Sella)",
      category: "grains",
      shortDesc: "Long grain aromatic Basmati Rice.",
      description: "Premium 1121 Sella Basmati rice, aged to perfection for extra long grains and distinct aroma after cooking.",
      specs: { Grain Length: "8.35mm+", Moisture: "12% Max", Packaging: "Non-woven Bag" },
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=800&auto=format&fit=crop",
      countries: ["Saudi Arabia", "Iran", "USA"]
    },
  ];