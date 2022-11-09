import axios from 'axios';
import React from 'react';
import { Table } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { allTires } from '../api/fetchData';
import { alrtError, alrtSuccess } from '../utils/common';

export default function TireFeature() {
  const { token } = useSelector((state) => state.auth.user);

  const { data } = useQuery('feature', () => allTires(token));

  const onDelete = async (id) => {
    const confirm = window.confirm('Are you want to Delete?');
    if (confirm) {
      await axios
        .delete(`${process.env.REACT_APP_PROXY}/api/v1/tires/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => alrtSuccess(res.data.message))
        .catch((error) => alrtError(error.message));
    }
  };
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>SI NO</th>
          <th>Title</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((tire, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{tire.title}</td>
              <td>
                <img
                  src={`${process.env.REACT_APP_PROXY}/files/${tire.image}`}
                  alt="feature"
                />
              </td>
              <td>
                <button onClick={() => onDelete(tire._id)}>Delete</button>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}
