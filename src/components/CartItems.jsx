import { Table } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from '../features/cart/cartSlice';

function CartItems({ cart }) {
  const dispatch = useDispatch((state) => state.cart);

  return (
    <div>
      <Table striped="columns border" responsive>
        <thead>
          <tr className="bg-dark text-light h-auto">
            <th>Product</th>
            <th className="text-light">Price</th>
            <th>Delivery Charge</th>
            <th className="text-light">Quantity</th>
            <th>Size</th>
            <th className="text-light">Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr>
              <td>{item.title}</td>
              <td>{item.price}/-</td>
              <td>Will be included after proceeding to checkout</td>
              <td>
                <div className="mt-3">
                  <button onClick={() => dispatch(decrementQuantity(item))}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(incrementQuantity(item))}>
                    +
                  </button>
                </div>
              </td>
              <td>{item.size}</td>
              <td>{Number(item.price) * Number(item.quantity)}</td>
              <td className="text-center">
                <button
                  onClick={() => {
                    const confirm = window.confirm(
                      'Are you sure want to remove cart'
                    );
                    if (confirm) {
                      dispatch(removeItem(item));
                    }
                  }}
                  className="delete"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default CartItems;
