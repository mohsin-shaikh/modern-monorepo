import { resend } from "@/utils/resend";
import { GetStartedEmail } from "@pkg/email/emails/get-started";
import { TrialEndedEmail } from "@pkg/email/emails/trial-ended";
import { TrialExpiringEmail } from "@pkg/email/emails/trial-expiring";
import { WelcomeEmail } from "@pkg/email/emails/welcome";
import { createClient } from "@pkg/supabase/job";
import { render } from "@react-email/render";
import { schemaTask, wait } from "@trigger.dev/sdk/v3";
import { shouldSendEmail } from "@/utils/check-team-plan";
import { z } from "zod";

export const onboardTeam = schemaTask({
  id: "onboard-team",
  schema: z.object({
    userId: z.string().uuid(),
  }),
  maxDuration: 300,
  run: async ({ userId }) => {
    const supabase = createClient();

    const { data: user, error } = await supabase
      .from("users")
      .select("id, full_name, email, team_id")
      .eq("id", userId)
      .single();

    if (error) {
      throw new Error(error.message);
    }

    if (!user.full_name || !user.email || !user.team_id) {
      throw new Error("User data is missing");
    }

    const [firstName, lastName] = user.full_name.split(" ") ?? [];

    await resend.contacts.create({
      email: user.email,
      firstName,
      lastName,
      unsubscribed: false,
      audienceId: process.env.RESEND_AUDIENCE_ID!,
    });

    if (await shouldSendEmail(user.team_id)) {
      await resend.emails.send({
        to: user.email,
        subject: "Welcome to ZUUPEE",
        from: "Mohsin from ZUUPEE <mohsin@app.zuupee.com>",
        html: await render(
          WelcomeEmail({
            fullName: user.full_name,
          }),
        ),
      });
    }

    await wait.for({ days: 3 });

    if (await shouldSendEmail(user.team_id)) {
      await resend.emails.send({
        from: "Mohsin from ZUUPEE <mohsin@zuupee.com>",
        to: user.email,
        subject: "Get the most out of ZUUPEE",
        html: await render(
          GetStartedEmail({
            fullName: user.full_name,
          }),
        ),
      });
    }

    await wait.for({ days: 11 });

    if (await shouldSendEmail(user.team_id)) {
      await resend.emails.send({
        from: "Mohsin from ZUUPEE <mohsin@zuupee.com>",
        to: user.email,
        subject: "Your trial is expiring soon",
        html: await render(
          TrialExpiringEmail({
            fullName: user.full_name,
          }),
        ),
      });
    }

    await wait.for({ days: 15 });

    if (await shouldSendEmail(user.team_id)) {
      await resend.emails.send({
        from: "Mohsin from ZUUPEE <mohsin@zuupee.com>",
        to: user.email,
        subject: "Your trial has ended",
        html: await render(TrialEndedEmail({ fullName: user.full_name })),
      });
    }
  },
});
