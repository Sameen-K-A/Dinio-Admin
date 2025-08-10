import { useParams } from "react-router-dom";
import { restaurants } from "@/constants/restaurants";

export default function RestaurantDetails() {
  const { id } = useParams<{ id: string }>();
  const restaurant = restaurants.find(r => r.id === id);

  if (!restaurant) {
    return <div className="p-6 text-red-500">Restaurant not found</div>;
  }

  return (
    <div className="">
      <h1 className="text-2xl font-bold">{restaurant.restaurantName}</h1>
      <p className="text-muted-foreground">Owned by: {restaurant.ownerName}</p>
    </div>
  );
}