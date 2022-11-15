import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const subTotalPrice = cart.reduce(
    (previousValue, currentValue) =>
      previousValue + Number(currentValue.price * currentValue.quantity),
    0
  );
  const shippingDhaka = cart.reduce(
    (previousValue, currentValue) =>
      previousValue + Number(currentValue.shippingInDhaka),
    0
  );
  const shippingDhakaOut = cart.reduce(
    (previousValue, currentValue) =>
      previousValue + Number(currentValue.shippingOutDhaka),
    0
  );

  return (
    <div>
      <Table striped>
        <thead>
          <tr className="bg-dark text-light">
            <th>Products</th>
            <th>Sub Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr>
              <td>{item.title}</td>
              <td>{item.price * item.quantity}</td>
            </tr>
          ))}
          <tr className="bg-dark text-light">
            <td className="text-light">Total</td>
            <td className="text-light">{subTotalPrice}</td>
          </tr>
        </tbody>
      </Table>

      <div className="mt-4">
        <Table striped>
          <thead>
            <tr className="bg-dark text-light">
              <th colSpan={2}>Shipping</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Inside Dhaka</td>
              <td>{shippingDhaka}</td>
            </tr>
            <tr>
              <td>Outside Dhaka</td>
              <td>{shippingDhakaOut}</td>
            </tr>
          </tbody>
        </Table>
        <p>
          When you select district shipping charge will be added automatically.
        </p>
      </div>
    </div>
  );
}

export default Cart;
