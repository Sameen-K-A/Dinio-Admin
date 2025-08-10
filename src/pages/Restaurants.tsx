import RestaurantTable from "@/components/restaurants/restaurantTable";
import { Button } from "@/components/ui/button";
import { restaurants } from "@/constants/restaurants";

function Restaurants() {
  return (
    <>
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-xl md:text-2xl font-bold">Restaurants</h3>
        <Button
          variant="default"
          className="font-semibold px-6 py-2 rounded-lg transition-all duration-200 bg-accent-foreground text-accent cursor-pointer border-0"
        >
          Invite Restaurant
        </Button>
      </div>
      <RestaurantTable restaurants={restaurants} />
    </>
  );
}

export default Restaurants;