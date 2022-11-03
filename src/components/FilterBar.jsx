import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../assets/sass/components/_filterBar.scss";

function FilterBar() {
  const cart = useSelector((state) => state.cart.cart);

  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  return (
    <div className="filter position-relative py-1">
      <div className="titlle">
        <h3>
          <span className="choose">FeaTuring:</span> Motorcycle Tire
        </h3>
      </div>
      <div className="position-absolute top-0 end-0  h-100 bg-white">
        <div className="d-flex shopping align-items-center">
          <Link className="position-relative cart-icon" to="/cart">
            <TiShoppingCart className="cart" />
            <span className="position-absolute top-0 start-100 translate-middle quantity">
              {getTotalQuantity() || 0}
            </span>
          </Link>
          <Link to="/products?categories=motorcycle">
            <h3>Shop</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
