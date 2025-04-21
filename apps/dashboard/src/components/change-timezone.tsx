"use client";

import { useUserMutation, useUserQuery } from "@/hooks/use-user";
import { useI18n } from "@/locales/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@pkg/ui/components/card";
import { ComboboxDropdown } from "@pkg/ui/components/combobox-dropdown";

type Props = {
  timezones: { tzCode: string; name: string }[];
};

export function ChangeTimezone({ timezones }: Props) {
  const t = useI18n();

  const { data: user } = useUserQuery();
  const updateUserMutation = useUserMutation();

  const timezoneItems = timezones.map((tz, id) => ({
    id: id.toString(),
    label: tz.name,
    value: tz.tzCode,
  }));

  return (
    <Card className="flex justify-between items-center flex-row">
      <CardHeader className="flex-1">
        <CardTitle>{t("timezone.title")}</CardTitle>
        <CardDescription>{t("timezone.description")}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="w-[250px]">
          <ComboboxDropdown
            placeholder={t("timezone.placeholder")}
            selectedItem={timezoneItems.find(
              (item) => item.value === user.timezone,
            )}
            searchPlaceholder={t("timezone.searchPlaceholder")}
            items={timezoneItems}
            className="text-xs py-1"
            onSelect={(item) => {
              updateUserMutation.mutate({ timezone: item.value });
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
}
