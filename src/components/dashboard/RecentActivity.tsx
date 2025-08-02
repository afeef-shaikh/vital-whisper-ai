import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, CheckCircle, AlertCircle, Calendar } from "lucide-react"

export function RecentActivity() {
  const activities = [
    {
      id: 1,
      type: "medication",
      title: "Aspirin taken",
      time: "8:00 AM",
      status: "completed",
      icon: CheckCircle
    },
    {
      id: 2,
      type: "appointment",
      title: "Dr. Smith - Cardiology",
      time: "Tomorrow, 2:00 PM",
      status: "upcoming",
      icon: Calendar
    },
    {
      id: 3,
      type: "reminder",
      title: "Vitamin D - Due now",
      time: "Now",
      status: "pending",
      icon: AlertCircle
    },
    {
      id: 4,
      type: "report",
      title: "Blood test results uploaded",
      time: "Yesterday",
      status: "completed",
      icon: CheckCircle
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-success text-success-foreground"
      case "upcoming":
        return "bg-warning text-warning-foreground"
      case "pending":
        return "bg-destructive text-destructive-foreground"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-display">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-accent transition-colors">
              <div className="p-2 bg-gradient-soft rounded-full">
                <activity.icon className="w-4 h-4 text-primary" />
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground">{activity.title}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Clock className="w-3 h-3 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{activity.time}</span>
                </div>
              </div>
              
              <Badge className={getStatusColor(activity.status)}>
                {activity.status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}