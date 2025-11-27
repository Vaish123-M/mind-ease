"use client"

import { LayoutWrapper } from "@/components/layout-wrapper"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Heart, BookOpen, Wind, MessageSquare, TrendingUp, AlertCircle } from "lucide-react"

export default function DashboardPage() {
  const recentMoods = [
    { date: "Today", mood: "😊", label: "Happy" },
    { date: "Yesterday", mood: "😌", label: "Calm" },
    { date: "2 days ago", mood: "😐", label: "Neutral" },
  ]

  return (
    <LayoutWrapper>
      <div className="max-w-6xl mx-auto p-4 md:p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back!</h1>
          <p className="text-foreground/70">How are you feeling today?</p>
        </div>

        {/* Quick Action Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <Link href="/mood-tracker">
            <Card className="cursor-pointer hover:shadow-lg transition-shadow h-full">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-foreground/70 mb-2">Track Mood</p>
                    <p className="text-2xl font-bold text-primary">3 today</p>
                  </div>
                  <Heart className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          </Link>
          <Link href="/journal">
            <Card className="cursor-pointer hover:shadow-lg transition-shadow h-full">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-foreground/70 mb-2">Journal Entries</p>
                    <p className="text-2xl font-bold text-accent">5 this week</p>
                  </div>
                  <BookOpen className="w-8 h-8 text-accent" />
                </div>
              </CardContent>
            </Card>
          </Link>
          <Link href="/breathing">
            <Card className="cursor-pointer hover:shadow-lg transition-shadow h-full">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-foreground/70 mb-2">Breathing</p>
                    <p className="text-2xl font-bold text-secondary">2 sessions</p>
                  </div>
                  <Wind className="w-8 h-8 text-secondary" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Recent Activity */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Recent Moods</CardTitle>
              <CardDescription>Your mood entries from the past few days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentMoods.map((entry, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div>
                      <p className="font-medium text-foreground">{entry.label}</p>
                      <p className="text-sm text-foreground/70">{entry.date}</p>
                    </div>
                    <span className="text-2xl">{entry.mood}</span>
                  </div>
                ))}
              </div>
              <Button asChild className="w-full mt-4">
                <Link href="/mood-tracker">View More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Access tools for better wellbeing</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button asChild variant="outline" className="w-full justify-start bg-transparent">
                <Link href="/breathing">
                  <Wind className="w-4 h-4 mr-2" />
                  Start Breathing Exercise
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start bg-transparent">
                <Link href="/chatbot">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Chat with Support
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start bg-transparent">
                <Link href="/analytics">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  View Analytics
                </Link>
              </Button>
              <Button asChild variant="destructive" className="w-full justify-start">
                <Link href="/sos">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  Emergency Support
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </LayoutWrapper>
  )
}
