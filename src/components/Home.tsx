
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, Search } from 'lucide-react';
import { festivals, getCategories } from '@/data/festivals';
import FestivalCard from './FestivalCard';

const Home: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = getCategories();
  
  const filteredFestivals = festivals.filter(festival => {
    const matchesSearch = festival.name.toLowerCase().includes(search.toLowerCase()) ||
                         festival.description.toLowerCase().includes(search.toLowerCase());
    
    const matchesCategory = selectedCategory ? festival.category === selectedCategory : true;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Festival Gallery</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore and share beautiful festival images throughout the year, complete with your brand.
        </p>
      </div>
      
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search festivals..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(null)}
              className="min-w-20"
            >
              All
            </Button>
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="min-w-20"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Monthly sections */}
      <div className="space-y-10">
        {getMonthsFromFestivals(filteredFestivals).map(month => {
          const monthFestivals = filteredFestivals.filter(f => f.month === month);
          
          if (monthFestivals.length === 0) return null;
          
          return (
            <div key={month}>
              <div className="flex items-center mb-4">
                <Calendar className="mr-2 h-5 w-5 text-primary" />
                <h2 className="text-2xl font-bold">{month}</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {monthFestivals.map(festival => (
                  <FestivalCard key={festival.id} festival={festival} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
      
      {filteredFestivals.length === 0 && (
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">No festivals found</h2>
          <p className="mb-6">Try adjusting your search or filters.</p>
          <Button onClick={() => {
            setSearch('');
            setSelectedCategory(null);
          }}>Clear Filters</Button>
        </div>
      )}
    </div>
  );
};

// Helper function to get months from festivals list
const getMonthsFromFestivals = (festivals: typeof import('../data/festivals').festivals) => {
  const monthOrder = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];
  
  const months = new Set(festivals.map(f => f.month));
  return Array.from(months).sort((a, b) => 
    monthOrder.indexOf(a) - monthOrder.indexOf(b)
  );
};

export default Home;
