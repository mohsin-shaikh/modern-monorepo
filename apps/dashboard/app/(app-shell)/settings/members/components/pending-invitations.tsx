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
import { Search } from "lucide-react"
import type { PendingInvite } from "../types"

// Simulated data - replace with actual data fetching
const mockInvites: PendingInvite[] = [
  {
    id: "1",
    full_name: "Jane Smith",
    email: "jane@example.com",
    role: "member",
    expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
  },
  // Add more mock data as needed
]

export function PendingInvitations() {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [query, setQuery] = useQueryState("query")

  const handleSearch = (value: string) => {
    startTransition(() => {
      setQuery(value)
    })
  }

  const handleResendInvite = async (inviteId: string) => {
    // TODO: Implement resend invite logic
    console.log("Resending invite:", inviteId)
  }

  const handleRevokeInvite = async (inviteId: string) => {
    // TODO: Implement revoke invite logic
    console.log("Revoking invite:", inviteId)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search invitations..."
            className="pl-8"
            value={query ?? ""}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <Button>Invite Member</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Pending Invitations</CardTitle>
          <CardDescription>
            Manage your pending team invitations.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockInvites.map((invite) => (
              <div
                key={invite.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback>
                      {invite.full_name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{invite.full_name}</div>
                    <div className="text-sm text-muted-foreground">
                      {invite.email}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Role: {invite.role.charAt(0).toUpperCase() + invite.role.slice(1)}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Expires: {new Date(invite.expires_at).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleResendInvite(invite.id)}
                  >
                    Resend
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleRevokeInvite(invite.id)}
                  >
                    Revoke
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 