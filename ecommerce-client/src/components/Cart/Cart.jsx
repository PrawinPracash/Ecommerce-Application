import { useEffect } from "react";
import Header from "../Header/Header";
import axios from "axios";
import config from "../../config";

function Cart() {

  useEffect( ()=>{

    async function getProducts(){
      const products= await axios.get(`${config.backendAPI}/api/v1/cart`);
      console.log(products);
    }
    getProducts();

  },[] )

  return <>
    <Header />


  </>;
}

export default Cart;
