import React from 'react'
import LiveChatWidget from '@/components/LiveChatWidget'
import '@/styles/globals.css' // Import global styles for Tailwind CSS

export const metadata = {
  title: 'Your App Name',
  description: 'Description of your app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
        <LiveChatWidget 
          license={process.env.NEXT_PUBLIC_LIVECHAT_LICENSE}
          group="0"
          appleBusinessChat={{
            businessId: process.env.NEXT_PUBLIC_APPLE_BUSINESS_CHAT_ID,
            buttonId: process.env.NEXT_PUBLIC_APPLE_BUSINESS_CHAT_BUTTON_ID
          }}
        />
      </body>
    </html>
  )
}