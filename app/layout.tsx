import type React from "react"
import type { Metadata } from "next"
import { Inter, Noto_Sans_JP as NotoSansJP } from "next/font/google"
import "./globals.css"
import { DarkHeader } from "@/components/dark-header"
import { DarkFooter } from "@/components/dark-footer"

const inter = Inter({ subsets: ["latin"] })
const noto = NotoSansJP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
})

export const metadata: Metadata = {
  title: "EdenNori | Asian Cuisine | Electric Cloud Kitchen India",
  description:
    "Experience electrifying Japanese, Chinese, Thai & Indo-Asian fusion cuisine. 100% pure vegetarian vegetarian neon kitchen delivering glowing, flavorful meals across Mumbai, Pune & Delhi.",
  icons: {
    icon: "/images/brand_logo.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${noto.className} bg-black`}>
        <DarkHeader />
        {children}
        <DarkFooter />
      </body>
    </html>
  )
}
