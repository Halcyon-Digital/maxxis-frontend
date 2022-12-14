import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import '../assets/sass/components/admin/_dashboardGallery.scss';
import { alrtError, alrtSuccess } from '../utils/common';
import TireFeature from './TireFeature';

export default function DashboardTireRange() {
  const { token } = useSelector((state) => state.auth.user);
  const { register, handleSubmit, resetField } = useForm();
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);

  const formData = new FormData();

  const onSubmit = async () => {
    formData.append('title', title);
    formData.append('file', file);

    await axios
      .post(`${process.env.REACT_APP_PROXY}/api/v1/tires/range`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => alrtSuccess(res.data.message))
      .catch((error) => alrtError(error.message));
    resetField('title');
    resetField('file');
  };

  return (
    <div className="dashboard-gallery">
      <Form
        style={{ width: '350px' }}
        className="pt-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register('title', { required: true })}
          className="w-100"
          type="text"
          name="title"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          className="mt-2 w-100"
          {...register('file', { required: true })}
          type="file"
          name="title"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <br />
        <span>size: [368 x 634]</span>
        <br />
        <button className="mt-2" type="submit">
          Create
        </button>
      </Form>
      <div className="mt-4">
        <TireFeature />
      </div>
    </div>
  );
}
