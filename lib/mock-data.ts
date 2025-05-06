// Mock Products
export const products = [
  {
    id: 1,
    name: "Sunari S1 Pro",
    description: "Professional 5-driver hybrid IEM with unparalleled sound clarity and precision.",
    price: 999,
    images: [
      "/placeholder.svg?key=v2z8m",
      "/placeholder.svg?key=uidee",
      "/placeholder.svg?key=72hel",
      "/placeholder.svg?key=ijpva",
    ],
    category: "professional",
    features: [
      "5-driver hybrid configuration (1 dynamic + 4 balanced armature)",
      "Frequency response: 10Hz - 40kHz",
      "Impedance: 32 ohms",
      "Sensitivity: 110dB/mW",
      "Detachable MMCX cable with premium silver-plated copper wires",
      "Custom-molded ear tips for perfect fit and isolation",
      "Premium leather carrying case included",
    ],
    specs: {
      "Driver Configuration": "1 dynamic driver + 4 balanced armature drivers",
      "Frequency Response": "10Hz - 40kHz",
      Impedance: "32 ohms",
      Sensitivity: "110dB/mW",
      THD: "<0.1% @ 1kHz",
      "Noise Isolation": "-26dB",
      Cable: "1.2m detachable MMCX, silver-plated copper",
      Connector: "3.5mm gold-plated",
      Weight: "18g (without cable)",
    },
    inBox: [
      "Sunari S1 Pro IEMs",
      "Premium silver-plated copper MMCX cable",
      "3 pairs of silicone ear tips (S, M, L)",
      "3 pairs of memory foam ear tips (S, M, L)",
      "Premium leather carrying case",
      "Cleaning tool",
      '1/4" adapter',
      "User manual and warranty card",
    ],
    stock: 24,
    status: "in-stock",
  },
  {
    id: 2,
    name: "Sunari Harmony",
    description: "Audiophile 3-driver balanced armature with exceptional midrange clarity.",
    price: 499,
    images: [
      "/placeholder.svg?key=h614d",
      "/placeholder.svg?height=600&width=600&query=premium+in-ear+monitor+silver+audiophile+side+view",
      "/placeholder.svg?height=600&width=600&query=premium+in-ear+monitor+silver+audiophile+cable+view",
      "/placeholder.svg?height=600&width=600&query=premium+in-ear+monitor+silver+audiophile+case+view",
    ],
    category: "audiophile",
    features: [
      "3-driver balanced armature configuration",
      "Frequency response: 20Hz - 20kHz",
      "Impedance: 28 ohms",
      "Sensitivity: 108dB/mW",
      "Detachable MMCX cable with OFC copper wires",
      "Ergonomic design for extended comfort",
      "Compact carrying case included",
    ],
    specs: {
      "Driver Configuration": "3 balanced armature drivers",
      "Frequency Response": "20Hz - 20kHz",
      Impedance: "28 ohms",
      Sensitivity: "108dB/mW",
      THD: "<0.2% @ 1kHz",
      "Noise Isolation": "-24dB",
      Cable: "1.2m detachable MMCX, OFC copper",
      Connector: "3.5mm gold-plated",
      Weight: "15g (without cable)",
    },
    inBox: [
      "Sunari Harmony IEMs",
      "OFC copper MMCX cable",
      "3 pairs of silicone ear tips (S, M, L)",
      "2 pairs of memory foam ear tips (M, L)",
      "Compact carrying case",
      "Cleaning tool",
      "User manual and warranty card",
    ],
    stock: 18,
    status: "in-stock",
  },
  {
    id: 3,
    name: "Sunari Clarity",
    description: "Dual hybrid drivers with MMCX cable for a balanced sound signature.",
    price: 299,
    images: [
      "/placeholder.svg?height=600&width=600&query=premium+in-ear+monitor+transparent+shell+front+view",
      "/placeholder.svg?height=600&width=600&query=premium+in-ear+monitor+transparent+shell+side+view",
      "/placeholder.svg?height=600&width=600&query=premium+in-ear+monitor+transparent+shell+cable+view",
      "/placeholder.svg?height=600&width=600&query=premium+in-ear+monitor+transparent+shell+case+view",
    ],
    category: "audiophile",
    features: [
      "Dual hybrid driver configuration (1 dynamic + 1 balanced armature)",
      "Frequency response: 20Hz - 20kHz",
      "Impedance: 16 ohms",
      "Sensitivity: 105dB/mW",
      "Detachable MMCX cable",
      "Transparent shell design",
      "Soft carrying pouch included",
    ],
    specs: {
      "Driver Configuration": "1 dynamic driver + 1 balanced armature driver",
      "Frequency Response": "20Hz - 20kHz",
      Impedance: "16 ohms",
      Sensitivity: "105dB/mW",
      THD: "<0.3% @ 1kHz",
      "Noise Isolation": "-20dB",
      Cable: "1.2m detachable MMCX, standard copper",
      Connector: "3.5mm gold-plated",
      Weight: "12g (without cable)",
    },
    inBox: [
      "Sunari Clarity IEMs",
      "Standard MMCX cable",
      "3 pairs of silicone ear tips (S, M, L)",
      "Soft carrying pouch",
      "Cleaning tool",
      "User manual and warranty card",
    ],
    stock: 0,
    status: "out-of-stock",
  },
  {
    id: 4,
    name: "Sunari Reference",
    description: "Studio reference 4-driver configuration for professional monitoring.",
    price: 799,
    images: [
      "/placeholder.svg?height=600&width=600&query=premium+in-ear+monitor+black+studio+reference+front+view",
      "/placeholder.svg?height=600&width=600&query=premium+in-ear+monitor+black+studio+reference+side+view",
      "/placeholder.svg?height=600&width=600&query=premium+in-ear+monitor+black+studio+reference+cable+view",
      "/placeholder.svg?height=600&width=600&query=premium+in-ear+monitor+black+studio+reference+case+view",
    ],
    category: "professional",
    features: [
      "4-driver configuration (all balanced armature)",
      "Frequency response: 10Hz - 30kHz",
      "Impedance: 38 ohms",
      "Sensitivity: 112dB/mW",
      "Detachable MMCX cable with silver-plated copper wires",
      "Flat frequency response for accurate monitoring",
      "Rugged carrying case included",
    ],
    specs: {
      "Driver Configuration": "4 balanced armature drivers",
      "Frequency Response": "10Hz - 30kHz",
      Impedance: "38 ohms",
      Sensitivity: "112dB/mW",
      THD: "<0.1% @ 1kHz",
      "Noise Isolation": "-26dB",
      Cable: "1.5m detachable MMCX, silver-plated copper",
      Connector: '3.5mm gold-plated with 1/4" adapter',
      Weight: "17g (without cable)",
    },
    inBox: [
      "Sunari Reference IEMs",
      "Silver-plated copper MMCX cable",
      "4 pairs of silicone ear tips (XS, S, M, L)",
      "3 pairs of memory foam ear tips (S, M, L)",
      "Rugged carrying case",
      "Cleaning tool",
      '1/4" adapter',
      "User manual and warranty card",
    ],
    stock: 12,
    status: "in-stock",
  },
  {
    id: 5,
    name: "Sunari Bass Pro",
    description: "Enhanced bass response with dual dynamic drivers for bass lovers.",
    price: 399,
    images: [
      "/placeholder.svg?height=600&width=600&query=premium+in-ear+monitor+black+with+red+accents+front+view",
      "/placeholder.svg?height=600&width=600&query=premium+in-ear+monitor+black+with+red+accents+side+view",
      "/placeholder.svg?height=600&width=600&query=premium+in-ear+monitor+black+with+red+accents+cable+view",
      "/placeholder.svg?height=600&width=600&query=premium+in-ear+monitor+black+with+red+accents+case+view",
    ],
    category: "audiophile",
    features: [
      "Dual dynamic driver configuration for enhanced bass",
      "Frequency response: 5Hz - 22kHz",
      "Impedance: 24 ohms",
      "Sensitivity: 107dB/mW",
      "Detachable MMCX cable",
      "Bass-focused tuning with punchy low end",
      "Carrying case included",
    ],
    specs: {
      "Driver Configuration": "2 dynamic drivers",
      "Frequency Response": "5Hz - 22kHz",
      Impedance: "24 ohms",
      Sensitivity: "107dB/mW",
      THD: "<0.2% @ 1kHz",
      "Noise Isolation": "-22dB",
      Cable: "1.2m detachable MMCX, OFC copper",
      Connector: "3.5mm gold-plated",
      Weight: "16g (without cable)",
    },
    inBox: [
      "Sunari Bass Pro IEMs",
      "OFC copper MMCX cable",
      "3 pairs of silicone ear tips (S, M, L)",
      "2 pairs of memory foam ear tips (M, L)",
      "Carrying case",
      "Cleaning tool",
      "User manual and warranty card",
    ],
    stock: 5,
    status: "low-stock",
  },
  {
    id: 6,
    name: "Sunari Custom Pro",
    description: "Custom-molded professional IEM with 6-driver configuration.",
    price: 1299,
    images: [
      "/placeholder.svg?height=600&width=600&query=custom+molded+in-ear+monitor+professional+front+view",
      "/placeholder.svg?height=600&width=600&query=custom+molded+in-ear+monitor+professional+side+view",
      "/placeholder.svg?height=600&width=600&query=custom+molded+in-ear+monitor+professional+cable+view",
      "/placeholder.svg?height=600&width=600&query=custom+molded+in-ear+monitor+professional+case+view",
    ],
    category: "custom",
    features: [
      "6-driver hybrid configuration (2 dynamic + 4 balanced armature)",
      "Custom-molded to your ear impressions",
      "Frequency response: 5Hz - 40kHz",
      "Impedance: 36 ohms",
      "Sensitivity: 114dB/mW",
      "Detachable MMCX cable with premium silver-plated copper wires",
      "Premium leather carrying case included",
    ],
    specs: {
      "Driver Configuration": "2 dynamic drivers + 4 balanced armature drivers",
      "Frequency Response": "5Hz - 40kHz",
      Impedance: "36 ohms",
      Sensitivity: "114dB/mW",
      THD: "<0.1% @ 1kHz",
      "Noise Isolation": "-30dB",
      Cable: "1.5m detachable MMCX, silver-plated copper",
      Connector: '3.5mm gold-plated with 1/4" adapter',
      Weight: "18g (without cable)",
    },
    inBox: [
      "Sunari Custom Pro IEMs",
      "Premium silver-plated copper MMCX cable",
      "Premium leather carrying case",
      "Cleaning tool",
      '1/4" adapter',
      "User manual and warranty card",
    ],
    stock: 15,
    status: "in-stock",
  },
  {
    id: 7,
    name: "Sunari Custom Lite",
    description: "Entry-level custom-molded IEM with 3-driver configuration.",
    price: 699,
    images: [
      "/placeholder.svg?height=600&width=600&query=custom+molded+in-ear+monitor+basic+front+view",
      "/placeholder.svg?height=600&width=600&query=custom+molded+in-ear+monitor+basic+side+view",
      "/placeholder.svg?height=600&width=600&query=custom+molded+in-ear+monitor+basic+cable+view",
      "/placeholder.svg?height=600&width=600&query=custom+molded+in-ear+monitor+basic+case+view",
    ],
    category: "custom",
    features: [
      "3-driver configuration (1 dynamic + 2 balanced armature)",
      "Custom-molded to your ear impressions",
      "Frequency response: 20Hz - 20kHz",
      "Impedance: 32 ohms",
      "Sensitivity: 108dB/mW",
      "Detachable MMCX cable",
      "Carrying case included",
    ],
    specs: {
      "Driver Configuration": "1 dynamic driver + 2 balanced armature drivers",
      "Frequency Response": "20Hz - 20kHz",
      Impedance: "32 ohms",
      Sensitivity: "108dB/mW",
      THD: "<0.2% @ 1kHz",
      "Noise Isolation": "-28dB",
      Cable: "1.2m detachable MMCX, OFC copper",
      Connector: "3.5mm gold-plated",
      Weight: "16g (without cable)",
    },
    inBox: [
      "Sunari Custom Lite IEMs",
      "OFC copper MMCX cable",
      "Carrying case",
      "Cleaning tool",
      "User manual and warranty card",
    ],
    stock: 8,
    status: "in-stock",
  },
  {
    id: 8,
    name: "Premium MMCX Cable",
    description: "Silver-plated copper cable with MMCX connectors for enhanced audio quality.",
    price: 149,
    images: [
      "/placeholder.svg?height=600&width=600&query=premium+audio+cable+silver+plated+mmcx+front+view",
      "/placeholder.svg?height=600&width=600&query=premium+audio+cable+silver+plated+mmcx+coiled+view",
      "/placeholder.svg?height=600&width=600&query=premium+audio+cable+silver+plated+mmcx+connector+view",
      "/placeholder.svg?height=600&width=600&query=premium+audio+cable+silver+plated+mmcx+packaging+view",
    ],
    category: "accessories",
    features: [
      "Silver-plated copper conductors",
      "MMCX connectors compatible with all Sunari IEMs",
      "1.2m length",
      "3.5mm gold-plated connector",
      "Braided design for durability",
      "Low microphonics",
    ],
    specs: {
      "Cable Material": "Silver-plated copper",
      "Cable Length": "1.2m",
      "Connector Type": "MMCX to 3.5mm",
      "Conductor Count": "8 strands",
      Impedance: "0.8 ohms",
      Weight: "28g",
    },
    inBox: ["Premium MMCX Cable", "Cable clip", "Leather cable wrap", "Storage pouch"],
    stock: 32,
    status: "in-stock",
  },
  {
    id: 9,
    name: "Leather Carrying Case",
    description: "Premium leather case with custom foam insert for IEM protection.",
    price: 79,
    images: [
      "/placeholder.svg?height=600&width=600&query=premium+leather+headphone+case+closed+view",
      "/placeholder.svg?height=600&width=600&query=premium+leather+headphone+case+open+view",
      "/placeholder.svg?height=600&width=600&query=premium+leather+headphone+case+with+iems+view",
      "/placeholder.svg?height=600&width=600&query=premium+leather+headphone+case+detail+view",
    ],
    category: "accessories",
    features: [
      "Genuine leather exterior",
      "Custom foam insert for secure storage",
      "Magnetic closure",
      "Compact design for portability",
      "Cable compartment",
      "Accessory pocket",
    ],
    specs: {
      Material: "Genuine leather exterior, microfiber interior",
      Dimensions: "12cm x 8cm x 4cm",
      Weight: "120g",
      Color: "Black with amber stitching",
    },
    inBox: ["Leather Carrying Case", "Microfiber cleaning cloth"],
    stock: 25,
    status: "in-stock",
  },
  {
    id: 10,
    name: "Sunari Wireless Adapter",
    description: "Bluetooth adapter for wired IEMs with MMCX connectors.",
    price: 129,
    images: [
      "/placeholder.svg?height=600&width=600&query=bluetooth+adapter+for+headphones+premium+front+view",
      "/placeholder.svg?height=600&width=600&query=bluetooth+adapter+for+headphones+premium+side+view",
      "/placeholder.svg?height=600&width=600&query=bluetooth+adapter+for+headphones+premium+connector+view",
      "/placeholder.svg?height=600&width=600&query=bluetooth+adapter+for+headphones+premium+case+view",
    ],
    category: "accessories",
    features: [
      "Bluetooth 5.2 with aptX HD and LDAC support",
      "MMCX connectors compatible with all Sunari IEMs",
      "8-hour battery life",
      "IPX4 water resistance",
      "Built-in microphone for calls",
      "Compact and lightweight design",
    ],
    specs: {
      "Bluetooth Version": "5.2",
      "Supported Codecs": "SBC, AAC, aptX, aptX HD, LDAC",
      "Battery Life": "8 hours",
      Charging: "USB-C",
      "Water Resistance": "IPX4",
      Weight: "18g",
    },
    inBox: ["Sunari Wireless Adapter", "USB-C charging cable", "Carrying pouch", "User manual"],
    stock: 20,
    status: "in-stock",
  },
  {
    id: 11,
    name: "Sunari Elite",
    description: "Flagship 7-driver hybrid configuration with premium materials.",
    price: 1499,
    images: [
      "/placeholder.svg?height=600&width=600&query=premium+flagship+in-ear+monitor+luxury+front+view",
      "/placeholder.svg?height=600&width=600&query=premium+flagship+in-ear+monitor+luxury+side+view",
      "/placeholder.svg?height=600&width=600&query=premium+flagship+in-ear+monitor+luxury+cable+view",
      "/placeholder.svg?height=600&width=600&query=premium+flagship+in-ear+monitor+luxury+case+view",
    ],
    category: "professional",
    features: [
      "7-driver hybrid configuration (1 dynamic + 6 balanced armature)",
      "Frequency response: 5Hz - 40kHz",
      "Impedance: 42 ohms",
      "Sensitivity: 115dB/mW",
      "Premium silver-plated copper MMCX cable",
      "Titanium shell with carbon fiber faceplate",
      "Premium leather carrying case included",
    ],
    specs: {
      "Driver Configuration": "1 dynamic driver + 6 balanced armature drivers",
      "Frequency Response": "5Hz - 40kHz",
      Impedance: "42 ohms",
      Sensitivity: "115dB/mW",
      THD: "<0.08% @ 1kHz",
      "Noise Isolation": "-28dB",
      Cable: "1.5m detachable MMCX, premium silver-plated copper",
      Connector: "3.5mm gold-plated with 2.5mm and 4.4mm adapters",
      Weight: "20g (without cable)",
    },
    inBox: [
      "Sunari Elite IEMs",
      "Premium silver-plated copper MMCX cable",
      "3.5mm to 2.5mm balanced adapter",
      "3.5mm to 4.4mm balanced adapter",
      "6 pairs of silicone ear tips (XS, S, M, M+, L, L+)",
      "3 pairs of memory foam ear tips (S, M, L)",
      "Premium leather carrying case",
      "Cleaning tool",
      "User manual and warranty card",
    ],
    stock: 7,
    status: "in-stock",
  },
  {
    id: 12,
    name: "Foam Ear Tips Set",
    description: "Memory foam ear tips in multiple sizes for optimal fit and isolation.",
    price: 24.99,
    images: [
      "/placeholder.svg?height=600&width=600&query=memory+foam+ear+tips+for+in-ear+monitors+front+view",
      "/placeholder.svg?height=600&width=600&query=memory+foam+ear+tips+for+in-ear+monitors+side+view",
      "/placeholder.svg?height=600&width=600&query=memory+foam+ear+tips+for+in-ear+monitors+packaging+view",
      "/placeholder.svg?height=600&width=600&query=memory+foam+ear+tips+for+in-ear+monitors+on+iems+view",
    ],
    category: "accessories",
    features: [
      "Memory foam material for superior comfort and isolation",
      "3 pairs in different sizes (S, M, L)",
      "Compatible with all Sunari IEMs",
      "Slow-rebound foam for custom fit",
      "Enhanced bass response and isolation",
    ],
    specs: {
      Material: "Slow-rebound memory foam",
      "Sizes Included": "Small, Medium, Large",
      Color: "Black",
      Compatibility: "All Sunari IEMs and most standard IEMs",
    },
    inBox: ["3 pairs of memory foam ear tips (S, M, L)", "Storage case"],
    stock: 50,
    status: "in-stock",
  },
]

// Mock Collections
export const collections = [
  {
    id: "signature",
    title: "Signature Series",
    description: "Our flagship collection featuring the most advanced acoustic technology",
    image: "/placeholder.svg?key=06l9o",
    products: [1, 4, 11],
  },
  {
    id: "studio",
    title: "Studio Reference",
    description: "Designed for professional studio engineers and producers",
    image: "/placeholder.svg?key=9mbh3",
    products: [4, 6, 11],
  },
  {
    id: "performer",
    title: "Performer Series",
    description: "Created for live performance with enhanced durability and isolation",
    image: "/placeholder.svg?key=wytga",
    products: [1, 2, 4, 6, 7],
  },
  {
    id: "audiophile",
    title: "Audiophile Edition",
    description: "Tuned for the discerning listener who demands perfect audio reproduction",
    image: "/placeholder.svg?key=d2bxb",
    products: [2, 3, 5, 11],
  },
]

// Mock Orders
export const orders = [
  {
    id: "ORD-7192",
    customer: "Alex Johnson",
    email: "alex@example.com",
    product: "Sunari S1 Pro",
    date: new Date("2023-06-15"),
    amount: 999,
    status: "completed",
  },
  {
    id: "ORD-7193",
    customer: "Sarah Williams",
    email: "sarah@example.com",
    product: "Sunari Harmony",
    date: new Date("2023-06-14"),
    amount: 499,
    status: "processing",
  },
  {
    id: "ORD-7194",
    customer: "Michael Chen",
    email: "michael@example.com",
    product: "Sunari Reference",
    date: new Date("2023-06-14"),
    amount: 799,
    status: "shipped",
  },
  {
    id: "ORD-7195",
    customer: "Emily Davis",
    email: "emily@example.com",
    product: "Premium MMCX Cable",
    date: new Date("2023-06-13"),
    amount: 149,
    status: "cancelled",
  },
  {
    id: "ORD-7196",
    customer: "David Wilson",
    email: "david@example.com",
    product: "Sunari Custom Pro",
    date: new Date("2023-06-12"),
    amount: 1299,
    status: "completed",
  },
  {
    id: "ORD-7197",
    customer: "Jennifer Lee",
    email: "jennifer@example.com",
    product: "Sunari Elite",
    date: new Date("2023-06-11"),
    amount: 1499,
    status: "shipped",
  },
  {
    id: "ORD-7198",
    customer: "Robert Brown",
    email: "robert@example.com",
    product: "Leather Carrying Case",
    date: new Date("2023-06-10"),
    amount: 79,
    status: "completed",
  },
  {
    id: "ORD-7199",
    customer: "Lisa Garcia",
    email: "lisa@example.com",
    product: "Sunari Wireless Adapter",
    date: new Date("2023-06-09"),
    amount: 129,
    status: "processing",
  },
  {
    id: "ORD-7200",
    customer: "Kevin Martinez",
    email: "kevin@example.com",
    product: "Foam Ear Tips Set",
    date: new Date("2023-06-08"),
    amount: 24.99,
    status: "completed",
  },
]

// Mock Customers
export const customers = [
  {
    id: "CUST-1001",
    name: "Alex Johnson",
    email: "alex@example.com",
    status: "active",
    orders: 5,
    spent: 2499,
    lastOrder: new Date("2023-06-15"),
    image: "/placeholder.svg?key=llsuh",
  },
  {
    id: "CUST-1002",
    name: "Sarah Williams",
    email: "sarah@example.com",
    status: "active",
    orders: 3,
    spent: 1299,
    lastOrder: new Date("2023-06-14"),
    image: "/placeholder.svg?key=z71k9",
  },
  {
    id: "CUST-1003",
    name: "Michael Chen",
    email: "michael@example.com",
    status: "active",
    orders: 2,
    spent: 899,
    lastOrder: new Date("2023-06-14"),
    image: "/placeholder.svg?key=xg8cd",
  },
  {
    id: "CUST-1004",
    name: "Emily Davis",
    email: "emily@example.com",
    status: "inactive",
    orders: 1,
    spent: 149,
    lastOrder: new Date("2023-06-13"),
    image: "/placeholder.svg?key=nrxfq",
  },
  {
    id: "CUST-1005",
    name: "David Wilson",
    email: "david@example.com",
    status: "active",
    orders: 4,
    spent: 2199,
    lastOrder: new Date("2023-06-12"),
    image: "/placeholder.svg?key=xyc56",
  },
  {
    id: "CUST-1006",
    name: "Jennifer Lee",
    email: "jennifer@example.com",
    status: "active",
    orders: 2,
    spent: 1699,
    lastOrder: new Date("2023-06-11"),
    image: "/placeholder.svg?key=llsuh",
  },
  {
    id: "CUST-1007",
    name: "Robert Brown",
    email: "robert@example.com",
    status: "new",
    orders: 1,
    spent: 79,
    lastOrder: new Date("2023-06-10"),
    image: "/placeholder.svg?key=z71k9",
  },
]

// Mock Reviews
export const reviews = [
  {
    id: 1,
    productId: 1,
    name: "Alex Johnson",
    role: "Sound Engineer",
    rating: 5,
    date: "March 15, 2023",
    comment:
      "The clarity and detail in these IEMs is absolutely stunning. As a professional sound engineer, I can hear nuances in my mixes that I've never noticed before.",
  },
  {
    id: 2,
    productId: 1,
    name: "Sarah Williams",
    role: "Professional Musician",
    rating: 5,
    date: "February 3, 2023",
    comment:
      "I've been using these for live performances and studio work. The isolation is perfect and the sound reproduction is incredibly accurate. Worth every penny.",
  },
  {
    id: 3,
    productId: 1,
    name: "Michael Chen",
    role: "Audiophile",
    rating: 4,
    date: "January 20, 2023",
    comment:
      "Exceptional sound quality with incredible detail. The bass response is tight and controlled. My only minor complaint is that the cable could be slightly longer.",
  },
  {
    id: 4,
    productId: 2,
    name: "Emily Davis",
    role: "Music Producer",
    rating: 5,
    date: "April 5, 2023",
    comment:
      "The Sunari Harmony has become my go-to IEM for both critical listening and everyday use. The midrange clarity is unmatched at this price point.",
  },
  {
    id: 5,
    productId: 2,
    name: "David Wilson",
    role: "Audio Enthusiast",
    rating: 4,
    date: "March 22, 2023",
    comment:
      "Great balance across the frequency spectrum. Very comfortable for long listening sessions. Highly recommended for anyone looking for a high-quality IEM.",
  },
  {
    id: 6,
    productId: 4,
    name: "Jennifer Lee",
    role: "Recording Engineer",
    rating: 5,
    date: "February 18, 2023",
    comment:
      "These IEMs have completely transformed my monitoring workflow. The accuracy and detail retrieval are exceptional, making mixing decisions much easier.",
  },
  {
    id: 7,
    productId: 11,
    name: "Robert Brown",
    role: "Professional DJ",
    rating: 5,
    date: "May 10, 2023",
    comment:
      "The Sunari Elite is simply the best IEM I've ever used. The soundstage is incredibly wide, and the detail retrieval is phenomenal. Worth every penny of the premium price.",
  },
]

// Mock FAQs
export const faqs = [
  {
    question: "How do I choose the right IEMs for my needs?",
    answer:
      "Consider your primary use case (professional monitoring, audiophile listening, etc.), preferred sound signature, and budget. Our Professional Series is ideal for studio work, while our Audiophile Series is tuned for music enjoyment. For personalized recommendations, contact our support team.",
  },
  {
    question: "What's the difference between custom and universal fit IEMs?",
    answer:
      "Universal fit IEMs come with various ear tip options and fit most ear shapes. Custom fit IEMs are made from impressions of your ears for perfect fit, superior isolation, and comfort during extended use. Custom models typically offer better bass response and isolation due to the perfect seal.",
  },
  {
    question: "How do I care for my Sunari IEMs?",
    answer:
      "Clean your IEMs regularly with the provided cleaning tool. Store them in the protective case when not in use. Keep them away from extreme temperatures and humidity. Replace ear tips when they show signs of wear. For cable maintenance, wipe with a soft, dry cloth and avoid sharp bends.",
  },
  {
    question: "What is your warranty policy?",
    answer:
      "All Sunari products come with a 2-year limited warranty covering manufacturing defects. Custom fit models include a 30-day fit guarantee. The warranty does not cover damage from misuse, accidents, or unauthorized repairs. Extended warranty options are available at checkout.",
  },
  {
    question: "How do I get my ears scanned for custom IEMs?",
    answer:
      "You can visit one of our partner audiologists for a professional ear impression, or use our at-home impression kit. For select locations, we offer digital ear scanning at our experience centers. Contact our support team to find the nearest location or to order an impression kit.",
  },
  {
    question: "What's the typical production time for custom IEMs?",
    answer:
      "Standard production time for custom IEMs is 2-3 weeks from when we receive your ear impressions. Rush orders can be completed in 7-10 business days for an additional fee. You'll receive tracking information once your order ships.",
  },
]

// Mock Users for Authentication
export const users = [
  {
    id: "user-1",
    name: "Admin User",
    email: "admin@sunari.com",
    password: "$2a$10$GQH.xZm5HVhvQO6p6IgdIewiUiZ5XlYR.DIK/Cf5YWTYZxW0iCXcW", // password123
    role: "ADMIN",
    image: "/placeholder.svg?key=llsuh",
  },
  {
    id: "user-2",
    name: "Customer User",
    email: "customer@example.com",
    password: "$2a$10$GQH.xZm5HVhvQO6p6IgdIewiUiZ5XlYR.DIK/Cf5YWTYZxW0iCXcW", // password123
    role: "USER",
    image: "/placeholder.svg?key=z71k9",
  },
]

// Helper function to get product by ID
export function getProductById(id: number) {
  return products.find((product) => product.id === id)
}

// Helper function to get products by category
export function getProductsByCategory(category: string) {
  return products.filter((product) => product.category === category)
}

// Helper function to get products by collection
export function getProductsByCollection(collectionId: string) {
  const collection = collections.find((c) => c.id === collectionId)
  if (!collection) return []
  return collection.products.map((id) => getProductById(Number(id))).filter(Boolean)
}

// Helper function to get reviews by product ID
export function getReviewsByProductId(productId: number) {
  return reviews.filter((review) => review.productId === productId)
}

// Helper function to simulate authentication
export function authenticateUser(email: string, password: string) {
  // In a real app, you would hash the password and compare it
  // For this mock, we'll just check if the email exists
  const user = users.find((user) => user.email === email)
  if (!user) return null

  // In a real app, you would verify the password hash
  // For this mock, we'll just return the user
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    image: user.image,
  }
}
