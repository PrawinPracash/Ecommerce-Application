import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import config from "../../config";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Header from "../Header/Header";
import "./index.css";
import ProductCard from "../ProductCard/ProductCard";
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function AllProducts() {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
        }
        const res = await axios.get(`${config.backendAPI}/api/v1/products`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const products = res.data.data;
        console.log(products);
        setProducts(products);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        console.log(err.response.err);
      }
    }
    getData();
  }, []);

  function loader() {
    return (
      <div className="products-loader-container">
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      </div>
    );
  }

  function displayProducts() {
    console.log("here", products);
    return (
      <div className="product-sections">
        <h1 className="products-heading">All Products</h1>
        <ul className="products-list">
          {products?.map((product) => {
            const { title, price, brand, rating, imageUrl } = product;
            return (
              <Link className="product" to={`/product/${product._id}`} state={product}>
                {" "}
                <ProductCard
                  key={product._id}
                  productData={{ title, price, brand, rating, imageUrl }}
                />{" "}
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <div>
      <Header />
      {isLoading && loader()}
      {!isLoading && displayProducts()}
    </div>
  );
}
export default AllProducts;
