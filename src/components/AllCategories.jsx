import axios from 'axios';
import React from 'react';
import { Table } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { categoriesData } from '../api/fetchData';
import { alrtError, alrtSuccess } from '../utils/common';
import Loading from './Loading';

export default function AllCategories() {
  const { data, isLoading } = useQuery('category', () => categoriesData());
  const { token } = useSelector((state) => state.auth.user);

  const deleteCategories = async (id) => {
    const confirm = window.confirm('Are you sure want to Delete?');
    if (confirm) {
      await axios
        .delete(`${process.env.REACT_APP_PROXY}/api/v1/category/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => alrtSuccess(res.data.message))
        .catch((error) => {
          alrtError(error.message);
        });
    }
  };
  return (
    <div className="mt-5">
      {isLoading ? (
        <Loading />
      ) : (
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>SI NO</th>
              <th>Title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((category, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{category.title}</td>
                <td className="text-center">
                  <button onClick={() => deleteCategories(category._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}
