import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import Loading from "../assets/Loading4.webm"
import Breadcrums from "../components/Breadcrums"
import { LuShoppingCart } from "react-icons/lu";
import { useCart } from "../context/CartContext"

const SinglePage = () => {
  const {addToCart} = useCart();
  const params = useParams()
  // console.log(params.id);
  const [singleProduct , setSingleProduct] = useState("");
  const getSingleProduct = async()=>{
    try{
        const response = await axios.get(`https://fakestoreapi.com/products/${params.id}`)
        const product = response.data;
        // console.log(product);
        setSingleProduct(product)
    }catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    getSingleProduct();
  },[]);
const title = singleProduct.title;

  return (
    <>
    {
      singleProduct ? 
      <div className="px-4 pb-4 md:px-0">
        <Breadcrums title={title}/>
        <div className="max-w-6xl mx-auto md:p-6 grid grid-cols-2 gap-10">
          <div>
            <img src={singleProduct.image} alt={singleProduct.title} className="rounded-2xl w-full object-cover"/>
          </div>

          <div className="flex flex-col gap-6">
            <h1 className="md:text-3xl font-bold text-gray-800">{singleProduct.title}</h1>
            <div className="text-gray-700 ">{singleProduct.category?.toUpperCase()}</div>
            <p className="text-xl text-red-500 font-bold">${singleProduct.price}</p>
            <p className="text-gray-600">
              {singleProduct.description}
 </p>
              <div className="flex items-center gap-4">
                <label htmlFor="" className="text-sm font-medium text-gray-700 ">Quantity:</label>
                <input type="number" onClick={()=>""} min={1} value={1} className="w-20 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-red-500"/>
              </div>
              <div className="flex gap-4 mt-4">
                     <button className="flex items-center gap-2 bg-red-500 py-2 px-3 rounded-md text-lg text-white  cursor-pointer font-semibold" onClick={()=>addToCart(singleProduct)}><span><LuShoppingCart /></span>Add to Cart</button>
              </div>
           
            </div>
        </div>
</div> 
      : <div className="flex items-center justify-center h-[400px] ">
                    <video muted autoPlay loop>
                      <source src={Loading} type="video/webm" />
                    </video>
                  </div>
                
    }
    </>
  )
}

export default SinglePage