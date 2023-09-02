import Link from 'next/link' 

function Navbar() {
   return (
      <nav>
         <h2>Nav Bar</h2>
         <ul>
            <li>
               <Link href="/">Home</Link>
            </li>
            <li>
               <Link href="/about">About</Link>
            </li>    
            <li>
               <Link href="/store">Store</Link>
            </li>          
         </ul>
      </nav>
   )
}

export default Navbar