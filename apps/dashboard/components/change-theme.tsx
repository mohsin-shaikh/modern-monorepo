import { ModeSelector } from "@/components/mode-selector";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@pkg/ui/components/card";
import { ThemeSelector } from "@/components/theme-selector";

export function ChangeTheme() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Appearance</CardTitle>
        <CardDescription>
          Customize how ZUUPEE looks on your device.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="w-[240px]">
          <div className="flex items-center gap-2">
            <ThemeSelector />
            <ModeSelector />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
