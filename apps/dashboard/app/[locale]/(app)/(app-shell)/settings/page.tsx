import { TeamSettings } from "./components/team-settings"

export const metadata = {
  title: "Settings",
  description: "Manage your team settings and preferences.",
}

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <TeamSettings />
    </div>
  )
} 