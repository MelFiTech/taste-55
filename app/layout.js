import '../styles/globals.css'

// Separate viewport configuration
export const viewport = {
  width: 'device-width',
  initialScale: 1
}

// Regular metadata
export const metadata = {
  title: 'Taste 55 - Landing Page',
  description: 'Welcome to Taste 55',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preload" as="image" href="/fres.mp4" type="video/mp4" />
      </head>
      <body>{children}</body>
    </html>
  )
}
