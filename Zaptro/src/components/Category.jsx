

import {  getData } from "../context/DataContext"

const Category = ()=> {
  const {categoryOnlyData} = getData();




  // console.log(categoryOnlyData);
 
  return (
    <div className="bg-[#101829]">
       <div className="max-w-7xl mx-auto items-center flex gap-4 justify-around py-7 px-4">
        {
          categoryOnlyData.map((item,index)=>{
            return <div key={index}>
              <button className="uppercase bg-gradient-to-r from-red-500 to bg-purple-500 text-white px-3 py-1
              rounded-md cursor-pointer">{item}</button>
            </div>
          })
        }
       </div>
    </div>
  )
}

export default Category