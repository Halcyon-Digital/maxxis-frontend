import axios from "axios";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { alrtError, alrtSuccess } from "../utils/common";

export default function DashboardCategories() {
  const { register, handleSubmit, resetField } = useForm();
  const { user } = useSelector((state) => state.auth);

  const [isAdd, setIsAdd] = useState(false);

  const onSubmit = async (data) => {
    await axios
      .post(`${process.env.REACT_APP_PROXY}/api/v1/category`, data, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        alrtSuccess(res.data.message);
        resetField("title");
      })
      .catch((error) => alrtError(error.message));
  };

  return (
    <div className="dashboard-gallery">
      {isAdd && (
        <Form onSubmit={handleSubmit(onSubmit)} className=" py-3">
          <input type="text" {...register("title", { required: true })} />
          <button type="submit">Create</button>
        </Form>
      )}
      <button className="mb-3 new-gallery" onClick={() => setIsAdd(true)}>
        Add Category
      </button>
    </div>
  );
}
