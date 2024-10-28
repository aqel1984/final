import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outline';
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: 'default' | 'compact' | 'none';
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  variant = 'default',
  ...props 
}) => {
  const baseStyles = "rounded-lg";
  const variantStyles = {
    default: "bg-card text-card-foreground shadow-md",
    outline: "border border-card-border"
  };

  return (
    <div 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
};

export const CardContent: React.FC<CardContentProps> = ({ 
  children, 
  className = '', 
  padding = 'default',
  ...props 
}) => {
  const paddingStyles = {
    default: 'p-6',
    compact: 'p-4',
    none: ''
  };

  return (
    <div 
      className={`${paddingStyles[padding]} ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
};