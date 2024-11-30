import '../styles/globals.css'

export const metadata = {
  title: 'Taste 55 - Landing Page',
  description: 'Welcome to Taste 55',
  // Add viewport metadata for responsive images
  viewport: {
    width: 'device-width',
    initialScale: 1
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Add preconnect hints for faster image/video loading */}
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preload" as="image" href="/fres.mp4" type="video/mp4" />
      </head>
      <body>{children}</body>
    </html>
  )
}
