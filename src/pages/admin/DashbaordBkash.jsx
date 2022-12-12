import axios from 'axios';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { getMobile } from '../../api/fetchData';
import AdminLayout from '../../shared/AdminLayout';
import { alrtError, alrtSuccess } from '../../utils/common';

export default function DashbaordBkash() {
  const { register, handleSubmit } = useForm();
  const { data } = useQuery('mobile', () => getMobile());

  const onSubmit = async (data) => {
    await axios
      .post(`${process.env.REACT_APP_PROXY}/api/v1/mobile`, data)
      .then((res) => alrtSuccess(res.data.message))
      .catch((error) => alrtError(error.message));
  };
  return (
    <AdminLayout>
      {/* <Form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('mobile')} placeholder="Mobile Number" />
        <button type="submit">Create</button>
      </Form> */}
      <h4 className="mt-4">Active Mobile Number</h4>
      <h2>{data?.mobile}</h2>
      <Link className="link mt-4" to={`/dashboard/bkash/${data?._id}`}>
        Update Mobile
      </Link>
    </AdminLayout>
  );
}
