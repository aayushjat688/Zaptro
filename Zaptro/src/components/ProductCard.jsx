import { LuShoppingCart } from "react-icons/lu";
const ProductCard = ({product}) => {
  // console.log(product);
  return (
    <div className="border relative border-gray-100 rounded-2xl hover:scale-105 cursor-pointer
    transition-all p-2 h-max ">
      <img className="bg-gray-100 aspect-square" src={product.image} alt="" />
     <h1 className="line-clamp-1 p-1 font-semibold">{product.title}</h1>
     <p className="my-1 text-lg text-gray-800 font-bold">${product.price}</p>
     <button className="flex items-center gap-1 bg-red-500 py-2 px-3 rounded-md text-lg text-white w-full cursor-pointer font-semibold"><span><LuShoppingCart /></span>Add to Cart</button>
    </div>
  )
}

export default ProductCard