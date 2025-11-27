import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-background">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
              M
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">MindEase</h1>
          </div>
          <p className="text-xl text-foreground/80 mb-4 max-w-2xl mx-auto">
            Your personal companion for mental wellbeing. Track your mood, practice mindfulness, and find support
            whenever you need it.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="font-bold text-lg mb-2 text-foreground">Track Your Mood</h3>
            <p className="text-foreground/70">
              Log daily mood entries and visualize your emotional patterns over time.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl mb-3">📝</div>
            <h3 className="font-bold text-lg mb-2 text-foreground">Journal Thoughts</h3>
            <p className="text-foreground/70">
              Express yourself freely with private journaling and reflection exercises.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl mb-3">🧘</div>
            <h3 className="font-bold text-lg mb-2 text-foreground">Breathing Exercises</h3>
            <p className="text-foreground/70">Guided breathing techniques to help manage stress and anxiety.</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/login">
            <Button className="w-full sm:w-auto" size="lg">
              Login
            </Button>
          </Link>
          <Link href="/signup">
            <Button variant="outline" className="w-full sm:w-auto bg-transparent" size="lg">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
