'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

interface InteractiveButtonProps {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

const InteractiveButton: React.FC<InteractiveButtonProps> = ({
  onClick,
  className = '',
  children,
}) => {
  const handleClick = () => {
    console.log('Button clicked!');
    onClick?.();
  };

  return (
    <Button
      onClick={handleClick}
      className={className}
      variant="primary"
      size="md"
    >
      {children}
    </Button>
  );
};

export default InteractiveButton;
