import InviteDialogContent from "@/components/restaurants/OnboardRestaurant";
import RestaurantTable from "@/components/restaurants/restaurantTable";
import { restaurants } from "@/constants/restaurants";

export default function Restaurants() {
  return (
    <>
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-xl md:text-2xl font-bold">Restaurants</h3>
        <InviteDialogContent />
      </div>
      <RestaurantTable restaurants={restaurants} />
    </>
  );
};