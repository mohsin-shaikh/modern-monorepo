"use client"

import { useTransition } from "react"
import { useRouter, useSearchParams } from "next/navigation"
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@pkg/ui/components/select"
import { Search } from "lucide-react"
import type { TeamMember } from "../types"

// Simulated data - replace with actual data fetching
const mockMembers: TeamMember[] = [
  {
    id: "1",
    full_name: "John Doe",
    email: "john@example.com",
    role: "owner",
    avatar_url: "/placeholder-avatar.png",
  },
  // Add more mock data as needed
]

export function TeamMembers() {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [query, setQuery] = useQueryState("query")

  const handleSearch = (value: string) => {
    startTransition(() => {
      setQuery(value)
    })
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search members..."
            className="pl-8"
            value={query ?? ""}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <Button>Invite Member</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
          <CardDescription>
            Manage your team members and their roles.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockMembers.map((member) => (
              <div
                key={member.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={member.avatar_url} alt={member.full_name} />
                    <AvatarFallback>
                      {member.full_name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{member.full_name}</div>
                    <div className="text-sm text-muted-foreground">
                      {member.email}
                    </div>
                  </div>
                </div>
                <Select defaultValue={member.role} disabled={member.role === "owner"}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="member">Member</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 