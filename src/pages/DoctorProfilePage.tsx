import React from 'react';
import Header from '../components/DoctorProfile/Header';
import Education from '../components/DoctorProfile/Education';
import Reviews from '../components/DoctorProfile/Reviews';
import Insurance from '../components/DoctorProfile/Insurance';

const doctorData = {
  name: 'Dr. Sarah Mitchell',
  photo:
    'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400',
  specialty: 'Cardiology',
  rating: 4.8,
  reviewCount: 127,
  experience: 12,
  languages: ['English', 'Spanish'],
  location: 'Central Heart Institute, New York',
  phone: '+1 (555) 123-4567',
  email: 'dr.mitchell@heartinstitute.com',
  website: 'www.heartinstitute.com',
  education: [
    {
      degree: 'Doctor of Medicine (MD)',
      institution: 'Harvard Medical School',
      year: '2008-2012',
    },
    {
      degree: 'Cardiology Fellowship',
      institution: 'Johns Hopkins Hospital',
      year: '2012-2015',
    },
  ],
  certifications: [
    {
      title: 'Board Certified in Cardiovascular Disease',
      organization: 'American Board of Internal Medicine',
      year: '2015',
    },
    {
      title: 'Advanced Cardiac Life Support (ACLS)',
      organization: 'American Heart Association',
      year: '2023',
    },
  ],
  reviews: [
    {
      id: '1',
      author: 'John D.',
      rating: 5,
      date: 'March 15, 2024',
      comment:
        'Dr. Mitchell is an exceptional cardiologist. Her expertise and caring approach made me feel comfortable throughout my treatment.',
      helpful: 24,
    },
    {
      id: '2',
      author: 'Sarah R.',
      rating: 5,
      date: 'March 10, 2024',
      comment:
        'Very thorough and professional. Takes time to explain everything in detail. Highly recommended!',
      helpful: 18,
    },
  ],
  insuranceProviders: [
    {
      category: 'Private Insurance',
      providers: [
        'Blue Cross Blue Shield',
        'Aetna',
        'Cigna',
        'UnitedHealthcare',
      ],
    },
    {
      category: 'Government Programs',
      providers: ['Medicare', 'Medicaid', 'TRICARE'],
    },
  ],
};

export default function DoctorProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <Header doctor={doctorData} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Education
                education={doctorData.education}
                certifications={doctorData.certifications}
              />
              <Reviews reviews={doctorData.reviews} />
            </div>

            <div className="space-y-6">
              <div className="bg-white shadow-md rounded-xl p-6">
                <button className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors font-semibold">
                  Book Appointment
                </button>
                <div className="mt-4 text-center text-sm text-gray-500">
                  Usually responds within 24 hours
                </div>
              </div>

              <Insurance insuranceProviders={doctorData.insuranceProviders} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
