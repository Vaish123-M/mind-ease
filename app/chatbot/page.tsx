"use client"

import { useState } from "react"
import { LayoutWrapper } from "@/components/layout-wrapper"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"

export default function ChatbotPage() {
  const [messages, setMessages] = useState([
    { id: 1, sender: "bot", text: "Hello! I'm here to support you. How can I help you today?" },
    { id: 2, sender: "user", text: "I've been feeling stressed lately" },
    {
      id: 3,
      sender: "bot",
      text: "I'm sorry to hear that. Stress is something many people experience. Have you tried any relaxation techniques?",
    },
  ])
  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, sender: "user", text: newMessage }])
      setNewMessage("")

      // Simulate bot response
      setTimeout(() => {
        const responses = [
          "That's a great perspective. How does that make you feel?",
          "I'm here to listen and support you. Would you like to explore this further?",
          "Thank you for sharing. Remember, it's okay to take breaks when you need them.",
          "That's an important insight. Have you considered talking to someone about this?",
        ]
        const randomResponse = responses[Math.floor(Math.random() * responses.length)]
        setMessages((prev) => [...prev, { id: prev.length + 1, sender: "bot", text: randomResponse }])
      }, 500)
    }
  }

  return (
    <LayoutWrapper>
      <div className="max-w-4xl mx-auto p-4 md:p-8 flex flex-col h-[calc(100vh-120px)] md:h-screen md:pt-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">Support Chat</h1>
          <p className="text-foreground/70">Talk to our AI support assistant</p>
        </div>

        <Card className="flex-1 flex flex-col">
          <CardContent className="flex-1 overflow-y-auto space-y-4 p-6">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                    message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </CardContent>

          <div className="border-t border-border p-4">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button onClick={handleSendMessage} size="icon">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </LayoutWrapper>
  )
}
