import NavBar from '../components/Navbar'

import {
  Roboto
} from 'next/font/google'

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"]
});

export const metadata = {
  title: "My Store with NextJS - HomePage",
  description: "Esta e sla pagina principal del site",
  keywords: "store, online, ecomerce"
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className={roboto.className}>
        <NavBar />

        {children}
      </body>
    </html>
  )
}
