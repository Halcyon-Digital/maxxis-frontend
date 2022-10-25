import { Table } from "react-bootstrap";

function Cart() {
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
          <tr>
            <td>Otto</td>
            <td>3200</td>
          </tr>
          <tr>
            <td>Thornton</td>
            <td>1200</td>
          </tr>

          <tr>
            <td>Shipping</td>
            <td>1000</td>
          </tr>
          <tr className="bg-dark text-light">
            <td>Total</td>
            <td>10100</td>
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
              <td>120</td>
            </tr>
            <tr>
              <td>Outside Dhaka</td>
              <td>200</td>
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
