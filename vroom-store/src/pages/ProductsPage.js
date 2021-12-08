import React from "react";
import ProductCard from "../components/ProductCard";
import ProductsPageWrapper from "../styledComponents/PageWrappers/ProductsPageWrapper";
import { cars } from "../data/CarsData.json";

function ProductsPage() {
   return (
      <ProductsPageWrapper>
         {cars.map((val, idx) => (
            <ProductCard id={idx} key={idx} />
         ))}
      </ProductsPageWrapper>
   );
}

export default ProductsPage;
