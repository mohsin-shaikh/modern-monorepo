"use client";

import { useUserMutation, useUserQuery } from "@/hooks/use-user";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@pkg/ui/components/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@pkg/ui/components/select";

export function DateFormatSettings() {
  const { data: user } = useUserQuery();
  const updateUserMutation = useUserMutation();

  return (
    <Card className="flex justify-between items-center flex-row">
      <CardHeader className="flex-1">
        <CardTitle>Date Display Format</CardTitle>
        <CardDescription>
          Select the format used to display dates throughout the app.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Select
          defaultValue={user.date_format ?? undefined}
          onValueChange={(value) => {
            updateUserMutation.mutate({
              date_format: value as
                | "dd/MM/yyyy"
                | "MM/dd/yyyy"
                | "yyyy-MM-dd"
                | "DD.MM.YYYY",
            });
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Date format" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="dd/MM/yyyy">dd/MM/yyyy</SelectItem>
            <SelectItem value="MM/dd/yyyy">MM/dd/yyyy</SelectItem>
            <SelectItem value="yyyy-MM-dd">yyyy-MM-dd</SelectItem>
            <SelectItem value="DD.MM.YYYY">DD.MM.YYYY</SelectItem>
          </SelectContent>
        </Select>
      </CardContent>
    </Card>
  );
}
