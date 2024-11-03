import React from 'react';
import { MapPin } from 'lucide-react';
import { Hospital } from '../types/hospital';

interface HospitalMapProps {
  hospitals: Hospital[];
  selectedHospital?: string;
  onHospitalSelect: (id: string) => void;
}

export default function HospitalMap({ hospitals, selectedHospital, onHospitalSelect }: HospitalMapProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden h-[calc(100vh-2rem)] sticky top-4">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Hospital Locations</h2>
      </div>
      <div className="relative h-full">
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <p className="text-gray-500">Map integration would go here</p>
          {/* Map implementation would go here using your preferred mapping library */}
        </div>
      </div>
    </div>
  );
}