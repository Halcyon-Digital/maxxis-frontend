import axios from "axios";
import React from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "../assets/sass/components/_contactForm.scss";
import Swal from "sweetalert2";
import { alrtError } from "../utils/common";

function ContactForm() {
  const { register, handleSubmit, resetField } = useForm();

  const alrt = (data) => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: data,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const onSubmit = async (data) => {
    await axios
      .post(`${process.env.REACT_APP_PROXY}/api/v1/contact`, data)
      .then((res) => {
        alrt(res.data.message);
      })
      .catch((error) => alrtError(error.message));

    resetField("name");
    resetField("mobile");
    resetField("email");
    resetField("subject");
    resetField("message");
  };

  return (
    <div className="contact-form">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input
          {...register("name", { required: true })}
          type="text"
          id="name"
          placeholder="Name"
        />

        <label htmlFor="phone-number">Phone Number</label>
        <input
          {...register("mobile", { required: true })}
          type="text"
          id="phone-number"
          placeholder="Phone Number"
        />

        <label htmlFor="email">Email</label>
        <input
          {...register("email", { required: true })}
          type="text"
          id="name"
          placeholder="Email"
        />

        <label htmlFor="subject">Subject</label>
        <input
          {...register("subject", { required: true })}
          type="text"
          id="subject"
          placeholder="subject"
        />
        <label htmlFor="message">Message</label>
        <textarea
          {...register("message", { required: true })}
          type="text"
          id="message"
          placeholder="Message"
        />
        <button type="submit">Sent</button>
      </Form>
    </div>
  );
}

export default ContactForm;
