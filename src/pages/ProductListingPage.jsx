import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

// Zustland store
import useProducts from "../zustland/products";

// Components
import Products from "../components /Products";

function ProductListingPage() {
  // const setPdts = useProducts((state) => state.setProducts);

  // const loadPdts = useProducts((state) => state.loadPdts);

  // const loading = useProducts((state) => state.loading);

  // const storeData = useProducts((state) => {
  //   return {
  //     loading: state.loading,
  //     loadPdts: state.loadPdts,
  //   };
  // });

  const storeData = useProducts(({ loading, loadPdts }) => {
    return {
      loading,
      loadPdts,
    };
  });
  const { loading, loadPdts } = storeData;

  useEffect(() => {
    // getProducts();
    loadPdts();
  }, []);

  return (
    <div>
      Product Listing Page
      <hr />
      {/* <pre>
        {JSON.stringify(pdts, null, 2)}
      </pre> */}
      {loading ? (
        <div className="spinner-border text-primary" role="status">
          <span>Loading...</span>
        </div>
      ) : (
        <Products />
      )}
    </div>
  );
}

export { ProductListingPage };
