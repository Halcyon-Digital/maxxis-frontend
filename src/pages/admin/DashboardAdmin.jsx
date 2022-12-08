import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import AdminLayout from '../../shared/AdminLayout';
import { alrtError, alrtSuccess } from '../../utils/common';

export default function DashboardAdmin() {
  const [mobile, setMobile] = useState('');
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`${process.env.REACT_APP_PROXY}/api/v1/auth/admin`, { mobile })
      .then((res) => alrtSuccess(res.data.message))
      .catch((error) => alrtError(error.message));
  };

  return (
    <AdminLayout>
      <div className="p5">
        <Form onSubmit={onSubmit}>
          <input
            onBlur={(e) => setMobile(e.target.value)}
            type="number"
            style={{ borderColor: 'red' }}
          />{' '}
          <br />
          <br />
          <Button variant="danger" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </AdminLayout>
  );
}
