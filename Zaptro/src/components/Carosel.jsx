import { useContext, useEffect } from "react"
import { DataContext} from "../context/DataContext"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carosel = () => {
  const {data , fetchAllProducts} = useContext(DataContext)

useEffect(()=>{
  fetchAllProducts()
},[]);
 var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
// console.log(data);
  return (
    <div>
      <Slider {...settings}>

      </Slider>

    </div>
  )
}

export default Carosel