import React from 'react';
import { Star, Clock, Phone, Globe, MapPin, AlertCircle } from 'lucide-react';
import { Hospital } from '../types/hospital';

interface HospitalCardProps {
  hospital: Hospital;
}

export default function HospitalCard({ hospital }: HospitalCardProps) {
  const isOpen = () => {
    const now = new Date();
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const currentDay = days[now.getDay()];
    const currentTime = now.toLocaleTimeString('en-US', { 
      hour12: false,
      hour: '2-digit',
      minute: '2-digit'
    });
    
    const hours = hospital.operatingHours[currentDay];
    return currentTime >= hours.open && currentTime <= hours.close;
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={hospital.image}
          alt={hospital.name}
          className="w-full h-48 object-cover"
        />
        {hospital.emergencyServices && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            <span className="text-sm font-medium">Emergency Services</span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{hospital.name}</h3>
            <p className="text-gray-600 flex items-center mt-1">
              <MapPin className="w-4 h-4 mr-1" />
              {hospital.address.street}, {hospital.address.city}
            </p>
          </div>
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span className="ml-1 font-semibold">{hospital.rating}</span>
            <span className="text-gray-500 text-sm ml-1">({hospital.reviewCount})</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-2" />
            <span className={isOpen() ? 'text-green-600' : 'text-red-600'}>
              {isOpen() ? 'Open Now' : 'Closed'}
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {hospital.specialties.map((specialty, index) => (
              <span
                key={index}
                className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <a
            href={`tel:${hospital.phone}`}
            className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center"
          >
            <Phone className="w-4 h-4 mr-2" />
            Call
          </a>
          <a
            href={hospital.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-white text-indigo-600 border border-indigo-600 py-2 px-4 rounded-lg hover:bg-indigo-50 transition-colors flex items-center justify-center"
          >
            <Globe className="w-4 h-4 mr-2" />
            Website
          </a>
          <a
            href={`https://maps.google.com/?q=${hospital.address.coordinates.lat},${hospital.address.coordinates.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-white text-indigo-600 border border-indigo-600 py-2 px-4 rounded-lg hover:bg-indigo-50 transition-colors flex items-center justify-center"
          >
            <MapPin className="w-4 h-4 mr-2" />
            Directions
          </a>
        </div>
      </div>
    </div>
  );
}