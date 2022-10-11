import React from "react";
import Banner from "../components/Banner";
import Distributor from "../components/Distributor";
import FilterBar from "../components/FilterBar";
import NewArrivals from "../components/NewArrivals";
import Sponsor from "../components/Sponsor";
import TireRange from "../components/TireRange";
import Layout from "../shared/Layout";

function HomePage() {
  return (
    <Layout>
      <FilterBar />
      <Banner />
      <TireRange />
      <Distributor />
      <Sponsor />
      <NewArrivals />
    </Layout>
  );
}

export default HomePage;
