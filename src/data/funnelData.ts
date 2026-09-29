import { OfferPackage, ReviewItem, StoreLocation, FaqItem, LiveBuyerAlert } from '../types';

export const HEADLINE_VARIATIONS = [
  {
    id: 1,
    label: 'Angle 1: 100k+ Filipinos Proof',
    headline: 'Hirap Ka Bang Kumain Dahil Sa Sakit Ng Tiyan Mo? Ito Ang Ginagamit Ng 100,000+ Pilipino Para Sa Ginhawa.',
    subheadline: 'Salveo Barley Grass — ang Top Organic Supplement sa Pilipinas at Asia, pinagkakatiwalaan na ng mahigit 100,000 Pilipino. Order online, bayad pag-dating (Cash on Delivery), kahit saan sa Pilipinas.',
  },
  {
    id: 2,
    label: 'Angle 2: Ulcer Medicine Pattern Interrupt',
    headline: 'Bago Ka Uminom Ng Isa Pang Gamot Sa Ulcer, Basahin Muna Ito.',
    subheadline: 'Salveo Barley Grass — ang Top Organic Supplement sa Pilipinas at Asia, pinagkakatiwalaan na ng mahigit 100,000 Pilipino. Order online, bayad pag-dating (Cash on Delivery), kahit saan sa Pilipinas.',
  },
  {
    id: 3,
    label: 'Angle 3: Satiety & Digestion Secret',
    headline: 'Ang Sikreto Kung Bakit Hindi Na Sumasakit Ang Tiyan Ng Marami Kahit Nabubusog Sila.',
    subheadline: 'Salveo Barley Grass — ang Top Organic Supplement sa Pilipinas at Asia, pinagkakatiwalaan na ng mahigit 100,000 Pilipino. Order online, bayad pag-dating (Cash on Delivery), kahit saan sa Pilipinas.',
  },
];

export const OFFER_PACKAGES: OfferPackage[] = [
  {
    id: 'trial-pack',
    name: '1 Canister (Trial Pack)',
    tagline: 'Ang Tamang Simula Para Sa Ginhawa',
    badge: 'Official SRP Promo',
    isPopular: false,
    canistersCount: 1,
    weightGrams: 80,
    servingsCount: 40,
    originalPrice: 1200,
    promoPrice: 975,
    savingsAmount: 225,
    freebies: [
      'Official Measuring Scoop kasama sa loob',
      'Free Digestive Drinking Schedule Guide (Digital)',
      'Cash on Delivery Protection Nationwide'
    ],
    features: [
      '80g 100% Pure Organic Barley Grass Powder',
      '40 Servings (Halos 1 buwan na konsumo)',
      'Natural enzymes & rich chlorophyll gut-soothing',
      'Bayad Pag-Dating — 100% Walang Advance Payment'
    ]
  },
  {
    id: 'duo-pack',
    name: '2 Canisters (Best Value Duo)',
    tagline: 'Pinaka-Madalas I-Order ng Repeat Customers',
    badge: 'MOST POPULAR • BEST VALUE',
    isPopular: true,
    canistersCount: 2,
    weightGrams: 160,
    servingsCount: 80,
    originalPrice: 2400,
    promoPrice: 1850,
    savingsAmount: 550,
    freebies: [
      'FREE Salveo Leak-Proof Mixing Shaker Bottle',
      '2x Official Measuring Scoops',
      'Priority Dispatch & Free Shipping Nationwide',
      'Personalized Gut Health Support via SMS/Viber'
    ],
    features: [
      '160g Pure Organic Barley Grass Powder (2 Canisters)',
      '80 Servings (Buong 2 buwan na tuluy-tuloy na ginhawa)',
      'Perpekto para sa pang-araw-araw na proteksyon laban sa acid',
      'Bayad Pag-Dating — Walang Risk, Buksan bago bayaran'
    ]
  },
  {
    id: 'trio-pack',
    name: '3 Canisters (Family & Recovery Pack)',
    tagline: 'Maximum Savings Para Sa Pamilya',
    badge: 'MAXIMUM SAVINGS (Save ₱950)',
    isPopular: false,
    canistersCount: 3,
    weightGrams: 240,
    servingsCount: 120,
    originalPrice: 3600,
    promoPrice: 2650,
    savingsAmount: 950,
    freebies: [
      'FREE Salveo Leak-Proof Mixing Shaker Bottle',
      '3x Official Measuring Scoops',
      'VIP Same-Day Courier Pickup Nationwide',
      'Free Consultation Guide for Family Members'
    ],
    features: [
      '240g Pure Organic Barley Grass Powder (3 Canisters)',
      '120 Servings (Higit 3 buwang tuluy-tuloy na recovery)',
      'Perpekto para sa buong pamilya o matagalang ulcer maintenance',
      'Bayad Pag-Dating — Libreng Palit kung may sira sa shipping'
    ]
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Elena R. Mendoza',
    location: 'Iloilo City, Iloilo',
    verified: true,
    rating: 5,
    quote: 'Ang bilis ng ginhawa. Isang beses ko lang nainom, naramdaman ko na agad na gumaan ang tiyan ko. Binili ko ito para sa kapatid ko na may malubhang GERD at hindi na kami nagigising sa madaling araw dahil sa hapdi.',
    condition: 'Acid Reflux / GERD Relief',
    timeframe: '1st Drink Effect',
    avatarBg: 'bg-emerald-600',
    orderType: 'Verified Trial Pack Buyer'
  },
  {
    id: 'rev-2',
    author: 'Rogelio "Kuya Bong" Santos',
    location: 'Angeles City, Pampanga',
    verified: true,
    rating: 5,
    quote: 'Talagang hindi na sumasakit ang tiyan ko pag nabubusog ako, at hindi na din humahapdi pagkagising ko sa umaga. Ikalawang beses ko na itong inorder dahil dito ko lang naramdaman ang totoong ginhawa na hindi panandalian lang.',
    condition: 'Chronic Ulcer & Morning Acidity',
    timeframe: 'Repeat Customer (2nd Order)',
    avatarBg: 'bg-teal-700',
    orderType: 'Verified Duo Pack Buyer'
  },
  {
    id: 'rev-3',
    author: 'Grace Ann Villavicencio',
    location: 'Bacolod City, Negros Occidental',
    verified: true,
    rating: 5,
    quote: 'Tatlong araw pa lang gamit ko, maayos na ang bowel movement ko at may gana na akong kumain. Dati takot akong kumain ng regular kasi baka humapdi ulit, ngayon masigla na ulit ako.',
    condition: 'Regular Bowel & Digestion Recovery',
    timeframe: '3 Days Usage',
    avatarBg: 'bg-emerald-700',
    orderType: 'Verified Trial Pack Buyer'
  },
  {
    id: 'rev-4',
    author: 'Maritess C. Dela Cruz',
    location: 'Quezon City, Metro Manila',
    verified: true,
    rating: 5,
    quote: 'Naramdaman ng nanay ko ang ginhawa sa tiyan niya, at sulit talaga ang presyo. 62 years old na siya at madalas masakit ang tiyan sa mga maintenance meds niya. Ngayon lagi siyang nakangiti tuwing umaga.',
    condition: 'Senior Stomach Comfort',
    timeframe: '1 Week Usage',
    avatarBg: 'bg-green-700',
    orderType: 'Verified Duo Pack Buyer'
  },
  {
    id: 'rev-5',
    author: 'Capt. Fernando Bautista',
    location: 'Davao City, Davao del Sur',
    verified: true,
    rating: 5,
    quote: 'Dahil sa puyat at irregular na kain sa trabaho, laging acidic at bloated ang tiyan ko. Sobrang laking tulong ng Salveo Barley tuwing umaga bago mag-kape o almusal. Gumaan ang pakiramdam ko at hindi na kabagin.',
    condition: 'Bloating & Irregular Schedule',
    timeframe: '5 Days Usage',
    avatarBg: 'bg-emerald-800',
    orderType: 'Verified Trial Pack Buyer'
  },
  {
    id: 'rev-6',
    author: 'Lourdes P. Guanzon',
    location: 'Silay City, Negros Occidental',
    verified: true,
    rating: 5,
    quote: 'Doon mismo ako bumibili minsan sa branch nila sa Silay pero mas convenient magpa-COD online lalo na may libreng measuring scoop at maingat ang pagkakabalot. 100% legit GreenHealth Wellness!',
    condition: 'Authorized Store Regular',
    timeframe: '1 Year Loyal Customer',
    avatarBg: 'bg-teal-800',
    orderType: 'Verified Trio Pack Buyer'
  }
];

export const PHYSICAL_STORES: StoreLocation[] = [
  {
    city: 'Iloilo City',
    province: 'Iloilo, Western Visayas',
    address: 'GreenHealth Wellness Center, City Proper / Jaro District',
    type: 'Authorized Retail Hub & Distribution',
    status: 'Open for Walk-in & Dispatch'
  },
  {
    city: 'Bacolod City',
    province: 'Negros Occidental',
    address: 'GreenHealth Wellness Branch, Lacson St. Commercial Strip',
    type: 'Authorized Distributor Store',
    status: 'Open for Walk-in & Dispatch'
  },
  {
    city: 'Silay City',
    province: 'Negros Occidental',
    address: 'GreenHealth Wellness Partner Outlet, Rizal St.',
    type: 'Partner Retail Outlet',
    status: 'Open for Walk-in & Dispatch'
  },
  {
    city: 'Guimaras Province',
    province: 'Guimaras Island',
    address: 'GreenHealth Distribution Kiosk, Jordan Commercial Area',
    type: 'Provincial Distribution Point',
    status: 'Open for Walk-in & Dispatch'
  },
  {
    city: 'Angeles City',
    province: 'Pampanga (Main Corporate Office)',
    address: 'Pandan, Angeles City, Pampanga (Main SalveoWell Corporate Center)',
    type: 'Company Main Office & Logistics HQ',
    status: 'Headquarters & Logistics Center'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'trust',
    question: 'Legit ba ito o paano ako nakakasiguro na hindi peke?',
    answer: 'Kami po ay verified at authorized distributor ng Salveo Barley Grass sa ilalim ng GreenHealth Wellness — hindi po kami basta online reseller lang na walang pinanggagalingan. Mayroon kaming mga physical stores sa Iloilo City, Bacolod City, Guimaras, at Silay City na maaari ninyong mabisita. Ang official company site ay salveowell.com na may main office sa Pandan, Angeles City, Pampanga. Higit sa lahat, Cash on Delivery (COD) ang bayaran — ibig sabihin, hindi ka maglalabas ng kahit piso hangga\'t hindi dumarating ang tunay na produkto sa iyong pintuan.'
  },
  {
    id: 'faq-2',
    category: 'shipping',
    question: 'Gaano katagal bago dumating ang order ko pagkatapos mag-submit?',
    answer: 'Mabilis po ang aming shipping process. Para sa Metro Manila at Central Luzon: 2 hanggang 3 araw. Sa ibang bahagi ng Luzon at mga probinsya: karaniwang 3 hanggang 5 araw. Sa Visayas at Mindanao: 5 hanggang 7 araw depende sa inyong barangay o lokasyon. May text at call notification ang courier bago i-deliver ang inyong package.'
  },
  {
    id: 'faq-3',
    category: 'usage',
    question: 'Paano tamang paraan ng pag-inom at paggamit ng Salveo Barley Grass?',
    answer: 'Napakadali lang po: I-mix ang 2 hanggang 4 scoops sa isang baso ng malamig o maligamgam na tubig (huwag mainit na tubig para hindi masira ang live natural enzymes). Inumin 1 hanggang 3 beses sa isang araw. Pinakamainam inumin 30 minutes bago kumain (empty stomach sa umaga) o 2 oras pagkatapos kumain. Walang overdose ang Salveo Barley Grass dahil ito ay 100% natural organic food supplement.'
  },
  {
    id: 'faq-4',
    category: 'price',
    question: 'Mahal ba ito kumpara sa ibang iniinom ko para sa tiyan?',
    answer: 'Hindi po, napaka-sulit nito! Ang isang Trial Pack (80g) ay may 40 servings sa halagang ₱975 lang. Pumapatak lamang ito ng humigit-kumulang ₱24 bawat baso. Kung ikukumpara sa paulit-ulit na pagbili ng antacids, pain medicines, at doctor visits na umaabot ng libo-libo buwan-buwan ngunit bumabalik lang ang sakit, ang Salveo ay natural na pamumuhunan para sa pangmatagalang kalusugan ng iyong tiyan at panunaw.'
  },
  {
    id: 'faq-5',
    category: 'usage',
    question: 'Ito ba ay gamot? May mga side effects ba ito?',
    answer: 'Ang Salveo Barley Grass ay hindi gamot. Ito ay 100% pure organic whole-food supplement na mayaman sa dietary fiber, natural chlorophyll, minerals, at enzymes. Dahil puro at organiko, wala itong kilalang masamang side effects o panganib ng overdose. Ligtas ito inumin araw-araw kasabay ng malusog na pamumuhay.'
  },
  {
    id: 'faq-6',
    category: 'trust',
    question: 'Paano kung may sira o nadurog ang canister habang idini-deliver ng courier?',
    answer: 'Protektado ka ng aming 100% Risk Reversal Guarantee! Kung may anumang diperensya o nasira ang natanggap mong item, i-report lang po ito sa aming support sa loob ng 48 oras at papalitan namin ito nang LIBRE nang walang dagdag na bayad sa shipping. Kung gusto mo namang i-return ang unopen at unused na item, may 7 days ka mula pagtanggap.'
  }
];

export const LIVE_BUYER_NOTIFICATIONS: LiveBuyerAlert[] = [
  { id: '1', name: 'Maria Teresa S.', location: 'Iloilo City', packageName: '2 Canisters (Best Value Duo)', timeAgo: '2 minutes ago' },
  { id: '2', name: 'Danilo G.', location: 'Cebu City', packageName: '1 Canister (Trial Pack)', timeAgo: '4 minutes ago' },
  { id: '3', name: 'Leticia V.', location: 'Davao City', packageName: '3 Canisters (Family Pack)', timeAgo: '6 minutes ago' },
  { id: '4', name: 'Edwin P.', location: 'Quezon City', packageName: '2 Canisters (Best Value Duo)', timeAgo: '9 minutes ago' },
  { id: '5', name: 'Rosalinda M.', location: 'Bacolod City', packageName: '1 Canister (Trial Pack)', timeAgo: '12 minutes ago' },
  { id: '6', name: 'Captain Jerry B.', location: 'Cagayan de Oro', packageName: '2 Canisters (Best Value Duo)', timeAgo: '15 minutes ago' },
  { id: '7', name: 'Bernadette L.', location: 'Angeles City, Pampanga', packageName: '1 Canister (Trial Pack)', timeAgo: '18 minutes ago' }
];

export const PHILIPPINE_PROVINCES = [
  'Metro Manila',
  'Abra', 'Agusan del Norte', 'Agusan del Sur', 'Aklan', 'Albay', 'Antique', 'Apayao', 'Aurora',
  'Bataan', 'Batanes', 'Batangas', 'Benguet', 'Biliran', 'Bohol', 'Bukidnon', 'Bulacan',
  'Cagayan', 'Camarines Norte', 'Camarines Sur', 'Camiguin', 'Capiz', 'Catanduanes', 'Cavite', 'Cebu',
  'Cotabato', 'Davao de Oro', 'Davao del Norte', 'Davao del Sur', 'Davao Occidental', 'Davao Oriental',
  'Dinagat Islands', 'Eastern Samar', 'Guimaras', 'Ifugao', 'Ilocos Norte', 'Ilocos Sur', 'Iloilo',
  'Isabela', 'Kalinga', 'La Union', 'Laguna', 'Lanao del Norte', 'Lanao del Sur', 'Leyte',
  'Maguindanao', 'Marinduque', 'Masbate', 'Misamis Occidental', 'Misamis Oriental', 'Mountain Province',
  'Negros Occidental', 'Negros Oriental', 'Northern Samar', 'Nueva Ecija', 'Nueva Vizcaya', 'Occidental Mindoro',
  'Oriental Mindoro', 'Palawan', 'Pampanga', 'Pangasinan', 'Quezon', 'Quirino', 'Rizal', 'Romblon',
  'Samar', 'Sarangani', 'Siquijor', 'Sorsogon', 'South Cotabato', 'Southern Leyte', 'Sultan Kudarat',
  'Sulu', 'Surigao del Norte', 'Surigao del Sur', 'Tarlac', 'Tawi-Tawi', 'Zambales', 'Zamboanga del Norte',
  'Zamboanga del Sur', 'Zamboanga Sibugay'
];
