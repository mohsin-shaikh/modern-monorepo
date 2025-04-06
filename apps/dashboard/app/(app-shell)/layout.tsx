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

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar 
        user={user ? { 
          name: user.user_metadata.full_name || user.email, 
          email: user.email || "", 
          avatar: user.user_metadata.avatar_url || "" 
        } : undefined} 
      />
      <SidebarInset>
        <NavHeader />
        <main className="flex-1 p-4">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}