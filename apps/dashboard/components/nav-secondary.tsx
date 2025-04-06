"use client"

import * as React from "react"
import {Contrast, type LucideIcon } from "lucide-react"
import { useTheme } from "next-themes"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@pkg/ui/components/sidebar"
import { Skeleton } from "@pkg/ui/components/skeleton"
import { Switch } from "@pkg/ui/components/switch"

export function NavSecondary({
  items,
  ...props
}: {
  items: {
    title: string
    url: string
    icon: LucideIcon
  }[]
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <a href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
          <SidebarMenuItem className="group-data-[collapsible=icon]:hidden">
            <SidebarMenuButton asChild>
              <label>
                <Contrast />
                <span>Dark Mode</span>
                {mounted ? (
                  <Switch
                    className="ml-auto"
                    checked={resolvedTheme !== "light"}
                    onCheckedChange={() =>
                      setTheme(resolvedTheme === "dark" ? "light" : "dark")
                    }
                  />
                ) : (
                  <Skeleton className="ml-auto h-4 w-8 rounded-full" />
                )}
              </label>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
