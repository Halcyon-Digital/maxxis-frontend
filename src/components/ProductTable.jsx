import axios from 'axios';
import React from 'react';
import { Table } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { allProducts } from '../api/fetchData';
import { alrtError, alrtSuccess } from '../utils/common';
import Loading from './Loading';

export default function ProductTable() {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth.user);
  const { data, isLoading } = useQuery('allProducts', () => allProducts());

  const deleteProduct = async (key) => {
    const confirm = window.confirm('Are you sure want to delete?');

    if (confirm) {
      await axios
        .delete(`${process.env.REACT_APP_PROXY}/api/v1/products/${key}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => alrtSuccess(res.data.message))
        .catch((error) => alrtError(error.message));
    }
  };
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Table hover striped>
          <thead>
            <tr className="bg-dark text-light">
              <th>SI NO</th>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Tire Code</th>
              <th>Tire Size</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Inside Charge</th>
              <th>Outside Charge</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product, i) => (
              <tr key={product._id}>
                <td>{i + 1}</td>
                <td>{product._id}</td>
                <td>{product.title} </td>
                <td>{product.code}</td>
                <td>{product.size}</td>
                <td>{product.categories}</td>
                <td>{product.stockQuantity}</td>
                <td>{product.price}</td>
                <td>{product.shippingInDhaka}</td>
                <td>{product.shippingInDhaka}</td>
                <td>
                  <button
                    onClick={() =>
                      navigate(`/dashboard/products/update/${product._id}`)
                    }
                  >
                    Edit
                  </button>
                  <button onClick={() => navigate(`/products/${product._id}`)}>
                    Show
                  </button>
                  <button onClick={() => deleteProduct(product._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
}
