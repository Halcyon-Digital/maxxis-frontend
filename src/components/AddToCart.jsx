import { BsCart4 } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export default function AddToCart() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);

  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  return (
    <div onClick={() => navigate('/cart')} className="tocart">
      <div className="position-relative">
        <BsCart4 />
        <span className="position-absolute top-0 start-100 translate-middle">
          {getTotalQuantity() || 0}
        </span>
      </div>
    </div>
  );
}
