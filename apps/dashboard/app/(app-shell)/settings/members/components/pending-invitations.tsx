"use client"

import { useCallback, useEffect, useState } from "react"
import { useQueryState } from "nuqs"
import { Button } from "@pkg/ui/components/button"
import { Input } from "@pkg/ui/components/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@pkg/ui/components/card"
import { getPendingInvitationsAction, cancelTeamInvitationAction } from "@/actions/team-members-action"
import { useAction } from "next-safe-action/hooks"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@pkg/ui/components/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@pkg/ui/components/select"
import { inviteTeamMemberAction } from "@/actions/team-members-action"
import type { TeamInvitation } from "../types"

interface InviteMemberFormData {
  email: string
  role: "admin" | "member"
}

export function PendingInvitations() {
  const [search, setSearch] = useQueryState("search")
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState<InviteMemberFormData>({
    email: "",
    role: "member",
  })

  const { execute: getInvitations, result, status } = useAction(getPendingInvitationsAction)
  const { execute: cancelInvitation } = useAction(cancelTeamInvitationAction)
  const { execute: inviteMember, status: inviteStatus } = useAction(inviteTeamMemberAction)

  useEffect(() => {
    // Fetch initial invitations data if no search param
    if (!search) {
      getInvitations({ search: "" })
    }
  }, [getInvitations, search])

  const handleSearch = useCallback(
    async (value: string) => {
      setSearch(value)
      await getInvitations({ search: value })
    },
    [getInvitations, setSearch]
  )

  const handleInvite = async () => {
    await inviteMember({
      invitee_email: formData.email,
      role: formData.role,
      revalidatePath: "/settings/members",
    })
    setIsOpen(false)
    setFormData({ email: "", role: "member" })
    await getInvitations({ search: search || "" })
  }

  const handleCancel = async (invitationId: string) => {
    await cancelInvitation({
      invitationId,
      revalidatePath: "/settings/members",
    })
    await getInvitations({ search: search || "" })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Pending Invitations</CardTitle>
        <CardDescription>
          Manage your pending team invitations.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-2">
            <Input
              placeholder="Search invitations..."
              value={search || ""}
              onChange={(e) => handleSearch(e.target.value)}
              className="max-w-sm"
            />
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button>Invite Member</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Invite Team Member</DialogTitle>
                  <DialogDescription>
                    Send an invitation to join your team.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter email address"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Role</label>
                    <Select
                      value={formData.role}
                      onValueChange={(value: "admin" | "member") =>
                        setFormData({ ...formData, role: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="member">Member</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    onClick={handleInvite}
                    disabled={inviteStatus === "executing"}
                  >
                    {inviteStatus === "executing" ? "Sending..." : "Send Invitation"}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <div className="space-y-4">
            {status === "executing" && (
              <div className="text-sm text-muted-foreground">Loading...</div>
            )}

            {result?.data && result.data.length === 0 && (
              <div className="text-sm text-muted-foreground">No pending invitations</div>
            )}

            {result?.data && (result.data as TeamInvitation[]).map((invitation) => (
              <div
                key={invitation.id}
                className="flex items-center justify-between rounded-lg border p-4"
              >
                <div>
                  <div className="font-medium">{invitation.invitee_email}</div>
                  <div className="text-sm text-muted-foreground capitalize">
                    Role: {invitation.role}
                  </div>
                </div>
                <Button
                  variant="outline"
                  onClick={() => handleCancel(invitation.id)}
                >
                  Cancel Invitation
                </Button>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 