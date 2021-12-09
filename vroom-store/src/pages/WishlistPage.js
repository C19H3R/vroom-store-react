import React, { useContext, useState } from "react";
import ProductCard from "../components/ProductCard";
import { AppContext } from "../context/AppContext";
import WishlistPageWrapper from "../styledComponents/PageWrappers/ProductsPageWrapper";

function WishlistPage() {
   const [{ products }] = useContext(AppContext);
   const wishlistedCars = products.filter((item) => item.isWishlisted);
   return (
      <WishlistPageWrapper>
         {wishlistedCars.map((val) => (
            <ProductCard id={val.id} key={val.id} />
         ))}
      </WishlistPageWrapper>
   );
}

export default WishlistPage;
