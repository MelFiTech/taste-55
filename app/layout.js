import '../styles/globals.css'

export const metadata = {
  title: 'Taste 55 - Landing Page',
  description: 'Welcome to Taste 55',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
