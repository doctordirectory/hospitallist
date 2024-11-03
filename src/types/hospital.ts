export interface Hospital {
  id: string;
  name: string;
  image: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  rating: number;
  reviewCount: number;
  specialties: string[];
  emergencyServices: boolean;
  operatingHours: {
    [key: string]: {
      open: string;
      close: string;
    };
  };
  insuranceAccepted: string[];
  phone: string;
  website: string;
}

export type SortOption = 'relevance' | 'distance' | 'rating';

export type FilterOption = 'specialty' | 'insurance' | 'emergency';