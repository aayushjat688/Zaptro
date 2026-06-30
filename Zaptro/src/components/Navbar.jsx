import { Link,NavLink } from "react-router-dom";
import { RiMapPinLine } from "react-icons/ri";
import { FaCaretDown } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { Show, SignInButton, UserButton } from '@clerk/react'
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import ResponsiveMenu from "./ResponsiveMenu";
// import { useState } from "react";
const Navbar = ({location , getLocation , openDropdown , setOpenDropDown})=> {
  const [openNav , setOpenNav] = useState(false);
    const {cartItem} = useCart();
    
  function toggle () {
    setOpenDropDown(!openDropdown);
  }
  return (
      <div className="bg-white py-3 shadow-2xl px-4 md:px-0">
       <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        <div className="flex gap-7 items-center">

          <Link to="/" className="font-bold text-3xl"><span className="text-red-500 font-serif">Z</span>aptro</Link>

          <div className="hidden md:flex gap-1 cursor-pointer text-gray-700 items-center">
        <RiMapPinLine className="text-red-500 w-7 h-7"/>
        <span className="font-semibold">{location ? <div className="max-w-10 ">{
          <>
          <p>{location.city_district},{location.postcode}</p>
          <p>{location.country}</p>
          </>
          
          }</div> : "Add Address"}</span>
        <FaCaretDown onClick={()=>toggle()}/>
        </div>
        {
          openDropdown ? <div className="w-[250px] h-max shadow-2xl bg-white fixed top-16 left-60 border-2
          p-5 border-gray-100 rounded-md"><h1 className="font-semibold mb-4 text-xl flex justify-between">Change Location <span className="font-bold" onClick={()=>toggle()}>X</span></h1>
          <button className="bg-red-500 text-white px-3 py-1 rounded-md
          cursor-pointer hover:bg-red-300" onClick={getLocation}>Detect my Location</button>
          </div> : null
        }
        </div>

          <nav className="flex gap-7 items-center">
            <ul className="hidden md:flex  flex-row gap-7 font-semibold text-xl">
              <NavLink to="/" 
              className={({isActive})=> `${isActive 
                ? 'border-b-3 transition-all border-red-500'
                : 'text-black'
              } cursor-pointer`}>
                <li>Home</li>
                </NavLink>

              <NavLink to="/products" className={({isActive})=>`
              ${isActive ? 'border-b-3 transition-all border-red-500' : "text-black"}
              cursor-pointer
              `}><li>Products</li></NavLink>

              <NavLink to="/about" className={({isActive})=>`
              ${isActive ? 'border-b-3 transition-all border-red-500' : "text-black"}
              cursor-pointer
              `}><li>About</li></NavLink>

              <NavLink to="/contact" className={({isActive})=>`
              ${isActive ? 'border-b-3 transition-all border-red-500' : "text-black"}
              cursor-pointer
              `}><li>Contact</li></NavLink>

            </ul>

            <Link to={'/cart'} className="h-7 w-7 text-2xl"><LuShoppingCart /><span className="bg-red-500 text-white w-5 h-5 flex items-center justify-center rounded-full absolute top-2 ">{cartItem.length}</span></Link>
            

               <div className="hidden md:block">
               <Show when="signed-out">
          <SignInButton className="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer"/>
          
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
            </div>
            {
              openNav ? <FaHamburger className="block md:hidden black cursor-pointer h-6 w-6" onClick={()=>setOpenNav(!openNav)}/>
              : <GiHamburgerMenu onClick={()=>setOpenNav(!openNav)} className="block md:hidden black cursor-pointer h-6 w-6"/>
            }
          </nav>


        

       </div>
       <ResponsiveMenu openNav={openNav} setOpenNav={setOpenNav} />
      </div>
  );
}
export default Navbar;