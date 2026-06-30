import { LuShoppingCart } from "react-icons/lu";
import { useNavigate } from "react-router";
import { useCart } from "../context/CartContext";
const ProductCard = ({product}) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  // console.log(product);
  return (
    <div className="border relative border-gray-100 rounded-2xl hover:scale-105 cursor-pointer
    transition-all p-2 h-max ">
      <img className="bg-gray-100 w-[250px] aspect-square" src={product.image} onClick={()=>navigate(`/products/${product.id}`)} alt="" />
     <h1 className="line-clamp-1 p-1 font-semibold">{product.title}</h1>
     <p className="my-1 text-lg text-gray-800 font-bold">${product.price}</p>
     <button className="flex items-center gap-1 bg-red-500 py-2 px-3 rounded-md text-lg text-white w-full cursor-pointer font-semibold" onClick={()=>addToCart({product})}><span><LuShoppingCart /></span>Add to Cart</button>
    </div>
  )
}

export default ProductCard