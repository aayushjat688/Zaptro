
import { FaFilter } from "react-icons/fa";
import { getData } from "../context/DataContext";
const MobileFilter = ({ openFilter, setOpenFilter, category, setCategory, priceRange, setPriceRange, search, setSearch, handleCategoryChange }) => {
    const {categoryOnlyData} = getData();
  return (
    <>
    <div className=" bg-gray-100 flex justify-between items-center md:hidden px-4 p-2 mt-5">
      <h1 className="font-semibold text-xl">Filters</h1>
      <FaFilter onClick={()=>setOpenFilter(!openFilter)} className="text-gray-800"/>
    </div>
    {
        openFilter ? <div className="bg-gray-100 md:hidden">

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
 <div className="flex flex-col gap-2 max-w-[200px]">
    <label htmlFor="my-input">Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
    <input id="my-input" type="range" value={priceRange[1]} onChange={(e)=>setPriceRange([priceRange[0], Number(e.target.value)])}/>
   
 </div>
         <button className="bg-red-500 text-white rounded-md px-3 py-1 mt-5 cursor-pointer"
         onClick={()=>{setSearch("");setCategory('All');
          setPriceRange( [0,1000])
          setOpenFilter(!openFilter)
         }}>
          Reset Filters</button>

        </div>
        : null
    }    
   </>
  )
}

export default MobileFilter