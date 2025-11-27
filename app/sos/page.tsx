"use client"

import { LayoutWrapper } from "@/components/layout-wrapper"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircle, Phone, MessageSquare } from "lucide-react"

export default function SOSPage() {
  const emergencyResources = [
    {
      name: "National Suicide Prevention Lifeline",
      phone: "1-800-273-8255",
      description: "24/7 free and confidential support for people in suicidal crisis",
      available: "Always Available",
    },
    {
      name: "Crisis Text Line",
      text: "Text HOME to 741741",
      description: "Text-based crisis support available 24/7",
      available: "Always Available",
    },
    {
      name: "NAMI Helpline",
      phone: "1-800-950-NAMI",
      description: "Support for mental health questions and concerns",
      available: "10 AM - 10 PM EST",
    },
    {
      name: "International Association for Suicide Prevention",
      description: "Find crisis centers in your country",
      available: "Worldwide",
    },
  ]

  const copingStrategies = [
    {
      title: "Grounding Technique",
      description: "Name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste",
    },
    {
      title: "Deep Breathing",
      description: "Take slow, deep breaths to calm your nervous system",
    },
    {
      title: "Reach Out",
      description: "Contact a trusted friend, family member, or mental health professional",
    },
    {
      title: "Creative Expression",
      description: "Draw, write, or create to express your feelings",
    },
  ]

  return (
    <LayoutWrapper>
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="w-8 h-8 text-destructive" />
            <h1 className="text-3xl font-bold text-foreground">Emergency Support</h1>
          </div>
          <p className="text-foreground/70">If you're in crisis, please reach out immediately</p>
        </div>

        {/* Emergency Contacts */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-foreground mb-4">Crisis Support Services</h2>
          <div className="space-y-4">
            {emergencyResources.map((resource, index) => (
              <Card key={index} className="border-destructive/30 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg text-foreground mb-2">{resource.name}</h3>
                  <p className="text-foreground/70 mb-4">{resource.description}</p>
                  <div className="flex flex-col sm:flex-row gap-2 mb-3">
                    {resource.phone && (
                      <Button className="sm:flex-1 gap-2">
                        <Phone className="w-4 h-4" />
                        {resource.phone}
                      </Button>
                    )}
                    {resource.text && (
                      <Button variant="outline" className="sm:flex-1 gap-2 bg-transparent">
                        <MessageSquare className="w-4 h-4" />
                        {resource.text}
                      </Button>
                    )}
                  </div>
                  <p className="text-sm text-foreground/60">{resource.available}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Coping Strategies */}
        <div>
          <h2 className="text-xl font-bold text-foreground mb-4">Immediate Coping Strategies</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {copingStrategies.map((strategy, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-foreground mb-2">{strategy.title}</h3>
                  <p className="text-sm text-foreground/70">{strategy.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Important Notice */}
        <Card className="mt-8 bg-destructive/10 border-destructive/30">
          <CardContent className="pt-6">
            <p className="text-foreground font-medium">
              If you're having thoughts of suicide or self-harm, please contact emergency services (911 in the US) or go
              to your nearest emergency room immediately.
            </p>
          </CardContent>
        </Card>
      </div>
    </LayoutWrapper>
  )
}
