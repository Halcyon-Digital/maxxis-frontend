import React from "react";
import AllProducts from "../components/AllProducts";
import Banner from "../components/Banner";
import Layout from "../shared/Layout";

function ProductsPage() {
  return (
    <Layout>
      <Banner />
      <AllProducts />
    </Layout>
  );
}

export default ProductsPage;
