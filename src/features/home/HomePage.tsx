import React from 'react'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to Jehad Aqel Ltd</h1>
      <p className="text-xl mb-8">Discover our premium shea butter products.</p>
      <Image 
        src="/path-to-your-image.jpg" 
        alt="Shea butter products" 
        width={600} 
        height={400}
        className="rounded-lg shadow-md"
      />
    </div>
  )
}
