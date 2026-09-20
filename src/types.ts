export interface BusinessConfig {
  name: string;
  tagline: string;
  city: string;
  district: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  workingHours: string;
  instagram: string;
  googleRating: number;
  totalReviews: number;
  announcementActive: boolean;
  announcementText: string;
}

export interface ServicePackage {
  id: string;
  title: string;
  badge?: string;
  recommended?: boolean;
  priceSingle: number;
  priceSixSessions: number;
  priceEightSessions: number;
  priceVipPackage: number;
  duration: string;
  warranty: string;
  description: string;
  features: string[];
}

export interface AppointmentLead {
  id: string;
  customerName: string;
  phone: string;
  serviceRequested: string;
  sessionType: string;
  preferredDate: string;
  preferredTimeSlot?: string;
  estimatedPrice: number;
  status: 'bekliyor' | 'onaylandi' | 'tamamlandi';
  createdAt: string;
  notes?: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  improvementHighlights: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'lazer' | 'cilt' | 'genel';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  tag: string;
}
