import axios from 'axios';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { alrtError, alrtSuccess } from '../utils/common';

function DealerForm() {
  const { register, resetField } = useForm();
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const formData = new FormData();

  const onSubmit = async (e) => {
    e.preventDefault();
    formData.append('name', name);
    formData.append('mobile', mobile);
    formData.append('email', email);
    formData.append('companyName', companyName);
    formData.append('file', file);
    formData.append('message', message);
    await axios
      .post(`${process.env.REACT_APP_PROXY}/api/v1/dealer`, formData)
      .then((res) => {
        alrtSuccess(res.data.message);
      })
      .catch((error) => alrtError(error.message));

    resetField('name');
    resetField('mobile');
    resetField('email');
    resetField('companyName');
    resetField('file');
    resetField('message');
  };

  return (
    <Form onSubmit={onSubmit}>
      <h6>Send us your details</h6>
      <label htmlFor="name">Name</label>
      <input
        {...register('name', { required: true })}
        type="text"
        id="name"
        onBlur={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />

      <label htmlFor="phone-number">Phone Number</label>
      <input
        {...register('mobile', { required: true })}
        type="text"
        id="phone-number"
        placeholder="Phone Number"
        onBlur={(e) => setMobile(e.target.value)}
        required
      />

      <label htmlFor="email">Email</label>
      <input
        {...register('email', { required: true })}
        type="text"
        id="name"
        placeholder="Email"
        onBlur={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="companyName">Shop Name</label>
      <input
        {...register('companyName', { required: true })}
        type="text"
        id="companyName"
        placeholder="Shop Name"
        onBlur={(e) => setCompanyName(e.target.value)}
        required
      />

      <label htmlFor="file">Business Card Photo</label>
      <input
        {...register('file', { required: true })}
        type="file"
        id="file"
        accept="image/png, image/jpeg"
        onChange={(e) => setFile(e.target.files[0])}
        required
      />
      <label htmlFor="message">Message</label>
      <textarea
        {...register('message', { required: true })}
        type="text"
        id="message"
        placeholder="Message"
        onBlur={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Sent</button>
    </Form>
  );
}

export default DealerForm;
