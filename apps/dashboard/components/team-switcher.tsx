"use client"

import { useRouter } from "next/navigation"
import { ChevronsUpDown, Plus, Building2 } from "lucide-react"
import { useAction } from "next-safe-action/hooks"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@pkg/ui/components/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@pkg/ui/components/sidebar"
import { getUserTeamsAction, switchTeamAction } from "@/actions/teams-action"
import { useEffect, useState  } from "react"

interface Team {
  id: string
  name: string
  plan: string
}

export function TeamSwitcher() {
  const router = useRouter()
  const { isMobile } = useSidebar()
  const [activeTeam, setActiveTeam] = useState<Team | null>(null)
  
  const { execute: getTeams, result } = useAction(getUserTeamsAction)
  const { execute: switchTeam } = useAction(switchTeamAction)

  useEffect(() => {
    getTeams({})
    console.log("getTeams", result.data)
  }, [getTeams])

  useEffect(() => {
    if (result?.data && result.data.length > 0) {
      setActiveTeam(result.data[0])
    }
    console.log("getTeams 1", result.data)
    console.log("activeTeam", activeTeam)
  }, [result?.data])

  const handleTeamSwitch = async (team: Team) => {
    setActiveTeam(team)
    await switchTeam({ teamId: team.id })
    router.refresh()
  }

  if (!activeTeam || !result?.data) {
    return null
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <Building2 className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{activeTeam.name}</span>
                <span className="truncate text-xs">{activeTeam.plan}</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-muted-foreground text-xs">
              Teams
            </DropdownMenuLabel>
            {result.data.map((team: Team) => (
              <DropdownMenuItem
                key={team.id}
                onClick={() => handleTeamSwitch(team)}
                className="gap-2 p-2"
              >
                <div className="flex size-6 items-center justify-center rounded-md border">
                  <Building2 className="size-3.5 shrink-0" />
                </div>
                {team.name}
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem 
              className="gap-2 p-2"
              onClick={() => router.push("/teams/new")}
            >
              <div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
                <Plus className="size-4" />
              </div>
              <div className="text-muted-foreground font-medium">Add team</div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
