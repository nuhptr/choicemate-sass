import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
   title: "ChoiceMate | AI platform to help you make better decisions",
   description: "AI platform to help you make better decisions",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <ClerkProvider>
         <html lang="en">
            <body className={inter.className} suppressHydrationWarning={true}>
               {children}
            </body>
         </html>
      </ClerkProvider>
   )
}
