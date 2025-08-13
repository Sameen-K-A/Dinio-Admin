import { SidebarGroup, SidebarMenu, SidebarMenuButton } from "@/components/ui/sidebar"
import { useLocation, useNavigate } from "react-router-dom";
import type { INavItem } from "@/types/general"
import { LogOut } from "lucide-react";

export function NavMain({ items }: { items: INavItem[] }) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item: INavItem) => (
          <SidebarMenuButton
            asChild
            isActive={location.pathname.startsWith(item.to)}
            key={item.to}
            className={`cursor-pointer py-5 ${item.isAvailable ? "hover:bg-muted" : "bg-muted/20 cursor-not-allowed hover:bg-muted/20 text-muted-foreground hover:text-muted-foreground line-through"}`}
            onClick={() => item.isAvailable && navigate(item.to)}
          >
            <span>
              {item.icon}
              <span>{item.label}</span>
            </span>
          </SidebarMenuButton>
        ))}
        <SidebarMenuButton
          className="cursor-pointer hover:bg-red-500/10 py-5 text-red-500 hover:text-red-600"
        >
          <LogOut strokeWidth={1.5} />
          Logout
        </SidebarMenuButton>
      </SidebarMenu>
    </SidebarGroup>
  )
};