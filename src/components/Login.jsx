import React, { useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { login, reset } from "../features/auth/authSlice";
import { alrtError } from "../utils/common";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, resetField } = useForm();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const onSubmit = async (data) => {
    dispatch(login(data));
    resetField("mobile");
    resetField("password");
  };

  useEffect(() => {
    if (isError) {
      alrtError(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isLoading, isError, isSuccess, message, navigate, dispatch]);

  return (
    <section className="authentication">
      <Container>
        <div className="wrapper shadow-lg">
          <img src={Logo} alt="logo" />
          <h4>Welcome Back !</h4>
          <p>Sign up to continue to maxxis.</p>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("mobile", { required: true })}
              type="number"
              id="mobile"
              maxLength={12}
              placeholder="Mobile Number"
            />
            <input
              {...register("password", { required: true })}
              type="password"
              id="password"
              placeholder="password"
            />

            <div className="d-flex justify-content-between align-items-center">
              <p>
                Don't have an account? Please{" "}
                <Link to="/Register">Register.</Link>
              </p>
              <button type="submit">Login</button>
            </div>
          </Form>
        </div>
      </Container>
    </section>
  );
}

export default Login;
