import type React from "react"
import { Navigation } from "./navigation"

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-background">
      <Navigation />
      <main className="flex-1 pb-20 md:pb-0 overflow-auto">{children}</main>
    </div>
  )
}
