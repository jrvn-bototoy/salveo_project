export interface OfferPackage {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  isPopular?: boolean;
  canistersCount: number;
  weightGrams: number;
  servingsCount: number;
  originalPrice: number;
  promoPrice: number;
  savingsAmount: number;
  freebies: string[];
  features: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  verified: boolean;
  rating: number;
  quote: string;
  condition: string;
  timeframe: string;
  avatarBg: string;
  orderType: string;
}

export interface StoreLocation {
  city: string;
  province: string;
  address: string;
  type: string;
  status: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'trust' | 'shipping' | 'usage' | 'price';
}

export interface CodOrder {
  orderId: string;
  timestamp: string;
  customerName: string;
  phone: string;
  fullAddress: string;
  barangay: string;
  city: string;
  province: string;
  landmark: string;
  packageId: string;
  packageName: string;
  quantity: number;
  totalPrice: number;
  deliveryNotes?: string;
  paymentMethod: 'COD';
  status: 'Pending Dispatch' | 'Confirmed' | 'In Transit' | 'Delivered';
}

export interface LiveBuyerAlert {
  id: string;
  name: string;
  location: string;
  packageName: string;
  timeAgo: string;
}
