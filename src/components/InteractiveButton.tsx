// src/components/InteractiveButton.tsx

'use client'

import React from 'react'
import Button from '@/components/ui/button'

export default function InteractiveButton() {
  const handleClick = () => {
    console.log('Button clicked!')
  }

  return (
    <Button onClick={handleClick}>
      Click me
    </Button>
  )
}
