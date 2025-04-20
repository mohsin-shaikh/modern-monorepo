import { AccountSettings } from '@/components/account-settings';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Account Settings | ZUUPEE",
};

export default function Account() {
  return <AccountSettings />;
}
