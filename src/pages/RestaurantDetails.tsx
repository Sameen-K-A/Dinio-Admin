import { useParams } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import { restaurants } from "@/constants/restaurants"
import RestaurantDetailsInfo from "@/components/restaurants/RestaurantDetailsInfo"

export default function RestaurantDetails() {
  const { id } = useParams<{ id: string }>()
  const restaurant = restaurants.find((r) => r.id === id)

  if (!restaurant) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80svh] text-center">
        <h2 className="text-xl font-bold mb-2">Restaurant Not Found</h2>
        <p className="text-sm text-muted-foreground">
          We couldn't find the restaurant you're looking for. <br />It may have been removed or the URL might be incorrect.
        </p>
      </div>
    )
  }

  const handleDownloadAll = () => { }

  const subscriptionDate = new Date(restaurant.subscriptionExpiryDate)
  const isExpired = subscriptionDate < new Date()

  return (
    <>
      <div className="mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">{restaurant.restaurantName}</h1>
            <p className="text-lg text-muted-foreground mt-1">Restaurant ID: {restaurant.id}</p>
          </div>
          <Badge variant={isExpired ? "destructive" : "default"} className={`text-sm px-3 py-1 mt-5 md:mt-0 ${!isExpired && "bg-green-500/5 border border-green-500 text-green-500"}`}>
            {isExpired ? "Subscription Expired" : "Active"}
          </Badge>
        </div>
      </div>

      <RestaurantDetailsInfo
        handleDownloadAll={handleDownloadAll}
        restaurant={restaurant}
      />
    </>
  )
};