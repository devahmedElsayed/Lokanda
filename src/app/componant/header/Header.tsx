import Image from "next/image"
import Link from "next/link"
import logo from "../../assets/logo.png"
import Seaarchbar from "./Seaarchbar"
import Navbar from "./Navbar"
function Header({placeholder} : {placeholder?:string}) {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-5">
        <div className="container grid grid-cols-3 relative">
        <Link href="/" className="relative flex items-center h-10 my-auto mt-5">
            <Image src={logo} 
            alt="logo-img"
            width={200}
            
            

            className="object-contain object-left  flex items-center"
            />       
        </Link>
        <Seaarchbar placeholder={placeholder}/>
        <Navbar/>
        </div>
        
    </header>
  )
}

export default Header