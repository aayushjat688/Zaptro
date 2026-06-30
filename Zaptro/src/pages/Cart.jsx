import { FaRegTrashAlt } from "react-icons/fa";
import { useCart } from "../context/CartContext"
import { LuNotebookPen } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { FaShoppingBag } from "react-icons/fa";
import { useNavigate } from "react-router";
import emptyCart from "../assets/empty-cart.png"
const Cart = ({location , getLocation}) => {
  const navigate = useNavigate();
  const {cartItem , updateQuantity , deleteItem} = useCart();
  // console.log(cartItem);


  const totalPrice = cartItem.reduce((total , item)=> total + item.price , 0)
  return (
    <div className="mt-10 max-w-6xl mx-auto mb-5">
      {
        cartItem.length > 0 
        ? <div  className="">
            <h1 className="text-2xl font-bold">My Cart ({cartItem.length})</h1>
            <div>
              <div className="mt-10">
                {cartItem.map((item, index)=>{
                  return <div key={index} className="bg-gray-100 p-5 rounded-md flex items-center justify-between mt-3 w-full">
                    <div className="flex items-center gap-4 ">
                      <img src={item.image} alt={item.title} className="w-20 h-20 rounded-md "/>
                      <div>
                        <h1 className="w-[300px] line-clamp-2">{item.title}</h1>
                        <p className="text-red-500 font-semibold texxt-lg">${item.price}</p>
                      </div>
                    </div>
                    <div className="bg-red-500 text-white flex gap-4 p-4 rounded-md font-bold text-xl">
                      <button className="cursor-pointer" onClick={()=>updateQuantity(cartItem, item.id , "decrease")}>-</button>
                      <span>{item.quantity}</span>
                      <button className="cursor-pointer" onClick={()=>updateQuantity(cartItem,item.id , "increase")}>+</button>
                    </div>
                    <span className="hover:bg-white/60 transition-all rounded-full p-3 hover:shadow-2xl  cursor-pointer" >
                        <FaRegTrashAlt onClick={()=>deleteItem(item.id)} className="text-red-500 text-2xl"/>
                    </span>
                  </div>
                })}
              </div>
              <div className="grid grid-cols-2 gap-20">
                <div className="bg-gray-100 rounded-md p-7 mt-4 space-y-2 ">
                  <h1 className="text-gra-800 font-bold text-xl">Delivery Info</h1>

                  <div className="flex flex-col space-y-1">
                    <label htmlFor="">Full Name</label>
                    <input type="text"  placeholder="Enter your name" className="p-2 rounded-md" />
                  </div>

                  <div className="flex flex-col space-y-1">
                    <label htmlFor="">Address</label>
                    <input type="text" onChange={()=>""} value={location.county} placeholder="Enter your address" className="p-2 rounded-md" />
                  </div>
                  <div className="flex w-full gap-5">
                    <div className="flex flex-col space-y-1 w-full">
                        <label htmlFor="">State</label>
                        <input type="text" onChange={()=>""} value={location.state} placeholder="Enter your state" className="p-2 rounded-md w-full" />
                    </div>

                     <div className="flex flex-col space-y-1 w-full">
                        <label htmlFor="">PostCode</label>
                        <input type="text" onChange={()=>""} value={location.postcode} placeholder="Enter your postcode" className="p-2 rounded-md w-full" />
                    </div>
                  </div>

                   <div className="flex w-full gap-5">
                    <div className="flex flex-col space-y-1 w-full">
                        <label htmlFor="">Country</label>
                        <input type="text" onChange={()=>""} value={location.country} placeholder="Enter your country" className="p-2 rounded-md w-full" />
                    </div>

                     <div className="flex flex-col space-y-1 w-full">
                        <label htmlFor="">Phone No</label>
                        <input type="Number" placeholder="Enter your number" className="p-2 rounded-md w-full" />
                    </div>
                  </div>
                  <button className="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer mt-3">Submit</button>

                  <div className="flex items-center justify-center w-full text-gray-700">
                  -------------OR-------------
                </div>
                <div className="flex justify-center items-center">
                  <button onClick={getLocation} className="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer mt-3">Detect Location</button>
                </div>
                </div>
                
                <div className="bg-white border border-gray-100 shadow-xl rounded-md p-7 mt-4 space-y-2 h-max">
                  <h1 className="text-gray-800 font-bold text-xl">Bill details</h1>
                  <div className="flex items-center justify-between ">
                    <h1 className="flex gap-1 items-center text-gray-700"><span><LuNotebookPen /></span>Items total</h1>
                    <p>${totalPrice}</p>
                  </div>
                  <div className="flex justify-between items-center">
                     <h1 className="flex gap-1 items-center text-gray-700"><span><TbTruckDelivery /></span>Delivery Charge</h1>
                     <p className="text-red-500 font-semibold"><span className="text-gray-600 line-through">${25}</span>FREE</p>
                  </div>

                  <div className="flex justify-between items-center">
                     <h1 className="flex gap-1 items-center text-gray-700"><span><FaShoppingBag /></span>Handling Charge</h1>
                     <p className="text-red-500 font-semibold">$5</p>
                  </div>
                  <hr className="text-gray-200 mt-2" />
                  <div className="flex items-center justify-center">
                    <h1 className="font-semibold text-lg">Grand total</h1>
                    <p className="font-semibold text-lg">${totalPrice + 5}</p>
                  </div>

<h1 className="font-semibold text-gray-700 mb-3 mt-7">Apply Promo Code</h1>
                <div className="flex gap-3">
                  <input type="text" placeholder="Enter code"  className="p-2 w-full rounded-md"/>
                  <button className="bt-white text-black border border-gray-200 cursor-pointer py-1 px-3 rounded-md">Apply</button>
                </div>
                    <button className="bg-red-500 text-white px-3 py-2 w-full rounded-md cursor-pointer mt-3">Proceed to Checkout</button>
                </div>
                
              </div>
              
            </div>
        </div> : <div className="flex flex-col justify-center items-center gap-3 h-[600px]">
          <h1 className="text-red-500/80 font-bold text-5xl text-muted">Oh no! cart is empty</h1>
          <img src={emptyCart} className="w-[400px]" alt="" />
          <button onClick={()=>navigate('/products')} className='bg-red-500 hover:bg-red-600 cursor-pointer text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300'>Shop Now</button>
        </div>
      }
    </div>
  )
}

export default Cart