
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { getFestivalById } from '@/data/festivals';
import ShareableImage from './ShareableImage';

const FestivalGallery: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const festival = getFestivalById(id || '');
  
  if (!festival) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">Festival Not Found</h2>
          <p className="mb-6">Sorry, the festival you're looking for doesn't exist.</p>
          <Link to="/">
            <Button>
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link to="/">
          <Button variant="ghost" className="pl-0">
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to All Festivals
          </Button>
        </Link>
      </div>
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{festival.name}</h1>
        <div className="flex flex-wrap gap-2 items-center mb-4">
          <span className="text-gray-500">{festival.month}</span>
          <span className="text-gray-300">•</span>
          <span className="bg-secondary/20 text-secondary-foreground px-2 py-0.5 rounded-full text-sm">
            {festival.category}
          </span>
        </div>
        <p className="text-gray-600">{festival.description}</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {festival.images.map(image => (
          <ShareableImage
            key={image.id}
            id={image.id}
            src={image.src}
            alt={image.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default FestivalGallery;
