import { Col } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import ProductImage from "../assets/images/product.png";

function ProductsCard() {
  return (
    <Col className=" mb-4">
      <div>
        <HashLink className="d-block" to="/products/slug">
          <img
            className="w-100 border-3 bg-white p-2"
            src={ProductImage}
            alt="product"
          />
        </HashLink>
      </div>
      <div className="product-info">
        <h3>Extramaxx (M6234)</h3>
        <p>BDT. Price: 5000/-</p>
        <button>Buy Now</button>
        <button>Add To Cart</button>
      </div>
    </Col>
  );
}

export default ProductsCard;
