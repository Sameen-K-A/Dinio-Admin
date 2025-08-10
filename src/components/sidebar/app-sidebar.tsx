import { NavMain } from "@/components/sidebar/nav-main"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar"
import { ROUTE } from "@/routes/router"
import type { INavItem } from "@/types/general"
import { BarChart2, CreditCard, LayoutDashboard, Settings, Utensils } from "lucide-react"

const navItems: INavItem[] = [
  {
    label: "Dashboard",
    to: ROUTE.DASHBOARD,
    icon: <LayoutDashboard size={18} strokeWidth={1.5} />,
  },
  {
    label: "Restaurants",
    to: ROUTE.RESTAURANTS,
    icon: <Utensils size={18} strokeWidth={1.5} />,
  },
  {
    label: "Analytics",
    to: ROUTE.ANALYTICS,
    icon: <BarChart2 size={18} strokeWidth={1.5} />,
  },
  {
    label: "Settings",
    to: ROUTE.SETTINGS,
    icon: <Settings size={18} strokeWidth={1.5} />,
  },
  {
    label: "Subscription",
    to: ROUTE.SUBSCRIPTION,
    icon: <CreditCard size={18} strokeWidth={1.5} />,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <img
              src="/svgs/logo.svg"
              alt="logo"
              className="h-10 w-auto logo-img mt-3 mb-5 ml-1"
            />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navItems} />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu className="hover:bg-muted p-2 rounded-md">
          <SidebarMenuItem className="flex gap-2 items-center text-red-500 cursor-pointer">
            <CreditCard size={18} strokeWidth={1.5} />
            <span className="text-sm">Logout</span>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
};