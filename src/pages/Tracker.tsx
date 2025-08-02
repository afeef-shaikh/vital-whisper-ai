import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { StatCard } from "@/components/ui/stat-card"
import { Activity, Heart, Droplet, Utensils, Plus } from "lucide-react"

export default function Tracker() {
  const todayMetrics = [
    {
      title: "Steps",
      value: "7,824",
      icon: Activity,
      trend: { value: 12, direction: "up" as const }
    },
    {
      title: "Heart Rate",
      value: "72 bpm",
      icon: Heart,
      trend: { value: 3, direction: "down" as const }
    },
    {
      title: "Blood Pressure",
      value: "120/80",
      icon: Droplet
    },
    {
      title: "Calories",
      value: "1,850",
      icon: Utensils,
      trend: { value: 8, direction: "up" as const }
    }
  ]

  const weeklyData = [
    { day: "Mon", mood: 4, exercise: 30, sleep: 7.5 },
    { day: "Tue", mood: 5, exercise: 45, sleep: 8 },
    { day: "Wed", mood: 3, exercise: 0, sleep: 6.5 },
    { day: "Thu", mood: 4, exercise: 60, sleep: 7 },
    { day: "Fri", mood: 5, exercise: 30, sleep: 8.5 },
    { day: "Sat", mood: 5, exercise: 90, sleep: 9 },
    { day: "Sun", mood: 4, exercise: 30, sleep: 8 }
  ]

  const getMoodEmoji = (mood: number) => {
    const emojis = ["😢", "😞", "😐", "😊", "😄"]
    return emojis[mood - 1] || "😐"
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-foreground">
            Health Tracker
          </h1>
          <p className="text-muted-foreground mt-2">
            Monitor your daily health metrics and progress
          </p>
        </div>
        
        <Button className="bg-primary text-primary-foreground">
          <Plus className="w-4 h-4 mr-2" />
          Add Entry
        </Button>
      </div>

      {/* Today's Metrics */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Today's Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {todayMetrics.map((metric, index) => (
            <StatCard
              key={index}
              title={metric.title}
              value={metric.value}
              icon={metric.icon}
              trend={metric.trend}
            />
          ))}
        </div>
      </div>

      {/* Weekly Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="font-display">Weekly Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {weeklyData.map((day, index) => (
              <div key={index} className="grid grid-cols-5 gap-4 items-center p-3 rounded-lg hover:bg-accent transition-colors">
                <div className="font-medium">{day.day}</div>
                
                <div className="text-center">
                  <div className="text-2xl mb-1">{getMoodEmoji(day.mood)}</div>
                  <div className="text-xs text-muted-foreground">Mood</div>
                </div>
                
                <div className="text-center">
                  <div className="font-semibold">{day.exercise}m</div>
                  <div className="text-xs text-muted-foreground">Exercise</div>
                </div>
                
                <div className="text-center">
                  <div className="font-semibold">{day.sleep}h</div>
                  <div className="text-xs text-muted-foreground">Sleep</div>
                </div>
                
                <div className="flex justify-end">
                  <div className={`w-3 h-3 rounded-full ${
                    day.mood >= 4 && day.exercise >= 30 && day.sleep >= 7 
                      ? "bg-success" 
                      : day.mood >= 3 && (day.exercise >= 15 || day.sleep >= 6)
                      ? "bg-warning"
                      : "bg-destructive"
                  }`}></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="hover:shadow-hover transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
            <h3 className="font-semibold">Log Mood</h3>
            <p className="text-sm text-muted-foreground">Track your emotional wellness</p>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-hover transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <Activity className="w-8 h-8 text-secondary mx-auto mb-2" />
            <h3 className="font-semibold">Record Exercise</h3>
            <p className="text-sm text-muted-foreground">Log your physical activity</p>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-hover transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <Droplet className="w-8 h-8 text-primary mx-auto mb-2" />
            <h3 className="font-semibold">Vital Signs</h3>
            <p className="text-sm text-muted-foreground">Record blood pressure, heart rate</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}