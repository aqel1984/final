import React from 'react';
import AppleBusinessChat from '@/components/AppleBusinessChat';

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <AppleBusinessChat 
        businessId={process.env.NEXT_PUBLIC_APPLE_BUSINESS_CHAT_ID || ''}
        buttonId={process.env.NEXT_PUBLIC_APPLE_BUSINESS_CHAT_BUTTON_ID || ''}
      />
    </main>
  );
}