import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

interface EducationProps {
  education: Array<{
    degree: string;
    institution: string;
    year: string;
  }>;
  certifications: Array<{
    title: string;
    organization: string;
    year: string;
  }>;
}

export default function Education({ education, certifications }: EducationProps) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Education & Training</h2>
      
      <div className="space-y-8">
        <div>
          <div className="flex items-center mb-4">
            <GraduationCap className="w-6 h-6 text-indigo-600 mr-2" />
            <h3 className="text-xl font-semibold">Education</h3>
          </div>
          <div className="ml-8 space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-6 border-l-2 border-indigo-200 pb-4">
                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-indigo-600"></div>
                <p className="font-semibold text-gray-900">{edu.degree}</p>
                <p className="text-gray-600">{edu.institution}</p>
                <p className="text-sm text-gray-500">{edu.year}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center mb-4">
            <Award className="w-6 h-6 text-indigo-600 mr-2" />
            <h3 className="text-xl font-semibold">Certifications</h3>
          </div>
          <div className="ml-8 space-y-4">
            {certifications.map((cert, index) => (
              <div key={index} className="relative pl-6 border-l-2 border-indigo-200 pb-4">
                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-indigo-600"></div>
                <p className="font-semibold text-gray-900">{cert.title}</p>
                <p className="text-gray-600">{cert.organization}</p>
                <p className="text-sm text-gray-500">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}