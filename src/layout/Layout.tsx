import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SiteHeader } from "@/components/sidebar/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset className="p-4">
        <SiteHeader />
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
};