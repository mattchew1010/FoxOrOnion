import "./globals.css"
import Navbar from "@components/nav/Navbar.js"

export const metadata = {
  title: 'News or Satire?',
  description: 'A game to determine if a headline is made by Fox News or The Onion.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background font-poppins text-white">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
