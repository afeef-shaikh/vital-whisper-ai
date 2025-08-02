import { StatCard } from "@/components/ui/stat-card"
import { Activity, Heart, Pill, Calendar } from "lucide-react"

export function HealthOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        title="Health Score"
        value="85"
        description="Overall health rating"
        icon={Heart}
        trend={{ value: 5, direction: "up" }}
        className="border-l-4 border-l-success"
      />
      
      <StatCard
        title="Active Medications"
        value="3"
        description="Currently prescribed"
        icon={Pill}
        className="border-l-4 border-l-primary"
      />
      
      <StatCard
        title="Next Appointment"
        value="2"
        description="Days away"
        icon={Calendar}
        className="border-l-4 border-l-warning"
      />
      
      <StatCard
        title="Daily Activity"
        value="7,824"
        description="Steps today"
        icon={Activity}
        trend={{ value: 12, direction: "up" }}
        className="border-l-4 border-l-secondary"
      />
    </div>
  )
}