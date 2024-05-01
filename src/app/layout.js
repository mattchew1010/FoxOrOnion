import "./globals.css"
import Navbar from "@components/nav/Navbar.js"

export const metadata = {
  title: 'News or Satire?',
  description: 'A game to determine if a headline is made by Fox News or The Onion.',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      

      <head>
        <script defer src={process.env.UMAMI_URL} data-website-id={process.env.UMAMI_WEBSITEID}/>
      </head>
      <body className="bg-background font-poppins text-white">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
