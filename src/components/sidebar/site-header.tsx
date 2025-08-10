import { SidebarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useSidebar } from "@/components/ui/sidebar"
import { ThemeToggleButton } from "../ui/ThemeToggleButton"

export function SiteHeader() {
  const { toggleSidebar } = useSidebar()

  return (
    <header className="bg-background sticky top-0 z-50 flex w-full items-center border-b">
      <div className="flex h-(--header-height) w-full items-center gap-2 pl-2 pr-4">
        <Button
          className="h-8 w-8 cursor-pointer"
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
        >
          <SidebarIcon strokeWidth={1.5} />
        </Button>
        <Separator orientation="vertical" className="mr-2 h-4" />
        <div className="ml-auto">
          <ThemeToggleButton />
        </div>
      </div>
    </header>
  )
};