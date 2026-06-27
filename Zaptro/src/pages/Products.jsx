import { useEffect, useState } from "react";
import { getData } from "../context/DataContext"
import FilterSection from "./FilterSection";
import Loading from "../assets/Loading4.webm"
import ProductCard from "../components/ProductCard";
const Products = () => {
  const [search , setSearch] = useState(""); 
  const [category , setCategory] = useState("All"); 
  const [priceRange , setPriceRange] = useState([0,1000]);
  const {data,fetchAllProducts} = getData();
  useEffect(()=>{
fetchAllProducts();
  },[])

  const handleCategoryChange = (e)=>{
    setCategory(e.target.value);
    // console.log(category);
  }

  const filteredData = data?.filter((item)=>
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === 'All' || item.category === category) &&
      item.price >= priceRange[0] && item.price<= priceRange[1]
  )



  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 mb-10 ">
        {
          data?.length > 0 ? (
            <div className="flex gap-8">
              <FilterSection search={search} setSearch={setSearch} priceRange={priceRange} setPriceRange={setPriceRange} category={category} setCategory={setCategory} handleCategoryChange={handleCategoryChange}/>
              <div className="grid grid-cols-4 gap-7 mt-10">
                {
                    filteredData?.map((product,index)=>{
                      return <ProductCard key={index} product={product}/>
                    })
                }
              </div>
              
            </div>
          )
          : (
            <div className="flex items-center justify-center h-[400px] ">
              <video muted autoPlay loop>
                <source src={Loading} type="video/webm" />
              </video>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Products