import { Separator } from "@pkg/ui/components/separator"
import { TeamsList } from "./components/teams-list"

export const metadata = {
  title: "Teams",
  description: "Manage your team memberships.",
}

export default function TeamsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Teams</h3>
        <p className="text-sm text-muted-foreground">
          View and manage your team memberships.
        </p>
      </div>
      <Separator />
      <TeamsList />
    </div>
  )
} 