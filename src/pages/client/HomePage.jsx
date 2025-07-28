import React from "react";
import ProductList from "./ProductList";
import bannerPCV from "@assets/images/banner-pcv.jpg";

const HomePage = () => {
  return (
    <>
      <div
        style={{
          maxWidth: "100vw",
        }}
      >
        <img src={bannerPCV} alt="Banner PCV" width={"100%"} />
      </div>
      <ProductList />
    </>
  );
};

export default HomePage;
