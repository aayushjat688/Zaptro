import axios from "axios";
import { createContext, useContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const DataContext = createContext(null);
export const DataProvider = ({children}) =>{
  const [data , setData] = useState();

  const fetchAllProducts = async () =>{
    try{
        const response = await axios.get(`https://fakestoreapi.com/products`)
        // console.log(response);
        const productsData = response.data;
        // console.log(productsData);
        setData(productsData);
       
    }catch(error){
      console.log(error);
    }
  }
  
  return(
    <DataContext.Provider value={{data , setData , fetchAllProducts}}>
      {children}
    </DataContext.Provider>
  )
}

// eslint-disable-next-line react-hooks/rules-of-hooks, react-refresh/only-export-components
export const getData = ()=> useContext(DataContext);