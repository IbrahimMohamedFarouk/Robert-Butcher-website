import { useState } from "react"
import logo from '../assets/logo.png'
import { NAVIGATION_LINKS } from "../constants"
import { FaTimes ,FaBars } from "react-icons/fa"
const Navbar = () => {
    const [IsMobileMenuOPen,setIsMobileMenuOPen]=useState(false)
    
    const ToggleMobileMenu=()=>
    {
        setIsMobileMenuOPen(!IsMobileMenuOPen)
    }

    const handleLinkClick =(e,href)=>{
        e.preventDefault();
        const targetElement=document.querySelector(href)
        if(targetElement){
            // const offset=-85
            const elementPostion= targetElement.getBoundingClientRect().top;
            const offsetPostion= elementPostion+ window.scrollY;


            window.scrollTo({
                top:offsetPostion,
                behavior: 'smooth'
            })
        }
        setIsMobileMenuOPen(false)
    }
    return (
    <div>
        <nav className="fixed top-4 left-0 right-0 z-50">
            {/* Desktop menu */}
            <div className="mx-auto hidden md:block items-center justify-center max-w-2xl rounded-lg 
            py-3 bg-black/20 lg-flex backdrop-blur-lg px-16
            ">
                <div className="flex justify-between gap-4">
                    <a href="hero
                    " className="">
                        <img src={logo} alt="logo" width={90} height={90}></img>                    
                    </a>
                    <ul className="flex items-center gap-4">
                        {
                            NAVIGATION_LINKS.map((item,index)=>{
                                return(
                                    <li key={index} className="text-sm font-[200] hover:text-yellow-500 ">
                                        <a href={item.href} onClick={(e)=>{handleLinkClick(e,item.href)}}>
                                            {item.label}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            {/* Mobil menu */}
            <div className="md:hidden rounded-lg backdrop-blur-md">
                <div className="flex justify-between items-center px-5">
                    <div>
                        <a href="#">
                            <img src={logo} alt="logo" width={90} height={90}/>
                        </a>
                    </div>
                    <div className="flex items-center">
                        <button className="focus:outline-none md:hidden" onClick={ToggleMobileMenu}>
                            {
                                IsMobileMenuOPen ? (
                                    <FaTimes className="h-6 w-5 m-2" />
                                ) : (
                                    <FaBars className="h-6 w-5 m-2" />
                                ) 
                            }
                        </button>
                    </div>
                </div>
                {
                    IsMobileMenuOPen && (
                        <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md">
                            {
                                NAVIGATION_LINKS.map((item,index)=>(
                                    <li key={index}>
                                        <a className="text-lg block w-full font-semibold" href={item.href}>
                                            {item.label}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    )
                }
            </div>
        </nav>
    </div>
  )
}

export default Navbar