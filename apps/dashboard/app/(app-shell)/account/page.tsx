import { Separator } from "@pkg/ui/components/separator"
import { AccountSettings } from "./components/account-settings"

export const metadata = {
  title: "Account",
  description: "Manage your account settings and preferences.",
}

export default function AccountPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">General</h3>
        <p className="text-sm text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>
      <Separator />
      <AccountSettings />
    </div>
  )
} 