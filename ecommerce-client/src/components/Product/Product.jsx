import { useLocation, useNavigate } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import axios from "axios";
import './index.css'
import config from "../../config";
function Product() {
  const navigate= useNavigate();
  const location = useLocation();
  const data = location.state;
  console.log("product ==> ", data);

  const { _id, title, brand, price, imageUrl, rating } = data;

  async function handleClick(){

    const data={
      id: _id
    }

    try{
      const res= await axios.put(`${config.backendAPI}/api/v1/cartItem`,data);
      console.log(res.data);
    }catch(err){
      console.log(err);
    }

    navigate("/products");


    

    


  }

  
  return (
    <div className="product-container">
      <div className="product-content">
      <ProductCard productData={data}/>

      <button onClick={handleClick} className="add-to-cart-btn"> Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
