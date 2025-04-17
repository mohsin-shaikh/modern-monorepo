"use client"

import { useTransition } from "react"
import { useRouter } from "next/navigation"
import { useQueryState } from "nuqs"
import { Avatar, AvatarFallback, AvatarImage } from "@pkg/ui/components/avatar"
import { Button } from "@pkg/ui/components/button"
import { Input } from "@pkg/ui/components/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@pkg/ui/components/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@pkg/ui/components/dropdown-menu"
import { Search, MoreVertical, Settings, Eye, LogOut } from "lucide-react"
import type { Team } from "../types"

// Simulated data - replace with actual data fetching
const mockTeams: Team[] = [
  {
    id: "1",
    name: "Acme Corp",
    role: "owner",
    avatar_url: "/placeholder-avatar.png",
  },
  {
    id: "2",
    name: "Startup Inc",
    role: "member",
    avatar_url: "/placeholder-avatar.png",
  },
  // Add more mock data as needed
]

export function TeamsList() {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [query, setQuery] = useQueryState("query")

  const handleSearch = (value: string) => {
    startTransition(() => {
      setQuery(value)
    })
  }

  const handleCreateTeam = () => {
    // TODO: Implement create team functionality
    console.log("Create team clicked")
  }

  const handleViewTeam = (teamId: string) => {
    router.push(`/dashboard?team=${teamId}`)
  }

  const handleManageTeam = (teamId: string) => {
    router.push(`/settings?team=${teamId}`)
  }

  const handleLeaveTeam = async (teamId: string) => {
    // TODO: Implement leave team functionality
    console.log("Leave team:", teamId)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search teams..."
            className="pl-8"
            value={query ?? ""}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <Button onClick={handleCreateTeam}>Create Team</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Teams</CardTitle>
          <CardDescription>
            Teams you own or are a member of.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockTeams.map((team) => (
              <div
                key={team.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={team.avatar_url} alt={team.name} />
                    <AvatarFallback>
                      {team.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{team.name}</div>
                    <div className="text-sm text-muted-foreground">
                      Role: {team.role.charAt(0).toUpperCase() + team.role.slice(1)}
                    </div>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleViewTeam(team.id)}>
                      <Eye className="mr-2 h-4 w-4" />
                      View
                    </DropdownMenuItem>
                    {team.role !== "member" && (
                      <DropdownMenuItem onClick={() => handleManageTeam(team.id)}>
                        <Settings className="mr-2 h-4 w-4" />
                        Manage
                      </DropdownMenuItem>
                    )}
                    {team.role !== "owner" && (
                      <>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={() => handleLeaveTeam(team.id)}
                          className="text-destructive focus:text-destructive"
                        >
                          <LogOut className="mr-2 h-4 w-4" />
                          Leave Team
                        </DropdownMenuItem>
                      </>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 