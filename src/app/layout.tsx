import './globals.css'

export const metadata = {
  title: 'Home4Dev',
  description: 'Sua melhor tela inicial. De dev para dev.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
