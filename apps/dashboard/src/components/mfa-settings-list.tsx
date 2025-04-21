import { Button } from "@pkg/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@pkg/ui/components/card";
import Link from "next/link";
import { UnenrollMFA } from "./unenroll-mfa";

export function MfaSettingsList() {
  return (
    <Card className="flex-row">
      <CardHeader className="flex-1">
        <CardTitle>Multi-factor authentication</CardTitle>
        <CardDescription>
          Add an additional layer of security to your account by requiring more
          than just a password to sign in.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <UnenrollMFA />
      </CardContent>

      <CardFooter className="flex justify-between">
        <div />
        <Link href="?add=device">
          <Button>Add new device</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
