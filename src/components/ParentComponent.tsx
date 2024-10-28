// ParentComponent.tsx
"use client";
import React from 'react';
import { ErrorBoundary } from './ErrorBoundary';

const ParentComponent = () => {
  return (
    <ErrorBoundary>
      {/* Your other components go here */}
    </ErrorBoundary>
  );
};

export default ParentComponent;
