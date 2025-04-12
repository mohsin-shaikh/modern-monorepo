"use client"

import { useCallback, useEffect } from "react"
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
import { getTeamMembersAction } from "@/actions/team-members-action"
import { useAction } from "next-safe-action/hooks"
import type { TeamMember } from "../types"

export function TeamMembers() {
  const [search, setSearch] = useQueryState("search")
  const { execute: getMembers, result, status } = useAction(getTeamMembersAction)

  useEffect(() => {
    // Fetch initial data if no search param
    if (!search) {
      getMembers({ search: "" })
    }
  }, [getMembers, search])

  const handleSearch = useCallback(
    async (value: string) => {
      setSearch(value)
      await getMembers({ search: value })
    },
    [getMembers, setSearch]
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Members</CardTitle>
        <CardDescription>
          Manage your team members and their roles.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Input
              placeholder="Search members..."
              value={search || ""}
              onChange={(e) => handleSearch(e.target.value)}
              className="max-w-sm"
            />
          </div>

          <div className="space-y-4">
            {status === "executing" && (
              <div className="text-sm text-muted-foreground">Loading...</div>
            )}

            {result?.data && result.data.length === 0 && (
              <div className="text-sm text-muted-foreground">No members found</div>
            )}

            {result?.data && (result.data as TeamMember[]).map((member) => (
              <div
                key={member.user.id}
                className="flex items-center justify-between rounded-lg border p-4"
              >
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={member.user.avatar_url || undefined} />
                    <AvatarFallback>
                      {member.user.full_name?.[0] || member.user.email[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">
                      {member.user.full_name || member.user.email}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {member.user.email}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-sm text-muted-foreground capitalize">
                    {member.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 