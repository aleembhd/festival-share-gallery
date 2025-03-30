
import React from 'react';
import { cn } from '@/lib/utils';

interface CompanyLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  variant?: 'light' | 'dark';
}

const CompanyLogo: React.FC<CompanyLogoProps> = ({ 
  size = 'md', 
  className,
  variant = 'light'
}) => {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  const variantClasses = {
    light: 'bg-white text-primary',
    dark: 'bg-primary text-white',
  };
  
  return (
    <div className={cn(
      'rounded-full flex items-center justify-center font-bold',
      sizeClasses[size],
      variantClasses[variant],
      'shadow-md',
      className
    )}>
      FC
    </div>
  );
};

export default CompanyLogo;
