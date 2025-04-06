import { Separator } from "@pkg/ui/components/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@pkg/ui/components/tabs"
import { TeamMembers } from "./components/team-members"
import { PendingInvitations } from "./components/pending-invitations"

export const metadata = {
  title: "Members",
  description: "Manage your team members and invitations.",
}

export default function MembersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Members</h3>
        <p className="text-sm text-muted-foreground">
          Manage your team members and pending invitations.
        </p>
      </div>
      <Separator />
      <Tabs defaultValue="members" className="space-y-4">
        <TabsList>
          <TabsTrigger value="members">Team Members</TabsTrigger>
          <TabsTrigger value="invitations">Pending Invitations</TabsTrigger>
        </TabsList>
        <TabsContent value="members" className="space-y-4">
          <TeamMembers />
        </TabsContent>
        <TabsContent value="invitations" className="space-y-4">
          <PendingInvitations />
        </TabsContent>
      </Tabs>
    </div>
  )
} 