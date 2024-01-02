import { useEffect } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import Header from "../Header/Header";
import "./index.css";

function Home() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (!token) {
    console.log("here");
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Header />
      <div className="home-container">
        <h1 className="home-heading">Explore the Latest Trends in Fashion </h1>
        <div className="home-content">
            <div>
            <p className="home-description">
              Shop our curated collection of chic clothing, accessories, and
              exquisite home accents for a stylish living experience. Elevate
              Your Wardrobe: Find timeless classics and modern must-haves that
              reflect your unique taste. Transform Your Space: From elegant home
              textiles to trendy decor pieces, redefine your home's ambiance
              with our exclusive selections. Unveil Fashion Forward Finds: Stay
              ahead in the fashion game with our diverse range of designer picks
              and exclusive labels. Create Your Signature Look: Personalize your
              fashion statement and home decor with our eclectic range of
              choices. Redefine Your Shopping Experience: Experience convenience
              and luxury with seamless shopping and swift delivery of premium
              fashion and home essentials
          </p>
          <Link to="/products">
          <button className="home-btn">Shop Now</button>
          </Link>
          
            </div>
            
          

          <img
            className="home-image"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="dresses to be noticed"
          />
        </div>
        
      </div>
    </>
  );
}

export default Home;
