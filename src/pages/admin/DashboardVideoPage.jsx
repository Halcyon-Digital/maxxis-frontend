import AdminLayout from '../../shared/AdminLayout';
import axios from 'axios';
import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { alrtError, alrtSuccess } from '../../utils/common';
import { video } from '../../api/fetchData';
import { useQuery } from 'react-query';
import '../../assets/sass/components/admin/_dashboardGallery.scss';
import { Link } from 'react-router-dom';

export default function DashboardVideoPage() {
  const { register, handleSubmit, resetField } = useForm();
  const { user } = useSelector((state) => state.auth);
  const { data } = useQuery('video', () => video());
  const [isAdd, setIsAdd] = useState(false);

  const onSubmit = async (data) => {
    await axios
      .post(`${process.env.REACT_APP_PROXY}/api/v1/video`, data, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        alrtSuccess(res.data.message);
        resetField('url');
      })
      .catch((error) => alrtError(error.message));
  };

  return (
    <AdminLayout>
      <div className="dashboard-gallery">
        {isAdd && (
          <Form onSubmit={handleSubmit(onSubmit)} className=" py-3">
            <input type="text" {...register('url', { required: true })} />
            <button type="submit">Create</button>
          </Form>
        )}
        <button className="mb-3 new-gallery" onClick={() => setIsAdd(true)}>
          Make Url
        </button>

        <Row>
          <Col>
            <div className="p-4">
              <div>
                <h5>URL</h5>
                <p className="mt-3">{data?.url}</p>
                <Link to={`/dashboard/video/${data?._id}`}>Edit</Link>
              </div>
            </div>
          </Col>
          <Col>
            <div className="mt-5">
              <video controls className="w-100" src={data?.url}></video>
            </div>
          </Col>
        </Row>
      </div>
    </AdminLayout>
  );
}
