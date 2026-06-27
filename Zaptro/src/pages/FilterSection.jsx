import { useContext } from "react"
import { DataContext } from "../context/DataContext"

const FilterSection = ({category,setPage ,  setCategory, priceRange, setPriceRange, search, setSearch, handleCategoryChange}) => {
  const {categoryOnlyData} = useContext(DataContext)
  return (
    <div className="bg-gray-100 mt-10 p-4 rounded-md h-max ">
      <input type="text" placeholder="Search" className="bg-white p-2 rounded-md border bg-amber-400 border-2" onChange={(e)=>setSearch(e.target.value)}
      value={search}/>
      
      <h1 className="mt-5 font-semibold text-xl">Category</h1>
      <div className="flex flex-col gap-2 mt-3 ">
        {
          categoryOnlyData?.map((item,index)=>{
            return <div className="flex gap-2" key={index}>
              <input type="checkbox" name={item} checked={category=== item} value={item}
              min="0" max="1000"
              onChange={handleCategoryChange}/>
              <button className="cursor-pointer uppercase">{item}</button>
            </div>
          })
        }
      </div>
 <h1 className="mt-5 font-semibold text-xl">Price Range</h1>
 <div className="flex flex-col gap-2">
    <label htmlFor="my-input">Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
    <input id="my-input" type="range" value={priceRange[1]} onChange={(e)=>setPriceRange([priceRange[0], Number(e.target.value)])}/>
   
 </div>
         <button className="bg-red-500 text-white rounded-md px-3 py-1 mt-5 cursor-pointer"
         onClick={()=>{setSearch("");setCategory('All');
          setPriceRange( [0,1000])
          setPage(1);
         }}>
          Reset Filters</button>

    </div>
  )
}

export default FilterSection