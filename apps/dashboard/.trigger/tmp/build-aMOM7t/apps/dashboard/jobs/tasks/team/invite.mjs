import {
  Body,
  Button,
  Container,
  Font,
  Footer,
  Heading,
  Html,
  Link,
  Logo,
  Preview,
  Section,
  Text,
  getAppUrl,
  pd,
  render,
  require_jsx_dev_runtime,
  resend
} from "../../../../../chunk-MIRNAU3I.mjs";
import "../../../../../chunk-TLOTS4Y4.mjs";
import "../../../../../chunk-JMNXXFTJ.mjs";
import {
  z
} from "../../../../../chunk-KRWODOEH.mjs";
import {
  schemaTask
} from "../../../../../chunk-UPJ3ZHXN.mjs";
import "../../../../../chunk-Y7YJTUV6.mjs";
import "../../../../../chunk-LE5FTHDS.mjs";
import {
  __toESM,
  init_esm
} from "../../../../../chunk-LL4QQ7FC.mjs";

// jobs/tasks/team/invite.ts
init_esm();

// ../../packages/email/emails/invite.tsx
init_esm();

// ../../packages/email/locales/index.ts
init_esm();

// ../../packages/email/locales/translations.ts
init_esm();
function translations(locale, params) {
  switch (locale) {
    case "en":
      return {
        "notifications.match": `We matched the transaction “${params?.transactionName}” against “${params?.fileName}”`,
        "notifications.transactions": params?.numberOfTransactions && typeof params?.numberOfTransactions === "number" && params?.numberOfTransactions > 1 ? `You have ${params?.numberOfTransactions} new transactions` : `You have a new transaction of ${params?.amount} from ${params?.name}`,
        "notifications.invoicePaid": `Invoice ${params?.invoiceNumber} has been paid`,
        "notifications.invoiceOverdue": `Invoice ${params?.invoiceNumber} is overdue`,
        "transactions.subject": "New transactions",
        "transactions.preview": `Hi ${params?.firstName}, You have ${params?.numberOfTransactions} ${params?.numberOfTransactions > 1 ? "new transactions" : "new transaction"}`,
        "transactions.title1": "You have ",
        "transactions.title2": `${params?.numberOfTransactions} ${params?.numberOfTransactions > 1 ? "new transactions" : "new transaction"}`,
        "transactions.description1": `Hi ${params?.firstName}`,
        "transactions.description2": "We found",
        "transactions.description3": `${params?.numberOfTransactions} ${params?.numberOfTransactions > 1 ? "new transactions" : "new transaction"}`,
        "transactions.description4": `for your team ${params?.teamName}, we will try to match those against receipts in your inbox for up to 45 days. Additionally, you can simply reply to this email with the receipts.`,
        "transactions.button": "View transactions",
        "transactions.settings": "Notification preferences",
        "transactions.amount": "Amount",
        "transactions.date": "Date",
        "transactions.description": "Description",
        "invite.subject": `${params?.invitedByName} invited you to the ${params?.teamName} team on Midday`,
        "invite.preview": `Join ${params?.teamName} on Midday`,
        "invite.title1": "Join",
        "invite.title2": "on",
        "invite.link1": "has invited you to the",
        "invite.link2": "team on",
        "invite.join": "Join the team",
        "invite.link3": "or copy and paste this URL into your browser",
        "invite.footer1": "This invitation was intended for",
        "invite.footer2": "This invite was sent from",
        "invite.footer3": "located in",
        "invite.footer4": "If you were not expecting this invitation, you can ignore this email. If you are concerned about your account's safety, please reply to this email to get in touch with us.",
        "invoice.overdue.subject": `Invoice #${params?.invoiceNumber} is overdue`,
        "invoice.paid.subject": `Invoice #${params?.invoiceNumber} has been paid`
      };
    case "sv":
      return {
        "notifications.match": `Vi matchade transaktionen “${params?.transactionName}” mot “${params?.fileName}”`,
        "notifications.transactions": params?.numberOfTransactions && typeof params?.numberOfTransactions === "number" && params?.numberOfTransactions > 1 ? `Du har ${params?.numberOfTransactions} nya transaktioner` : `Du har en ny transaktion på ${params?.amount} från ${params?.name}`,
        "notifications.invoicePaid": `Faktura ${params?.invoiceNumber} har betalats`,
        "notifications.invoiceOverdue": `Faktura ${params?.invoiceNumber} är försenad`,
        "transactions.subject": "Nya transaktioner",
        "transactions.preview": `Hej ${params?.firstName}, Vi hittade ${params?.numberOfTransactions} ${params?.numberOfTransactions > 1 ? "nya transaktioner" : "nya transaktion"} .`,
        "transactions.title1": "Du har ",
        "transactions.title2": `${params?.numberOfTransactions} ${params?.numberOfTransactions > 1 ? "nya transaktioner" : "nya transaktion"}`,
        "transactions.description1": `Hej ${params?.firstName}`,
        "transactions.description2": "Vi hittade",
        "transactions.description3": `${params?.numberOfTransactions} ${params?.numberOfTransactions > 1 ? "nya transaktioner" : "nya transaktion"}`,
        "transactions.description4": "på ditt konto som vi försöker matcha mot kvitton i din inkorg i upp till 45 dagar. Du kan också svara på detta email med dina kvitton.",
        "transactions.button": "Visa transaktioner",
        "transactions.footer": " Nam imperdiet congue volutpat. Nulla quis facilisis lacus. Vivamus convallis sit amet lectus eget tincidunt. Vestibulum vehicula rutrum nisl, sed faucibus neque. Donec lacus mi, rhoncus at dictum eget, pulvinar at metus. Donec cursus tellus erat, a hendrerit elit rutrum ut. Fusce quis tristique ligula. Etiam sit amet enim vitae mauris auctor blandit id et nibh.",
        "transactions.settings": "Inställningar",
        "transactions.amount": "Belopp",
        "transactions.date": "Datum",
        "transactions.description": "Beskrivning",
        "invite.subject": `${params?.invitedByName} bjöd in dig till ${params?.teamName} på Midday`,
        "invite.preview": `Gå med i ${params?.teamName} på Midday`,
        "invite.title1": "Gå med",
        "invite.title2": "på",
        "invite.link1": "har bjudit in dig till",
        "invite.link2": "på",
        "invite.join": "Gå med",
        "invite.link3": "eller kopiera och klistra in denna URL i din webbläsare",
        "invite.footer1": "Denna inbjudan var avsedd för",
        "invite.footer2": "Denna inbjudan skickades från",
        "invite.footer3": "belägen i",
        "invite.footer4": "Om du inte väntade dig den här inbjudan kan du ignorera det här e-postmeddelandet. Om du är orolig för ditt kontos säkerhet, vänligen svara på det här e-postmeddelandet för att komma i kontakt med oss.",
        "invoice.overdue.subject": `Faktura #${params?.invoiceNumber} är försenad`,
        "invoice.paid.subject": `Faktura #${params?.invoiceNumber} har betalats`
      };
    default:
      return;
  }
}

// ../../packages/email/locales/index.ts
var supportedLocales = ["en", "sv"];
function getI18n({ locale = "en" }) {
  const safeLocale = supportedLocales.includes(locale) ? locale : "en";
  const getTranslation = (key, params) => {
    const translationSet = translations(safeLocale, params);
    if (!translationSet || !(key in translationSet)) {
      return key;
    }
    return translationSet[key];
  };
  return {
    t: getTranslation
  };
}

// ../../packages/email/emails/invite.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var baseAppUrl = getAppUrl();
var InviteEmail = ({
  invitedByEmail = "bukinoshita@example.com",
  invitedByName = "Pontus Abrahamsson",
  email = "pontus@lostisland.co",
  teamName = "Acme Co",
  inviteCode = "jnwe9203frnwefl239jweflasn1230oqef",
  ip = "204.13.186.218",
  location = "São Paulo, Brazil",
  locale = "en"
}) => {
  const { t } = getI18n({ locale });
  const inviteLink = `${baseAppUrl}/teams/invite/${inviteCode}`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Html, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(pd, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Font,
        {
          fontFamily: "Geist",
          fallbackFontFamily: "Helvetica",
          webFont: {
            url: "https://cdn.jsdelivr.net/npm/@fontsource/geist-sans@5.0.1/files/geist-sans-latin-400-normal.woff2",
            format: "woff2"
          },
          fontWeight: 400,
          fontStyle: "normal"
        },
        void 0,
        false,
        {
          fileName: "../../packages/email/emails/invite.tsx",
          lineNumber: 50,
          columnNumber: 11
        }
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Font,
        {
          fontFamily: "Geist",
          fallbackFontFamily: "Helvetica",
          webFont: {
            url: "https://cdn.jsdelivr.net/npm/@fontsource/geist-sans@5.0.1/files/geist-sans-latin-500-normal.woff2",
            format: "woff2"
          },
          fontWeight: 500,
          fontStyle: "normal"
        },
        void 0,
        false,
        {
          fileName: "../../packages/email/emails/invite.tsx",
          lineNumber: 61,
          columnNumber: 11
        }
      )
    ] }, void 0, true, {
      fileName: "../../packages/email/emails/invite.tsx",
      lineNumber: 49,
      columnNumber: 9
    }),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Preview, { children: t("invite.preview", { teamName }) }, void 0, false, {
      fileName: "../../packages/email/emails/invite.tsx",
      lineNumber: 72,
      columnNumber: 9
    }),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Body, { className: "bg-[#fff] my-auto mx-auto font-sans", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Container,
      {
        className: "border-transparent md:border-[#E8E7E1] my-[40px] mx-auto p-[20px] max-w-[600px]",
        style: { borderStyle: "solid", borderWidth: 1 },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo, {}, void 0, false, {
            fileName: "../../packages/email/emails/invite.tsx",
            lineNumber: 79,
            columnNumber: 13
          }),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { className: "mx-0 my-[30px] p-0 text-[24px] font-normal text-[#121212] text-center", children: [
            t("invite.title1"),
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: teamName }, void 0, false, {
              fileName: "../../packages/email/emails/invite.tsx",
              lineNumber: 81,
              columnNumber: 36
            }),
            " ",
            t("invite.title2"),
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Midday" }, void 0, false, {
              fileName: "../../packages/email/emails/invite.tsx",
              lineNumber: 82,
              columnNumber: 36
            })
          ] }, void 0, true, {
            fileName: "../../packages/email/emails/invite.tsx",
            lineNumber: 80,
            columnNumber: 13
          }),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { className: "text-[14px] leading-[24px] text-[#121212]", children: [
            invitedByName,
            " (",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                href: `mailto:${invitedByEmail}`,
                className: "text-[#121212] no-underline",
                children: invitedByEmail
              },
              void 0,
              false,
              {
                fileName: "../../packages/email/emails/invite.tsx",
                lineNumber: 87,
                columnNumber: 15
              }
            ),
            ") ",
            t("invite.link1"),
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: teamName }, void 0, false, {
              fileName: "../../packages/email/emails/invite.tsx",
              lineNumber: 93,
              columnNumber: 37
            }),
            " ",
            t("invite.link2"),
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Midday" }, void 0, false, {
              fileName: "../../packages/email/emails/invite.tsx",
              lineNumber: 94,
              columnNumber: 35
            }),
            "."
          ] }, void 0, true, {
            fileName: "../../packages/email/emails/invite.tsx",
            lineNumber: 85,
            columnNumber: 13
          }),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { className: "mb-[42px] mt-[32px] text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Button,
            {
              className: "bg-transparent text-primary text-[14px] text-[#121212] font-medium no-underline text-center px-6 py-3 border border-solid border-[#121212]",
              href: inviteLink,
              children: t("invite.join")
            },
            void 0,
            false,
            {
              fileName: "../../packages/email/emails/invite.tsx",
              lineNumber: 97,
              columnNumber: 15
            }
          ) }, void 0, false, {
            fileName: "../../packages/email/emails/invite.tsx",
            lineNumber: 96,
            columnNumber: 13
          }),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { className: "text-[14px] leading-[24px] text-[#707070] break-all", children: [
            t("invite.link3"),
            ":",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { href: inviteLink, className: "text-[#707070] underline", children: inviteLink }, void 0, false, {
              fileName: "../../packages/email/emails/invite.tsx",
              lineNumber: 107,
              columnNumber: 15
            })
          ] }, void 0, true, {
            fileName: "../../packages/email/emails/invite.tsx",
            lineNumber: 105,
            columnNumber: 13
          }),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "../../packages/email/emails/invite.tsx",
            lineNumber: 112,
            columnNumber: 13
          }),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { className: "text-[12px] leading-[24px] text-[#666666]", children: [
            t("invite.footer1"),
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-[#121212] ", children: email }, void 0, false, {
              fileName: "../../packages/email/emails/invite.tsx",
              lineNumber: 116,
              columnNumber: 17
            }),
            ".",
            " ",
            t("invite.footer2"),
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-[#121212] ", children: ip }, void 0, false, {
              fileName: "../../packages/email/emails/invite.tsx",
              lineNumber: 118,
              columnNumber: 17
            }),
            " ",
            t("invite.footer3"),
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-[#121212] ", children: location }, void 0, false, {
              fileName: "../../packages/email/emails/invite.tsx",
              lineNumber: 120,
              columnNumber: 17
            }),
            ".",
            " ",
            t("invite.footer4")
          ] }, void 0, true, {
            fileName: "../../packages/email/emails/invite.tsx",
            lineNumber: 114,
            columnNumber: 15
          }) }, void 0, false, {
            fileName: "../../packages/email/emails/invite.tsx",
            lineNumber: 113,
            columnNumber: 13
          }),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "../../packages/email/emails/invite.tsx",
            lineNumber: 125,
            columnNumber: 13
          }),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
            fileName: "../../packages/email/emails/invite.tsx",
            lineNumber: 127,
            columnNumber: 13
          })
        ]
      },
      void 0,
      true,
      {
        fileName: "../../packages/email/emails/invite.tsx",
        lineNumber: 75,
        columnNumber: 11
      }
    ) }, void 0, false, {
      fileName: "../../packages/email/emails/invite.tsx",
      lineNumber: 74,
      columnNumber: 9
    })
  ] }, void 0, true, {
    fileName: "../../packages/email/emails/invite.tsx",
    lineNumber: 48,
    columnNumber: 7
  }) }, void 0, false, {
    fileName: "../../packages/email/emails/invite.tsx",
    lineNumber: 47,
    columnNumber: 5
  });
};

// ../../node_modules/.pnpm/nanoid@5.1.5/node_modules/nanoid/index.js
init_esm();
import { webcrypto as crypto } from "node:crypto";

// ../../node_modules/.pnpm/nanoid@5.1.5/node_modules/nanoid/url-alphabet/index.js
init_esm();
var urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";

// ../../node_modules/.pnpm/nanoid@5.1.5/node_modules/nanoid/index.js
var POOL_SIZE_MULTIPLIER = 128;
var pool;
var poolOffset;
function fillPool(bytes) {
  if (!pool || pool.length < bytes) {
    pool = Buffer.allocUnsafe(bytes * POOL_SIZE_MULTIPLIER);
    crypto.getRandomValues(pool);
    poolOffset = 0;
  } else if (poolOffset + bytes > pool.length) {
    crypto.getRandomValues(pool);
    poolOffset = 0;
  }
  poolOffset += bytes;
}
function nanoid(size = 21) {
  fillPool(size |= 0);
  let id = "";
  for (let i = poolOffset - size; i < poolOffset; i++) {
    id += urlAlphabet[pool[i] & 63];
  }
  return id;
}

// jobs/tasks/team/invite.ts
var inviteTeamMembers = schemaTask({
  id: "invite-team-members",
  schema: z.object({
    teamId: z.string().uuid(),
    location: z.string(),
    ip: z.string(),
    locale: z.string(),
    invites: z.array(
      z.object({
        email: z.string().email(),
        invitedByName: z.string().uuid(),
        invitedByEmail: z.string().email(),
        teamName: z.string(),
        inviteCode: z.string()
      })
    )
  }),
  maxDuration: 300,
  queue: {
    concurrencyLimit: 10
  },
  run: async ({ location, ip, invites, locale }) => {
    const { t } = getI18n({ locale });
    const emails = invites?.map(async (invite) => ({
      from: "ZUUPEE <zuupeebot@zuupee.com>",
      to: [invite.email],
      subject: t("invite.subject", {
        invitedByName: invite.invitedByName,
        teamName: invite.teamName
      }),
      headers: {
        "X-Entity-Ref-ID": nanoid()
      },
      html: await render(
        InviteEmail({
          invitedByEmail: invite.invitedByEmail,
          invitedByName: invite.invitedByName,
          email: invite.email,
          teamName: invite.teamName,
          inviteCode: invite.inviteCode,
          ip,
          location,
          locale
        })
      )
    }));
    const htmlEmails = await Promise.all(emails);
    await resend.batch.send(htmlEmails);
  }
});
export {
  inviteTeamMembers
};
//# sourceMappingURL=invite.mjs.map
