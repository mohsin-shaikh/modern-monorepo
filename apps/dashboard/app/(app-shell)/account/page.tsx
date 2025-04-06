import { AccountSettings } from "./components/account-settings"

export const metadata = {
  title: "Account",
  description: "Manage your account settings and preferences.",
}

export default function AccountPage() {
  return (
    <div className="space-y-6">
      <AccountSettings />
    </div>
  )
} 