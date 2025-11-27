"use client"

import { useState } from "react"
import { LayoutWrapper } from "@/components/layout-wrapper"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function JournalPage() {
  const [entries, setEntries] = useState([
    {
      id: 1,
      date: "2024-11-27",
      title: "A Reflective Day",
      content: "Today was a good day to reflect on my progress...",
    },
    {
      id: 2,
      date: "2024-11-26",
      title: "Gratitude Practice",
      content: "I am grateful for the small moments that bring joy...",
    },
    {
      id: 3,
      date: "2024-11-25",
      title: "Challenges and Growth",
      content: "Every challenge is an opportunity to grow...",
    },
  ])
  const [newEntry, setNewEntry] = useState("")
  const [newTitle, setNewTitle] = useState("")
  const [editingId, setEditingId] = useState<number | null>(null)

  const handleAddEntry = () => {
    if (newEntry.trim() && newTitle.trim()) {
      const today = new Date().toISOString().split("T")[0]
      setEntries([{ id: Date.now(), date: today, title: newTitle, content: newEntry }, ...entries])
      setNewEntry("")
      setNewTitle("")
    }
  }

  const handleDeleteEntry = (id: number) => {
    setEntries(entries.filter((e) => e.id !== id))
  }

  return (
    <LayoutWrapper>
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Journal</h1>
          <p className="text-foreground/70">Express your thoughts and feelings in a safe space</p>
        </div>

        {/* New Entry */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Write a New Entry</CardTitle>
            <CardDescription>Your thoughts are private and secure</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Title</label>
              <input
                type="text"
                placeholder="What's on your mind?"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Your Entry</label>
              <Textarea
                placeholder="Write your thoughts, feelings, or experiences..."
                value={newEntry}
                onChange={(e) => setNewEntry(e.target.value)}
                className="min-h-32"
              />
            </div>
            <Button onClick={handleAddEntry} className="w-full">
              Save Entry
            </Button>
          </CardContent>
        </Card>

        {/* Previous Entries */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Previous Entries</h2>
          {entries.map((entry) => (
            <Card key={entry.id} className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-foreground text-lg">{entry.title}</h3>
                    <p className="text-sm text-foreground/70">{entry.date}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDeleteEntry(entry.id)}
                    className="text-destructive hover:text-destructive"
                  >
                    Delete
                  </Button>
                </div>
                <p className="text-foreground/80 line-clamp-3">{entry.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </LayoutWrapper>
  )
}
