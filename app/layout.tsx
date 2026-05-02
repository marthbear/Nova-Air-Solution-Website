import Banner from './components/Banner'
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return(
    <html lang="en">
      <body>
        <Banner />
        {children}
      </body>
    </html>
  )
}

