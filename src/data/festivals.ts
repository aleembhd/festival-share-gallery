
export interface Festival {
  id: string;
  name: string;
  month: string;
  category: string;
  description: string;
  images: FestivalImage[];
}

export interface FestivalImage {
  id: string;
  src: string;
  alt: string;
}

export const festivals: Festival[] = [
  {
    id: "ramzan",
    name: "Ramzan",
    month: "April",
    category: "Religious",
    description: "Celebrate the holy month of Ramadan with beautiful greetings",
    images: [
      { id: "ramzan-1", src: "/images/ramzan-1.jpg", alt: "Ramzan Greeting 1" },
      { id: "ramzan-2", src: "/images/ramzan-2.jpg", alt: "Ramzan Greeting 2" },
      { id: "ramzan-3", src: "/images/ramzan-3.jpg", alt: "Ramzan Greeting 3" },
      { id: "ramzan-4", src: "/images/ramzan-4.jpg", alt: "Ramzan Greeting 4" },
      { id: "ramzan-5", src: "/images/ramzan-5.jpg", alt: "Ramzan Greeting 5" },
      { id: "ramzan-6", src: "/images/ramzan-6.jpg", alt: "Ramzan Greeting 6" },
      { id: "ramzan-7", src: "/images/ramzan-7.jpg", alt: "Ramzan Greeting 7" },
      { id: "ramzan-8", src: "/images/ramzan-8.jpg", alt: "Ramzan Greeting 8" },
      { id: "ramzan-9", src: "/images/ramzan-9.jpg", alt: "Ramzan Greeting 9" },
      { id: "ramzan-10", src: "/images/ramzan-10.jpg", alt: "Ramzan Greeting 10" },
    ]
  },
  {
    id: "diwali",
    name: "Diwali",
    month: "October",
    category: "Religious",
    description: "Share the festival of lights with stunning Diwali images",
    images: [
      { id: "diwali-1", src: "/images/diwali-1.jpg", alt: "Diwali Greeting 1" },
      { id: "diwali-2", src: "/images/diwali-2.jpg", alt: "Diwali Greeting 2" },
      { id: "diwali-3", src: "/images/diwali-3.jpg", alt: "Diwali Greeting 3" },
      { id: "diwali-4", src: "/images/diwali-4.jpg", alt: "Diwali Greeting 4" },
      { id: "diwali-5", src: "/images/diwali-5.jpg", alt: "Diwali Greeting 5" },
    ]
  },
  {
    id: "christmas",
    name: "Christmas",
    month: "December",
    category: "Religious",
    description: "Spread Christmas joy with these festive images",
    images: [
      { id: "christmas-1", src: "/images/christmas-1.jpg", alt: "Christmas Greeting 1" },
      { id: "christmas-2", src: "/images/christmas-2.jpg", alt: "Christmas Greeting 2" },
      { id: "christmas-3", src: "/images/christmas-3.jpg", alt: "Christmas Greeting 3" },
      { id: "christmas-4", src: "/images/christmas-4.jpg", alt: "Christmas Greeting 4" },
      { id: "christmas-5", src: "/images/christmas-5.jpg", alt: "Christmas Greeting 5" },
    ]
  },
  {
    id: "new-year",
    name: "New Year",
    month: "January",
    category: "Seasonal",
    description: "Welcome the new year with these celebration images",
    images: [
      { id: "new-year-1", src: "/images/new-year-1.jpg", alt: "New Year Greeting 1" },
      { id: "new-year-2", src: "/images/new-year-2.jpg", alt: "New Year Greeting 2" },
      { id: "new-year-3", src: "/images/new-year-3.jpg", alt: "New Year Greeting 3" },
      { id: "new-year-4", src: "/images/new-year-4.jpg", alt: "New Year Greeting 4" },
      { id: "new-year-5", src: "/images/new-year-5.jpg", alt: "New Year Greeting 5" },
    ]
  },
  {
    id: "holi",
    name: "Holi",
    month: "March",
    category: "Religious",
    description: "Celebrate the festival of colors with vibrant Holi images",
    images: [
      { id: "holi-1", src: "/images/holi-1.jpg", alt: "Holi Greeting 1" },
      { id: "holi-2", src: "/images/holi-2.jpg", alt: "Holi Greeting 2" },
      { id: "holi-3", src: "/images/holi-3.jpg", alt: "Holi Greeting 3" },
      { id: "holi-4", src: "/images/holi-4.jpg", alt: "Holi Greeting 4" },
      { id: "holi-5", src: "/images/holi-5.jpg", alt: "Holi Greeting 5" },
    ]
  },
  {
    id: "independence-day",
    name: "Independence Day",
    month: "August",
    category: "National",
    description: "Show your patriotism with these Independence Day images",
    images: [
      { id: "independence-1", src: "/images/independence-1.jpg", alt: "Independence Day Greeting 1" },
      { id: "independence-2", src: "/images/independence-2.jpg", alt: "Independence Day Greeting 2" },
      { id: "independence-3", src: "/images/independence-3.jpg", alt: "Independence Day Greeting 3" },
      { id: "independence-4", src: "/images/independence-4.jpg", alt: "Independence Day Greeting 4" },
      { id: "independence-5", src: "/images/independence-5.jpg", alt: "Independence Day Greeting 5" },
    ]
  },
];

// Month order for sorting
const monthOrder = [
  "January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December"
];

// Group festivals by month
export const festivalsByMonth = festivals.sort((a, b) => {
  return monthOrder.indexOf(a.month) - monthOrder.indexOf(b.month);
});

// Get festival by ID
export const getFestivalById = (id: string): Festival | undefined => {
  return festivals.find(festival => festival.id === id);
};

// Get all unique categories
export const getCategories = (): string[] => {
  const categories = new Set(festivals.map(festival => festival.category));
  return Array.from(categories);
};
