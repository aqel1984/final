'use client'

import { useEffect } from 'react'

interface ChatConfig {
  license: string
  group?: string
}

interface ChatWidgetType {
  init: () => void
  call: (method: string, params: unknown[]) => void
}

declare global {
  interface Window {
    LiveChatWidget: ChatWidgetType
  }
}

export function LiveChatWidget({ license, group }: ChatConfig) {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.LiveChatWidget) {
      window.LiveChatWidget.init()
      if (group) {
        window.LiveChatWidget.call('set_groups', [group])
      }
    }
  }, [license, group])

  return null
}