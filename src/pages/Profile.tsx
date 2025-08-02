import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Mail, Phone, Calendar, MapPin, Edit } from "lucide-react"

export default function Profile() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-display font-bold text-foreground">
          Profile
        </h1>
        <p className="text-muted-foreground mt-2">
          Manage your personal information and preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Picture and Basic Info */}
        <Card>
          <CardContent className="p-6 text-center">
            <Avatar className="w-24 h-24 mx-auto mb-4">
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback className="text-2xl bg-gradient-health text-white">SJ</AvatarFallback>
            </Avatar>
            
            <h2 className="text-xl font-semibold mb-1">Sarah Johnson</h2>
            <p className="text-muted-foreground mb-4">Patient ID: #12345</p>
            
            <Button variant="outline" className="w-full">
              <Edit className="w-4 h-4 mr-2" />
              Change Photo
            </Button>
          </CardContent>
        </Card>

        {/* Personal Information */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="font-display">Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" defaultValue="Sarah" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" defaultValue="Johnson" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="sarah.johnson@email.com" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" defaultValue="(555) 123-4567" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Date of Birth</Label>
                <Input id="dateOfBirth" type="date" defaultValue="1985-06-15" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Textarea id="address" defaultValue="123 Main Street, Apt 4B&#10;Anytown, ST 12345" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Medical Information */}
      <Card>
        <CardHeader>
          <CardTitle className="font-display">Medical Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="bloodType">Blood Type</Label>
              <Input id="bloodType" defaultValue="O+" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="height">Height</Label>
              <Input id="height" defaultValue="5'6&quot;" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="weight">Weight</Label>
              <Input id="weight" defaultValue="140 lbs" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="allergies">Allergies</Label>
            <Textarea id="allergies" placeholder="List any known allergies..." defaultValue="Penicillin, Shellfish" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="conditions">Medical Conditions</Label>
            <Textarea id="conditions" placeholder="List any chronic conditions..." defaultValue="Hypertension, Type 2 Diabetes" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="emergencyContact">Emergency Contact</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="Name" defaultValue="John Johnson" />
              <Input placeholder="Phone" defaultValue="(555) 987-6543" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Insurance Information */}
      <Card>
        <CardHeader>
          <CardTitle className="font-display">Insurance Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="provider">Insurance Provider</Label>
              <Input id="provider" defaultValue="Blue Cross Blue Shield" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="policyNumber">Policy Number</Label>
              <Input id="policyNumber" defaultValue="BCBS123456789" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="groupNumber">Group Number</Label>
              <Input id="groupNumber" defaultValue="GRP001" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="memberId">Member ID</Label>
              <Input id="memberId" defaultValue="MEM456789" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end gap-3">
        <Button variant="outline">Cancel</Button>
        <Button className="bg-gradient-health text-white">Save Changes</Button>
      </div>
    </div>
  )
}