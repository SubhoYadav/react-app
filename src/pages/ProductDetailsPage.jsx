import React from "react";
import { useEffect } from "react";

import { useParams } from "react-router-dom";
// Zustland store
import useProducts from "../zustland/products";

export default function ProductDetailsPage() {
  const storeData = useProducts(({ getPdtsById, product }) => {
    return {
      getPdtsById,
      product,
    };
  });

  const { getPdtsById, product } = storeData;

  // const getPdtsById = useProducts((state) => state.getPdtsById);
  // const product = useProducts((state) => state.product);

  const { id } = useParams();
  useEffect(() => {
    getPdtsById(id);
  }, []);
  return (
    <div>
      Product Details Page
      <hr />
      <pre>{JSON.stringify(product, null, 2)}</pre>
    </div>
  );
}

/**
 *Cannot update a component (`ProductListingPage`) while rendering a different component (`ProductDetailsPage`). To locate the bad setState() call inside `ProductDetailsPage`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render

 This error is caused when the method from the store is called without useEffect, 
 reason: when the product state in the store is set the app rernders and since the ProductDetailsPage also gets rernderd the state is set again and again thereby setting up an infiniteb loop (classivcal useEffect problem)
 */
