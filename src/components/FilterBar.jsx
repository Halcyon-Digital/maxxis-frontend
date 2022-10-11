import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import "../assets/sass/components/_filterBar.scss";

function FilterBar() {
  return (
    <div className="filter">
      <div className="title">
        <h3>
          <span className="choose">FeaTuring:</span> Motorcycle
        </h3>
      </div>
      <div className="d-flex shopping align-items-center">
        <TiShoppingCart className="cart" />
        <h3>Shop</h3>
      </div>
    </div>
  );
}

export default FilterBar;
