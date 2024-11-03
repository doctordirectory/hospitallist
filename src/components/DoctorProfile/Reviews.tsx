import React from 'react';
import { Star, ThumbsUp } from 'lucide-react';

interface ReviewsProps {
  reviews: Array<{
    id: string;
    author: string;
    rating: number;
    date: string;
    comment: string;
    helpful: number;
  }>;
}

export default function Reviews({ reviews }: ReviewsProps) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Patient Reviews</h2>
      
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-200 last:border-0 pb-6">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="font-semibold text-gray-900">{review.author}</p>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-500 ml-2">{review.date}</span>
                </div>
              </div>
              <button className="flex items-center text-gray-500 hover:text-indigo-600">
                <ThumbsUp className="w-4 h-4 mr-1" />
                <span className="text-sm">{review.helpful}</span>
              </button>
            </div>
            <p className="text-gray-600 mt-2">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}