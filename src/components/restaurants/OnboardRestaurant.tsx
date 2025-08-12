import { useState } from "react"
import { Download, Save, Loader } from "lucide-react"
import { QRCodeSVG } from "qrcode.react";
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useTheme } from "@/contexts/theme-context";

interface FormData {
  restaurantName: string
  ownerName: string
  contactNumber: string
  address: string
  numberOfTables: number
}

export default function OnboardRestaurant() {
  const { theme } = useTheme();
  const [currentStep, setCurrentStep] = useState(1)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    restaurantName: "",
    ownerName: "",
    contactNumber: "",
    numberOfTables: 10,
    address: "",
  })

  const handleSaveAndGenerateQRCodes = async () => {
    setCurrentStep(2)
  }

  const handleFinalSaveAndClose = () => {
    setIsDialogOpen(false)
    resetWizard()
  }

  const resetWizard = () => {
    setCurrentStep(1)
    setFormData({
      restaurantName: "",
      ownerName: "",
      contactNumber: "",
      numberOfTables: 10,
      address: "",
    })
  }

  return (
    <Dialog
      open={isDialogOpen}
      onOpenChange={(open) => {
        setIsDialogOpen(open)
        if (!open) resetWizard()
      }}
    >
      <DialogTrigger asChild>
        <Button>Onboard Restaurant</Button>
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="p-4 pt-8 dark:bg-[#181818]"
      >
        <DialogHeader>
          <DialogTitle className="text-center">
            {currentStep === 1
              ? "Onboard New Restaurant"
              : "Generate QR Codes"
            }
          </DialogTitle>
          <DialogDescription className="text-center">
            {currentStep === 1
              ? "Enter the restaurant details to get started."
              : `Preview and download QR codes for ${formData.numberOfTables} tables.`}
          </DialogDescription>
        </DialogHeader>

        <div className="max-h-[50vh] overflow-y-auto custom-scrollbar">
          {currentStep === 1 && (
            <div className="grid gap-5 py-4">
              <div className="grid gap-1">
                <Label htmlFor="restaurantName">Restaurant Name</Label>
                <Input
                  id="restaurantName"
                  className="text-sm"
                  placeholder="Dinio's Diner"
                  value={formData.restaurantName}
                />
              </div>
              <div className="grid gap-1">
                <Label htmlFor="ownerName">Owner Name</Label>
                <Input
                  id="ownerName"
                  className="text-sm"
                  placeholder="John Doe"
                  value={formData.ownerName}
                />
              </div>
              <div className="grid gap-1">
                <Label htmlFor="contactNumber">Contact Number</Label>
                <Input
                  id="contactNumber"
                  className="text-sm"
                  placeholder="+1 (555) 123-4567"
                  value={formData.contactNumber}
                />
              </div>
              <div className="grid gap-1">
                <Label htmlFor="numberOfTables">Number of Tables</Label>
                <Input
                  id="numberOfTables"
                  className="text-sm"
                  type="number"
                  min="1"
                  placeholder="10"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="address">Address</Label>
                <Textarea
                  id="address"
                  className="text-sm resize-none custom-scrollbar max-h-36"
                  placeholder="123 Main St, Anytown, USA"
                />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
              {Array.from({ length: 10 }).map((_, i) => {
                const qrCodeValue = `https://dinio.in/menu/?r=${crypto.randomUUID()}&t=${i + 1}`
                return (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center p-2 border rounded-md pt-4"
                  >
                    <QRCodeSVG value={qrCodeValue} size={100} level="M" fgColor={theme === "dark" ? "#ffffff" : "#000000"} bgColor="transparent" />
                    <p className="text-sm font-medium mt-2">Table {i + 1}</p>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        <DialogFooter className="flex flex-col sm:flex-row sm:justify-between gap-2">
          {currentStep === 1 && (
            <Button
              type="button"
              onClick={handleSaveAndGenerateQRCodes}
              className="w-full sm:w-auto ml-auto"
            >
              {false ? (
                <><Loader className="h-4 w-4 animate-spin" /> Saving...</>
              ) : (
                "Save Details & Generate QR Codes"
              )}
            </Button>
          )}
          {currentStep === 2 && (
            <>
              <Button type="button" variant="outline" onClick={() => setCurrentStep(1)} className="w-full sm:w-auto">
                Back
              </Button>
              <div className="flex gap-2 flex-col sm:flex-row">
                <Button type="button" className="w-full sm:w-auto">
                  <Download className="h-4 w-4" /> Download All as ZIP
                </Button>
                <Button type="button" onClick={handleFinalSaveAndClose} className="w-full sm:w-auto">
                  <Save className="h-4 w-4" /> Save Details
                </Button>
              </div>
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
};