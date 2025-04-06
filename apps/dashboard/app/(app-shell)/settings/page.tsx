import { Separator } from "@pkg/ui/components/separator"
import { TeamSettings } from "./components/team-settings"

export const metadata = {
  title: "Settings",
  description: "Manage your team settings and preferences.",
}

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">General</h3>
        <p className="text-sm text-muted-foreground">
          Manage your team settings and preferences.
        </p>
      </div>
      <Separator />
      <TeamSettings />
    </div>
  )
} 