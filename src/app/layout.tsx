import './globals.css'

export const metadata = {
  title: 'Blogs',
  description: 'Blogs app created using NextJS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
