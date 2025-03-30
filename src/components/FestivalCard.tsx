
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';
import { Festival } from '@/data/festivals';
import PlaceholderImage from './PlaceholderImage';
import { Link } from 'react-router-dom';

interface FestivalCardProps {
  festival: Festival;
}

const FestivalCard: React.FC<FestivalCardProps> = ({ festival }) => {
  return (
    <Link to={`/festival/${festival.id}`}>
      <Card className="festival-card overflow-hidden h-full">
        <div className="relative">
          <PlaceholderImage 
            text={festival.name}
            className="w-full h-40 object-cover"
          />
          <Badge className="absolute top-2 right-2">
            {festival.category}
          </Badge>
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg">{festival.name}</h3>
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{festival.month}</span>
          </div>
          <p className="text-sm text-gray-600 mt-2 line-clamp-2">{festival.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default FestivalCard;
