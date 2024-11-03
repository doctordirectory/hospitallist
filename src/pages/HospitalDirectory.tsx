import React, { useState } from 'react';
import HospitalCard from '../components/HospitalCard';
import HospitalMap from '../components/HospitalMap';
import HospitalSearch from '../components/HospitalSearch';
import { hospitals } from '../data/hospitals';
import { SortOption } from '../types/hospital';

export default function HospitalDirectory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const [selectedInsurance, setSelectedInsurance] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>('relevance');
  const [showEmergencyOnly, setShowEmergencyOnly] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState<string>();

  const filteredHospitals = hospitals
    .filter((hospital) => {
      if (showEmergencyOnly && !hospital.emergencyServices) return false;
      if (searchTerm && !hospital.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
      if (selectedSpecialties.length && !selectedSpecialties.some(s => hospital.specialties.includes(s))) return false;
      if (selectedInsurance.length && !selectedInsurance.some(i => hospital.insuranceAccepted.includes(i))) return false;
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'distance':
          return (a.distance || 0) - (b.distance || 0);
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Find Hospitals Near You</h1>
          <p className="mt-2 text-gray-600">Search and compare hospitals in your area</p>
        </div>

        <HospitalSearch
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          location={location}
          onLocationChange={setLocation}
          selectedSpecialties={selectedSpecialties}
          onSpecialtyChange={setSelectedSpecialties}
          selectedInsurance={selectedInsurance}
          onInsuranceChange={setSelectedInsurance}
          sortBy={sortBy}
          onSortChange={setSortBy}
          showEmergencyOnly={showEmergencyOnly}
          onEmergencyFilter={setShowEmergencyOnly}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 gap-6">
              {filteredHospitals.map((hospital) => (
                <HospitalCard
                  key={hospital.id}
                  hospital={hospital}
                />
              ))}
            </div>
          </div>
          
          <div className="hidden lg:block">
            <HospitalMap
              hospitals={filteredHospitals}
              selectedHospital={selectedHospital}
              onHospitalSelect={setSelectedHospital}
            />
          </div>
        </div>
      </div>
    </div>
  );
}