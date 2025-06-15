"use client"

import { AlertTriangle, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function BetaBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 relative">
      <div className="flex items-center justify-center gap-2 text-sm font-medium">
        <AlertTriangle className="h-4 w-4 flex-shrink-0" />
        <span className="text-center">
          ⚠️ This is a <strong>vibe-coded beta version</strong> - expect bugs! DM <strong>@nerrdy_</strong> on Discord
          for issues or feedback
        </span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsVisible(false)}
          className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 p-0 hover:bg-white/20 text-white"
        >
          <X className="h-3 w-3" />
          <span className="sr-only">Dismiss banner</span>
        </Button>
      </div>
    </div>
  )
}
