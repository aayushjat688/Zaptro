import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

 const CartContext = createContext();

export const CartProvider = ({children})=>{
  // console.log(children);
  const [cartItem , setCartItem] = useState([]);

  // useEffect(()=>{
  //   const storedItem = localStorage.getItem('cartItem');
  //   if(storedItem){
  //     try{
  //       console.log(JSON.parse(storedItem));
  //     }finally{
  //       console.log(cartItem);
  //     }
      
  //   }
  // },[]);
  // useEffect(()=>{
  //   localStorage.setItem('cartItem' , JSON.stringify(cartItem))
  // },[cartItem])

  const addToCart = ({product})=>{
    const itemInCart = cartItem.find((item)=>item.id === product.id);
    if(itemInCart){
      const updatedCart = cartItem.map((item)=>
      item.id === product.id ? {...item,quantity: item.quantity +1 } : 
    item );
    setCartItem(updatedCart)
     toast('✨ Product is added to Cart', {
position: "bottom-right",
autoClose: 4000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true
});
    }else{
       setCartItem([...cartItem,{...product , quantity : 1}])
       toast('✨ Product is added to Cart', {
position: "bottom-right",
autoClose: 4000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true
});
    }
   
    
      
  }

  const updateQuantity = (cartItem,productId , action) =>{
   setCartItem(cartItem.map(item =>{
      if(item.id === productId){
        let newUnit = item.quantity;
        if(action === "increase"){
          newUnit = newUnit + 1;
             toast('✨ Quantity Increased', {
position: "bottom-right",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true
});
        }else if (action === "decrease"){
          newUnit = newUnit - 1;
             toast('✨ Quantity Decreased', {
position: "bottom-right",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true
});
        }
        return newUnit > 0 ? {...item , quantity: newUnit} : null
      }
      return item;
    }).filter(item => item != null) ) 
  }

  const deleteItem = (productId) =>{
    setCartItem(cartItem.filter(item => item.id !== productId))
       toast('Item deleted', {
position: "bottom-right",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true
});
  }

  return <CartContext.Provider value={{cartItem,setCartItem,addToCart,deleteItem,updateQuantity}}>
    {children}
  </CartContext.Provider>

}
// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);