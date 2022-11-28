import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { alrtError, alrtSuccess } from '../utils/common';
import AllTireSize from './AllTireSize';

export default function DashboardTireSize() {
  const { token } = useSelector((state) => state.auth.user);
  const [isAdd, setIsAdd] = useState(false);
  const { register, resetField, handleSubmit } = useForm();

  const setAdd = () => setIsAdd(true);

  const onSubmit = async (data) => {
    await axios
      .post(`${process.env.REACT_APP_PROXY}/api/v1/size`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        alrtSuccess(res.data.message);
        resetField('size');
      })
      .catch((error) => alrtError(error.message));
  };

  return (
    <div className="dashboard-gallery">
      {isAdd && (
        <Form onSubmit={handleSubmit(onSubmit)} className=" py-3">
          <input type="text" {...register('size', { required: true })} />
          <button type="submit">Create</button>
        </Form>
      )}
      <button onClick={setAdd}>New Size</button>
      <AllTireSize />
    </div>
  );
}
