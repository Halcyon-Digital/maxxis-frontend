import { Table } from "react-bootstrap";

function CartItems() {
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
          <tr>
            <td>Extramaxx (M6234)</td>
            <td>5000/-</td>
            <td>Will be included after proceeding to checkout</td>
            <td>
              <div className="mt-3">
                <button>+</button>
                <span>2</span>
                <button>-</button>
              </div>
            </td>
            <td>140/70-17</td>
            <td>5000/-</td>
            <td className="text-center">
              <button className="delete">Delete</button>
            </td>
          </tr>
          <tr>
            <td>Extramaxx (M6234)</td>
            <td>5000/-</td>
            <td>Will be included after proceeding to checkout</td>
            <td>
              <div className="mt-3">
                <button>+</button>
                <span>2</span>
                <button>-</button>
              </div>
            </td>
            <td>140/70-17</td>
            <td>5000/-</td>
            <td className="text-center">
              <button className="delete">Delete</button>
            </td>
          </tr>
          <tr>
            <td>Extramaxx (M6234)</td>
            <td>5000/-</td>
            <td>Will be included after proceeding to checkout</td>
            <td>
              <div className="mt-3">
                <button>+</button>
                <span>2</span>
                <button>-</button>
              </div>
            </td>
            <td>140/70-17</td>
            <td>5000/-</td>
            <td className="text-center">
              <button className="delete">Delete</button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default CartItems;
