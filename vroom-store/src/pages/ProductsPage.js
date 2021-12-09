import React, { useContext } from "react";
import ProductCard from "../components/ProductCard";
import ProductsPageWrapper from "../styledComponents/PageWrappers/ProductsPageWrapper";
import { AppContext } from "../context/AppContext";

function ProductsPage() {
   const [{ products }] = useContext(AppContext);
   return (
      <ProductsPageWrapper>
         {products.map((item) => (
            <ProductCard id={item.id} key={item.id} />
         ))}
      </ProductsPageWrapper>
   );
}

export default ProductsPage;
