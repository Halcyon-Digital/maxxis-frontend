import React from 'react';
import Banner from '../components/Banner';
import Distributor from '../components/Distributor';
import FilterBar from '../components/FilterBar';
import NewArrivals from '../components/NewArrivals';
import Sponsor from '../components/Sponsor';
import TireFinder from '../components/TireFinder';
import TireRange from '../components/TireRange';
import HomeLayout from '../shared/HomeLayout';

function HomePage() {
  return (
    <HomeLayout>
      <FilterBar />
      <Banner />
      <TireRange />
      <Distributor />
      <Sponsor />
      <NewArrivals />
      <TireFinder />
    </HomeLayout>
  );
}

export default HomePage;
