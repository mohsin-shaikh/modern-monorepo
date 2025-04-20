"use client";

import { createClient } from "@pkg/supabase/client";
import { Button } from "@pkg/ui/components/button";

export function SignOutButton() {
  const supabase = createClient();

  return (
    <Button
      variant="outline"
      className="w-full"
      onClick={() => supabase.auth.signOut()}
    >
      Sign out
    </Button>
  );
}
