export interface INavItem {
  to: string;
  icon: React.ReactNode;
  label: string;
  isAvailable: boolean;
};

export interface IRestaurant {
  id: string;
  restaurantName: string;
  ownerName: string;
  contact: string;
  numberOfTables: number;
  subscriptionExpiryDate: string;
  address: string;
  totalOrders: number;
  avgRating: number;
};