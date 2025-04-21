"use client";

import { unenrollMfaAction } from "@/actions/unenroll-mfa-action";
import { Button } from "@pkg/ui/components/button";
// import { useToast } from "@pkg/ui/hooks/use-toast";
import { toast } from "sonner";
import { useAction } from "next-safe-action/hooks";

type Props = {
  factorId: string;
};

export function RemoveMFAButton({ factorId }: Props) {
  // const { toast } = useToast();

  const unenroll = useAction(unenrollMfaAction, {
    onError: () => {
      toast.error("Something went wrong please try again.");
    },
  });

  return (
    <Button variant="outline" onClick={() => unenroll.execute({ factorId })}>
      Remove
    </Button>
  );
}
