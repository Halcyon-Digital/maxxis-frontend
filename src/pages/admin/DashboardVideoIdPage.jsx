import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { video } from '../../api/fetchData';
import AdminLayout from '../../shared/AdminLayout';
import { alrtError, alrtSuccess } from '../../utils/common';

export default function DashboardVideoIdPage() {
  const { data } = useQuery('video', () => video());
  const { user } = useSelector((state) => state.auth);
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  const [videoInfo, setVideoInfo] = useState({});
  console.log(videoInfo);

  const onChange = (e) =>
    setVideoInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  const onSubmit = async (data) => {
    await axios
      .put(`${process.env.REACT_APP_PROXY}/api/v1/video/${id}`, videoInfo, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        alrtSuccess(res.data.message);
      })
      .catch((error) => alrtError(error.message));
  };

  return (
    <AdminLayout>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>URL</Form.Label>
          <Form.Control
            onChange={onChange}
            name="url"
            type="text"
            placeholder="URL"
            defaultValue={data?.url}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="categories">Status</Form.Label>
          <Form.Select
            name="status"
            onChange={onChange}
            aria-label="Default select example"
          >
            <option
              value="active"
              selected={data?.status === 'active' ? true : null}
            >
              active
            </option>
            <option
              value="inactive"
              selected={data?.status === 'inactive' ? true : null}
            >
              inactive
            </option>
          </Form.Select>
        </Form.Group>

        <Button variant="danger" type="submit">
          Update
        </Button>
      </Form>
    </AdminLayout>
  );
}
