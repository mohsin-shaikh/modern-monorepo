"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { TRPCReactProvider } from "@/trpc/client"
import { I18nProviderClient } from "@/locales/client"
import type { ReactNode } from "react"

type ProviderProps = {
  locale: string;
  children: ReactNode;
};

export function Providers({ locale, children }: ProviderProps) {
  return (
    <TRPCReactProvider>
      <I18nProviderClient locale={locale}>
        <NextThemesProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          enableColorScheme
        >
          {children}
        </NextThemesProvider>
      </I18nProviderClient>
    </TRPCReactProvider>
  )
}
