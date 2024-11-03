import React from 'react';
import { Search, MapPin, Filter, AlertCircle } from 'lucide-react';
import { SortOption, FilterOption } from '../types/hospital';

interface HospitalSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  location: string;
  onLocationChange: (value: string) => void;
  selectedSpecialties: string[];
  onSpecialtyChange: (specialties: string[]) => void;
  selectedInsurance: string[];
  onInsuranceChange: (insurance: string[]) => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  showEmergencyOnly: boolean;
  onEmergencyFilter: (show: boolean) => void;
}

export default function HospitalSearch({
  searchTerm,
  onSearchChange,
  location,
  onLocationChange,
  selectedSpecialties,
  onSpecialtyChange,
  selectedInsurance,
  onInsuranceChange,
  sortBy,
  onSortChange,
  showEmergencyOnly,
  onEmergencyFilter,
}: HospitalSearchProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search hospitals..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Enter location..."
            value={location}
            onChange={(e) => onLocationChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        >
          <option value="relevance">Sort by Relevance</option>
          <option value="distance">Sort by Distance</option>
          <option value="rating">Sort by Rating</option>
        </select>

        <button
          onClick={() => onEmergencyFilter(!showEmergencyOnly)}
          className={`flex items-center justify-center px-4 py-2 rounded-lg border transition-colors ${
            showEmergencyOnly
              ? 'bg-red-500 text-white border-red-500'
              : 'bg-white text-gray-700 border-gray-300'
          }`}
        >
          <AlertCircle className="w-4 h-4 mr-2" />
          Emergency Services Only
        </button>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {selectedSpecialties.map((specialty) => (
          <span
            key={specialty}
            className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm flex items-center"
          >
            {specialty}
            <button
              onClick={() => onSpecialtyChange(selectedSpecialties.filter(s => s !== specialty))}
              className="ml-2 hover:text-indigo-500"
            >
              ×
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}