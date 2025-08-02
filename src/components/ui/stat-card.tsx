import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface StatCardProps {
  title: string
  value: string | number
  description?: string
  icon?: LucideIcon
  className?: string
  trend?: {
    value: number
    direction: "up" | "down"
  }
}

export function StatCard({ 
  title, 
  value, 
  description, 
  icon: Icon, 
  className,
  trend 
}: StatCardProps) {
  return (
    <div className={cn(
      "p-6 rounded-xl border bg-card shadow-card hover:shadow-hover transition-all duration-300",
      className
    )}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        {Icon && (
          <div className="p-2 bg-gradient-soft rounded-lg">
            <Icon className="w-4 h-4 text-primary" />
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        <p className="text-2xl font-bold text-foreground">{value}</p>
        
        <div className="flex items-center gap-2 text-sm">
          {description && (
            <span className="text-muted-foreground">{description}</span>
          )}
          
          {trend && (
            <span className={cn(
              "flex items-center font-medium",
              trend.direction === "up" ? "text-success" : "text-destructive"
            )}>
              {trend.direction === "up" ? "↗" : "↘"} {Math.abs(trend.value)}%
            </span>
          )}
        </div>
      </div>
    </div>
  )
}