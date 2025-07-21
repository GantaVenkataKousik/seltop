import type { Metadata } from 'next'
import './globals.css'
import { Sora } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"

const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sora',
})

export const metadata: Metadata = {
  title: 'Seltop | Minecraft Graphic Designer',
  description: 'Portfolio website of Seltop, Minecraft Graphic Designer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${sora.variable}`}>
      <body className={sora.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
