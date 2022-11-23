import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function OrderCard() {
  const allCart = useSelector((state) => state.cart);
  const cart = useSelector((state) => state.cart.cart);
  const subTotalPrice = cart.reduce(
    (previousValue, currentValue) =>
      previousValue + Number(currentValue.price * currentValue.quantity),
    0
  );
  const shippingDhaka = cart.reduce(
    (previousValue, currentValue) =>
      previousValue +
      Number(currentValue.shippingInDhaka * currentValue.quantity),
    0
  );
  const shippingDhakaOut = cart.reduce(
    (previousValue, currentValue) =>
      previousValue +
      Number(currentValue.shippingOutDhaka * currentValue.quantity),
    0
  );

  return (
    <Table striped>
      <thead>
        <tr className="card-bg text-light">
          <th>Products</th>
          <th>Sub Total</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item) => (
          <tr key={item._id}>
            <td>{item.title}</td>
            <td>{item.price * item.quantity}</td>
          </tr>
        ))}
        <tr>
          <td>Shipping</td>
          <td>
            {allCart.customer.district === 'Dhaka'
              ? shippingDhaka
              : shippingDhakaOut}
          </td>
        </tr>
        <tr className="card-bg text-light">
          <td className="text-light">Total</td>
          <td className="text-light">
            {allCart.customer.district === 'Dhaka'
              ? shippingDhaka + subTotalPrice
              : shippingDhakaOut + subTotalPrice}
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
