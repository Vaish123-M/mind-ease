"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Heart, BarChart3, BookOpen, Wind, MessageSquare, AlertCircle, Home, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: "/dashboard", icon: Home, label: "Home" },
    { href: "/mood-tracker", icon: Heart, label: "Mood" },
    { href: "/journal", icon: BookOpen, label: "Journal" },
    { href: "/breathing", icon: Wind, label: "Breathe" },
    { href: "/chatbot", icon: MessageSquare, label: "Support" },
    { href: "/analytics", icon: BarChart3, label: "Analytics" },
    { href: "/sos", icon: AlertCircle, label: "SOS" },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-lg md:static md:w-64 md:h-screen md:flex md:flex-col md:border-r md:border-t-0 md:shadow-none">
      <div className="hidden md:flex items-center justify-center py-6 px-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
            M
          </div>
          <span className="font-bold text-lg text-foreground">MindEase</span>
        </div>
      </div>

      <div className="flex md:flex-col gap-2 p-2 md:p-4 md:flex-1 justify-around md:justify-start overflow-x-auto md:overflow-x-visible md:overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link key={item.href} href={item.href}>
              <Button
                variant={isActive ? "default" : "ghost"}
                size="sm"
                className="w-full justify-start md:justify-center md:w-auto gap-2 md:gap-0"
              >
                <Icon className="w-5 h-5" />
                <span className="hidden md:inline">{item.label}</span>
              </Button>
            </Link>
          )
        })}
      </div>

      <div className="hidden md:flex p-4 border-t border-border">
        <Button variant="outline" className="w-full gap-2 bg-transparent" size="sm">
          <LogOut className="w-4 h-4" />
          Logout
        </Button>
      </div>
    </nav>
  )
}
