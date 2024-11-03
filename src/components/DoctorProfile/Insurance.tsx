import React from 'react';
import { Shield } from 'lucide-react';

interface InsuranceProps {
  insuranceProviders: Array<{
    category: string;
    providers: string[];
  }>;
}

export default function Insurance({ insuranceProviders }: InsuranceProps) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <div className="flex items-center mb-6">
        <Shield className="w-6 h-6 text-indigo-600 mr-2" />
        <h2 className="text-2xl font-bold text-gray-900">Accepted Insurance</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {insuranceProviders.map((category, index) => (
          <div key={index}>
            <h3 className="font-semibold text-gray-900 mb-3">{category.category}</h3>
            <ul className="space-y-2">
              {category.providers.map((provider, idx) => (
                <li key={idx} className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></div>
                  {provider}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}