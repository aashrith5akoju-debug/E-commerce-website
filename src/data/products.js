// KINETIC ARCHIVE // High-End Indian Lifestyle & Tech Atelier
// 68 Curated Specimens (Exactly 4 items per subcategory across 17 subcategories)
export const ARCHIVE_FALLBACK_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='1000' viewBox='0 0 800 1000' fill='%23F0EFEA'%3E%3Crect width='800' height='1000' fill='%23F0EFEA'/%3E%3Cpath d='M0 0l800 1000M800 0L0 1000' stroke='%23E2E0D8' stroke-width='1'/%3E%3Ctext x='50%25' y='48%25' font-family='monospace' font-size='14' letter-spacing='0.2em' fill='%23121316' text-anchor='middle' font-weight='bold'%3EKINETIC ARCHIVE%3C/text%3E%3Ctext x='50%25' y='52%25' font-family='monospace' font-size='11' letter-spacing='0.15em' fill='%237A7870' text-anchor='middle'%3EATELIER SPECIMEN RESERVED%3C/text%3E%3C/svg%3E";

const APPAREL_SIZES = ["S", "M", "L", "XL", "XXL"];
const MEN_SHOE_SIZES = ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11"];
const WOMEN_SHOE_SIZES = ["UK 4", "UK 5", "UK 6", "UK 7", "UK 8"];
const SAREE_SPECS = ["Standard 5.5m + 0.8m Blouse Piece"];
const APPLIANCE_SPECS = ["Standard Unit // 2-Yr BIS Warranty"];

// ----------------------------------------------------------------------
// 1. WOMEN'S ATELIER (department: 'women') - Exactly 24 Unique Items
// ----------------------------------------------------------------------
export const WOMEN_PRODUCTS = [
  {
    "id": "ka-w-sar-01",
    "name": "Banarasi Katan Silk Handloom Saree",
    "department": "women",
    "gender": "women",
    "category": "sarees",
    "subCategory": "sarees",
    "mrp": 16999,
    "price": 8499,
    "sizes": [
      "Standard 5.5m + 0.8m Blouse Piece"
    ],
    "color": "Imperial Crimson",
    "stock": 7,
    "scarcity": 2,
    "scarcityLabel": "Only 2 drapes in vault",
    "weight": "780g Pure Mulberry Katan Silk",
    "origin": "Varanasi Silk Guild, Uttar Pradesh",
    "description": "Masterwork handloom saree woven with certified pure mulberry katan silk yarn and genuine golden zari floral jaal across the pallu and borders.",
    "craftsmanship": "Hand-loomed over 38 days on traditional pit looms with kadhwa zari motifs.",
    "careInstructions": "Strictly dry clean only. Preserve wrapped in pure cotton muslin.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/01",
    "image": "/images/products/women/sarees/saree-01.jpg",
    "costArchitecture": {
      "rawMaterials": 44,
      "artisanalAssembly": 32,
      "logistics": 10,
      "atelierMargin": 14,
      "notes": "Certified pure Mulberry silk filaments."
    },
    "title": "Banarasi Katan Silk Handloom Saree",
    "originalPrice": 16999,
    "discountPercent": 50,
    "subcategory": "sarees",
    "inStock": true,
    "images": [
      "/images/products/women/sarees/saree-01.jpg"
    ]
  },
  {
    "id": "ka-w-sar-02",
    "name": "Chanderi Tissue Zari Handloom Saree",
    "department": "women",
    "gender": "women",
    "category": "sarees",
    "subCategory": "sarees",
    "mrp": 9999,
    "price": 4999,
    "sizes": [
      "Standard 5.5m + 0.8m Blouse Piece"
    ],
    "color": "Champagne Gold",
    "stock": 9,
    "scarcity": 3,
    "scarcityLabel": "Only 3 pieces in reserve",
    "weight": "520g Silk Cotton Tissue",
    "origin": "Chanderi Handloom Heritage, Madhya Pradesh",
    "description": "Sheer, iridescent Chanderi tissue drape interwoven with gossamer silk warp and fine zari weft featuring delicate ashrafi motifs.",
    "craftsmanship": "Interlocking warp technique woven by generational master weavers of Chanderi.",
    "careInstructions": "Dry clean only. Avoid spraying perfumes directly on metallic zari.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/02",
    "image": "/images/products/women/sarees/saree-02.jpg",
    "costArchitecture": {
      "rawMaterials": 40,
      "artisanalAssembly": 34,
      "logistics": 11,
      "atelierMargin": 15,
      "notes": "Fine gold and silver electroplated tissue zari."
    },
    "title": "Chanderi Tissue Zari Handloom Saree",
    "originalPrice": 9999,
    "discountPercent": 50,
    "subcategory": "sarees",
    "inStock": true,
    "images": [
      "/images/products/women/sarees/saree-02.jpg"
    ]
  },
  {
    "id": "ka-w-sar-03",
    "name": "Kanjeevaram Mulberry Temple Silk Saree",
    "department": "women",
    "gender": "women",
    "category": "sarees",
    "subCategory": "sarees",
    "mrp": 24999,
    "price": 12499,
    "sizes": [
      "Standard 5.5m + 0.8m Blouse Piece"
    ],
    "color": "Peacock Emerald",
    "stock": 5,
    "scarcity": 1,
    "scarcityLabel": "Final archive piece available",
    "weight": "920g Heavy South Indian Mulberry Silk",
    "origin": "Kanchipuram Silk Weavers Co-op, Tamil Nadu",
    "description": "Heirloom weight Kanjeevaram drape with traditional korvai contrast interlocking border, temple motifs, and rich petni pallu.",
    "craftsmanship": "Two-weaver synchronized shuttle technique with 3-ply twisted silk warp.",
    "careInstructions": "Professional dry clean only. Periodic air-drying in gentle shade recommended.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/03",
    "image": "/images/products/women/sarees/saree-03.jpg",
    "costArchitecture": {
      "rawMaterials": 48,
      "artisanalAssembly": 28,
      "logistics": 10,
      "atelierMargin": 14,
      "notes": "Tested high-micron pure silver zari."
    },
    "title": "Kanjeevaram Mulberry Temple Silk Saree",
    "originalPrice": 24999,
    "discountPercent": 50,
    "subcategory": "sarees",
    "inStock": true,
    "images": [
      "/images/products/women/sarees/saree-03.jpg"
    ]
  },
  {
    "id": "ka-w-sar-04",
    "name": "Tussar Handblock Printed Artisanal Saree",
    "department": "women",
    "gender": "women",
    "category": "sarees",
    "subCategory": "sarees",
    "mrp": 8499,
    "price": 4199,
    "sizes": [
      "Standard 5.5m + 0.8m Blouse Piece"
    ],
    "color": "Natural Desert Tussar",
    "stock": 8,
    "scarcity": 4,
    "scarcityLabel": "Only 4 pieces in archive",
    "weight": "580g Wild Forest Tussar Silk",
    "origin": "Bhagalpur Silk Atelier, Bihar",
    "description": "Textured wild tussar silk featuring earthy geometric vegetable-dye handblock prints with a charcoal woven zari selvedge.",
    "craftsmanship": "Carved teak wood blocks stamped with natural indigo, madder root, and iron rust dyes.",
    "careInstructions": "Dry clean recommended for first three washes.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/04",
    "image": "/images/products/women/sarees/saree-04.jpg",
    "costArchitecture": {
      "rawMaterials": 38,
      "artisanalAssembly": 36,
      "logistics": 12,
      "atelierMargin": 14,
      "notes": "Organic forest silk harvested without synthetic additives."
    },
    "title": "Tussar Handblock Printed Artisanal Saree",
    "originalPrice": 8499,
    "discountPercent": 51,
    "subcategory": "sarees",
    "inStock": true,
    "images": [
      "/images/products/women/sarees/saree-04.jpg"
    ]
  },
  {
    "id": "ka-w-kurt-01",
    "name": "Washed Mulmul Cotton A-Line Kurti",
    "department": "women",
    "gender": "women",
    "category": "shirts",
    "subCategory": "kurtis",
    "mrp": 2999,
    "price": 1499,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "color": "Ivory Ecru",
    "stock": 12,
    "scarcity": 3,
    "scarcityLabel": "Only 3 units remaining",
    "weight": "120 GSM Superfine Bengal Mulmul",
    "origin": "Santiniketan Weaver Guild, West Bengal",
    "description": "Featherlight breathable pure mulmul long tunic with high side slits, mother-of-pearl buttons, and a clean band collar.",
    "craftsmanship": "High thread-count mulmul finished with single-needle French interior seams.",
    "careInstructions": "Gentle cold hand wash. Drip dry in shade to preserve crisp handle.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/05",
    "image": "/images/products/women/kurtis/kurti-01.jpg",
    "costArchitecture": {
      "rawMaterials": 34,
      "artisanalAssembly": 36,
      "logistics": 14,
      "atelierMargin": 16,
      "notes": "Handwoven Bengal mulmul."
    },
    "title": "Washed Mulmul Cotton A-Line Kurti",
    "originalPrice": 2999,
    "discountPercent": 50,
    "subcategory": "kurtis",
    "inStock": true,
    "images": [
      "/images/products/women/kurtis/kurti-01.jpg"
    ]
  },
  {
    "id": "ka-w-kurt-02",
    "name": "Chikankari Hand-Embroidered Georgette Kurti",
    "department": "women",
    "gender": "women",
    "category": "shirts",
    "subCategory": "kurtis",
    "mrp": 4599,
    "price": 2299,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "color": "Sage Mineral",
    "stock": 9,
    "scarcity": 2,
    "scarcityLabel": "Only 2 pieces left in vault",
    "weight": "180 GSM Modal Georgette",
    "origin": "Lucknow Chikan Craft Center, Uttar Pradesh",
    "description": "Fine tonal hand-embroidery featuring authentic bakhiya (shadow work) and phanda floral clusters across yoke and cuffs.",
    "craftsmanship": "Artisanal hand needlework executed by women master artisans in old Lucknow.",
    "careInstructions": "Hand wash cold inside out or mild dry clean.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/06",
    "image": "/images/products/women/kurtis/kurti-02.jpg",
    "costArchitecture": {
      "rawMaterials": 30,
      "artisanalAssembly": 42,
      "logistics": 13,
      "atelierMargin": 15,
      "notes": "100% manual needlework."
    },
    "title": "Chikankari Hand-Embroidered Georgette Kurti",
    "originalPrice": 4599,
    "discountPercent": 50,
    "subcategory": "kurtis",
    "inStock": true,
    "images": [
      "/images/products/women/kurtis/kurti-02.jpg"
    ]
  },
  {
    "id": "ka-w-kurt-03",
    "name": "Ajrakh Hand-Block Printed Straight Kurti",
    "department": "women",
    "gender": "women",
    "category": "shirts",
    "subCategory": "kurtis",
    "mrp": 3299,
    "price": 1599,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "color": "Indigo Terracotta",
    "stock": 14,
    "scarcity": 5,
    "scarcityLabel": "Archival batch edition",
    "weight": "160 GSM Fine Cambric Cotton",
    "origin": "Kutch Artisan Collective, Gujarat",
    "description": "Straight architectural silhouette decorated with 16-stage resist-printed Ajrakh geometric star medallions in natural indigo and alizarin.",
    "craftsmanship": "Authentic river-washed natural resist printing with seasoned wooden hand blocks.",
    "careInstructions": "Wash separately in cold water with gentle liquid detergent.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/07",
    "image": "/images/products/women/kurtis/kurti-03.jpg",
    "costArchitecture": {
      "rawMaterials": 36,
      "artisanalAssembly": 34,
      "logistics": 14,
      "atelierMargin": 16,
      "notes": "Natural plant dyes without harmful chemicals."
    },
    "title": "Ajrakh Hand-Block Printed Straight Kurti",
    "originalPrice": 3299,
    "discountPercent": 52,
    "subcategory": "kurtis",
    "inStock": true,
    "images": [
      "/images/products/women/kurtis/kurti-03.jpg"
    ]
  },
  {
    "id": "ka-w-kurt-04",
    "name": "Khadi Handspun Anarkali Tunic Kurti",
    "department": "women",
    "gender": "women",
    "category": "shirts",
    "subCategory": "kurtis",
    "mrp": 3899,
    "price": 1899,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "color": "Raw Clay",
    "stock": 8,
    "scarcity": 3,
    "scarcityLabel": "Only 3 pieces in stock",
    "weight": "200 GSM Unbleached Desi Khadi",
    "origin": "Wardha Khadi Ashram, Maharashtra",
    "description": "Flared kalidar panel kurti constructed from high-twist desi khadi, structured with clean welt pockets and subtle raw selvedge accents.",
    "craftsmanship": "Hand-spun yarn woven on traditional amber charkha pit looms.",
    "careInstructions": "Gentle hand wash. Iron while damp for a structured crisp finish.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/08",
    "image": "/images/products/women/kurtis/kurti-04.jpg",
    "costArchitecture": {
      "rawMaterials": 40,
      "artisanalAssembly": 30,
      "logistics": 15,
      "atelierMargin": 15,
      "notes": "Certified zero-carbon handloom khadi."
    },
    "title": "Khadi Handspun Anarkali Tunic Kurti",
    "originalPrice": 3899,
    "discountPercent": 51,
    "subcategory": "kurtis",
    "inStock": true,
    "images": [
      "/images/products/women/kurtis/kurti-04.jpg"
    ]
  },
  {
    "id": "ka-w-drs-01",
    "name": "Tiered Organic Cotton Summer Maxi Dress",
    "department": "women",
    "gender": "women",
    "category": "dresses",
    "subCategory": "dresses",
    "mrp": 4999,
    "price": 2499,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "color": "Sunbleached Bone",
    "stock": 10,
    "scarcity": 2,
    "scarcityLabel": "Only 2 dresses in vault",
    "weight": "180 GSM GOTS Organic Voile",
    "origin": "Alwarpet Craft Studio, Chennai",
    "description": "Voluminous tiered floor-grazing maxi dress cut from organic cotton voile with gathered neck detail and discreet side seam pockets.",
    "craftsmanship": "French seams throughout with precision micro-pleating and adjustable shoulder ties.",
    "careInstructions": "Machine wash cold on delicate cycle. Hang to air dry in ambient breeze.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/09",
    "image": "/images/products/women/dresses/dress-01.jpg",
    "costArchitecture": {
      "rawMaterials": 35,
      "artisanalAssembly": 35,
      "logistics": 14,
      "atelierMargin": 16,
      "notes": "Rain-fed certified organic cotton."
    },
    "title": "Tiered Organic Cotton Summer Maxi Dress",
    "originalPrice": 4999,
    "discountPercent": 50,
    "subcategory": "dresses",
    "inStock": true,
    "images": [
      "/images/products/women/dresses/dress-01.jpg"
    ]
  },
  {
    "id": "ka-w-drs-02",
    "name": "Raw Silk Minimalist Evening Midi Dress",
    "department": "women",
    "gender": "women",
    "category": "dresses",
    "subCategory": "dresses",
    "mrp": 7999,
    "price": 3899,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "color": "Charcoal Slate",
    "stock": 6,
    "scarcity": 2,
    "scarcityLabel": "Only 2 pieces reserved",
    "weight": "260 GSM Slub Raw Silk",
    "origin": "Mehrauli Design Pavilion, New Delhi",
    "description": "Architectural sleeveless column dress with subtle back vent, boat neck silhouette, and hidden Japanese YKK invisible zipper.",
    "craftsmanship": "Precision drape cut on bias with silk habotai full interior lining.",
    "careInstructions": "Professional dry clean only.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/10",
    "image": "/images/products/women/dresses/dress-02.jpg",
    "costArchitecture": {
      "rawMaterials": 44,
      "artisanalAssembly": 28,
      "logistics": 12,
      "atelierMargin": 16,
      "notes": "Handwoven raw silk from Bengal guild."
    },
    "title": "Raw Silk Minimalist Evening Midi Dress",
    "originalPrice": 7999,
    "discountPercent": 51,
    "subcategory": "dresses",
    "inStock": true,
    "images": [
      "/images/products/women/dresses/dress-02.jpg"
    ]
  },
  {
    "id": "ka-w-drs-03",
    "name": "Botanical Block-Printed Wrap Sundress",
    "department": "women",
    "gender": "women",
    "category": "dresses",
    "subCategory": "dresses",
    "mrp": 4299,
    "price": 2099,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "color": "Rust Ochre",
    "stock": 11,
    "scarcity": 4,
    "scarcityLabel": "Only 4 pieces remaining",
    "weight": "190 GSM Breathable Fine Cotton Slub",
    "origin": "Amer Heritage Workshop, Jaipur",
    "description": "Classic crossover wrap dress secured with interior anchor ties and an exterior sash, decorated with bespoke botanical flora woodblock motifs.",
    "craftsmanship": "Baghru mud-resist block printing with natural pomegranate rind and madder root extracts.",
    "careInstructions": "Gentle cold cycle. Low tumble dry or shade hang.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/11",
    "image": "/images/products/women/dresses/dress-03.jpg",
    "costArchitecture": {
      "rawMaterials": 36,
      "artisanalAssembly": 34,
      "logistics": 14,
      "atelierMargin": 16,
      "notes": "Authentic Bagru artisan print."
    },
    "title": "Botanical Block-Printed Wrap Sundress",
    "originalPrice": 4299,
    "discountPercent": 51,
    "subcategory": "dresses",
    "inStock": true,
    "images": [
      "/images/products/women/dresses/dress-03.jpg"
    ]
  },
  {
    "id": "ka-w-drs-04",
    "name": "Structured Linen Architectural Shift Dress",
    "department": "women",
    "gender": "women",
    "category": "dresses",
    "subCategory": "dresses",
    "mrp": 5499,
    "price": 2699,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "color": "Parchment Tan",
    "stock": 8,
    "scarcity": 3,
    "scarcityLabel": "Only 3 pieces in stock",
    "weight": "280 GSM Heavy European Flax Linen",
    "origin": "Indiranagar Atelier Hub, Bengaluru",
    "description": "Clean cocoon shift silhouette with drop shoulders, angular patch pockets, and deep back slit engineered for effortless tropical movement.",
    "craftsmanship": "Washed Belgian flax tailored with bound seam construction and clean topstitch lines.",
    "careInstructions": "Machine wash cold. Steam lightly while damp.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/12",
    "image": "/images/products/women/dresses/dress-04.jpg",
    "costArchitecture": {
      "rawMaterials": 42,
      "artisanalAssembly": 30,
      "logistics": 12,
      "atelierMargin": 16,
      "notes": "Un-dyed naturally retted linen yarn."
    },
    "title": "Structured Linen Architectural Shift Dress",
    "originalPrice": 5499,
    "discountPercent": 51,
    "subcategory": "dresses",
    "inStock": true,
    "images": [
      "/images/products/women/dresses/dress-04.jpg"
    ]
  },
  {
    "id": "ka-w-top-01",
    "name": "Crisp Poplin Oversized Atelier Shirt",
    "department": "women",
    "gender": "women",
    "category": "shirts",
    "subCategory": "tops",
    "mrp": 3499,
    "price": 1699,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "color": "Optical White",
    "stock": 15,
    "scarcity": 4,
    "scarcityLabel": "Only 4 pieces in archive",
    "weight": "140 GSM Two-Ply Egyptian Giza Cotton",
    "origin": "Kala Ghoda Archival Vault, Mumbai",
    "description": "Sharply tailored oversized button-down with exaggerated spread collar, drop shoulders, and mother-of-pearl hardware.",
    "craftsmanship": "22 stitches per inch single-needle construction with reinforced double-ply yoke.",
    "careInstructions": "Machine wash cold. Crisp starch steam press for editorial aesthetic.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/13",
    "image": "/images/products/women/tops/top-01.jpg",
    "costArchitecture": {
      "rawMaterials": 38,
      "artisanalAssembly": 32,
      "logistics": 14,
      "atelierMargin": 16,
      "notes": "Compact yarn long-staple cotton poplin."
    },
    "title": "Crisp Poplin Oversized Atelier Shirt",
    "originalPrice": 3499,
    "discountPercent": 51,
    "subcategory": "tops",
    "inStock": true,
    "images": [
      "/images/products/women/tops/top-01.jpg"
    ]
  },
  {
    "id": "ka-w-top-02",
    "name": "Asymmetrical Handloom Drape Top",
    "department": "women",
    "gender": "women",
    "category": "shirts",
    "subCategory": "tops",
    "mrp": 2999,
    "price": 1449,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "color": "Oatmeal Melange",
    "stock": 12,
    "scarcity": 3,
    "scarcityLabel": "Only 3 pieces in stock",
    "weight": "170 GSM Handspun Cotton Slub",
    "origin": "Cochin Weavers Guild, Kerala",
    "description": "Modern kinetic wrap top with diagonal crossover front, side tie closure, and architectural high-low asymmetric hemline.",
    "craftsmanship": "Hand-spun natural slub yarn tailored with minimal zero-waste pattern drafting.",
    "careInstructions": "Hand wash cold. Dry flat in gentle shade.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/14",
    "image": "/images/products/women/tops/top-02.jpg",
    "costArchitecture": {
      "rawMaterials": 35,
      "artisanalAssembly": 34,
      "logistics": 15,
      "atelierMargin": 16,
      "notes": "Zero-waste artisanal cutting pattern."
    },
    "title": "Asymmetrical Handloom Drape Top",
    "originalPrice": 2999,
    "discountPercent": 52,
    "subcategory": "tops",
    "inStock": true,
    "images": [
      "/images/products/women/tops/top-02.jpg"
    ]
  },
  {
    "id": "ka-w-top-03",
    "name": "Raw Mulberry Silk Relaxed Button Blouse",
    "department": "women",
    "gender": "women",
    "category": "shirts",
    "subCategory": "tops",
    "mrp": 4999,
    "price": 2399,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "color": "Midnight Obsidian",
    "stock": 7,
    "scarcity": 2,
    "scarcityLabel": "Only 2 units remaining",
    "weight": "220 GSM Handloom Mulberry Silk",
    "origin": "Murshidabad Silk Guild, West Bengal",
    "description": "Fluid button-front blouse featuring an open camp collar, side slit vents, and natural smoked mother-of-pearl buttons.",
    "craftsmanship": "Woven on manual handlooms with unrefined textured silk threads.",
    "careInstructions": "Dry clean or ultra-mild cold silk hand rinse.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/15",
    "image": "/images/products/women/tops/top-03.jpg",
    "costArchitecture": {
      "rawMaterials": 45,
      "artisanalAssembly": 26,
      "logistics": 13,
      "atelierMargin": 16,
      "notes": "Cruelty-free ahimsa silk filature."
    },
    "title": "Raw Mulberry Silk Relaxed Button Blouse",
    "originalPrice": 4999,
    "discountPercent": 52,
    "subcategory": "tops",
    "inStock": true,
    "images": [
      "/images/products/women/tops/top-03.jpg"
    ]
  },
  {
    "id": "ka-w-top-04",
    "name": "Sheer Handwoven Organza Layering Top",
    "department": "women",
    "gender": "women",
    "category": "shirts",
    "subCategory": "tops",
    "mrp": 3699,
    "price": 1799,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "color": "Smoky Quartz",
    "stock": 8,
    "scarcity": 2,
    "scarcityLabel": "Only 2 specimens in vault",
    "weight": "95 GSM Pure Silk Organza",
    "origin": "Varanasi Atelier, Uttar Pradesh",
    "description": "Semi-translucent structured layering top with structured cap sleeves, minimal keyhole back, and hand-rolled edge hems.",
    "craftsmanship": "Ultra-fine silk filament organza with delicate French needlework seams.",
    "careInstructions": "Strictly dry clean.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/16",
    "image": "/images/products/women/tops/top-04.jpg",
    "costArchitecture": {
      "rawMaterials": 40,
      "artisanalAssembly": 32,
      "logistics": 12,
      "atelierMargin": 16,
      "notes": "Handloom silk organza weaving."
    },
    "title": "Sheer Handwoven Organza Layering Top",
    "originalPrice": 3699,
    "discountPercent": 51,
    "subcategory": "tops",
    "inStock": true,
    "images": [
      "/images/products/women/tops/top-04.jpg"
    ]
  },
  {
    "id": "ka-w-btm-01",
    "name": "Pleated Tussar Silk Wide-Leg Palazzo",
    "department": "women",
    "gender": "women",
    "category": "pants",
    "subCategory": "bottoms",
    "mrp": 4499,
    "price": 2199,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "color": "Natural Raw Silk Ecru",
    "stock": 9,
    "scarcity": 3,
    "scarcityLabel": "Only 3 pieces in stock",
    "weight": "260 GSM Tussar Silk Cotton",
    "origin": "Bhagalpur Atelier, Bihar",
    "description": "Flowing wide-leg palazzo pants with front knife pleats, elasticated back waistband, and deep side slant pockets.",
    "craftsmanship": "Tailored with blind hems, reinforced pocket bags, and clean interior overlocking.",
    "careInstructions": "Dry clean or gentle hand wash in cold water.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/17",
    "image": "/images/products/women/bottoms/bottom-01.jpg",
    "costArchitecture": {
      "rawMaterials": 40,
      "artisanalAssembly": 30,
      "logistics": 14,
      "atelierMargin": 16,
      "notes": "Breathable wild silk natural blend."
    },
    "title": "Pleated Tussar Silk Wide-Leg Palazzo",
    "originalPrice": 4499,
    "discountPercent": 51,
    "subcategory": "bottoms",
    "inStock": true,
    "images": [
      "/images/products/women/bottoms/bottom-01.jpg"
    ]
  },
  {
    "id": "ka-w-btm-02",
    "name": "Tailored High-Rise Linen Culottes",
    "department": "women",
    "gender": "women",
    "category": "pants",
    "subCategory": "bottoms",
    "mrp": 3999,
    "price": 1899,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "color": "Terracotta Earth",
    "stock": 11,
    "scarcity": 3,
    "scarcityLabel": "Only 3 units left",
    "weight": "260 GSM Washed Kerala Flax",
    "origin": "Cochin Guild, Kerala",
    "description": "Cropped wide-leg culottes with high-rise waist, double horn-button waistband closure, and tailored rear welt pockets.",
    "craftsmanship": "Pre-washed pure linen tailored with reinforced crotch gusset for all-day ease.",
    "careInstructions": "Machine wash cold. Line dry in ambient shade.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/18",
    "image": "/images/products/women/bottoms/bottom-02.jpg",
    "costArchitecture": {
      "rawMaterials": 38,
      "artisanalAssembly": 32,
      "logistics": 14,
      "atelierMargin": 16,
      "notes": "100% pure Kerala washed flax."
    },
    "title": "Tailored High-Rise Linen Culottes",
    "originalPrice": 3999,
    "discountPercent": 53,
    "subcategory": "bottoms",
    "inStock": true,
    "images": [
      "/images/products/women/bottoms/bottom-02.jpg"
    ]
  },
  {
    "id": "ka-w-btm-03",
    "name": "Structured Double-Cloth Cigarette Trousers",
    "department": "women",
    "gender": "women",
    "category": "pants",
    "subCategory": "bottoms",
    "mrp": 4299,
    "price": 1999,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "color": "Pitch Noir",
    "stock": 13,
    "scarcity": 4,
    "scarcityLabel": "Only 4 pieces remaining",
    "weight": "310 GSM Double-Woven Stretch Cotton",
    "origin": "Indiranagar Atelier Hub, Bengaluru",
    "description": "Slim ankle-length cigarette pants tailored with razor-sharp pressed front creases, bar-tacked pockets, and concealed zip fly.",
    "craftsmanship": "Precision architectural pattern with double-cloth stability and 2% elastane for contour retention.",
    "careInstructions": "Cold delicate cycle. Warm iron along front creases.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/19",
    "image": "/images/products/women/bottoms/bottom-03.jpg",
    "costArchitecture": {
      "rawMaterials": 36,
      "artisanalAssembly": 34,
      "logistics": 14,
      "atelierMargin": 16,
      "notes": "High-density Japanese compact twill."
    },
    "title": "Structured Double-Cloth Cigarette Trousers",
    "originalPrice": 4299,
    "discountPercent": 54,
    "subcategory": "bottoms",
    "inStock": true,
    "images": [
      "/images/products/women/bottoms/bottom-03.jpg"
    ]
  },
  {
    "id": "ka-w-btm-04",
    "name": "Relaxed Straight Organic Selvedge Jeans",
    "department": "women",
    "gender": "women",
    "category": "pants",
    "subCategory": "bottoms",
    "mrp": 4999,
    "price": 2399,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "color": "Vintage Indigo Wash",
    "stock": 8,
    "scarcity": 2,
    "scarcityLabel": "Only 2 pieces left in vault",
    "weight": "13.5oz Ring-Spun Shuttle Loom Denim",
    "origin": "Mehrauli Design Pavilion, New Delhi",
    "description": "Classic five-pocket straight jeans crafted from authentic shuttle-loom selvedge denim with pink ticker line along outseam.",
    "craftsmanship": "Hand-finished fading with pumice stone wash and custom solid brass tack buttons.",
    "careInstructions": "Wash inside out in cold water. Air dry to maintain denim structure.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/20",
    "image": "/images/products/women/bottoms/bottom-04.jpg",
    "costArchitecture": {
      "rawMaterials": 42,
      "artisanalAssembly": 28,
      "logistics": 14,
      "atelierMargin": 16,
      "notes": "Shuttle-loomed certified organic denim."
    },
    "title": "Relaxed Straight Organic Selvedge Jeans",
    "originalPrice": 4999,
    "discountPercent": 52,
    "subcategory": "bottoms",
    "inStock": true,
    "images": [
      "/images/products/women/bottoms/bottom-04.jpg"
    ]
  },
  {
    "id": "ka-w-sho-01",
    "name": "Minimalist Nappa Leather Flat Slides",
    "department": "women",
    "gender": "women",
    "category": "shoes",
    "subCategory": "footwear",
    "mrp": 3999,
    "price": 1899,
    "sizes": [
      "UK 4",
      "UK 5",
      "UK 6",
      "UK 7",
      "UK 8"
    ],
    "color": "Tuscan Tan",
    "stock": 10,
    "scarcity": 2,
    "scarcityLabel": "Only 2 pairs in size UK 6",
    "weight": "410g Full-Grain Italian Calf Nappa",
    "origin": "Ambur Tannery Cluster, Tamil Nadu",
    "description": "Ultra-minimalist two-strap slide constructed with buttery Italian calf nappa, padded memory foam footbed, and durable leather outsole.",
    "craftsmanship": "Hand-lasted with vegetable-tanned leather sole and beveled edges.",
    "careInstructions": "Wipe with soft damp cloth. Condition periodically with natural beeswax cream.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/21",
    "image": "/images/products/women/footwear/footwear-01.jpg",
    "costArchitecture": {
      "rawMaterials": 44,
      "artisanalAssembly": 30,
      "logistics": 12,
      "atelierMargin": 14,
      "notes": "LWG-certified gold-rated calf leather."
    },
    "title": "Minimalist Nappa Leather Flat Slides",
    "originalPrice": 3999,
    "discountPercent": 53,
    "subcategory": "footwear",
    "inStock": true,
    "images": [
      "/images/products/women/footwear/footwear-01.jpg"
    ]
  },
  {
    "id": "ka-w-sho-02",
    "name": "Ergonomic Molded Cork Footbed Mules",
    "department": "women",
    "gender": "women",
    "category": "shoes",
    "subCategory": "footwear",
    "mrp": 4499,
    "price": 2199,
    "sizes": [
      "UK 4",
      "UK 5",
      "UK 6",
      "UK 7",
      "UK 8"
    ],
    "color": "Camel Suede",
    "stock": 9,
    "scarcity": 3,
    "scarcityLabel": "Only 3 pairs remaining",
    "weight": "480g Natural Cork & Reversed Suede",
    "origin": "Kala Ghoda Archival Vault, Mumbai",
    "description": "Slip-on mule featuring an anatomically contoured natural cork footbed lined with soft suede and an EVA shock-absorbing outsole.",
    "craftsmanship": "Molded natural cork-latex matrix with suede upper and adjustable antiqued brass buckle.",
    "careInstructions": "Brush suede with dedicated brass suede brush.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/22",
    "image": "/images/products/women/footwear/footwear-02.jpg",
    "costArchitecture": {
      "rawMaterials": 40,
      "artisanalAssembly": 32,
      "logistics": 13,
      "atelierMargin": 15,
      "notes": "Sustainably harvested Portuguese cork."
    },
    "title": "Ergonomic Molded Cork Footbed Mules",
    "originalPrice": 4499,
    "discountPercent": 51,
    "subcategory": "footwear",
    "inStock": true,
    "images": [
      "/images/products/women/footwear/footwear-02.jpg"
    ]
  },
  {
    "id": "ka-w-sho-03",
    "name": "Handcrafted Canvas Minimal Court Sneakers",
    "department": "women",
    "gender": "women",
    "category": "shoes",
    "subCategory": "footwear",
    "mrp": 4999,
    "price": 2499,
    "sizes": [
      "UK 4",
      "UK 5",
      "UK 6",
      "UK 7",
      "UK 8"
    ],
    "color": "Chalk Off-White",
    "stock": 12,
    "scarcity": 4,
    "scarcityLabel": "Only 4 pairs in stock",
    "weight": "590g Heavy Duck Canvas & Natural Gum",
    "origin": "Indiranagar Atelier Hub, Bengaluru",
    "description": "Low-profile minimalist sneaker made with heavy 16oz duck canvas, vulcanized rubber foxing, and a natural crepe rubber outsole.",
    "craftsmanship": "Kiln-vulcanized assembly with reinforced toe cap and aluminum eyelets.",
    "careInstructions": "Spot clean canvas with mild sneaker shampoo and cold water.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/23",
    "image": "/images/products/women/footwear/footwear-03.jpg",
    "costArchitecture": {
      "rawMaterials": 36,
      "artisanalAssembly": 34,
      "logistics": 14,
      "atelierMargin": 16,
      "notes": "High-heat vulcanized natural tree rubber."
    },
    "title": "Handcrafted Canvas Minimal Court Sneakers",
    "originalPrice": 4999,
    "discountPercent": 50,
    "subcategory": "footwear",
    "inStock": true,
    "images": [
      "/images/products/women/footwear/footwear-03.jpg"
    ]
  },
  {
    "id": "ka-w-sho-04",
    "name": "Architectural Tonal Kolhapuri Platform Mules",
    "department": "women",
    "gender": "women",
    "category": "shoes",
    "subCategory": "footwear",
    "mrp": 4299,
    "price": 1999,
    "sizes": [
      "UK 4",
      "UK 5",
      "UK 6",
      "UK 7",
      "UK 8"
    ],
    "color": "Oiled Walnut",
    "stock": 7,
    "scarcity": 2,
    "scarcityLabel": "Only 2 pairs left in vault",
    "weight": "460g Hand-Burnished Buffalo Leather",
    "origin": "Kolhapur Craft Guild, Maharashtra",
    "description": "Contemporary reimagining of the heritage Kolhapuri sandal with braided leather toe loop, braided vamp strap, and elevated stacked leather heel.",
    "craftsmanship": "Hand-braided leather cords with traditional kanthi stitching and hand-waxed finish.",
    "careInstructions": "Condition with mustard oil or natural leather balm.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/24",
    "image": "/images/products/women/footwear/footwear-04.jpg",
    "costArchitecture": {
      "rawMaterials": 42,
      "artisanalAssembly": 32,
      "logistics": 12,
      "atelierMargin": 14,
      "notes": "Directly sourced Kolhapur artisan collective."
    },
    "title": "Architectural Tonal Kolhapuri Platform Mules",
    "originalPrice": 4299,
    "discountPercent": 54,
    "subcategory": "footwear",
    "inStock": true,
    "images": [
      "/images/products/women/footwear/footwear-04.jpg"
    ]
  }
];

// ----------------------------------------------------------------------
// 2. MEN'S ATELIER (department: 'men') - Exactly 24 Unique Items
// ----------------------------------------------------------------------
export const MEN_PRODUCTS = [
  {
    "id": "ka-m-kurt-01",
    "name": "Washed Kerala Linen Short Kurta",
    "department": "men",
    "gender": "men",
    "category": "shirts",
    "subCategory": "kurtas",
    "mrp": 3499,
    "price": 1699,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "color": "Bone White",
    "stock": 14,
    "scarcity": 3,
    "scarcityLabel": "Only 3 pieces in stock",
    "weight": "260 GSM Washed Kerala Linen",
    "origin": "Cochin Handloom Guild, Kerala",
    "description": "Breathable waist-length casual kurta crafted with genuine mother-of-pearl buttons and a clean structured mandarin collar.",
    "craftsmanship": "Single-needle tailoring at 22 stitches per inch with reinforced French side gussets.",
    "careInstructions": "Hand wash cold or gentle machine wash. Line dry in ambient shade.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/25",
    "image": "/images/products/men/kurtas/kurta-01.jpg",
    "costArchitecture": {
      "rawMaterials": 35,
      "artisanalAssembly": 30,
      "logistics": 15,
      "atelierMargin": 20,
      "notes": "GOTS-certified washed Kerala flax."
    },
    "title": "Washed Kerala Linen Short Kurta",
    "originalPrice": 3499,
    "discountPercent": 51,
    "subcategory": "kurtas",
    "inStock": true,
    "images": [
      "/images/products/men/kurtas/kurta-01.jpg"
    ]
  },
  {
    "id": "ka-m-kurt-02",
    "name": "Embroidered Raw Tussar Festive Kurta",
    "department": "men",
    "gender": "men",
    "category": "shirts",
    "subCategory": "kurtas",
    "mrp": 6499,
    "price": 3199,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "color": "Raw Ochre",
    "stock": 8,
    "scarcity": 2,
    "scarcityLabel": "Only 2 pieces left in vault",
    "weight": "300 GSM Bhagalpur Raw Silk",
    "origin": "Bhagalpur Silk Guild, Bihar",
    "description": "Artisanal hand-embroidered tonal threadwork across yoke and collar, tailored with a sharp architectural straight silhouette.",
    "craftsmanship": "Woven on traditional pit looms with natural unbleached tussar silk filaments.",
    "careInstructions": "Dry clean only. Store wrapped in breathable muslin cloth.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/26",
    "image": "/images/products/men/kurtas/kurta-02.jpg",
    "costArchitecture": {
      "rawMaterials": 42,
      "artisanalAssembly": 26,
      "logistics": 14,
      "atelierMargin": 18,
      "notes": "Handloom Tussar silk yarn."
    },
    "title": "Embroidered Raw Tussar Festive Kurta",
    "originalPrice": 6499,
    "discountPercent": 51,
    "subcategory": "kurtas",
    "inStock": true,
    "images": [
      "/images/products/men/kurtas/kurta-02.jpg"
    ]
  },
  {
    "id": "ka-m-kurt-03",
    "name": "Nehru Band-Collar Fine Cotton Kurta",
    "department": "men",
    "gender": "men",
    "category": "shirts",
    "subCategory": "kurtas",
    "mrp": 3899,
    "price": 1799,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "color": "Obsidian Black",
    "stock": 12,
    "scarcity": 4,
    "scarcityLabel": "Only 4 pieces remaining",
    "weight": "180 GSM Giza Satin-Weave Cotton",
    "origin": "Kala Ghoda Archival Vault, Mumbai",
    "description": "Contemporary hybrid kurta shirt featuring clean side slits, concealed placket, and a standing Nehru collar.",
    "craftsmanship": "Bound inner seams with zero raw edges, bar-tacked pockets, and horn buttons.",
    "careInstructions": "Machine wash cold. Warm iron while damp.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/27",
    "image": "/images/products/men/kurtas/kurta-03.jpg",
    "costArchitecture": {
      "rawMaterials": 38,
      "artisanalAssembly": 32,
      "logistics": 14,
      "atelierMargin": 16,
      "notes": "Double-ply compact yarn."
    },
    "title": "Nehru Band-Collar Fine Cotton Kurta",
    "originalPrice": 3899,
    "discountPercent": 54,
    "subcategory": "kurtas",
    "inStock": true,
    "images": [
      "/images/products/men/kurtas/kurta-03.jpg"
    ]
  },
  {
    "id": "ka-m-kurt-04",
    "name": "Hand-Spun Khadi Long Pathani Kurta",
    "department": "men",
    "gender": "men",
    "category": "shirts",
    "subCategory": "kurtas",
    "mrp": 4299,
    "price": 1999,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "color": "Slate Grey",
    "stock": 9,
    "scarcity": 2,
    "scarcityLabel": "Only 2 specimens in vault",
    "weight": "240 GSM Pure Desi Khadi",
    "origin": "Wardha Khadi Ashram, Maharashtra",
    "description": "Classic Pathani silhouette with structured chest flaps, epaulettes, curved hem, and side pockets in heavy hand-spun cotton.",
    "craftsmanship": "Authentic amber charkha hand-spun warp and weft with twin needle topstitching.",
    "careInstructions": "Gentle wash in cold water with liquid detergent.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/28",
    "image": "/images/products/men/kurtas/kurta-04.jpg",
    "costArchitecture": {
      "rawMaterials": 40,
      "artisanalAssembly": 30,
      "logistics": 14,
      "atelierMargin": 16,
      "notes": "Hand-spun non-chemical certified Khadi."
    },
    "title": "Hand-Spun Khadi Long Pathani Kurta",
    "originalPrice": 4299,
    "discountPercent": 54,
    "subcategory": "kurtas",
    "inStock": true,
    "images": [
      "/images/products/men/kurtas/kurta-04.jpg"
    ]
  },
  {
    "id": "ka-m-shrt-01",
    "name": "Stiff Kadak Poplin Double-Ply Shirt",
    "department": "men",
    "gender": "men",
    "category": "shirts",
    "subCategory": "shirts",
    "mrp": 3999,
    "price": 1899,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "color": "Kadak White",
    "stock": 16,
    "scarcity": 4,
    "scarcityLabel": "Only 4 pieces in archive",
    "weight": "140 GSM 120s Two-Ply Super-Starch Poplin",
    "origin": "Indiranagar Atelier Hub, Bengaluru",
    "description": "Iconic stiff 'Kadak' collar formal atelier shirt constructed with two-ply Egyptian cotton poplin and reinforced interlining.",
    "craftsmanship": "24 stitches per inch, German Wendler interlinings, and Australian mother-of-pearl buttons.",
    "careInstructions": "Starch wash and steam press at 160°C for signature Kadak finish.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/29",
    "image": "/images/products/men/shirts/shirt-01.jpg",
    "costArchitecture": {
      "rawMaterials": 42,
      "artisanalAssembly": 28,
      "logistics": 13,
      "atelierMargin": 17,
      "notes": "120/2 Egyptian Giza yarn."
    },
    "title": "Stiff Kadak Poplin Double-Ply Shirt",
    "originalPrice": 3999,
    "discountPercent": 53,
    "subcategory": "shirts",
    "inStock": true,
    "images": [
      "/images/products/men/shirts/shirt-01.jpg"
    ]
  },
  {
    "id": "ka-m-shrt-02",
    "name": "High-Thread English Spread Kadak Shirt",
    "department": "men",
    "gender": "men",
    "category": "shirts",
    "subCategory": "shirts",
    "mrp": 4499,
    "price": 2099,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "color": "Powder Sky Blue",
    "stock": 11,
    "scarcity": 2,
    "scarcityLabel": "Only 2 pieces left in vault",
    "weight": "150 GSM 140s Giza Long-Staple Twill",
    "origin": "Mehrauli Design Pavilion, New Delhi",
    "description": "Architectural wide English spread collar with removable brass collar stays, tailored in micro-herringbone luxury cotton twill.",
    "craftsmanship": "Split back yoke cut on bias for superior shoulder articulation.",
    "careInstructions": "Machine wash cold. High steam press with collar stiffeners removed.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/30",
    "image": "/images/products/men/shirts/shirt-02.jpg",
    "costArchitecture": {
      "rawMaterials": 45,
      "artisanalAssembly": 25,
      "logistics": 14,
      "atelierMargin": 16,
      "notes": "Imported long-staple Giza cotton."
    },
    "title": "High-Thread English Spread Kadak Shirt",
    "originalPrice": 4499,
    "discountPercent": 53,
    "subcategory": "shirts",
    "inStock": true,
    "images": [
      "/images/products/men/shirts/shirt-02.jpg"
    ]
  },
  {
    "id": "ka-m-shrt-03",
    "name": "100s Two-Ply Banker Stripe Kadak Shirt",
    "department": "men",
    "gender": "men",
    "category": "shirts",
    "subCategory": "shirts",
    "mrp": 4199,
    "price": 1999,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "color": "Navy & Chalk Stripe",
    "stock": 13,
    "scarcity": 3,
    "scarcityLabel": "Only 3 pieces in stock",
    "weight": "145 GSM 100s Egyptian Compact Yarn",
    "origin": "Kala Ghoda Archival Vault, Mumbai",
    "description": "Classic boardroom Bengal stripe pattern in a crisp structured silhouette with semi-cutaway collar and mitered single-button cuffs.",
    "craftsmanship": "Pattern-matched stripes at shoulder yoke and front button placket.",
    "careInstructions": "Machine wash cold. Line dry and iron on high heat.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/31",
    "image": "/images/products/men/shirts/shirt-03.jpg",
    "costArchitecture": {
      "rawMaterials": 40,
      "artisanalAssembly": 30,
      "logistics": 14,
      "atelierMargin": 16,
      "notes": "Yarn-dyed 100/2 compact cotton."
    },
    "title": "100s Two-Ply Banker Stripe Kadak Shirt",
    "originalPrice": 4199,
    "discountPercent": 52,
    "subcategory": "shirts",
    "inStock": true,
    "images": [
      "/images/products/men/shirts/shirt-03.jpg"
    ]
  },
  {
    "id": "ka-m-shrt-04",
    "name": "Heavy Oxford Weave Tailored Shirt",
    "department": "men",
    "gender": "men",
    "category": "shirts",
    "subCategory": "shirts",
    "mrp": 3799,
    "price": 1799,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "color": "Washed Olive",
    "stock": 10,
    "scarcity": 3,
    "scarcityLabel": "Only 3 pieces in stock",
    "weight": "220 GSM Pinpoint Oxford Cotton",
    "origin": "Alwarpet Craft Studio, Chennai",
    "description": "Substantial heavyweight Oxford cloth button-down with soft roll collar, locker loop, and box pleat for everyday versatility.",
    "craftsmanship": "Garment-washed for broken-in hand feel with heavy-duty thread and reinforced hem gussets.",
    "careInstructions": "Machine wash cold. Tumble dry low or air dry.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/32",
    "image": "/images/products/men/shirts/shirt-04.jpg",
    "costArchitecture": {
      "rawMaterials": 38,
      "artisanalAssembly": 32,
      "logistics": 14,
      "atelierMargin": 16,
      "notes": "Substantial 220 GSM Oxford cotton weave."
    },
    "title": "Heavy Oxford Weave Tailored Shirt",
    "originalPrice": 3799,
    "discountPercent": 53,
    "subcategory": "shirts",
    "inStock": true,
    "images": [
      "/images/products/men/shirts/shirt-04.jpg"
    ]
  },
  {
    "id": "ka-m-tee-01",
    "name": "320 GSM Heavyweight Drop-Shoulder Tee",
    "department": "men",
    "gender": "men",
    "category": "shirts",
    "subCategory": "t-shirts",
    "mrp": 2499,
    "price": 1199,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "color": "Washed Iron Black",
    "stock": 20,
    "scarcity": 5,
    "scarcityLabel": "Archival core specimen",
    "weight": "320 GSM Combed Ring-Spun Cotton",
    "origin": "Tirupur Knitwear Guild, Tamil Nadu",
    "description": "Ultra-heavyweight boxy streetwear t-shirt with relaxed drop shoulders, dense 1x1 ribbed collar, and blind-stitched hems.",
    "craftsmanship": "Pre-shrunk combed long-staple cotton jersey knitted on high-gauge circular machines.",
    "careInstructions": "Machine wash cold inside out. Reshape while damp.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/33",
    "image": "/images/products/men/t-shirts/tshirt-01.jpg",
    "costArchitecture": {
      "rawMaterials": 36,
      "artisanalAssembly": 30,
      "logistics": 16,
      "atelierMargin": 18,
      "notes": "High-density heavy jersey from Tirupur."
    },
    "title": "320 GSM Heavyweight Drop-Shoulder Tee",
    "originalPrice": 2499,
    "discountPercent": 52,
    "subcategory": "t-shirts",
    "inStock": true,
    "images": [
      "/images/products/men/t-shirts/tshirt-01.jpg"
    ]
  },
  {
    "id": "ka-m-tee-02",
    "name": "Mercerized Ribbed Knit Cotton Polo",
    "department": "men",
    "gender": "men",
    "category": "shirts",
    "subCategory": "t-shirts",
    "mrp": 3299,
    "price": 1599,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "color": "Deep Forest Pine",
    "stock": 12,
    "scarcity": 3,
    "scarcityLabel": "Only 3 pieces in stock",
    "weight": "240 GSM Double-Mercerized Egyptian Cotton",
    "origin": "Indiranagar Atelier Hub, Bengaluru",
    "description": "Refined knit polo featuring silky double-mercerized finish, buttonless Johnny collar, and fine ribbed cuffs and hem.",
    "craftsmanship": "Fully fashioned knit panels with seamless linked shoulder construction.",
    "careInstructions": "Hand wash cold or gentle machine cycle in a laundry bag.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/34",
    "image": "/images/products/men/t-shirts/tshirt-02.jpg",
    "costArchitecture": {
      "rawMaterials": 42,
      "artisanalAssembly": 26,
      "logistics": 14,
      "atelierMargin": 18,
      "notes": "Double-mercerized yarn with natural luster."
    },
    "title": "Mercerized Ribbed Knit Cotton Polo",
    "originalPrice": 3299,
    "discountPercent": 52,
    "subcategory": "t-shirts",
    "inStock": true,
    "images": [
      "/images/products/men/t-shirts/tshirt-02.jpg"
    ]
  },
  {
    "id": "ka-m-tee-03",
    "name": "Waffle Thermal Long-Sleeve Henley",
    "department": "men",
    "gender": "men",
    "category": "shirts",
    "subCategory": "t-shirts",
    "mrp": 2899,
    "price": 1399,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "color": "Oat Heather",
    "stock": 14,
    "scarcity": 3,
    "scarcityLabel": "Only 3 pieces in stock",
    "weight": "280 GSM Honeycomb Waffle Knit",
    "origin": "Ludhiana Knit Craft, Punjab",
    "description": "Architectural waffle-knit thermal henley with three-button corozo placket, flatlock seams, and snug ribbed wrist cuffs.",
    "craftsmanship": "Four-thread flatlock stitching to eliminate chafing during layered wear.",
    "careInstructions": "Cold wash. Lay flat to dry to maintain waffle honeycomb texture.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/35",
    "image": "/images/products/men/t-shirts/tshirt-03.jpg",
    "costArchitecture": {
      "rawMaterials": 38,
      "artisanalAssembly": 30,
      "logistics": 15,
      "atelierMargin": 17,
      "notes": "Heavy gauge waffle thermal knit."
    },
    "title": "Waffle Thermal Long-Sleeve Henley",
    "originalPrice": 2899,
    "discountPercent": 52,
    "subcategory": "t-shirts",
    "inStock": true,
    "images": [
      "/images/products/men/t-shirts/tshirt-03.jpg"
    ]
  },
  {
    "id": "ka-m-tee-04",
    "name": "Structured Boxy Combed Crewneck",
    "department": "men",
    "gender": "men",
    "category": "shirts",
    "subCategory": "t-shirts",
    "mrp": 2299,
    "price": 1099,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "color": "Chalk Cream",
    "stock": 18,
    "scarcity": 4,
    "scarcityLabel": "Only 4 pieces remaining",
    "weight": "260 GSM Bio-Washed Combed Cotton",
    "origin": "Tirupur Knitwear Guild, Tamil Nadu",
    "description": "Everyday luxury crewneck with architectural wider neck ribbing, square boxy torso, and clean twin-needle stitching.",
    "craftsmanship": "Bio-polished and silicone softened for zero pilling and smooth hand feel.",
    "careInstructions": "Machine wash cold. Tumble dry gentle.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/36",
    "image": "/images/products/men/t-shirts/tshirt-04.jpg",
    "costArchitecture": {
      "rawMaterials": 35,
      "artisanalAssembly": 32,
      "logistics": 15,
      "atelierMargin": 18,
      "notes": "100% pure combed Indian cotton."
    },
    "title": "Structured Boxy Combed Crewneck",
    "originalPrice": 2299,
    "discountPercent": 52,
    "subcategory": "t-shirts",
    "inStock": true,
    "images": [
      "/images/products/men/t-shirts/tshirt-04.jpg"
    ]
  },
  {
    "id": "ka-m-jean-01",
    "name": "14.5oz Raw Indigo Selvedge Denim",
    "department": "men",
    "gender": "men",
    "category": "pants",
    "subCategory": "jeans",
    "mrp": 6499,
    "price": 3199,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "color": "Deep Indigo Raw",
    "stock": 10,
    "scarcity": 2,
    "scarcityLabel": "Only 2 pairs in size 32",
    "weight": "14.5oz Shuttle-Loomed Selvedge Denim",
    "origin": "Ahmedabad Denim Mills, Gujarat",
    "description": "Unwashed rigid raw selvedge denim woven on vintage Toyoda shuttle looms with classic red ticker line and copper hardware.",
    "craftsmanship": "Union Special 43200G chain-stitched hems, hidden back pocket rivets, and vegetable-tanned leather patch.",
    "careInstructions": "Wear raw for 6 months before first cold soak. Hang dry.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/37",
    "image": "/images/products/men/jeans/jeans-01.jpg",
    "costArchitecture": {
      "rawMaterials": 44,
      "artisanalAssembly": 28,
      "logistics": 12,
      "atelierMargin": 16,
      "notes": "Vintage shuttle loom denim from Gujarat."
    },
    "title": "14.5oz Raw Indigo Selvedge Denim",
    "originalPrice": 6499,
    "discountPercent": 51,
    "subcategory": "jeans",
    "inStock": true,
    "images": [
      "/images/products/men/jeans/jeans-01.jpg"
    ]
  },
  {
    "id": "ka-m-jean-02",
    "name": "Vintage Tint 90s Straight-Fit Jeans",
    "department": "men",
    "gender": "men",
    "category": "pants",
    "subCategory": "jeans",
    "mrp": 4999,
    "price": 2399,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "color": "Vintage Tint Indigo",
    "stock": 12,
    "scarcity": 3,
    "scarcityLabel": "Only 3 pieces in stock",
    "weight": "13.5oz Ring-Spun Vintage Wash Cotton",
    "origin": "Mehrauli Design Pavilion, New Delhi",
    "description": "Relaxed 90s straight leg silhouette with subtle hand-whiskering, aged brass rivets, and classic medium rise.",
    "craftsmanship": "Eco-friendly ozone washed with authentic hand-scraped thigh fade patterns.",
    "careInstructions": "Machine wash cold inside out. Tumble dry low.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/38",
    "image": "/images/products/men/jeans/jeans-02.jpg",
    "costArchitecture": {
      "rawMaterials": 40,
      "artisanalAssembly": 30,
      "logistics": 14,
      "atelierMargin": 16,
      "notes": "Ozone wash reduces water consumption by 80%."
    },
    "title": "Vintage Tint 90s Straight-Fit Jeans",
    "originalPrice": 4999,
    "discountPercent": 52,
    "subcategory": "jeans",
    "inStock": true,
    "images": [
      "/images/products/men/jeans/jeans-02.jpg"
    ]
  },
  {
    "id": "ka-m-jean-03",
    "name": "Solid Pitch Black Skater Baggy Denim",
    "department": "men",
    "gender": "men",
    "category": "pants",
    "subCategory": "jeans",
    "mrp": 4799,
    "price": 2299,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "color": "Pitch Black",
    "stock": 14,
    "scarcity": 4,
    "scarcityLabel": "Only 4 pieces remaining",
    "weight": "13.8oz Sulfur Stay-Black Denim",
    "origin": "Kala Ghoda Archival Vault, Mumbai",
    "description": "Wide-leg skater cut denim treated with stay-black reactive sulfur dye to preserve intense jet black hue over 50+ washes.",
    "craftsmanship": "Reinforced belt loops, bar-tacked stress points, and matte black tonal hardware.",
    "careInstructions": "Cold wash with dark detergent. Dry inside out away from direct sunlight.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/39",
    "image": "/images/products/men/jeans/jeans-03.jpg",
    "costArchitecture": {
      "rawMaterials": 38,
      "artisanalAssembly": 32,
      "logistics": 14,
      "atelierMargin": 16,
      "notes": "Reactive stay-black sulfur dye formulation."
    },
    "title": "Solid Pitch Black Skater Baggy Denim",
    "originalPrice": 4799,
    "discountPercent": 52,
    "subcategory": "jeans",
    "inStock": true,
    "images": [
      "/images/products/men/jeans/jeans-03.jpg"
    ]
  },
  {
    "id": "ka-m-jean-04",
    "name": "Washed Mid-Blue Daily Relaxed Jeans",
    "department": "men",
    "gender": "men",
    "category": "pants",
    "subCategory": "jeans",
    "mrp": 4599,
    "price": 2199,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "color": "Mid-Blue Stonewash",
    "stock": 15,
    "scarcity": 3,
    "scarcityLabel": "Only 3 pieces left in vault",
    "weight": "13oz Stonewashed Organic Denim",
    "origin": "Ahmedabad Denim Mills, Gujarat",
    "description": "Versatile everyday relaxed fit jean featuring gentle stonewash, custom copper shank buttons, and deep durable front pocket bags.",
    "craftsmanship": "Authentic pumice stone wash and double-needle outseams.",
    "careInstructions": "Machine wash cold. Hang dry.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/40",
    "image": "/images/products/men/jeans/jeans-04.jpg",
    "costArchitecture": {
      "rawMaterials": 36,
      "artisanalAssembly": 34,
      "logistics": 14,
      "atelierMargin": 16,
      "notes": "Organic ring-spun cotton denim."
    },
    "title": "Washed Mid-Blue Daily Relaxed Jeans",
    "originalPrice": 4599,
    "discountPercent": 52,
    "subcategory": "jeans",
    "inStock": true,
    "images": [
      "/images/products/men/jeans/jeans-04.jpg"
    ]
  },
  {
    "id": "ka-m-jog-01",
    "name": "Ripstop Multi-Pocket Cargo Utility Joggers",
    "department": "men",
    "gender": "men",
    "category": "pants",
    "subCategory": "joggers",
    "mrp": 4299,
    "price": 2099,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "color": "Tactical Olive",
    "stock": 12,
    "scarcity": 2,
    "scarcityLabel": "Only 2 pairs in size L",
    "weight": "280 GSM Tactical Cotton-Nylon Ripstop",
    "origin": "Indiranagar Atelier Hub, Bengaluru",
    "description": "Engineered cargo joggers with six utilitarian bellow pockets, articulated knees, magnetic fidlock closures, and elastic toggle cuffs.",
    "craftsmanship": "Military-grade diamond ripstop weave with bartack reinforcement across all pocket stress corners.",
    "careInstructions": "Machine wash cold on delicate cycle. Fast air dry.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/41",
    "image": "/images/products/men/joggers/jogger-01.jpg",
    "costArchitecture": {
      "rawMaterials": 40,
      "artisanalAssembly": 32,
      "logistics": 13,
      "atelierMargin": 15,
      "notes": "High-tenacity cotton-nylon grid ripstop."
    },
    "title": "Ripstop Multi-Pocket Cargo Utility Joggers",
    "originalPrice": 4299,
    "discountPercent": 51,
    "subcategory": "joggers",
    "inStock": true,
    "images": [
      "/images/products/men/joggers/jogger-01.jpg"
    ]
  },
  {
    "id": "ka-m-jog-02",
    "name": "420 GSM French Terry Minimalist Joggers",
    "department": "men",
    "gender": "men",
    "category": "pants",
    "subCategory": "joggers",
    "mrp": 3699,
    "price": 1799,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "color": "Melange Grey",
    "stock": 16,
    "scarcity": 3,
    "scarcityLabel": "Only 3 pieces in stock",
    "weight": "420 GSM Unbrushed Loopback French Terry",
    "origin": "Tirupur Knitwear Guild, Tamil Nadu",
    "description": "Heavyweight lounge joggers with thick ribbed waistband, braided cotton drawcord with dipped metal aglets, and zip welt rear pocket.",
    "craftsmanship": "Combed cotton loopback fleece tailored with ergonomic inner thigh gusset.",
    "careInstructions": "Machine wash cold. Reshape and line dry.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/42",
    "image": "/images/products/men/joggers/jogger-02.jpg",
    "costArchitecture": {
      "rawMaterials": 38,
      "artisanalAssembly": 30,
      "logistics": 15,
      "atelierMargin": 17,
      "notes": "420 GSM loopback cotton terry."
    },
    "title": "420 GSM French Terry Minimalist Joggers",
    "originalPrice": 3699,
    "discountPercent": 51,
    "subcategory": "joggers",
    "inStock": true,
    "images": [
      "/images/products/men/joggers/jogger-02.jpg"
    ]
  },
  {
    "id": "ka-m-jog-03",
    "name": "Modular Tactical Drop-Crotch Trackpants",
    "department": "men",
    "gender": "men",
    "category": "pants",
    "subCategory": "joggers",
    "mrp": 4599,
    "price": 2199,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "color": "Stealth Black",
    "stock": 10,
    "scarcity": 2,
    "scarcityLabel": "Only 2 specimens in vault",
    "weight": "290 GSM Water-Repellent Stretch Dobby",
    "origin": "Jubilee Hills Tech Lab, Hyderabad",
    "description": "Technical drop-crotch track trousers featuring waterproof YKK Aquaguard zips, modular strap attachments, and tapered ankle silhouette.",
    "craftsmanship": "Laser-cut pocket flaps with heat-sealed taped waterproof seams.",
    "careInstructions": "Cold cycle. Do not iron directly on waterproof seam tape.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/43",
    "image": "/images/products/men/joggers/jogger-03.jpg",
    "costArchitecture": {
      "rawMaterials": 42,
      "artisanalAssembly": 30,
      "logistics": 13,
      "atelierMargin": 15,
      "notes": "DWR C6 water-repellent technical coating."
    },
    "title": "Modular Tactical Drop-Crotch Trackpants",
    "originalPrice": 4599,
    "discountPercent": 52,
    "subcategory": "joggers",
    "inStock": true,
    "images": [
      "/images/products/men/joggers/jogger-03.jpg"
    ]
  },
  {
    "id": "ka-m-jog-04",
    "name": "Water-Resistant Commuter Stretch Joggers",
    "department": "men",
    "gender": "men",
    "category": "pants",
    "subCategory": "joggers",
    "mrp": 3999,
    "price": 1899,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "color": "Graphite Charcoal",
    "stock": 14,
    "scarcity": 4,
    "scarcityLabel": "Only 4 units in stock",
    "weight": "260 GSM 4-Way Technical Spandex Blend",
    "origin": "Indiranagar Atelier Hub, Bengaluru",
    "description": "Clean hybrid commuter pant blending formal trouser aesthetics with jogger functionality: hidden zip card pocket and reflective ankle cuff trim.",
    "craftsmanship": "360-degree stretch fabric with stain and splash-resistant nanotech finish.",
    "careInstructions": "Machine wash cold. Dries quickly in 20 minutes.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/44",
    "image": "/images/products/men/joggers/jogger-04.jpg",
    "costArchitecture": {
      "rawMaterials": 39,
      "artisanalAssembly": 31,
      "logistics": 14,
      "atelierMargin": 16,
      "notes": "High recovery technical 4-way stretch weave."
    },
    "title": "Water-Resistant Commuter Stretch Joggers",
    "originalPrice": 3999,
    "discountPercent": 53,
    "subcategory": "joggers",
    "inStock": true,
    "images": [
      "/images/products/men/joggers/jogger-04.jpg"
    ]
  },
  {
    "id": "ka-m-sho-01",
    "name": "Wholecut Full-Grain Calfskin Oxford Shoes",
    "department": "men",
    "gender": "men",
    "category": "shoes",
    "subCategory": "footwear",
    "mrp": 8999,
    "price": 4499,
    "sizes": [
      "UK 6",
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10",
      "UK 11"
    ],
    "color": "Burnished Espresso",
    "stock": 8,
    "scarcity": 2,
    "scarcityLabel": "Only 2 pairs in UK 8",
    "weight": "890g Hand-Cut French Calfskin Leather",
    "origin": "Agra Master Shoemaker Guild, Uttar Pradesh",
    "description": "Crafted from a single flawless piece of full-grain French calfskin with closed five-eyelet lacing and hand-painted fiddleback leather sole.",
    "craftsmanship": "Goodyear welted by third-generation master artisans of Agra with channeled leather soles.",
    "careInstructions": "Polish with pure saphir carnauba wax. Keep with cedar shoe trees.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/45",
    "image": "/images/products/men/footwear/footwear-01.jpg",
    "costArchitecture": {
      "rawMaterials": 48,
      "artisanalAssembly": 28,
      "logistics": 11,
      "atelierMargin": 13,
      "notes": "Wholecut French calfskin with channeled welt."
    },
    "title": "Wholecut Full-Grain Calfskin Oxford Shoes",
    "originalPrice": 8999,
    "discountPercent": 50,
    "subcategory": "footwear",
    "inStock": true,
    "images": [
      "/images/products/men/footwear/footwear-01.jpg"
    ]
  },
  {
    "id": "ka-m-sho-02",
    "name": "Vibram Lug-Sole Hand-Welted Derby Shoes",
    "department": "men",
    "gender": "men",
    "category": "shoes",
    "subCategory": "footwear",
    "mrp": 7999,
    "price": 3899,
    "sizes": [
      "UK 6",
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10",
      "UK 11"
    ],
    "color": "Oxblood Cordovan Hue",
    "stock": 10,
    "scarcity": 2,
    "scarcityLabel": "Only 2 pairs in vault",
    "weight": "1150g Waxed Pull-Up Leather & Italian Vibram",
    "origin": "Ambur Tannery Cluster, Tamil Nadu",
    "description": "Rugged open-lace derby constructed with thick oily pull-up leather, Norwegian storm welt, and an authentic Italian Vibram commando lug sole.",
    "craftsmanship": "360-degree storm welt with wax-sealed water-resistant thread.",
    "careInstructions": "Wipe clean with horsehair brush. Apply dubbin wax seasonally.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/46",
    "image": "/images/products/men/footwear/footwear-02.jpg",
    "costArchitecture": {
      "rawMaterials": 44,
      "artisanalAssembly": 30,
      "logistics": 12,
      "atelierMargin": 14,
      "notes": "Genuine Vibram Italian commando rubber lug outsole."
    },
    "title": "Vibram Lug-Sole Hand-Welted Derby Shoes",
    "originalPrice": 7999,
    "discountPercent": 51,
    "subcategory": "footwear",
    "inStock": true,
    "images": [
      "/images/products/men/footwear/footwear-02.jpg"
    ]
  },
  {
    "id": "ka-m-sho-03",
    "name": "Goodyear-Welted Italian Suede Chelsea Boots",
    "department": "men",
    "gender": "men",
    "category": "shoes",
    "subCategory": "footwear",
    "mrp": 9499,
    "price": 4699,
    "sizes": [
      "UK 6",
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10",
      "UK 11"
    ],
    "color": "Snuff Suede",
    "stock": 7,
    "scarcity": 1,
    "scarcityLabel": "Final reserve pair available",
    "weight": "980g Water-Resistant Reverse Calf Suede",
    "origin": "Agra Master Shoemaker Guild, Uttar Pradesh",
    "description": "Refined Chelsea boot with tapered almond toe, heavy-duty elastic side gussets, woven pull tabs, and leather sole with rubber topy.",
    "craftsmanship": "Hand-lasted Goodyear welt construction with cork filler bed that molds to the wearer's foot.",
    "careInstructions": "Spray with nanotech suede protector. Clean with crepe suede eraser.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/47",
    "image": "/images/products/men/footwear/footwear-03.jpg",
    "costArchitecture": {
      "rawMaterials": 46,
      "artisanalAssembly": 28,
      "logistics": 12,
      "atelierMargin": 14,
      "notes": "Repello waterproof treated calf suede."
    },
    "title": "Goodyear-Welted Italian Suede Chelsea Boots",
    "originalPrice": 9499,
    "discountPercent": 51,
    "subcategory": "footwear",
    "inStock": true,
    "images": [
      "/images/products/men/footwear/footwear-03.jpg"
    ]
  },
  {
    "id": "ka-m-sho-04",
    "name": "Hand-Burnished Classic Horsebit Penny Loafers",
    "department": "men",
    "gender": "men",
    "category": "shoes",
    "subCategory": "footwear",
    "mrp": 7499,
    "price": 3599,
    "sizes": [
      "UK 6",
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10",
      "UK 11"
    ],
    "color": "Hand-Burnished Cognac",
    "stock": 11,
    "scarcity": 3,
    "scarcityLabel": "Only 3 pairs in stock",
    "weight": "820g Full-Grain Box Calf Leather",
    "origin": "Kala Ghoda Archival Vault, Mumbai",
    "description": "Timeless penny loafer with hand-stitched apron toe, antique brass horsebit bridge detail, and soft calfskin lining.",
    "craftsmanship": "Blake rapid stitch construction with stacked leather heel and non-slip rubber insert.",
    "careInstructions": "Use cedar shoe trees. Condition with neutral leather milk.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/48",
    "image": "/images/products/men/footwear/footwear-04.jpg",
    "costArchitecture": {
      "rawMaterials": 42,
      "artisanalAssembly": 32,
      "logistics": 12,
      "atelierMargin": 14,
      "notes": "Hand-antiqued crust leather with patina finish."
    },
    "title": "Hand-Burnished Classic Horsebit Penny Loafers",
    "originalPrice": 7499,
    "discountPercent": 52,
    "subcategory": "footwear",
    "inStock": true,
    "images": [
      "/images/products/men/footwear/footwear-04.jpg"
    ]
  }
];

// ----------------------------------------------------------------------
// 3. ELECTRONICS & APPLIANCES (department: 'electronics') - Exactly 20 Unique Items
// ----------------------------------------------------------------------
export const ELECTRONICS_PRODUCTS = [
  {
    "id": "ka-e-frg-01",
    "name": "Smart Inverter Multi-Door Frost Free Refrigerator 650L",
    "department": "electronics",
    "gender": "unisex",
    "category": "appliances",
    "subCategory": "refrigerators",
    "mrp": 119990,
    "price": 58990,
    "sizes": [
      "Standard Unit // 2-Yr BIS Warranty"
    ],
    "color": "Brushed Graphite Matte",
    "stock": 5,
    "scarcity": 2,
    "scarcityLabel": "Only 2 units remaining in warehouse",
    "weight": "98kg Heavy Inverter Steel Architecture",
    "origin": "Jubilee Hills Tech Lab, Hyderabad",
    "description": "Ultra-premium French door refrigerator equipped with Smart Inverter linear compressor, dual cooling zones, AI energy matrix, and convertible humidity crispers.",
    "craftsmanship": "High-grade 304 fingerprint-resistant matte stainless steel casing with precision vacuum insulation panels.",
    "careInstructions": "Clean exterior with micro-fiber cloth. Automatic frost-free self defrosting cycle.",
    "carbonOffset": "Bluedart Heavy Surface // 100% Certified Carbon-Neutral Freight",
    "aspect": "portrait",
    "edition": "ED-2026/49",
    "image": "/images/products/electronics/refrigerators/fridge-01.jpg",
    "costArchitecture": {
      "rawMaterials": 52,
      "artisanalAssembly": 20,
      "logistics": 16,
      "atelierMargin": 12,
      "notes": "BEE 5-Star rated linear compressor."
    },
    "title": "Smart Inverter Multi-Door Frost Free Refrigerator 650L",
    "originalPrice": 119990,
    "discountPercent": 51,
    "subcategory": "refrigerators",
    "inStock": true,
    "images": [
      "/images/products/electronics/refrigerators/fridge-01.jpg"
    ]
  },
  {
    "id": "ka-e-frg-02",
    "name": "Dual-Cooling Side-by-Side Smart Refrigerator 580L",
    "department": "electronics",
    "gender": "unisex",
    "category": "appliances",
    "subCategory": "refrigerators",
    "mrp": 94990,
    "price": 46990,
    "sizes": [
      "Standard Unit // 2-Yr BIS Warranty"
    ],
    "color": "Platinum Silver Metallic",
    "stock": 7,
    "scarcity": 3,
    "scarcityLabel": "Only 3 units in reserve",
    "weight": "89kg Stainless Alloy Composite",
    "origin": "Sriperumbudur Tech Zone, Tamil Nadu",
    "description": "Side-by-side refrigerator featuring Twin Cooling Plus technology, internal digital LED touch display, and Wi-Fi diagnostics app integration.",
    "craftsmanship": "Double evaporators ensuring zero odor transfer between freezer and fresh food compartments.",
    "careInstructions": "Replace deodorizing carbon filter annually. Wipe seals periodically.",
    "carbonOffset": "Bluedart Heavy Surface // 100% Certified Carbon-Neutral Freight",
    "aspect": "portrait",
    "edition": "ED-2026/50",
    "image": "/images/products/electronics/refrigerators/fridge-02.jpg",
    "costArchitecture": {
      "rawMaterials": 50,
      "artisanalAssembly": 22,
      "logistics": 16,
      "atelierMargin": 12,
      "notes": "Twin Cooling dual evaporator architecture."
    },
    "title": "Dual-Cooling Side-by-Side Smart Refrigerator 580L",
    "originalPrice": 94990,
    "discountPercent": 51,
    "subcategory": "refrigerators",
    "inStock": true,
    "images": [
      "/images/products/electronics/refrigerators/fridge-02.jpg"
    ]
  },
  {
    "id": "ka-e-frg-03",
    "name": "Triple-Zone French Door Refrigerator with Ice Maker 720L",
    "department": "electronics",
    "gender": "unisex",
    "category": "appliances",
    "subCategory": "refrigerators",
    "mrp": 149990,
    "price": 72990,
    "sizes": [
      "Standard Unit // 2-Yr BIS Warranty"
    ],
    "color": "Obsidian Black Glass",
    "stock": 4,
    "scarcity": 1,
    "scarcityLabel": "Final unit in southern dispatch",
    "weight": "112kg Architectural Tempered Glass & Steel",
    "origin": "Noida Electronics Corridor, Uttar Pradesh",
    "description": "Architectural monolithic triple-zone refrigerator featuring tempered glass exterior, automated crushed ice dispenser, and metal cooling interior ducting.",
    "craftsmanship": "Reinforced seamless glass panels with vacuum-deposited ceramic pigment.",
    "careInstructions": "Use water line filter for automatic ice maker. Glass cleaner for front facade.",
    "carbonOffset": "Bluedart Heavy Surface // 100% Certified Carbon-Neutral Freight",
    "aspect": "portrait",
    "edition": "ED-2026/51",
    "image": "/images/products/electronics/refrigerators/fridge-03.jpg",
    "costArchitecture": {
      "rawMaterials": 54,
      "artisanalAssembly": 18,
      "logistics": 16,
      "atelierMargin": 12,
      "notes": "Automated integrated Japanese ice maker module."
    },
    "title": "Triple-Zone French Door Refrigerator with Ice Maker 720L",
    "originalPrice": 149990,
    "discountPercent": 51,
    "subcategory": "refrigerators",
    "inStock": true,
    "images": [
      "/images/products/electronics/refrigerators/fridge-03.jpg"
    ]
  },
  {
    "id": "ka-e-frg-04",
    "name": "Brushed Steel Double Door Inverter Refrigerator 410L",
    "department": "electronics",
    "gender": "unisex",
    "category": "appliances",
    "subCategory": "refrigerators",
    "mrp": 59990,
    "price": 28990,
    "sizes": [
      "Standard Unit // 2-Yr BIS Warranty"
    ],
    "color": "Brushed Stainless Steel",
    "stock": 9,
    "scarcity": 3,
    "scarcityLabel": "Only 3 units remaining",
    "weight": "72kg Galvanized Steel Enclosure",
    "origin": "Pune Manufacturing Cluster, Maharashtra",
    "description": "Compact high-efficiency double door refrigerator featuring 5-star BEE energy rating, stabilizer-free operation (100V-300V), and toughened glass shelves.",
    "craftsmanship": "Deep freeze air shower vents with active bacteriostatic silver ions.",
    "careInstructions": "Defrost drain self-cleaning. Vacuum rear coil area once per year.",
    "carbonOffset": "Bluedart Heavy Surface // 100% Certified Carbon-Neutral Freight",
    "aspect": "portrait",
    "edition": "ED-2026/52",
    "image": "/images/products/electronics/refrigerators/fridge-04.jpg",
    "costArchitecture": {
      "rawMaterials": 48,
      "artisanalAssembly": 24,
      "logistics": 16,
      "atelierMargin": 12,
      "notes": "BEE 5-star certified low electricity consumption."
    },
    "title": "Brushed Steel Double Door Inverter Refrigerator 410L",
    "originalPrice": 59990,
    "discountPercent": 52,
    "subcategory": "refrigerators",
    "inStock": true,
    "images": [
      "/images/products/electronics/refrigerators/fridge-04.jpg"
    ]
  },
  {
    "id": "ka-e-wsh-01",
    "name": "AI Direct-Drive Front Load Washer-Dryer 9.0kg",
    "department": "electronics",
    "gender": "unisex",
    "category": "appliances",
    "subCategory": "washing-machines",
    "mrp": 64990,
    "price": 31990,
    "sizes": [
      "Standard Unit // 2-Yr BIS Warranty"
    ],
    "color": "Dark Titanium Metallic",
    "stock": 6,
    "scarcity": 2,
    "scarcityLabel": "Only 2 units in stock",
    "weight": "74kg High-Mass Counterweighted Steel",
    "origin": "Sriperumbudur Tech Zone, Tamil Nadu",
    "description": "Direct-drive front load washer and 6kg condenser dryer combo featuring AI fabric texture detection, 1400 RPM spin speed, and allergen steam wash.",
    "craftsmanship": "Beltless direct inverter motor coupled straight to laser-welded stainless steel drum.",
    "careInstructions": "Run tub-clean cycle every 30 wash cycles. Clean lint trap monthly.",
    "carbonOffset": "Bluedart Heavy Surface // 100% Certified Carbon-Neutral Freight",
    "aspect": "portrait",
    "edition": "ED-2026/53",
    "image": "/images/products/electronics/washing-machines/washing-01.jpg",
    "costArchitecture": {
      "rawMaterials": 50,
      "artisanalAssembly": 22,
      "logistics": 16,
      "atelierMargin": 12,
      "notes": "Direct-Drive inverter motor with 10-year warranty."
    },
    "title": "AI Direct-Drive Front Load Washer-Dryer 9.0kg",
    "originalPrice": 64990,
    "discountPercent": 51,
    "subcategory": "washing-machines",
    "inStock": true,
    "images": [
      "/images/products/electronics/washing-machines/washing-01.jpg"
    ]
  },
  {
    "id": "ka-e-wsh-02",
    "name": "Smart Inverter TurboWash Top Load Washer 8.5kg",
    "department": "electronics",
    "gender": "unisex",
    "category": "appliances",
    "subCategory": "washing-machines",
    "mrp": 38990,
    "price": 18990,
    "sizes": [
      "Standard Unit // 2-Yr BIS Warranty"
    ],
    "color": "Granite Grey",
    "stock": 8,
    "scarcity": 3,
    "scarcityLabel": "Only 3 units in archive",
    "weight": "46kg Rust-Proof PCM Cabinet",
    "origin": "Pune Manufacturing Cluster, Maharashtra",
    "description": "High-capacity top load washer with TurboWash 3D pulsating water streams, soft-close tempered glass lid, and smart diagnosis capability.",
    "craftsmanship": "Full stainless steel tub with anti-bacterial punch+3 pulsator.",
    "careInstructions": "Clean magic lint filters after heavy laundry loads.",
    "carbonOffset": "Bluedart Heavy Surface // 100% Certified Carbon-Neutral Freight",
    "aspect": "portrait",
    "edition": "ED-2026/54",
    "image": "/images/products/electronics/washing-machines/washing-02.jpg",
    "costArchitecture": {
      "rawMaterials": 46,
      "artisanalAssembly": 24,
      "logistics": 16,
      "atelierMargin": 14,
      "notes": "Smart Inverter motor with waterproof BMC casing."
    },
    "title": "Smart Inverter TurboWash Top Load Washer 8.5kg",
    "originalPrice": 38990,
    "discountPercent": 51,
    "subcategory": "washing-machines",
    "inStock": true,
    "images": [
      "/images/products/electronics/washing-machines/washing-02.jpg"
    ]
  },
  {
    "id": "ka-e-wsh-03",
    "name": "Steam Hygiene Direct Motion Front Load Washer 10.0kg",
    "department": "electronics",
    "gender": "unisex",
    "category": "appliances",
    "subCategory": "washing-machines",
    "mrp": 72990,
    "price": 35990,
    "sizes": [
      "Standard Unit // 2-Yr BIS Warranty"
    ],
    "color": "Pure Polar White",
    "stock": 5,
    "scarcity": 2,
    "scarcityLabel": "Only 2 machines left in vault",
    "weight": "78kg Laser-Seamed Drum Assembly",
    "origin": "Noida Electronics Corridor, Uttar Pradesh",
    "description": "Super-capacity 10kg front loader with 99.9% bacteria-eliminating steam hygiene cycle, pillow-drum friction reduction, and ultra-quiet 53dB operation.",
    "craftsmanship": "Laser seamless weld drum with antimicrobial gasket treatment.",
    "careInstructions": "Wipe door bellows after wash. Leave door ajar to dry drum.",
    "carbonOffset": "Bluedart Heavy Surface // 100% Certified Carbon-Neutral Freight",
    "aspect": "portrait",
    "edition": "ED-2026/55",
    "image": "/images/products/electronics/washing-machines/washing-03.jpg",
    "costArchitecture": {
      "rawMaterials": 52,
      "artisanalAssembly": 20,
      "logistics": 16,
      "atelierMargin": 12,
      "notes": "Anti-vibration liquid balancing rings."
    },
    "title": "Steam Hygiene Direct Motion Front Load Washer 10.0kg",
    "originalPrice": 72990,
    "discountPercent": 51,
    "subcategory": "washing-machines",
    "inStock": true,
    "images": [
      "/images/products/electronics/washing-machines/washing-03.jpg"
    ]
  },
  {
    "id": "ka-e-wsh-04",
    "name": "Industrial Heavy-Duty Dual Inverter Washer 12.0kg",
    "department": "electronics",
    "gender": "unisex",
    "category": "appliances",
    "subCategory": "washing-machines",
    "mrp": 89990,
    "price": 43990,
    "sizes": [
      "Standard Unit // 2-Yr BIS Warranty"
    ],
    "color": "Gunmetal Brushed Finish",
    "stock": 3,
    "scarcity": 1,
    "scarcityLabel": "Final unit available for order",
    "weight": "86kg Heavy Commercial Chassis",
    "origin": "Jubilee Hills Tech Lab, Hyderabad",
    "description": "Commercial-grade front loader engineered for heavy household blankets and large curtains with dual spray wash pumps and Wi-Fi cloud cycle downloads.",
    "craftsmanship": "Heavy-duty cast iron counterweights and brushless permanent-magnet motor.",
    "careInstructions": "Professional installation recommended. Annual hose check.",
    "carbonOffset": "Bluedart Heavy Surface // 100% Certified Carbon-Neutral Freight",
    "aspect": "portrait",
    "edition": "ED-2026/56",
    "image": "/images/products/electronics/washing-machines/washing-04.jpg",
    "costArchitecture": {
      "rawMaterials": 54,
      "artisanalAssembly": 18,
      "logistics": 16,
      "atelierMargin": 12,
      "notes": "Commercial 12kg rated heavy suspension springs."
    },
    "title": "Industrial Heavy-Duty Dual Inverter Washer 12.0kg",
    "originalPrice": 89990,
    "discountPercent": 51,
    "subcategory": "washing-machines",
    "inStock": true,
    "images": [
      "/images/products/electronics/washing-machines/washing-04.jpg"
    ]
  },
  {
    "id": "ka-e-tv-01",
    "name": "55\" 4K Quantum Dot HDR10+ Smart Atelier TV",
    "department": "electronics",
    "gender": "unisex",
    "category": "appliances",
    "subCategory": "televisions",
    "mrp": 74990,
    "price": 36990,
    "sizes": [
      "Standard Unit // 2-Yr BIS Warranty"
    ],
    "color": "Bezel-Less Titanium",
    "stock": 8,
    "scarcity": 3,
    "scarcityLabel": "Only 3 units in stock",
    "weight": "16.5kg Frameless Metal Unibody",
    "origin": "Noida Electronics Corridor, Uttar Pradesh",
    "description": "Monolithic 55-inch 4K Quantum Dot panel with full-array local dimming, 120Hz refresh rate, Dolby Vision IQ, and hands-free Google Assistant far-field mic.",
    "craftsmanship": "CNC aircraft-grade aluminum bezel measuring just 1.2mm with concealed cable routing spine.",
    "careInstructions": "Clean display only with dry optical microfiber cloth. Never spray liquid directly on panel.",
    "carbonOffset": "Bluedart Air Express // 100% Certified Carbon-Neutral Delivery",
    "aspect": "landscape",
    "edition": "ED-2026/57",
    "image": "/images/products/electronics/televisions/tv-01.jpg",
    "costArchitecture": {
      "rawMaterials": 56,
      "artisanalAssembly": 18,
      "logistics": 14,
      "atelierMargin": 12,
      "notes": "10-bit Quantum Dot panel with 100% DCI-P3 color gamut."
    },
    "title": "55\" 4K Quantum Dot HDR10+ Smart Atelier TV",
    "originalPrice": 74990,
    "discountPercent": 51,
    "subcategory": "televisions",
    "inStock": true,
    "images": [
      "/images/products/electronics/televisions/tv-01.jpg"
    ]
  },
  {
    "id": "ka-e-tv-02",
    "name": "65\" Cinema OLED 120Hz Dolby Vision Architectural TV",
    "department": "electronics",
    "gender": "unisex",
    "category": "appliances",
    "subCategory": "televisions",
    "mrp": 189990,
    "price": 94990,
    "sizes": [
      "Standard Unit // 2-Yr BIS Warranty"
    ],
    "color": "Ultra-Thin Obsidian Glass",
    "stock": 4,
    "scarcity": 1,
    "scarcityLabel": "Only 1 unit left in southern hub",
    "weight": "22.8kg Self-Lit OLED Glass Substrate",
    "origin": "Jubilee Hills Tech Lab, Hyderabad",
    "description": "Self-lit OLED pixels delivering infinite contrast ratio and absolute true blacks, powered by α9 AI 4K Gen6 processor with 0.1ms pixel response time.",
    "craftsmanship": "Ultra-thin 3.8mm panel depth with gallery zero-gap flush wall mount bracket.",
    "careInstructions": "Automatic pixel refresher runs during standby. Avoid leaving static image on screen for over 2 hours.",
    "carbonOffset": "Bluedart Air Express // 100% Certified Carbon-Neutral Delivery",
    "aspect": "landscape",
    "edition": "ED-2026/58",
    "image": "/images/products/electronics/televisions/tv-02.jpg",
    "costArchitecture": {
      "rawMaterials": 60,
      "artisanalAssembly": 16,
      "logistics": 14,
      "atelierMargin": 10,
      "notes": "Self-illuminating organic LED substrate."
    },
    "title": "65\" Cinema OLED 120Hz Dolby Vision Architectural TV",
    "originalPrice": 189990,
    "discountPercent": 50,
    "subcategory": "televisions",
    "inStock": true,
    "images": [
      "/images/products/electronics/televisions/tv-02.jpg"
    ]
  },
  {
    "id": "ka-e-tv-03",
    "name": "75\" Mini-LED Ultra HD Bezel-Less Gallery TV",
    "department": "electronics",
    "gender": "unisex",
    "category": "appliances",
    "subCategory": "televisions",
    "mrp": 249990,
    "price": 119990,
    "sizes": [
      "Standard Unit // 2-Yr BIS Warranty"
    ],
    "color": "Anodized Slate Metal",
    "stock": 3,
    "scarcity": 1,
    "scarcityLabel": "Final collector unit in warehouse",
    "weight": "34kg High-Density Mini-LED Array",
    "origin": "Sriperumbudur Tech Zone, Tamil Nadu",
    "description": "Flagship 75-inch theater display with 2,048 independent local dimming zones, 2,000 nits peak brightness, and integrated 60W Onkyo sound system.",
    "craftsmanship": "Micro-optic lens array matrix delivering zero backlight bloom with anti-reflective coating.",
    "careInstructions": "Professional dual-person wall installation included with purchase.",
    "carbonOffset": "Bluedart Air Express // 100% Certified Carbon-Neutral Delivery",
    "aspect": "landscape",
    "edition": "ED-2026/59",
    "image": "/images/products/electronics/televisions/tv-03.jpg",
    "costArchitecture": {
      "rawMaterials": 62,
      "artisanalAssembly": 14,
      "logistics": 14,
      "atelierMargin": 10,
      "notes": "2,048-zone micro-LED array backlight."
    },
    "title": "75\" Mini-LED Ultra HD Bezel-Less Gallery TV",
    "originalPrice": 249990,
    "discountPercent": 52,
    "subcategory": "televisions",
    "inStock": true,
    "images": [
      "/images/products/electronics/televisions/tv-03.jpg"
    ]
  },
  {
    "id": "ka-e-tv-04",
    "name": "50\" 4K Crystal Frameless Cinema Display",
    "department": "electronics",
    "gender": "unisex",
    "category": "appliances",
    "subCategory": "televisions",
    "mrp": 52990,
    "price": 25990,
    "sizes": [
      "Standard Unit // 2-Yr BIS Warranty"
    ],
    "color": "Minimalist Eclipse Black",
    "stock": 12,
    "scarcity": 4,
    "scarcityLabel": "Only 4 units in stock",
    "weight": "12.2kg Slim Profile Polymer Enclosure",
    "origin": "Pune Manufacturing Cluster, Maharashtra",
    "description": "Sleek bedroom or studio 4K smart TV featuring Dynamic Crystal Color, HDR10+, ALLM low latency game mode, and Apple AirPlay 2 support.",
    "craftsmanship": "AirSlim 25mm profile with dual position height-adjustable metal feet.",
    "careInstructions": "Wipe with micro-fiber cloth. Keep vents free of dust.",
    "carbonOffset": "Bluedart Air Express // 100% Certified Carbon-Neutral Delivery",
    "aspect": "landscape",
    "edition": "ED-2026/60",
    "image": "/images/products/electronics/televisions/tv-04.jpg",
    "costArchitecture": {
      "rawMaterials": 50,
      "artisanalAssembly": 22,
      "logistics": 15,
      "atelierMargin": 13,
      "notes": "Edge-lit LED with dynamic crystal color filter."
    },
    "title": "50\" 4K Crystal Frameless Cinema Display",
    "originalPrice": 52990,
    "discountPercent": 51,
    "subcategory": "televisions",
    "inStock": true,
    "images": [
      "/images/products/electronics/televisions/tv-04.jpg"
    ]
  },
  {
    "id": "ka-e-aud-01",
    "name": "Spatial Audio ANC Wireless Studio Earbuds",
    "department": "electronics",
    "gender": "unisex",
    "category": "appliances",
    "subCategory": "audio-speakers",
    "mrp": 16990,
    "price": 7990,
    "sizes": [
      "Standard Unit // 2-Yr BIS Warranty"
    ],
    "color": "Monochrome Matte Graphite",
    "stock": 15,
    "scarcity": 3,
    "scarcityLabel": "Only 3 units in vault",
    "weight": "48g Earbuds & Wireless Charging Case",
    "origin": "Bengaluru Tech Corridor, Karnataka",
    "description": "True wireless in-ear monitors with 45dB hybrid active noise cancellation, LDAC 990kbps Hi-Res audio, head-tracking spatial audio, and 32-hour battery.",
    "craftsmanship": "11mm titanium diaphragm drivers enclosed in IP55 sweat-resistant ceramic touch shell.",
    "careInstructions": "Clean silicone ear-tips weekly with alcohol wipe. Store in charging capsule.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/61",
    "image": "/images/products/electronics/audio/audio-01.jpg",
    "costArchitecture": {
      "rawMaterials": 44,
      "artisanalAssembly": 26,
      "logistics": 14,
      "atelierMargin": 16,
      "notes": "Sony LDAC certified Hi-Res wireless chipset."
    },
    "title": "Spatial Audio ANC Wireless Studio Earbuds",
    "originalPrice": 16990,
    "discountPercent": 53,
    "subcategory": "audio-speakers",
    "inStock": true,
    "images": [
      "/images/products/electronics/audio/audio-01.jpg"
    ]
  },
  {
    "id": "ka-e-aud-02",
    "name": "Reference Over-Ear Active Noise-Cancelling Headphones",
    "department": "electronics",
    "gender": "unisex",
    "category": "appliances",
    "subCategory": "audio-speakers",
    "mrp": 29990,
    "price": 14490,
    "sizes": [
      "Standard Unit // 2-Yr BIS Warranty"
    ],
    "color": "Midnight Obsidian",
    "stock": 8,
    "scarcity": 2,
    "scarcityLabel": "Only 2 units in reserve",
    "weight": "250g Aluminum & Protein Leather",
    "origin": "Jubilee Hills Tech Lab, Hyderabad",
    "description": "Studio reference over-ear headphones featuring 40mm beryllium-coated drivers, six ANC microphones, multipoint Bluetooth 5.4, and 40-hour battery life.",
    "craftsmanship": "Milled aluminum pivot yokes, memory foam earcups clad in breathable protein leather.",
    "careInstructions": "Wipe cushions with dry cloth. Store in hard-shell EVA travel case.",
    "carbonOffset": "Bluedart Air // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/62",
    "image": "/images/products/electronics/audio/audio-02.jpg",
    "costArchitecture": {
      "rawMaterials": 46,
      "artisanalAssembly": 26,
      "logistics": 13,
      "atelierMargin": 15,
      "notes": "40mm Beryllium acoustic transducers."
    },
    "title": "Reference Over-Ear Active Noise-Cancelling Headphones",
    "originalPrice": 29990,
    "discountPercent": 52,
    "subcategory": "audio-speakers",
    "inStock": true,
    "images": [
      "/images/products/electronics/audio/audio-02.jpg"
    ]
  },
  {
    "id": "ka-e-aud-03",
    "name": "120W Dolby Atmos Wireless Subwoofer Soundbar",
    "department": "electronics",
    "gender": "unisex",
    "category": "appliances",
    "subCategory": "audio-speakers",
    "mrp": 24990,
    "price": 11990,
    "sizes": [
      "Standard Unit // 2-Yr BIS Warranty"
    ],
    "color": "Anodized Black Aluminum",
    "stock": 7,
    "scarcity": 2,
    "scarcityLabel": "Only 2 soundbars remaining",
    "weight": "8.4kg Soundbar & Subwoofer Combo",
    "origin": "Sriperumbudur Tech Zone, Tamil Nadu",
    "description": "3.1.2 physical channel architectural soundbar with upward-firing Atmos drivers, dedicated wireless 6.5-inch wooden subwoofer, and eARC HDMI passthrough.",
    "craftsmanship": "Extruded seamless aluminum grille with acoustic mesh damping.",
    "careInstructions": "Clean metal grille with soft brush. Position subwoofer 15cm from rear wall.",
    "carbonOffset": "Bluedart Air Express // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/63",
    "image": "/images/products/electronics/audio/audio-03.jpg",
    "costArchitecture": {
      "rawMaterials": 48,
      "artisanalAssembly": 24,
      "logistics": 14,
      "atelierMargin": 14,
      "notes": "Hardware Dolby Atmos decoder DSP."
    },
    "title": "120W Dolby Atmos Wireless Subwoofer Soundbar",
    "originalPrice": 24990,
    "discountPercent": 52,
    "subcategory": "audio-speakers",
    "inStock": true,
    "images": [
      "/images/products/electronics/audio/audio-03.jpg"
    ]
  },
  {
    "id": "ka-e-aud-04",
    "name": "Bookshelf High-Fidelity Studio Monitor Pair",
    "department": "electronics",
    "gender": "unisex",
    "category": "appliances",
    "subCategory": "audio-speakers",
    "mrp": 34990,
    "price": 16990,
    "sizes": [
      "Standard Unit // 2-Yr BIS Warranty"
    ],
    "color": "Raw Walnut & Matte Black",
    "stock": 6,
    "scarcity": 2,
    "scarcityLabel": "Only 2 pairs in stock",
    "weight": "12.8kg Heavy MDF Acoustic Cabinet Pair",
    "origin": "Bengaluru Tech Corridor, Karnataka",
    "description": "Bi-amplified active bookshelf monitors with 5.25-inch Kevlar woofers, 1-inch silk dome tweeters, optical/RCA inputs, and lossless Bluetooth 5.2.",
    "craftsmanship": "18mm dense MDF acoustic enclosures with internal bracing to eliminate harmonic resonance.",
    "careInstructions": "Avoid direct sunlight on speaker cones. Keep on vibration isolation pads.",
    "carbonOffset": "Bluedart Heavy Surface // 100% Certified Carbon-Neutral Freight",
    "aspect": "portrait",
    "edition": "ED-2026/64",
    "image": "/images/products/electronics/audio/audio-04.jpg",
    "costArchitecture": {
      "rawMaterials": 50,
      "artisanalAssembly": 24,
      "logistics": 14,
      "atelierMargin": 12,
      "notes": "Woven Kevlar low-frequency transducers."
    },
    "title": "Bookshelf High-Fidelity Studio Monitor Pair",
    "originalPrice": 34990,
    "discountPercent": 51,
    "subcategory": "audio-speakers",
    "inStock": true,
    "images": [
      "/images/products/electronics/audio/audio-04.jpg"
    ]
  },
  {
    "id": "ka-e-ktc-01",
    "name": "1000W Pure Copper Commercial Mixer Grinder 4-Jar",
    "department": "electronics",
    "gender": "unisex",
    "category": "appliances",
    "subCategory": "kitchen-appliances",
    "mrp": 8990,
    "price": 4290,
    "sizes": [
      "Standard Unit // 2-Yr BIS Warranty"
    ],
    "color": "Industrial Brushed Steel & Charcoal",
    "stock": 14,
    "scarcity": 3,
    "scarcityLabel": "Only 3 units in stock",
    "weight": "6.8kg Heavy Shockproof ABS & Steel",
    "origin": "Coimbatore Motor Cluster, Tamil Nadu",
    "description": "High-torque 1000W heavy copper motor mixer grinder with 4 heavy-gauge SS 304 jars, robotic laser-ground blades, and overload thermal cut-off.",
    "craftsmanship": "Dual ball bearing copper motor with dynamic airflow cooling vents for continuous 90-minute wet grinding.",
    "careInstructions": "Rinse jars immediately after grinding turmeric or spices. Wipe motor base with damp sponge.",
    "carbonOffset": "Bluedart Express // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/65",
    "image": "/images/products/electronics/kitchen-appliances/kitchen-01.jpg",
    "costArchitecture": {
      "rawMaterials": 48,
      "artisanalAssembly": 26,
      "logistics": 14,
      "atelierMargin": 12,
      "notes": "100% pure electrolytic copper motor winding."
    },
    "title": "1000W Pure Copper Commercial Mixer Grinder 4-Jar",
    "originalPrice": 8990,
    "discountPercent": 52,
    "subcategory": "kitchen-appliances",
    "inStock": true,
    "images": [
      "/images/products/electronics/kitchen-appliances/kitchen-01.jpg"
    ]
  },
  {
    "id": "ka-e-ktc-02",
    "name": "750W Ultra-Quiet Heavy Duty Kitchen Mixer",
    "department": "electronics",
    "gender": "unisex",
    "category": "appliances",
    "subCategory": "kitchen-appliances",
    "mrp": 7490,
    "price": 3490,
    "sizes": [
      "Standard Unit // 2-Yr BIS Warranty"
    ],
    "color": "Titanium Silver",
    "stock": 11,
    "scarcity": 3,
    "scarcityLabel": "Only 3 units in reserve",
    "weight": "5.4kg Acoustic Encapsulated Base",
    "origin": "Pune Manufacturing Cluster, Maharashtra",
    "description": "Whisper-quiet 750W kitchen mixer featuring double-walled noise suppression housing, flow breakers in jars, and 3-speed dial with pulse.",
    "craftsmanship": "Noise decibel reduction chamber bringing operational noise under 68dB.",
    "careInstructions": "Lids are dishwasher safe. Keep motor drive coupler clean.",
    "carbonOffset": "Bluedart Express // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/66",
    "image": "/images/products/electronics/kitchen-appliances/kitchen-02.jpg",
    "costArchitecture": {
      "rawMaterials": 44,
      "artisanalAssembly": 28,
      "logistics": 14,
      "atelierMargin": 14,
      "notes": "Acoustic damping motor encapsulation."
    },
    "title": "750W Ultra-Quiet Heavy Duty Kitchen Mixer",
    "originalPrice": 7490,
    "discountPercent": 53,
    "subcategory": "kitchen-appliances",
    "inStock": true,
    "images": [
      "/images/products/electronics/kitchen-appliances/kitchen-02.jpg"
    ]
  },
  {
    "id": "ka-e-ktc-03",
    "name": "28L Convection Stainless Steel Smart Microwave Oven",
    "department": "electronics",
    "gender": "unisex",
    "category": "appliances",
    "subCategory": "kitchen-appliances",
    "mrp": 18990,
    "price": 8990,
    "sizes": [
      "Standard Unit // 2-Yr BIS Warranty"
    ],
    "color": "Mirror Finish Stainless Steel",
    "stock": 8,
    "scarcity": 2,
    "scarcityLabel": "Only 2 units in stock",
    "weight": "17.5kg Stainless Steel Cavity",
    "origin": "Noida Electronics Corridor, Uttar Pradesh",
    "description": "28-liter convection oven with quartz tandoor heating, motorized rotisserie, 250+ Indian recipe presets, and antibacterial ceramic interior cavity.",
    "craftsmanship": "Seamless stainless steel cavity with 10-year warranty against rust and discoloration.",
    "careInstructions": "Wipe interior with lemon water steam cycle. Keep turntable ring centered.",
    "carbonOffset": "Bluedart Heavy Surface // 100% Certified Carbon-Neutral Freight",
    "aspect": "portrait",
    "edition": "ED-2026/67",
    "image": "/images/products/electronics/kitchen-appliances/kitchen-03.jpg",
    "costArchitecture": {
      "rawMaterials": 50,
      "artisanalAssembly": 22,
      "logistics": 16,
      "atelierMargin": 12,
      "notes": "Ceramic enamel interior cavity with quartz heaters."
    },
    "title": "28L Convection Stainless Steel Smart Microwave Oven",
    "originalPrice": 18990,
    "discountPercent": 53,
    "subcategory": "kitchen-appliances",
    "inStock": true,
    "images": [
      "/images/products/electronics/kitchen-appliances/kitchen-03.jpg"
    ]
  },
  {
    "id": "ka-e-ktc-04",
    "name": "5.5L Rapid Air Digital Touchscreen Air Fryer",
    "department": "electronics",
    "gender": "unisex",
    "category": "appliances",
    "subCategory": "kitchen-appliances",
    "mrp": 11990,
    "price": 5490,
    "sizes": [
      "Standard Unit // 2-Yr BIS Warranty"
    ],
    "color": "Matte Black & Copper Trim",
    "stock": 12,
    "scarcity": 4,
    "scarcityLabel": "Only 4 units in stock",
    "weight": "5.2kg BPA-Free Thermal Casing",
    "origin": "Bengaluru Tech Corridor, Karnataka",
    "description": "Family-capacity 5.5-liter air fryer featuring 360° rapid cyclone convection heat, non-stick PTFE-free basket, digital LED touch controls, and 8 presets.",
    "craftsmanship": "Food-grade stainless steel top grill with double thermal isolation wall.",
    "careInstructions": "Basket and crisper plate are dishwasher safe. Wipe heating element when cool.",
    "carbonOffset": "Bluedart Express // 100% Certified Carbon-Neutral Delivery",
    "aspect": "portrait",
    "edition": "ED-2026/68",
    "image": "/images/products/electronics/kitchen-appliances/kitchen-04.jpg",
    "costArchitecture": {
      "rawMaterials": 46,
      "artisanalAssembly": 26,
      "logistics": 14,
      "atelierMargin": 14,
      "notes": "PTFE/PFOA-free non-toxic ceramic basket coating."
    },
    "title": "5.5L Rapid Air Digital Touchscreen Air Fryer",
    "originalPrice": 11990,
    "discountPercent": 54,
    "subcategory": "kitchen-appliances",
    "inStock": true,
    "images": [
      "/images/products/electronics/kitchen-appliances/kitchen-04.jpg"
    ]
  }
];

// ----------------------------------------------------------------------
// 4. MASTER REPOSITORY (68 100% UNIQUE SPECIMENS - 0 DUPLICATES)
// ----------------------------------------------------------------------
export const PRODUCTS = [
  ...WOMEN_PRODUCTS,
  ...MEN_PRODUCTS,
  ...ELECTRONICS_PRODUCTS
];

// ----------------------------------------------------------------------
// 5. CONTEXTUAL SUBCATEGORY DIVISIONS (Zero Leakage)
// ----------------------------------------------------------------------
export const MEN_SUBCATEGORIES = [
  { id: 'all', label: 'All Men' },
  { id: 'kurtas', label: 'Kurtas' },
  { id: 'shirts', label: 'Kadak Shirts' },
  { id: 't-shirts', label: 'T-Shirts' },
  { id: 'jeans', label: 'Jeans' },
  { id: 'joggers', label: 'Joggers' },
  { id: 'footwear', label: "Men's Shoes & Slides" }
];

export const WOMEN_SUBCATEGORIES = [
  { id: 'all', label: 'All Women' },
  { id: 'sarees', label: 'Sarees' },
  { id: 'kurtis', label: 'Kurtis' },
  { id: 'dresses', label: 'Dresses' },
  { id: 'tops', label: "Women's Tops" },
  { id: 'bottoms', label: "Women's Bottoms" },
  { id: 'footwear', label: "Women's Footwear" }
];

export const ELECTRONICS_SUBCATEGORIES = [
  { id: 'all', label: 'All Electronics' },
  { id: 'refrigerators', label: 'Refrigerators' },
  { id: 'washing-machines', label: 'Washing Machines' },
  { id: 'televisions', label: 'Televisions' },
  { id: 'audio-speakers', label: 'Audio & Speakers' },
  { id: 'kitchen-appliances', label: 'Kitchen Appliances' }
];

export const ALL_SUBCATEGORIES = [
  { id: 'all', label: 'All Specimens' },
  { id: 'sarees', label: "Women's Sarees" },
  { id: 'kurtis', label: "Women's Kurtis" },
  { id: 'dresses', label: "Women's Dresses" },
  { id: 'tops', label: "Women's Tops" },
  { id: 'kurtas', label: "Men's Kurtas" },
  { id: 'shirts', label: 'Kadak Shirts' },
  { id: 't-shirts', label: 'T-Shirts' },
  { id: 'jeans', label: 'Jeans' },
  { id: 'joggers', label: 'Joggers' },
  { id: 'bottoms', label: "Women's Bottoms" },
  { id: 'footwear', label: 'Footwear & Shoes' },
  { id: 'refrigerators', label: 'Refrigerators' },
  { id: 'washing-machines', label: 'Washing Machines' },
  { id: 'televisions', label: 'Televisions' },
  { id: 'audio-speakers', label: 'Audio & Speakers' },
  { id: 'kitchen-appliances', label: 'Kitchen Appliances' }
];

// Primary Department Divisions
export const DEPARTMENTS = [
  { id: 'all', label: 'All Specimens', count: PRODUCTS.length },
  { id: 'men', label: "Men's Atelier", count: MEN_PRODUCTS.length },
  { id: 'women', label: "Women's Atelier", count: WOMEN_PRODUCTS.length },
  { id: 'electronics', label: "Electronics & Appliances", count: ELECTRONICS_PRODUCTS.length }
];

// Quick Secondary Filter Pills (Categories)
export const QUICK_FILTERS = [
  { id: 'all', label: 'All Categories' },
  { id: 'shirts', label: 'Shirts & Tops' },
  { id: 'pants', label: 'Pants & Jeans' },
  { id: 'shoes', label: 'Footwear & Slides' },
  { id: 'appliances', label: 'Appliances & Tech' }
];

export const CATEGORIES = ["All", "Shirts", "Pants", "Shoes", "Appliances"];

// Flagship Indian Atelier Hubs
export const GLOBAL_HUBS = [
  { 
    city: "Bengaluru", 
    country: "India", 
    lat: 12.9716, 
    lng: 77.5946, 
    sector: "IND-01 Indiranagar Atelier Hub", 
    address: "100 Feet Road, Indiranagar", 
    postal: "560038" 
  },
  { 
    city: "Mumbai", 
    country: "India", 
    lat: 18.9220, 
    lng: 72.8347, 
    sector: "IND-02 Kala Ghoda Archival Vault", 
    address: "Forbes Street, Kala Ghoda, Fort", 
    postal: "400001" 
  },
  { 
    city: "New Delhi", 
    country: "India", 
    lat: 28.5245, 
    lng: 77.1855, 
    sector: "IND-03 Mehrauli Design Pavilion", 
    address: "Kalka Das Marg, Mehrauli", 
    postal: "110030" 
  },
  { 
    city: "Hyderabad", 
    country: "India", 
    lat: 17.4325, 
    lng: 78.4071, 
    sector: "IND-04 Jubilee Hills Tech Lab", 
    address: "Road No. 36, Jubilee Hills", 
    postal: "500033" 
  },
  { 
    city: "Chennai", 
    country: "India", 
    lat: 13.0336, 
    lng: 80.2520, 
    sector: "IND-05 Alwarpet Craft Studio", 
    address: "TTK Road, Alwarpet", 
    postal: "600018" 
  },
  { 
    city: "Jaipur", 
    country: "India", 
    lat: 26.9124, 
    lng: 75.7873, 
    sector: "IND-06 Amer Heritage Workshop", 
    address: "C-Scheme, Ashok Nagar", 
    postal: "302001" 
  }
];
