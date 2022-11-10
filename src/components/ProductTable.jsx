import React from 'react';
import { Table } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { allProducts } from '../api/fetchData';
import Loading from './Loading';

export default function ProductTable() {
  const { data, isLoading } = useQuery('allProducts', () => allProducts());
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Table hover striped>
          <thead>
            <tr className="bg-dark text-light">
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Tire Code</th>
              <th>Tire Size</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Inside Charge</th>
              <th>Outside Charge</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>105</td>
              <td>CST Jack Rabbit </td>
              <td>C1747</td>
              <td>26x2.10</td>
              <td>bi-cycle</td>
              <td>6</td>
              <td>Price</td>
              <td>Inside Charge</td>
              <td>Outside Charge</td>
              <td>
                <button>Edit</button>
                <button>Show</button>
              </td>
            </tr>
          </tbody>
        </Table>
      )}
    </>
  );
}
