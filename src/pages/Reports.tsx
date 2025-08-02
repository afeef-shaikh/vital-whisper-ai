import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Upload, FileText, Download, Eye } from "lucide-react"

export default function Reports() {
  const reports = [
    {
      id: 1,
      title: "Blood Test Results",
      type: "Lab Report",
      date: "2024-01-20",
      doctor: "Dr. Sarah Johnson",
      status: "Normal",
      summary: "All blood markers within normal range. Cholesterol levels improved since last test.",
      keyFindings: ["HDL: 65 mg/dL (Good)", "LDL: 85 mg/dL (Normal)", "Glucose: 90 mg/dL (Normal)"]
    },
    {
      id: 2,
      title: "Chest X-Ray",
      type: "Imaging",
      date: "2024-01-15",
      doctor: "Dr. Michael Chen",
      status: "Normal",
      summary: "Clear chest X-ray with no abnormalities detected. Lungs appear healthy.",
      keyFindings: ["No signs of infection", "Clear lung fields", "Normal heart size"]
    },
    {
      id: 3,
      title: "ECG Report",
      type: "Cardiac",
      date: "2024-01-10",
      doctor: "Dr. Sarah Johnson",
      status: "Follow-up needed",
      summary: "Slight irregularity detected. Recommend follow-up monitoring and lifestyle changes.",
      keyFindings: ["Heart rate: 75 bpm", "Minor arrhythmia noted", "Blood pressure normal"]
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "normal":
        return "bg-success text-success-foreground"
      case "follow-up needed":
        return "bg-warning text-warning-foreground"
      case "urgent":
        return "bg-destructive text-destructive-foreground"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-foreground">
            Medical Reports
          </h1>
          <p className="text-muted-foreground mt-2">
            View and manage your medical test results and reports
          </p>
        </div>
        
        <Button className="bg-gradient-health text-white">
          <Upload className="w-4 h-4 mr-2" />
          Upload Report
        </Button>
      </div>

      {/* Upload Area */}
      <Card className="border-dashed border-2 border-muted-foreground/20 hover:border-primary/50 transition-colors">
        <CardContent className="p-8 text-center">
          <div className="mx-auto w-12 h-12 bg-gradient-soft rounded-full flex items-center justify-center mb-4">
            <Upload className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold text-lg mb-2">Upload Medical Report</h3>
          <p className="text-muted-foreground mb-4">
            Upload lab results, imaging reports, or other medical documents
          </p>
          <Button variant="outline">Choose File</Button>
        </CardContent>
      </Card>

      {/* Reports List */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Your Reports</h2>
        
        {reports.map((report) => (
          <Card key={report.id} className="hover:shadow-hover transition-shadow">
            <CardContent className="p-6">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-soft rounded-lg">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg">{report.title}</h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-sm text-muted-foreground">{report.type}</span>
                        <span className="text-sm text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">{report.date}</span>
                        <span className="text-sm text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">{report.doctor}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Badge className={getStatusColor(report.status)}>
                    {report.status}
                  </Badge>
                </div>

                {/* Summary */}
                <div className="bg-accent/50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">AI Summary</h4>
                  <p className="text-sm text-muted-foreground">{report.summary}</p>
                </div>

                {/* Key Findings */}
                <div>
                  <h4 className="font-medium mb-2">Key Findings</h4>
                  <ul className="space-y-1">
                    {report.keyFindings.map((finding, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {finding}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-2" />
                    View Full Report
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                  <Button variant="outline" size="sm">
                    Ask AI Questions
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