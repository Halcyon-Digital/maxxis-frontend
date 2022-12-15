import React from 'react';
import { Table } from 'react-bootstrap';
import { allUsers } from '../../api/fetchData';
import AdminLayout from '../../shared/AdminLayout';
import { useQuery } from 'react-query';
import axios from 'axios';
import { alrtError, alrtSuccess } from '../../utils/common';
import { useSelector } from 'react-redux';

export default function DashboardCustomers() {
  const { data } = useQuery('users', () => allUsers());
  const { token } = useSelector((state) => state.auth.user);

  const onDelete = async (id) => {
    const confirm = window.confirm('Are you sure want to delete?');
    if (confirm) {
      await axios
        .delete(`${process.env.REACT_APP_PROXY}/api/v1/auth/user/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => alrtSuccess(res.data.message))
        .catch((error) => alrtError(error.message));
    }
  };
  return (
    <AdminLayout>
      <Table striped>
        <thead>
          <tr className="bg-dark text-light">
            <th>SI</th>
            <th>Name</th>
            <th>Mobile Number</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data?.map((user, i) => (
              <tr>
                <td>{i + 1}</td>
                <td>{user.userName}</td>
                <td>{user.mobile}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button className="button" onClick={() => onDelete(user._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </AdminLayout>
  );
}
