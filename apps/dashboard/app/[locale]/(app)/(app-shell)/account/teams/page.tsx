import { TeamsList } from "./components/teams-list"

export const metadata = {
  title: "Teams",
  description: "Manage your team memberships.",
}

export default function TeamsPage() {
  return (
    <div className="space-y-6">
      <TeamsList />
    </div>
  )
} 