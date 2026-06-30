import { NavLink } from 'react-router'
import { Show, SignInButton, UserButton } from '@clerk/react'
const ResponsiveMenu = ({openNav , setOpenNav}) => {
  return (
    <>
      <div className={`${openNav ? "left-0":"left-[100%]"} fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white px-8 pt-16 max-w-[200px] pb-6 text-black md:hidden rounded-r-xl shadow-md transition-all`}>
           
          
            <div className="flex  flex-col  justify-start gap-7">
            
        <Show when="signed-out">
          <SignInButton className="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer"/>
          
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>

          <nav>
          <ul className="flex flex-col gap-7 font-semibold text-xl">
              <NavLink to="/" 
              className={({isActive})=> `${isActive 
                ? 'border-b-3 transition-all border-red-500'
                : 'text-black'
              } cursor-pointer`}>
                <li onClick={()=>setOpenNav(false)}>Home</li>
                </NavLink>

              <NavLink to="/products" className={({isActive})=>`
              ${isActive ? 'border-b-3 transition-all border-red-500' : "text-black"}
              cursor-pointer
              `}><li onClick={()=>setOpenNav(false)}>Products</li></NavLink>

              <NavLink to="/about" className={({isActive})=>`
              ${isActive ? 'border-b-3 transition-all border-red-500' : "text-black"}
              cursor-pointer
              `}><li onClick={()=>setOpenNav(false)}>About</li></NavLink>

              <NavLink to="/contact" className={({isActive})=>`
              ${isActive ? 'border-b-3 transition-all border-red-500' : "text-black"}
              cursor-pointer
              `}><li onClick={()=>setOpenNav(false)}>Contact</li></NavLink>

            </ul>
      </nav>
      
    </div>
      </div>
  
    </>
  )
}

export default ResponsiveMenu