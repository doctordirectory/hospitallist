import React from 'react';
import { Star, MapPin, Phone, Mail, Globe, Clock, Languages } from 'lucide-react';

interface HeaderProps {
  doctor: {
    name: string;
    photo: string;
    specialty: string;
    rating: number;
    reviewCount: number;
    experience: number;
    languages: string[];
    location: string;
    phone: string;
    email: string;
    website: string;
  };
}

export default function Header({ doctor }: HeaderProps) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden">
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 h-32"></div>
      <div className="px-8 pb-8">
        <div className="flex flex-col md:flex-row gap-6 -mt-16">
          <img
            src={doctor.photo}
            alt={doctor.name}
            className="w-32 h-32 rounded-xl shadow-lg border-4 border-white object-cover"
          />
          <div className="flex-1 pt-4 md:pt-0">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{doctor.name}</h1>
                <p className="text-lg text-indigo-600 font-medium">{doctor.specialty}</p>
              </div>
              <div className="flex items-center mt-2 md:mt-0">
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                <span className="ml-2 text-xl font-semibold">{doctor.rating}</span>
                <span className="text-gray-500 ml-1">({doctor.reviewCount} reviews)</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="flex items-center text-gray-600">
                <Clock className="w-5 h-5 mr-2 text-indigo-600" />
                <span>{doctor.experience} years of experience</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Languages className="w-5 h-5 mr-2 text-indigo-600" />
                <span>{doctor.languages.join(', ')}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-2 text-indigo-600" />
                <span>{doctor.location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="w-5 h-5 mr-2 text-indigo-600" />
                <span>{doctor.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}