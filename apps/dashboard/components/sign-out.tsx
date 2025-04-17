"use client";

import { createClient } from "@pkg/supabase/client";
import { DropdownMenuItem } from "@pkg/ui/components/dropdown-menu";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function SignOut() {
  const [isLoading, setLoading] = useState(false);
  const supabase = createClient();
  const router = useRouter();

  const handleSignOut = async () => {
    setLoading(true);

    await supabase.auth.signOut({
      scope: "local",
    });

    router.push("/auth/login");
  };

  return (
    <DropdownMenuItem onClick={handleSignOut}>
      {isLoading ? "Loading..." : "Sign out"}
    </DropdownMenuItem>
  );
}
