import { SidebarTrigger } from "@/components/ui/sidebar"
import { ThemeToggleButton } from "../ui/ThemeToggleButton"

export function SiteHeader() {

  return (
    <header className="flex h-[var(--header-height)] shrink-0 mb-8 sm:mb-5 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-[var(--header-height)]">
      <div className="w-full flex items-center justify-between">
        <SidebarTrigger />
        <ThemeToggleButton />
      </div>
    </header>
  )
};