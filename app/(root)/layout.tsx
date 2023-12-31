import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { Topbar, LeftSidebar, RightSidebar, Bottombar } from '@/components/shared'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Thoughts",
  description : "A Next.js 13 Meta Thoughts Applicaton"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Topbar />
          <main className='flex flex-row'>
            <LeftSidebar />
            <section className='main-container'>
              <div className='w-full max-w-4xl'>
                {children}
              </div>
            </section>
            <RightSidebar />
          </main>
          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  )
}
