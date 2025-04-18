import { AccountSettings } from '@/components/account-settings';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Account Settings'
};

export default function Account() {
  return <AccountSettings />;
}
