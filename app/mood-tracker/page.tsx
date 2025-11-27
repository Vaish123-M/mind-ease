"use client"

import { useState } from "react"
import { LayoutWrapper } from "@/components/layout-wrapper"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function MoodTrackerPage() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null)
  const [moodLog, setMoodLog] = useState([
    { date: "2024-11-27", mood: "happy", intensity: 8, notes: "Great day at work!" },
    { date: "2024-11-26", mood: "calm", intensity: 7, notes: "Had a nice meditation session" },
    { date: "2024-11-25", mood: "neutral", intensity: 5, notes: "Regular day" },
  ])

  const moods = [
    { id: "happy", emoji: "😊", label: "Happy", color: "bg-yellow-100 border-yellow-300" },
    { id: "calm", emoji: "😌", label: "Calm", color: "bg-blue-100 border-blue-300" },
    { id: "anxious", emoji: "😰", label: "Anxious", color: "bg-orange-100 border-orange-300" },
    { id: "sad", emoji: "😢", label: "Sad", color: "bg-indigo-100 border-indigo-300" },
    { id: "neutral", emoji: "😐", label: "Neutral", color: "bg-gray-100 border-gray-300" },
    { id: "energetic", emoji: "🚀", label: "Energetic", color: "bg-green-100 border-green-300" },
  ]

  const handleMoodSelect = (moodId: string) => {
    setSelectedMood(moodId)
  }

  const handleLogMood = () => {
    if (selectedMood) {
      const mood = moods.find((m) => m.id === selectedMood)
      const today = new Date().toISOString().split("T")[0]
      const newEntry = { date: today, mood: selectedMood, intensity: 5, notes: "" }
      setMoodLog([newEntry, ...moodLog])
      setSelectedMood(null)
    }
  }

  return (
    <LayoutWrapper>
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Mood Tracker</h1>
          <p className="text-foreground/70">Track your daily mood and emotional patterns</p>
        </div>

        {/* Mood Selection */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>How are you feeling right now?</CardTitle>
            <CardDescription>Select your current mood</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-6">
              {moods.map((mood) => (
                <button
                  key={mood.id}
                  onClick={() => handleMoodSelect(mood.id)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    selectedMood === mood.id
                      ? `${mood.color} border-2 border-current scale-105`
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="text-3xl mb-2">{mood.emoji}</div>
                  <p className="text-xs font-medium text-foreground">{mood.label}</p>
                </button>
              ))}
            </div>
            <Button onClick={handleLogMood} disabled={!selectedMood} className="w-full">
              Log Mood
            </Button>
          </CardContent>
        </Card>

        {/* Mood History */}
        <Card>
          <CardHeader>
            <CardTitle>Mood History</CardTitle>
            <CardDescription>Your recent mood entries</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {moodLog.map((entry, index) => {
                const mood = moods.find((m) => m.id === entry.mood)
                return (
                  <div key={index} className="p-4 bg-muted rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{mood?.emoji}</span>
                        <div>
                          <p className="font-medium text-foreground">{mood?.label}</p>
                          <p className="text-sm text-foreground/70">{entry.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-foreground">Intensity</p>
                        <p className="text-lg font-bold text-primary">{entry.intensity}/10</p>
                      </div>
                    </div>
                    {entry.notes && <p className="text-sm text-foreground/70 mt-2">{entry.notes}</p>}
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </LayoutWrapper>
  )
}
