import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Plus, Video } from "lucide-react"

export default function Appointments() {
  const upcomingAppointments = [
    {
      id: 1,
      doctor: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      date: "2024-02-05",
      time: "2:00 PM",
      type: "In-person",
      location: "Heart Care Clinic, Room 301",
      status: "confirmed"
    },
    {
      id: 2,
      doctor: "Dr. Michael Chen",
      specialty: "Endocrinology",
      date: "2024-02-12",
      time: "10:30 AM",
      type: "Video call",
      location: "Online consultation",
      status: "confirmed"
    }
  ]

  const availableSlots = [
    { date: "2024-02-08", slots: ["9:00 AM", "11:00 AM", "3:00 PM"] },
    { date: "2024-02-09", slots: ["10:00 AM", "2:00 PM", "4:00 PM"] },
    { date: "2024-02-10", slots: ["9:30 AM", "1:00 PM", "3:30 PM"] }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-foreground">
            Appointments
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage your medical appointments and consultations
          </p>
        </div>
        
        <Button className="bg-gradient-wellness text-white">
          <Plus className="w-4 h-4 mr-2" />
          Book Appointment
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Appointments */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Upcoming Appointments</h2>
          
          {upcomingAppointments.map((appointment) => (
            <Card key={appointment.id} className="hover:shadow-hover transition-shadow">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{appointment.doctor}</h3>
                      <p className="text-muted-foreground">{appointment.specialty}</p>
                    </div>
                    <Badge className="bg-success text-success-foreground">
                      {appointment.status}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{appointment.date}</span>
                      <Clock className="w-4 h-4 text-primary ml-2" />
                      <span>{appointment.time}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      {appointment.type === "Video call" ? (
                        <Video className="w-4 h-4 text-primary" />
                      ) : (
                        <MapPin className="w-4 h-4 text-primary" />
                      )}
                      <span>{appointment.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm">
                      Reschedule
                    </Button>
                    <Button variant="destructive" size="sm">
                      Cancel
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Available Slots */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Available Slots</h2>
          
          {availableSlots.map((day, index) => (
            <Card key={index}>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">{day.date}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-2">
                  {day.slots.map((slot, slotIndex) => (
                    <Button
                      key={slotIndex}
                      variant="outline"
                      size="sm"
                      className="hover:bg-primary hover:text-primary-foreground"
                    >
                      {slot}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}