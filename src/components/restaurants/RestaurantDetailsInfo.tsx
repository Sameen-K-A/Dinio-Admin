import { Download, MapPin, Phone, UserRound } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import type { IRestaurant } from "@/types/general"
import { renderSubscriptionStatus } from "@/utils/renderSubscriptionStatus"
import { Button } from "../ui/button"

interface IRestaurantDetailsInooProps {
  restaurant: IRestaurant
  handleDownloadAll: () => void
};

export default function RestaurantDetailsInfo({ handleDownloadAll, restaurant }: IRestaurantDetailsInooProps) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
      <div className="space-y-4">
        <Card className="shadow-none p-4">
          <CardHeader className="p-0">
            <CardTitle className="flex items-center gap-2 mt-1">
              Restaurant Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 p-0">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-start gap-2">
                <UserRound className="h-4 w-4 mt-1 text-muted-foreground" />
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Owner Name</label>
                  <p className="text-base font-medium">{restaurant.ownerName}</p>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Number of Tables</label>
                <p className="text-center font-medium bg-primary p-2 px-3 w-fit mx-auto rounded-lg text-accent">{restaurant.numberOfTables}</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-1 text-muted-foreground" />
              <div>
                <label className="text-sm font-medium text-muted-foreground">Contact Number</label>
                <p className="text-base font-medium">{restaurant.contact}</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-1 text-muted-foreground" />
              <div>
                <label className="text-sm font-medium text-muted-foreground">Address</label>
                <p className="text-base">{restaurant.address}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-none p-4">
          <CardHeader className="p-0">
            <CardTitle className="mt-1">
              Subscription Details
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {renderSubscriptionStatus(restaurant.subscriptionExpiryDate)}
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-none p-4">
        <CardHeader className="p-0">
          <div className="flex items-center justify-between">
            <CardTitle>Table QR Codes</CardTitle>
            <Button onClick={handleDownloadAll} className="flex items-center gap-1">
              <Download className="h-4 w-4" />
              Download All
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            QR codes for all {restaurant.numberOfTables} tables. Customers can scan these to access the menu.
          </p>
        </CardHeader>
        <CardContent className="p-0">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-h-[50dvh] overflow-y-auto custom-scrollbar">
            {Array.from({ length: restaurant.numberOfTables }).map((_, i) => {
              return (
                <div key={i} className="flex flex-col items-center justify-center p-2 border rounded-lg">
                  <img
                    src={`qr code url from s3 bucket`}
                    alt={`QR Code for Table ${i + 1}`}
                    className="w-full h-auto mb-2 aspect-square rounded-sm"
                    onError={(e) => e.currentTarget.src = "/placeholder/placeholder.svg"}
                  />
                  <p className="text-sm font-medium text-center">Table {i + 1}</p>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
};