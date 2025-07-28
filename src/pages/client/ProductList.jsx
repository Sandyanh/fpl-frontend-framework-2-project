import React from "react";
import bannerPCV from "@assets/images/banner-pcv.jpg";

const ProductList = () => {
  return (
    <>
      <div>
        <img
          src={bannerPCV}
          alt="Banner PCV"
          width={"100%"}
          object-fit="cover"
        />
      </div>
      <div className="product-heading"></div>
    </>
  );
};

export default ProductList;
