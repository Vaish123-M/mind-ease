"use client"

import { useState, useEffect } from "react"
import { LayoutWrapper } from "@/components/layout-wrapper"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function BreathingPage() {
  const [isExercising, setIsExercising] = useState(false)
  const [phase, setPhase] = useState<"inhale" | "hold" | "exhale" | "ready">("ready")
  const [count, setCount] = useState(0)
  const [cycles, setCycles] = useState(0)

  const exercises = [
    {
      name: "4-7-8 Breathing",
      description: "Inhale for 4 seconds, hold for 7, exhale for 8",
      phases: { inhale: 4, hold: 7, exhale: 8 },
      duration: "Quick",
    },
    {
      name: "Box Breathing",
      description: "Equal breathing pattern: 4-4-4-4",
      phases: { inhale: 4, hold: 4, exhale: 4 },
      duration: "Medium",
    },
    {
      name: "Deep Relaxation",
      description: "Slow breathing: 5-10-5 pattern",
      phases: { inhale: 5, hold: 10, exhale: 5 },
      duration: "Long",
    },
  ]

  useEffect(() => {
    if (!isExercising) return

    const timer = setInterval(() => {
      setCount((prev) => prev + 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [isExercising])

  const startExercise = () => {
    setIsExercising(true)
    setCycles(0)
    setCount(0)
    setPhase("inhale")
  }

  const stopExercise = () => {
    setIsExercising(false)
    setPhase("ready")
    setCount(0)
  }

  return (
    <LayoutWrapper>
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Breathing Exercises</h1>
          <p className="text-foreground/70">Guided breathing techniques for relaxation and stress relief</p>
        </div>

        {/* Current Exercise */}
        <Card className="mb-8">
          <CardHeader className="text-center">
            <CardTitle>Active Session</CardTitle>
            <CardDescription>Follow the breathing guide below</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            {!isExercising ? (
              <div className="text-center mb-8">
                <p className="text-lg text-foreground/70 mb-4">Select an exercise to begin</p>
              </div>
            ) : (
              <>
                <div className="mb-8 text-center">
                  <div
                    className={`w-32 h-32 rounded-full flex items-center justify-center text-white font-bold text-4xl transition-transform duration-1000 ${
                      phase === "inhale"
                        ? "bg-primary scale-125"
                        : phase === "hold"
                          ? "bg-accent"
                          : phase === "exhale"
                            ? "bg-secondary scale-75"
                            : "bg-muted"
                    }`}
                  >
                    {count}
                  </div>
                  <p className="mt-4 text-lg font-semibold text-foreground capitalize">
                    {phase === "ready" ? "Get ready..." : phase}
                  </p>
                  <p className="text-sm text-foreground/70">Cycle: {cycles}</p>
                </div>
              </>
            )}

            <div className="flex gap-4">
              {!isExercising ? (
                <Button onClick={startExercise} size="lg">
                  Start Exercise
                </Button>
              ) : (
                <Button onClick={stopExercise} variant="destructive" size="lg">
                  Stop Exercise
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Exercise Options */}
        <div className="grid md:grid-cols-3 gap-4">
          {exercises.map((exercise) => (
            <Card key={exercise.name} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{exercise.name}</CardTitle>
                <CardDescription>{exercise.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70 mb-4">Duration: {exercise.duration}</p>
                <Button variant="outline" className="w-full bg-transparent" size="sm">
                  Try This
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </LayoutWrapper>
  )
}
