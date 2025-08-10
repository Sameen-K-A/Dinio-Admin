import { ChevronRight } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import type { IRestaurant } from "@/types/general";
import { renderSubscriptionStatus } from "@/utils/renderSubscriptionStatus";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "@/routes/router";

interface IRestaurantTableProps {
  restaurants: IRestaurant[];
};

export default function RestaurantTable({ restaurants }: IRestaurantTableProps) {
  const navigate = useNavigate();
  return (
    <div className="w-full overflow-x-auto rounded-lg border bg-background">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-background">
            <TableHead className="text-left px-4 whitespace-nowrap">#ID</TableHead>
            <TableHead className="text-left px-4 whitespace-nowrap">Restaurant Name</TableHead>
            <TableHead className="text-center px-4 whitespace-nowrap">Owner name</TableHead>
            <TableHead className="text-center px-4 whitespace-nowrap">Contact</TableHead>
            <TableHead className="text-center px-4 whitespace-nowrap">Subscription</TableHead>
            <TableHead className="text-right px-4 whitespace-nowrap"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {restaurants.map((res) => (
            <TableRow
              key={res.id}
              className="not-odd:bg-muted/50 hover:bg-muted  cursor-pointer transition-colors duration-200"
              onClick={() => navigate(`${ROUTE.RESTAURANTS}/${res.id}`)}
            >
              <TableCell className="text-left px-4 whitespace-nowrap font-mono text-xs text-muted-foreground">{res.id}</TableCell>
              <TableCell className="text-left px-4 whitespace-nowrap font-medium text-foreground">{res.restaurantName}</TableCell>
              <TableCell className="text-center px-4 whitespace-nowrap text-muted-foreground">{res.ownerName}</TableCell>
              <TableCell className="text-center px-4 whitespace-nowrap text-muted-foreground">{res.contact}</TableCell>
              <TableCell className="text-center px-4 whitespace-nowrap">
                {renderSubscriptionStatus(res.subscriptionExpiryDate)}
              </TableCell>
              <TableCell className="text-right px-4 whitespace-nowrap">
                <button className="p-1 rounded hover:bg-background cursor-pointer">
                  <span className="sr-only">More</span>
                  <ChevronRight size={18} strokeWidth={1.5} className="text-muted-foreground" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
};