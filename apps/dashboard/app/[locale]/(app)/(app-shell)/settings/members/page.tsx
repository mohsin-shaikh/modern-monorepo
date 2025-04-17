import { Tabs, TabsContent, TabsList, TabsTrigger } from "@pkg/ui/components/tabs"
import { TeamMembers } from "./components/team-members"
import { PendingInvitations } from "./components/pending-invitations"
import { getTeamMembersAction, getPendingInvitationsAction } from "@/actions/team-members-action"

export const metadata = {
  title: "Members",
  description: "Manage your team members and invitations.",
}

export default async function MembersPage() {
  // Pre-fetch data
  await getTeamMembersAction({ search: "" });
  await getPendingInvitationsAction({ search: "" });

  return (
    <div className="space-y-6">
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