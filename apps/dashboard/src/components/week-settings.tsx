"use client";

import { useUserMutation, useUserQuery } from "@/hooks/use-user";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@pkg/ui/components/card";
import { Switch } from "@pkg/ui/components/switch";

export function WeekSettings() {
  const { data: user } = useUserQuery();
  const updateUserMutation = useUserMutation();

  return (
    <Card className="flex justify-between items-center flex-row">
      <CardHeader className="flex-1">
        <CardTitle>Start Week on Monday</CardTitle>
        <CardDescription>
          Set the first day of the week in calendar views.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Switch
          checked={user.week_starts_on_monday ?? false}
          disabled={updateUserMutation.isPending}
          onCheckedChange={(week_starts_on_monday: boolean) => {
            updateUserMutation.mutate({ week_starts_on_monday });
          }}
        />
      </CardContent>
    </Card>
  );
}
