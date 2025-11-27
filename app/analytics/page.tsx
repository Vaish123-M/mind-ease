"use client"

import { LayoutWrapper } from "@/components/layout-wrapper"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

const moodData = [
  { date: "Mon", happy: 2, calm: 3, anxious: 1, neutral: 2 },
  { date: "Tue", happy: 3, calm: 2, anxious: 2, neutral: 1 },
  { date: "Wed", happy: 2, calm: 4, anxious: 1, neutral: 1 },
  { date: "Thu", happy: 4, calm: 3, anxious: 2, neutral: 1 },
  { date: "Fri", happy: 3, calm: 3, anxious: 1, neutral: 2 },
  { date: "Sat", happy: 5, calm: 2, anxious: 0, neutral: 1 },
  { date: "Sun", happy: 4, calm: 4, anxious: 1, neutral: 0 },
]

const moodDistribution = [
  { name: "Happy", value: 23, color: "#FBBF24" },
  { name: "Calm", value: 21, color: "#60A5FA" },
  { name: "Anxious", value: 8, color: "#FB923C" },
  { name: "Neutral", value: 8, color: "#D1D5DB" },
]

const journalStats = [
  { week: "Week 1", entries: 4 },
  { week: "Week 2", entries: 6 },
  { week: "Week 3", entries: 5 },
  { week: "Week 4", entries: 8 },
]

export default function AnalyticsPage() {
  return (
    <LayoutWrapper>
      <div className="max-w-6xl mx-auto p-4 md:p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Analytics Dashboard</h1>
          <p className="text-foreground/70">Track your wellness progress over time</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm text-foreground/70 mb-1">Total Moods Logged</p>
                <p className="text-3xl font-bold text-primary">62</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm text-foreground/70 mb-1">Journal Entries</p>
                <p className="text-3xl font-bold text-accent">23</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm text-foreground/70 mb-1">Breathing Sessions</p>
                <p className="text-3xl font-bold text-secondary">15</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm text-foreground/70 mb-1">Days Active</p>
                <p className="text-3xl font-bold text-primary">28</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Mood Trends</CardTitle>
              <CardDescription>Your mood patterns throughout the week</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={moodData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                  <XAxis dataKey="date" stroke="var(--color-foreground)" />
                  <YAxis stroke="var(--color-foreground)" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="happy" stroke="var(--color-chart-1)" />
                  <Line type="monotone" dataKey="calm" stroke="var(--color-chart-2)" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mood Distribution</CardTitle>
              <CardDescription>Breakdown of your mood patterns</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={moodDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name} ${value}`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {moodDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Journal Activity</CardTitle>
            <CardDescription>Your journaling frequency</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={journalStats}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="week" stroke="var(--color-foreground)" />
                <YAxis stroke="var(--color-foreground)" />
                <Tooltip />
                <Bar dataKey="entries" fill="var(--color-chart-1)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </LayoutWrapper>
  )
}
