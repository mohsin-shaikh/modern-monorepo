"use client"

import { Separator } from "@pkg/ui/components/separator"
import { SidebarTrigger } from "@pkg/ui/components/sidebar"
import { ThemeSelector } from "@/components/theme-selector"
import { ModeSwitcher } from "@/components/mode-switcher"

export function NavHeader() {

  return (
    <header className="bg-background sticky inset-x-0 top-0 isolate z-10 flex shrink-0 items-center gap-2 border-b">
      <div className="flex h-14 w-full items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1.5" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
          />
        <h1 className="text-base font-medium">Documents</h1>
        <div className="ml-auto flex items-center gap-2">
          <ThemeSelector />
          <ModeSwitcher />
        </div>
      </div>
    </header>
  )
}
