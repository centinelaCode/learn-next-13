import NavBar from '../components/Navbar'

export const metadata = {
  title: "My Store with NextJS - HomePage",
  description: "Esta e sla pagina principal del site",
  keywords: "store, online, ecomerce"
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <NavBar />

        {children}
      </body>
    </html>
  )
}
