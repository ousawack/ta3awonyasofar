import React from "react";
import ProductSecCarousel from "../components/ProductDetails/ProductSecCarousel";
import ProductSection from "../components/ProductDetails/ProductSection";
import Reviews from "../components/ProductDetails/Reviews";

const ProductDetails = () => {
  return (
    <>
      <ProductSection/>
      <Reviews />
      <ProductSecCarousel/>
      </>
  );
};

export default ProductDetails;
