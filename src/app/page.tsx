// src/app/page.tsx
import React from 'react';
import AppleBusinessChat from '@/components/AppleBusinessChat';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to My New Project</h1>
      <AppleBusinessChat 
        businessId="cf3c57a7-4004-41e7-87de-7e3b730c4b40"
        buttonId="K9J287V2VW"
      />
    </main>
  );
}
