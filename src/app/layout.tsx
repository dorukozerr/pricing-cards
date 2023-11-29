import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.scss'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Pricing Cards',
  description: 'Pricing cards demo for egaranti'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
