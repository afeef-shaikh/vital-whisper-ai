import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Upload, Calendar, MapPin } from "lucide-react"
import { useNavigate } from "react-router-dom"

export function QuickActions() {
  const navigate = useNavigate()

  const actions = [
    {
      title: "Upload Prescription",
      description: "Add new medication",
      icon: Upload,
      action: () => navigate("/prescriptions"),
      className: "bg-gradient-health text-white hover:opacity-90"
    },
    {
      title: "Book Appointment",
      description: "Schedule with doctor",
      icon: Calendar,
      action: () => navigate("/appointments"),
      className: "bg-gradient-wellness text-white hover:opacity-90"
    },
    {
      title: "Add Health Entry",
      description: "Log daily metrics",
      icon: Plus,
      action: () => navigate("/tracker"),
      className: "bg-primary text-primary-foreground hover:bg-primary/90"
    },
    {
      title: "Find Hospital",
      description: "Check wait times",
      icon: MapPin,
      action: () => navigate("/hospitals"),
      className: "bg-secondary text-secondary-foreground hover:bg-secondary/90"
    }
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-display">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              size="lg"
              onClick={action.action}
              className={`h-auto p-4 flex flex-col items-start space-y-2 ${action.className}`}
            >
              <div className="flex items-center gap-2">
                <action.icon className="w-5 h-5" />
                <span className="font-medium">{action.title}</span>
              </div>
              <span className="text-xs opacity-80">{action.description}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}