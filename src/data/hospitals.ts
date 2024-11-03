import { Hospital } from '../types/hospital';

export const hospitals: Hospital[] = [
  {
    id: '1',
    name: 'Central Metropolitan Hospital',
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=2000',
    address: {
      street: '123 Medical Center Blvd',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      coordinates: {
        lat: 40.7128,
        lng: -74.0060
      }
    },
    rating: 4.8,
    reviewCount: 524,
    specialties: ['Emergency Care', 'Cardiology', 'Neurology', 'Orthopedics'],
    emergencyServices: true,
    operatingHours: {
      monday: { open: '00:00', close: '24:00' },
      tuesday: { open: '00:00', close: '24:00' },
      wednesday: { open: '00:00', close: '24:00' },
      thursday: { open: '00:00', close: '24:00' },
      friday: { open: '00:00', close: '24:00' },
      saturday: { open: '00:00', close: '24:00' },
      sunday: { open: '00:00', close: '24:00' }
    },
    insuranceAccepted: ['Medicare', 'Blue Cross', 'Aetna', 'UnitedHealth'],
    phone: '(212) 555-0123',
    website: 'https://centralmetropolitan.com'
  },
  {
    id: '2',
    name: 'Riverside Medical Center',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=2000',
    address: {
      street: '456 Riverside Drive',
      city: 'New York',
      state: 'NY',
      zip: '10002',
      coordinates: {
        lat: 40.7282,
        lng: -73.9842
      }
    },
    rating: 4.6,
    reviewCount: 312,
    specialties: ['Pediatrics', 'Oncology', 'Women\'s Health'],
    emergencyServices: true,
    operatingHours: {
      monday: { open: '00:00', close: '24:00' },
      tuesday: { open: '00:00', close: '24:00' },
      wednesday: { open: '00:00', close: '24:00' },
      thursday: { open: '00:00', close: '24:00' },
      friday: { open: '00:00', close: '24:00' },
      saturday: { open: '00:00', close: '24:00' },
      sunday: { open: '00:00', close: '24:00' }
    },
    insuranceAccepted: ['Medicare', 'Cigna', 'Humana'],
    phone: '(212) 555-0456',
    website: 'https://riversidemedical.com'
  }
];