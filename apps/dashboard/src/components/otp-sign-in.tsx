"use client";

import { verifyOtpAction } from "@/actions/verify-otp-action";
import { zodResolver } from "@hookform/resolvers/zod";
import { createClient } from "@pkg/supabase/client";
import { Button } from "@pkg/ui/components/button";
import { cn } from "@pkg/ui/lib/utils";
import { Form, FormControl, FormField, FormItem } from "@pkg/ui/components/form";
import { Input } from "@pkg/ui/components/input";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@pkg/ui/components/input-otp";
import { Loader2 } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email(),
});

type Props = {
  className?: string;
};

export function OTPSignIn({ className }: Props) {
  const verifyOtp = useAction(verifyOtpAction);
  const [isLoading, setLoading] = useState(false);
  const [isSent, setSent] = useState(false);
  const [email, setEmail] = useState<string>();
  const supabase = createClient();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit({ email }: z.infer<typeof formSchema>) {
    setLoading(true);

    setEmail(email);

    await supabase.auth.signInWithOtp({ email });

    setSent(true);
    setLoading(false);
  }

  async function onComplete(token: string) {
    if (!email) return;

    verifyOtp.execute({
      token,
      email,
    });
  }

  if (isSent) {
    return (
      <div className={cn("flex flex-col space-y-4 items-center", className)}>
        <InputOTP
          maxLength={6}
          autoFocus
          onComplete={onComplete}
          disabled={verifyOtp.status === "executing"}
          // TODO: To be fixed
          // render={({ slots }) => (
          //   <InputOTPGroup>
          //     {slots.map((slot, index) => (
          //       <InputOTPSlot
          //         key={index.toString()}
          //         {...slot}
          //         index={index}
          //         className="w-[62px] h-[62px]"
          //       />
          //     ))}
          //   </InputOTPGroup>
          // )}
        >
            <InputOTPGroup>
              {Array.from({ length: 6 }).map((_, index) => (
                <InputOTPSlot
                  key={index.toString()}
                  index={index}
                  className="w-[62px] h-[62px]"
                />
              ))}
            </InputOTPGroup>
        </InputOTP>

        <div className="flex space-x-2">
          <span className="text-sm text-[#878787]">
            Didn&apos;t receive the email?
          </span>
          <button
            onClick={() => setSent(false)}
            type="button"
            className="text-sm text-primary underline font-medium"
          >
            Resend code
          </button>
        </div>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className={cn("flex flex-col space-y-4", className)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Enter email address"
                    {...field}
                    autoCapitalize="false"
                    autoCorrect="false"
                    spellCheck="false"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="bg-primary px-6 py-4 text-secondary font-medium flex space-x-2 h-[40px] w-full"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <span>Continue</span>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
