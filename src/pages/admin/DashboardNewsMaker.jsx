import axios from 'axios';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import AdminLayout from '../../shared/AdminLayout';
import { alrtError, alrtSuccess } from '../../utils/common';

export default function DashboardNewsMaker() {
  const { token } = useSelector((state) => state.auth.user);
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const formData = new FormData();

  const onSubmit = (e) => {
    e.preventDefault();
    formData.append('title', title);
    formData.append('file', file);
    formData.append('desc', desc);

    axios
      .post(`${process.env.REACT_APP_PROXY}/api/v1/news`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        e.target.reset();
        alrtSuccess(res.data.message);
      })
      .catch((error) => alrtError(error.message));
  };
  return (
    <AdminLayout>
      <div className="create-news">
        <Form onSubmit={onSubmit}>
          <input
            onBlur={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="News Title"
          />
          <br />
          <input onChange={(e) => setFile(e.target.files[0])} type="file" />
          <br />
          <textarea
            onBlur={(e) => setDesc(e.target.value)}
            placeholder="Description"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <br />
          <button type="submit">Create</button>
        </Form>
      </div>
    </AdminLayout>
  );
}
