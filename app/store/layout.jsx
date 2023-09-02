import Link from "next/link"

export const metadata = {
   title: "My Store",
}

function TiendaLayout({children}) {
   return (
      <>
         <nav>
            <h3>Seccition Stores</h3>
            <ul>
               <li>
                  <Link href="/store/categories">Categorias</Link>
               </li>
               <li>
                  <Link href="/store/categories/computer">Computers</Link>
               </li>
            </ul>
         </nav>
         { children }
      </>
   )
}

export default TiendaLayout