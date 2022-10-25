import { Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { HashLink } from "react-router-hash-link";
import ProductImage from "../assets/images/product.png";
import { addToCart } from "../features/cart/cartSlice";
import { alrtSuccess } from "../utils/common";

function ProductsCard({ index }) {
  console.log(index);
  const dispatch = useDispatch((state) => state.cart);

  const addCart = (data) => {
    dispatch(addToCart(data));
    alrtSuccess("Product Added to Cart");
  };
  return (
    <Col className=" mb-4">
      <div className="product-image">
        <HashLink className="d-block" to="/products/slug">
          <img
            className="w-100 border-3 bg-white"
            src={ProductImage}
            alt="product"
            loading="lazy"
          />
        </HashLink>
      </div>
      <div className="product-info">
        <h3>Extramaxx (M6234)</h3>
        <p>BDT. Price: 5000/-</p>
        <button>Buy Now</button>
        <button onClick={() => addCart({ id: index })}>Add To Cart</button>
      </div>
    </Col>
  );
}

export default ProductsCard;
