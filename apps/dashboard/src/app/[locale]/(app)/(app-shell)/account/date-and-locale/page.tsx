import { ChangeTimezone } from "@/components/change-timezone";
import { DateFormatSettings } from "@/components/date-format-settings";
import { LocaleSettings } from "@/components/locale-settings";
import { TimeFormatSettings } from "@/components/time-format-settings";
import { WeekSettings } from "@/components/week-settings";
import { getTimezones } from "@pkg/location";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Date & Locale | ZUUPEE",
};

export default async function Page() {
  const timezones = await getTimezones();

  return (
    <div className="space-y-12">
      <LocaleSettings />
      <ChangeTimezone timezones={timezones} />
      <TimeFormatSettings />
      <DateFormatSettings />
      <WeekSettings />
    </div>
  );
}
