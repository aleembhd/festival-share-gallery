
import React from 'react';
import { cn } from '@/lib/utils';

interface PlaceholderImageProps {
  text?: string;
  className?: string;
  width?: number;
  height?: number;
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  text = "Festival Image",
  className,
  width = 400,
  height = 300
}) => {
  // Generate a random pastel color for the background
  const colors = [
    "bg-purple-200", "bg-blue-200", "bg-green-200", 
    "bg-yellow-200", "bg-red-200", "bg-pink-200"
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div 
      className={cn(
        "flex items-center justify-center rounded-lg overflow-hidden", 
        randomColor,
        className
      )}
      style={{ width, height }}
    >
      <div className="text-gray-700 text-center font-medium">
        {text}
      </div>
    </div>
  );
};

export default PlaceholderImage;
