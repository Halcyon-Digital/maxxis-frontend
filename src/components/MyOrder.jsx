import { Container, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import { myOrder } from '../api/fetchData';

export default function MyOrder() {
  const { token } = useSelector((state) => state.auth.user);
  const { data } = useQuery('order', () => myOrder(token));

  return (
    <section className="my-order">
      <Container>
        {data ? (
          data.map((orders) => (
            <Table striped className="my-3">
              <thead>
                <tr className="bg-dark text-light">
                  <th>Product</th>
                  <th>Delivery Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {orders.products.map((order) => (
                      <p>{order.title}</p>
                    ))}
                  </td>

                  <td>{orders.status}</td>
                </tr>
              </tbody>
            </Table>
          ))
        ) : (
          <h3>No Search Products.</h3>
        )}
      </Container>
    </section>
  );
}
