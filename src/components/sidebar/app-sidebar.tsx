import { NavMain } from "@/components/sidebar/nav-main"
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar"
import { ROUTE } from "@/routes/router"
import type { INavItem } from "@/types/general"
import { BarChart2, LayoutDashboard, Settings, Utensils } from "lucide-react"

const navItems: INavItem[] = [
  {
    label: "Dashboard",
    to: ROUTE.DASHBOARD,
    icon: <LayoutDashboard size={18} strokeWidth={1.5} />,
    isAvailable: true
  },
  {
    label: "Restaurants",
    to: ROUTE.RESTAURANTS,
    icon: <Utensils size={18} strokeWidth={1.5} />,
    isAvailable: true
  },
  {
    label: "Analytics",
    to: ROUTE.ANALYTICS,
    icon: <BarChart2 size={18} strokeWidth={1.5} />,
    isAvailable: false
  },
  {
    label: "Settings",
    to: ROUTE.SETTINGS,
    icon: <Settings size={18} strokeWidth={1.5} />,
    isAvailable: false
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <img
              src="/svgs/logo.svg"
              alt="Dinio Logo"
              className="h-8 w-auto my-4 ml-2 logo-img"
              draggable="false"
            />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navItems} />
      </SidebarContent>
    </Sidebar>
  )
};