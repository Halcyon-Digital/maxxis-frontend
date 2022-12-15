import React, { useEffect } from 'react';
import { Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { alrtError } from '../utils/common';
import '../assets/sass/components/_authentication.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register as registerUser, reset } from '../features/auth/authSlice';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';

function RegisterForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const { register, handleSubmit, resetField } = useForm();

  useEffect(() => {
    if (isError) {
      alrtError(message);
    }

    if (isSuccess || user) {
      navigate('/');
    }

    dispatch(reset());
  }, [user, isLoading, isError, isSuccess, message, navigate, dispatch]);

  const onSubmit = async (data) => {
    dispatch(registerUser(data));
    resetField('userName');
    resetField('mobile');
    resetField('password');
    resetField('email');
  };
  return (
    <section className="authentication">
      <Container>
        <div className="wrapper shadow-lg">
          <img src={Logo} alt="logo" loading="lazy" />
          <h4>Welcome Back !</h4>
          <p>Sign up to continue to maxxis.</p>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register('userName', { required: true })}
              type="text"
              id="userName"
              placeholder="User Name"
            />
            <input
              {...register('mobile', { required: true })}
              type="number"
              id="mobile"
              maxLength={12}
              placeholder="Mobile Number"
            />
            <input
              {...register('password', { required: true })}
              type="password"
              id="password"
              placeholder="password (Minimum 6 digit)"
            />
            <input
              {...register('email', { required: true })}
              type="email"
              id="email"
              placeholder="email"
            />

            <p>
              Already have an account? Please <Link to="/login">Login.</Link>
            </p>

            <button type="submit">Register</button>
          </Form>
        </div>
      </Container>
    </section>
  );
}

export default RegisterForm;
