import { cookies } from "next/headers"
import { createClient } from "@pkg/supabase/server"

import { AppSidebar } from "@/components/app-sidebar"
import { ModeSwitcher } from "@/components/mode-switcher"
import { NavHeader } from "@/components/nav-header"
import { ThemeSelector } from "@/components/theme-selector"
import { Separator } from "@pkg/ui/components/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@pkg/ui/components/sidebar"

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  let profile = null
  if (user) {
    const { data } = await supabase.from("users").select("*").eq("id", user.id).single()
    profile = data
  }

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar user={profile ? { name: profile.full_name || profile.email, email: profile.email, avatar: profile.avatar_url || "" } : undefined} />
      <SidebarInset>
        <header className="bg-background sticky inset-x-0 top-0 isolate z-10 flex shrink-0 items-center gap-2 border-b">
          <div className="flex h-14 w-full items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1.5" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <NavHeader />
            <div className="ml-auto flex items-center gap-2">
              <ThemeSelector />
              <ModeSwitcher />
            </div>
          </div>
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}