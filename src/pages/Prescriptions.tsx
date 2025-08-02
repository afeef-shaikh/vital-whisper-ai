import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Upload, Pill, Clock, Calendar } from "lucide-react"

export default function Prescriptions() {
  const prescriptions = [
    {
      id: 1,
      medicine: "Lisinopril",
      dosage: "10mg",
      frequency: "Once daily",
      duration: "30 days",
      prescribedBy: "Dr. Sarah Johnson",
      dateIssued: "2024-01-15",
      status: "active"
    },
    {
      id: 2,
      medicine: "Metformin",
      dosage: "500mg",
      frequency: "Twice daily",
      duration: "90 days",
      prescribedBy: "Dr. Michael Chen",
      dateIssued: "2024-01-10",
      status: "active"
    },
    {
      id: 3,
      medicine: "Aspirin",
      dosage: "81mg",
      frequency: "Once daily",
      duration: "Ongoing",
      prescribedBy: "Dr. Sarah Johnson",
      dateIssued: "2023-12-20",
      status: "expired"
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-foreground">
            Prescriptions
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage your medications and prescriptions
          </p>
        </div>
        
        <Button className="bg-gradient-health text-white">
          <Upload className="w-4 h-4 mr-2" />
          Upload Prescription
        </Button>
      </div>

      {/* Upload Area */}
      <Card className="border-dashed border-2 border-muted-foreground/20 hover:border-primary/50 transition-colors">
        <CardContent className="p-8 text-center">
          <div className="mx-auto w-12 h-12 bg-gradient-soft rounded-full flex items-center justify-center mb-4">
            <Upload className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold text-lg mb-2">Upload New Prescription</h3>
          <p className="text-muted-foreground mb-4">
            Drag and drop your prescription image or PDF, or click to browse
          </p>
          <Button variant="outline">Choose File</Button>
        </CardContent>
      </Card>

      {/* Prescriptions List */}
      <div className="grid gap-4">
        {prescriptions.map((prescription) => (
          <Card key={prescription.id} className="hover:shadow-hover transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-soft rounded-lg">
                    <Pill className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-lg">{prescription.medicine}</h3>
                      <Badge 
                        className={prescription.status === "active" ? "bg-success text-success-foreground" : "bg-muted text-muted-foreground"}
                      >
                        {prescription.status}
                      </Badge>
                    </div>
                    
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p><strong>Dosage:</strong> {prescription.dosage}</p>
                      <p><strong>Frequency:</strong> {prescription.frequency}</p>
                      <p><strong>Duration:</strong> {prescription.duration}</p>
                      <p><strong>Prescribed by:</strong> {prescription.prescribedBy}</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-right space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    {prescription.dateIssued}
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}