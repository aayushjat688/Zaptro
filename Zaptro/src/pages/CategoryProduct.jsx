import { useParams } from "react-router"

const CategoryProduct = () => {
  const params = useParams();
  const category = params.category;
  return (
    <div>CategoryProduct</div>
  )
}

export default CategoryProduct