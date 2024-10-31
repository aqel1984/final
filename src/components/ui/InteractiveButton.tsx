'use client'

import { Button } from '@/components/ui/button'

interface InteractiveButtonProps {
  children?: React.ReactNode
  onClick?: () => void
}

export function InteractiveButton({ children, onClick }: InteractiveButtonProps = {}) {
  return (
    <Button 
      onClick={onClick}
      className="transition-all duration-200 hover:scale-105"
    >
      {children || 'Interactive Button'}
    </Button>
  )
}