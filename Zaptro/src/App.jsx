
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import Products from './pages/Products'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Footer from './pages/Footer'
import SinglePage from './pages/SinglePage'
import CategoryProduct from './pages/CategoryProduct'



function App() {
const [location , setLocation] = useState([]);
  const [openDropdown , setOpenDropDown] = useState(false);
    

const getLocation = async () =>{
  navigator.geolocation.getCurrentPosition(pos => {
    const { latitude , longitude} =  pos.coords;
    // console.log(latitude,longitude);

    const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
    try{
     const locatort = async () => {
       const location =await axios.get(url);
      //  console.log(location.data.address);
      setLocation(location.data.address);
      setOpenDropDown(false);
     }
     locatort();
     

    }
    catch(error){
      console.log(error);
    }
  })
}
useEffect(()=>{
getLocation();
},[])

  return (
  <BrowserRouter>
  <Navbar location={location} getLocation={getLocation} openDropdown={openDropdown} setOpenDropDown={setOpenDropDown}/>
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path='/products' element={<Products />}></Route>
    <Route path='/products/:id' element={<SinglePage />}></Route>
    {/* <Route path='/category/:category' element={<CategoryProduct />}></Route> */}
    <Route path="/about" element={<About />}></Route>
    <Route path="/contact" element={<Contact />}></Route>
    <Route path="/cart" element={<Cart location={location} geolocation={getLocation}/>}></Route>



  </Routes>
  <Footer />
  </BrowserRouter>
  )
}

export default App
