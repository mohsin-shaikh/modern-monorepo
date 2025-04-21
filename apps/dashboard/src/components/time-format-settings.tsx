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

export function TimeFormatSettings() {
  const updateUserMutation = useUserMutation();
  const { data: user } = useUserQuery();

  return (
    <Card className="flex justify-between items-center flex-row">
      <CardHeader className="flex-1">
        <CardTitle>Time Display Format</CardTitle>
        <CardDescription>
          Choose between 12-hour or 24-hour clock format for displaying time.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Select
          defaultValue={user?.time_format?.toString() ?? undefined}
          onValueChange={(value) => {
            updateUserMutation.mutate({ time_format: +value });
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Time format" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="12">12 hours (AM/PM)</SelectItem>
            <SelectItem value="24">24 hours</SelectItem>
          </SelectContent>
        </Select>
      </CardContent>
    </Card>
  );
}
