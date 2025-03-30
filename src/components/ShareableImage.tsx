import React, { useState } from 'react';
import { Share, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import CompanyLogo from './CompanyLogo';
import PlaceholderImage from './PlaceholderImage';
import ShareOptions from './ShareOptions';

interface ShareableImageProps {
  src: string;
  alt: string;
  id: string;
}

const ShareableImage: React.FC<ShareableImageProps> = ({ src, alt, id }) => {
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleShareClick = () => {
    setShowShareOptions(!showShareOptions);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.error('Image failed to load:', src);
    // Keep the error state but don't show an error UI
  };

  return (
    <div className="gallery-image relative group mb-6">
      <div className="relative rounded-lg overflow-hidden">
        {src.startsWith('/images') ? (
          <PlaceholderImage text={alt} className="w-full h-60 object-cover" />
        ) : (
          <img 
            src={src} 
            alt={alt} 
            className="w-full h-60 object-cover"
            onError={handleImageError}
          />
        )}
        
        {/* Company logo overlay */}
        <div className="absolute bottom-3 right-3">
          <CompanyLogo variant="light" size="sm" />
        </div>
      </div>
      
      <div className="mt-2 flex justify-between items-center">
        <p className="text-sm text-gray-700 truncate max-w-[80%]">{alt}</p>
        <Button 
          variant="ghost" 
          size="icon" 
          className="share-button"
          onClick={handleShareClick}
          aria-label="Share this image"
        >
          {isLoading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <Share className="h-5 w-5" />
          )}
        </Button>
      </div>
      
      {showShareOptions && (
        <ShareOptions 
          imageId={id} 
          imageSrc={src} 
          imageAlt={alt} 
          onClose={() => setShowShareOptions(false)}
        />
      )}
    </div>
  );
};

export default ShareableImage;
