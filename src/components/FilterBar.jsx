import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import "../assets/sass/components/_filterBar.scss";

function FilterBar() {
  return (
    <div className="filter position-relative py-1">
      <div className="titlle">
        <h3>
          <span className="choose">FeaTuring:</span> Motorcycle Tire
        </h3>
      </div>
      <div className="position-absolute top-0 end-0  h-100 bg-white">
        <div className="d-flex shopping align-items-center">
          <TiShoppingCart className="cart" />
          <h3>Shop</h3>
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
