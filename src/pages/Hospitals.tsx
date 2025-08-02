import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Phone, Navigation } from "lucide-react"

export default function Hospitals() {
  const hospitals = [
    {
      id: 1,
      name: "City General Hospital",
      distance: "2.1 km",
      waitTime: "25 minutes",
      specialty: "Emergency Care",
      rating: 4.5,
      address: "123 Main Street, Downtown",
      phone: "(555) 123-4567",
      status: "low"
    },
    {
      id: 2,
      name: "St. Mary's Medical Center",
      distance: "3.8 km",
      waitTime: "45 minutes",
      specialty: "Cardiology",
      rating: 4.8,
      address: "456 Oak Avenue, Midtown",
      phone: "(555) 234-5678",
      status: "medium"
    },
    {
      id: 3,
      name: "Regional Emergency Clinic",
      distance: "1.5 km",
      waitTime: "15 minutes",
      specialty: "Urgent Care",
      rating: 4.2,
      address: "789 Pine Road, Westside",
      phone: "(555) 345-6789",
      status: "low"
    },
    {
      id: 4,
      name: "Metro Heart Institute",
      distance: "5.2 km",
      waitTime: "60 minutes",
      specialty: "Specialized Cardiology",
      rating: 4.9,
      address: "321 Cedar Lane, Eastside",
      phone: "(555) 456-7890",
      status: "high"
    }
  ]

  const getWaitTimeColor = (status: string) => {
    switch (status) {
      case "low":
        return "bg-success text-success-foreground"
      case "medium":
        return "bg-warning text-warning-foreground"
      case "high":
        return "bg-destructive text-destructive-foreground"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const getWaitTimeText = (status: string) => {
    switch (status) {
      case "low":
        return "Low wait"
      case "medium":
        return "Moderate wait"
      case "high":
        return "High wait"
      default:
        return "Unknown"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-display font-bold text-foreground">
          Nearby Hospitals
        </h1>
        <p className="text-muted-foreground mt-2">
          Find hospitals and check current wait times
        </p>
      </div>

      {/* Map Placeholder */}
      <Card className="h-64 bg-gradient-soft">
        <CardContent className="h-full flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Interactive Map</h3>
            <p className="text-muted-foreground">
              Map showing nearby hospitals with real-time wait times
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Hospital List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Nearby Facilities</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              Filter by Specialty
            </Button>
            <Button variant="outline" size="sm">
              Sort by Distance
            </Button>
          </div>
        </div>
        
        {hospitals.map((hospital) => (
          <Card key={hospital.id} className="hover:shadow-hover transition-shadow">
            <CardContent className="p-6">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{hospital.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm text-muted-foreground">{hospital.specialty}</span>
                      <span className="text-sm text-muted-foreground">•</span>
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-medium">{hospital.rating}</span>
                        <span className="text-sm text-warning">★</span>
                      </div>
                    </div>
                  </div>
                  
                  <Badge className={getWaitTimeColor(hospital.status)}>
                    {getWaitTimeText(hospital.status)}
                  </Badge>
                </div>

                {/* Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Navigation className="w-4 h-4 text-primary" />
                      <span>{hospital.distance} away</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>Est. wait: {hospital.waitTime}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{hospital.address}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-primary" />
                      <span>{hospital.phone}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Button variant="default" size="sm" className="bg-gradient-health text-white">
                    Get Directions
                  </Button>
                  <Button variant="outline" size="sm">
                    Call Hospital
                  </Button>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Emergency Notice */}
      <Card className="border-destructive bg-destructive/5">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-destructive rounded-full">
              <Clock className="w-5 h-5 text-destructive-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-destructive mb-2">Emergency Notice</h3>
              <p className="text-sm text-muted-foreground">
                In case of a medical emergency, call 911 immediately. This app provides estimated wait times for non-emergency situations only.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}