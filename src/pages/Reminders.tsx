import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Bell, Pill, Calendar, Clock, Plus } from "lucide-react"

export default function Reminders() {
  const medicationReminders = [
    {
      id: 1,
      medication: "Lisinopril",
      dosage: "10mg",
      times: ["8:00 AM"],
      enabled: true,
      nextDue: "8:00 AM",
      streak: 15
    },
    {
      id: 2,
      medication: "Metformin",
      dosage: "500mg",
      times: ["8:00 AM", "8:00 PM"],
      enabled: true,
      nextDue: "8:00 PM",
      streak: 12
    },
    {
      id: 3,
      medication: "Vitamin D",
      dosage: "1000 IU",
      times: ["9:00 AM"],
      enabled: false,
      nextDue: "9:00 AM",
      streak: 0
    }
  ]

  const appointmentReminders = [
    {
      id: 1,
      title: "Cardiology Appointment",
      doctor: "Dr. Sarah Johnson",
      date: "2024-02-05",
      time: "2:00 PM",
      reminderTime: "1 hour before",
      enabled: true
    },
    {
      id: 2,
      title: "Annual Physical",
      doctor: "Dr. Michael Chen",
      date: "2024-02-15",
      time: "10:00 AM",
      reminderTime: "1 day before",
      enabled: true
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-foreground">
            Reminders
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage your medication and appointment reminders
          </p>
        </div>
        
        <Button className="bg-primary text-primary-foreground">
          <Plus className="w-4 h-4 mr-2" />
          Add Reminder
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Medication Reminders */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Pill className="w-5 h-5 text-primary" />
            Medication Reminders
          </h2>
          
          {medicationReminders.map((reminder) => (
            <Card key={reminder.id} className="hover:shadow-hover transition-shadow">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{reminder.medication}</h3>
                      <p className="text-muted-foreground">{reminder.dosage}</p>
                    </div>
                    <Switch checked={reminder.enabled} />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>Times: {reminder.times.join(", ")}</span>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Bell className="w-4 h-4 text-primary" />
                        <span>Next: {reminder.nextDue}</span>
                      </div>
                      
                      {reminder.streak > 0 && (
                        <Badge className="bg-success text-success-foreground">
                          {reminder.streak} day streak
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm">
                      Edit Schedule
                    </Button>
                    <Button variant="outline" size="sm">
                      Mark Taken
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Appointment Reminders */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            Appointment Reminders
          </h2>
          
          {appointmentReminders.map((reminder) => (
            <Card key={reminder.id} className="hover:shadow-hover transition-shadow">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{reminder.title}</h3>
                      <p className="text-muted-foreground">{reminder.doctor}</p>
                    </div>
                    <Switch checked={reminder.enabled} />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{reminder.date} at {reminder.time}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <Bell className="w-4 h-4 text-primary" />
                      <span>Remind me: {reminder.reminderTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm">
                      Edit Reminder
                    </Button>
                    <Button variant="outline" size="sm">
                      View Appointment
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Notification Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="font-display">Notification Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Push Notifications</h4>
              <p className="text-sm text-muted-foreground">Receive notifications on your device</p>
            </div>
            <Switch defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Email Reminders</h4>
              <p className="text-sm text-muted-foreground">Get reminder emails for important events</p>
            </div>
            <Switch defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Sound Alerts</h4>
              <p className="text-sm text-muted-foreground">Play sound when notifications arrive</p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}