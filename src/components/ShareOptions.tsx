
import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Share2, 
  MessageCircle, 
  Copy,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

interface ShareOptionsProps {
  imageId: string;
  imageSrc: string;
  imageAlt: string;
  onClose: () => void;
}

const ShareOptions: React.FC<ShareOptionsProps> = ({ imageId, imageSrc, imageAlt, onClose }) => {
  const { toast } = useToast();
  
  const handleWhatsAppShare = () => {
    const text = `Check out this ${imageAlt} image!`;
    // In a real app, we would use an absolute URL
    const imageUrl = window.location.origin + imageSrc;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + imageUrl)}`;
    
    window.open(whatsappUrl, '_blank');
    toast({
      title: "Sharing via WhatsApp",
      description: "Opening WhatsApp share dialog...",
    });
    onClose();
  };

  const handleOtherShare = (platform: string) => {
    toast({
      title: `Sharing via ${platform}`,
      description: `This would open a ${platform} share dialog in a production app.`,
    });
    onClose();
  };

  return (
    <Card className="absolute bottom-16 right-0 z-10 p-4 w-64 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-sm font-medium">Share via</h3>
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="grid grid-cols-4 gap-2">
        <Button 
          variant="outline" 
          size="icon" 
          className="social-icon flex flex-col items-center justify-center h-14 p-2"
          onClick={handleWhatsAppShare}
        >
          <MessageCircle className="h-6 w-6 text-green-600" />
          <span className="text-[10px] mt-1">WhatsApp</span>
        </Button>
        
        <Button 
          variant="outline" 
          size="icon" 
          className="social-icon flex flex-col items-center justify-center h-14 p-2"
          onClick={() => handleOtherShare('Facebook')}
        >
          <Facebook className="h-6 w-6 text-blue-600" />
          <span className="text-[10px] mt-1">Facebook</span>
        </Button>
        
        <Button 
          variant="outline" 
          size="icon" 
          className="social-icon flex flex-col items-center justify-center h-14 p-2"
          onClick={() => handleOtherShare('Instagram')}
        >
          <Instagram className="h-6 w-6 text-purple-600" />
          <span className="text-[10px] mt-1">Instagram</span>
        </Button>
        
        <Button 
          variant="outline" 
          size="icon" 
          className="social-icon flex flex-col items-center justify-center h-14 p-2"
          onClick={() => handleOtherShare('Twitter')}
        >
          <Twitter className="h-6 w-6 text-blue-400" />
          <span className="text-[10px] mt-1">Twitter</span>
        </Button>
        
        <Button 
          variant="outline" 
          size="icon" 
          className="social-icon flex flex-col items-center justify-center h-14 p-2 col-span-2"
          onClick={() => {
            navigator.clipboard.writeText(window.location.origin + imageSrc);
            toast({
              title: "Link copied",
              description: "Image link copied to clipboard!",
            });
            onClose();
          }}
        >
          <Copy className="h-6 w-6 text-gray-600" />
          <span className="text-[10px] mt-1">Copy Link</span>
        </Button>
        
        <Button 
          variant="outline" 
          size="icon" 
          className="social-icon flex flex-col items-center justify-center h-14 p-2 col-span-2"
          onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: imageAlt,
                text: `Check out this ${imageAlt} image!`,
                url: window.location.origin + imageSrc,
              });
            } else {
              toast({
                title: "Sharing not supported",
                description: "Your browser doesn't support the Web Share API.",
              });
            }
            onClose();
          }}
        >
          <Share2 className="h-6 w-6 text-purple-500" />
          <span className="text-[10px] mt-1">More Options</span>
        </Button>
      </div>
    </Card>
  );
};

export default ShareOptions;
