import { useEffect, useState } from "react";
// import { Lottie } from "lottie-react"
import { getData } from "../context/DataContext"
import FilterSection from "./FilterSection";
import Loading from "../assets/Loading4.webm"
import ProductCard from "../components/ProductCard";
import PaginationBottom  from "../components/PaginationBottom";
import no from "../assets/no.PNG"
// import notfound from "../assets/notfound.json"

const Products = () => {
  const [search , setSearch] = useState(""); 
  const [category , setCategory] = useState("All"); 
  const [priceRange , setPriceRange] = useState([0,1000]);
  const [page , setPage] = useState(1);
  const {data,fetchAllProducts} = getData();
  useEffect(()=>{
fetchAllProducts();
window.scrollTo(0,0)
  },[])

  const handleCategoryChange = (e)=>{
    setCategory(e.target.value);
    setPage(1);
    // console.log(category);
  }

  const filteredData = data?.filter((item)=>
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === 'All' || item.category === category) &&
      item.price >= priceRange[0] && item.price<= priceRange[1]
  )
  const pageHandler = (selectedPage) =>{
    setPage(selectedPage);
  }
  const dynamicPage = Math.ceil(filteredData?.length / 8);


  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 mb-10 ">
        {
          data?.length > 0 ? (
            <>
            <div className="flex gap-8 ">
              <FilterSection search={search} setSearch={setSearch} priceRange={priceRange} setPriceRange={setPriceRange} category={category} setCategory={setCategory} handleCategoryChange={handleCategoryChange}/>
              {
                filteredData?.length > 0 ? (
                  <div className="flex flex-col justify-center items-center">
                        <div className="grid grid-rows-1 md:grid-cols-4 gap-7 mt-10">
                {
                    filteredData?.splice(page * 8 - 8, page * 8).map((product,index)=>{
                      return <ProductCard key={index} product={product}/>
                    })
                }
              </div>
                      <PaginationBottom page={page} setPage={setPage} pageHandler={pageHandler} dynamicPage={dynamicPage}/> 
                  </div>
                )
                : (<div className="flex md:h-[600px] md:w-[900px] mt-10 items-center justify-center">
                      {/* <Lottie animationData={notfound} classID = 'w-[500px]'/> */}
                     <img src={no}/>
                </div>)
              }
                  
            </div>
               
            </>
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