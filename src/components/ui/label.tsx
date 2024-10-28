import React from 'react';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
}

const Label: React.FC<LabelProps> = ({ className = '', children, ...props }) => {
  const baseStyles = "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70";

  return (
    <label className={`${baseStyles} ${className}`} {...props}>
      {children}
    </label>
  );
};

export { Label };