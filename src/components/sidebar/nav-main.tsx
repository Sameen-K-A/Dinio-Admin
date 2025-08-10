import { SidebarGroup, SidebarMenu, SidebarMenuButton } from "@/components/ui/sidebar"
import { useLocation, useNavigate } from "react-router-dom";
import type { INavItem } from "@/types/general"

export function NavMain({ items }: { items: INavItem[] }) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item: INavItem) => (
          <SidebarMenuButton
            asChild
            isActive={item.to === location.pathname}
            key={item.to}
            className="cursor-pointer py-5"
            onClick={() => navigate(item.to)}
          >
            <span>
              {item.icon}
              <span>{item.label}</span>
            </span>
          </SidebarMenuButton>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
};