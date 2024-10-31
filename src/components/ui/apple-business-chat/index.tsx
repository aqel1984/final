'use client'

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { ButtonHTMLAttributes } from 'react'

interface AppleBusinessChatProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  businessId?: string
  buttonId?: string
  variant?: "default" | "secondary" | "outline"
}

export function AppleBusinessChat({ 
  className, 
  businessId = "your-business-id", 
  buttonId = "contact-us",
  variant = "secondary",
  children,
  ...props 
}: AppleBusinessChatProps) {
  const handleClick = () => {
    const url = `https://bcrw.apple.com/business/api/chat/0/${businessId}/${buttonId}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <Button
      variant={variant}
      className={cn("flex items-center gap-2", className)}
      onClick={handleClick}
      {...props}
    >
      <MessageCircle className="h-4 w-4" />
      {children || <span>Chat with us on Apple Business</span>}
    </Button>
  )
}