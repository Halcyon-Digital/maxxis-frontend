import { Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { addToCart } from '../features/cart/cartSlice';
import { alrtSuccess } from '../utils/common';

function MotorcycleCard({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch((state) => state.cart);

  const addCart = (data) => {
    dispatch(addToCart(data));
    alrtSuccess('Product Added to Cart');
  };
  return (
    <Col className=" mb-4">
      <div className="product-image">
        <HashLink className="d-block" to={`/products/${product._id}`}>
          <img
            className="w-100 border-3 bg-white"
            src={product.thumbnailImage}
            alt="product"
            loading="lazy"
          />
        </HashLink>
      </div>
      <div className="product-info">
        <h3>{product.title}</h3>
        <p>
          BDT. Price: <b>{product.price}</b>/-
        </p>
        {product.categories === 'motorcycle' && (
          <>
            <button
              onClick={() => {
                addCart(product);
                navigate('/cart');
              }}
            >
              Buy Now
            </button>
            <button onClick={() => addCart(product)}>Add To Cart</button>
          </>
        )}
      </div>
    </Col>
  );
}

export default MotorcycleCard;
