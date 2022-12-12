import AdminLayout from '../../shared/AdminLayout';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { getMobile } from '../../api/fetchData';
import { alrtError, alrtSuccess } from '../../utils/common';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

export default function DashboardEditBkash() {
  const { register, handleSubmit } = useForm();
  const [mobile, setMobile] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_PROXY}/api/v1/mobile/${id}`)
      .then((res) => setMobile(res.data))
      .catch((error) => alrtError(error.message));
  }, [id]);

  const onSubmit = async (data) => {
    await axios
      .put(`${process.env.REACT_APP_PROXY}/api/v1/mobile/${id}`, data)
      .then((res) => alrtSuccess(res.data.message))
      .catch((error) => alrtError(error.message));
  };

  return (
    <AdminLayout>
      <div className="p-4">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('mobile')}
            defaultValue={mobile.mobile}
            placeholder="Mobile Number"
          />
          <button type="submit">Create</button>
        </Form>
      </div>
    </AdminLayout>
  );
}
