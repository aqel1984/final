'use client'

import * as React from "react"
import { AppleBusinessChat } from "@/components/ui/apple-business-chat"

export function ChatWidget() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AppleBusinessChat />
    </div>
  )
}