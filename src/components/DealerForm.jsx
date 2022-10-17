import axios from "axios";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { alrtError, alrtSuccess } from "../utils/common";

function DealerForm() {
  const { register, resetField } = useForm();
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const formData = new FormData();

  const onSubmit = async (e) => {
    e.preventDefault();
    formData.append("name", name);
    formData.append("mobile", mobile);
    formData.append("email", email);
    formData.append("companyName", companyName);
    formData.append("file", file);
    formData.append("message", message);
    await axios
      .post(`${process.env.REACT_APP_PROXY}/api/v1/dealer`, formData, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzAxODFkMDVhMTJjNjFmNWM2NGRhYyIsImlhdCI6MTY2NjAwMjY3MSwiZXhwIjoxNjY2MDg5MDcxfQ.rMkjJpLJTdN9ZJ2MazOM3ZtgGr2fysb5OB_dEmIkJqg",
        },
      })
      .then((res) => {
        alrtSuccess(res.data.message);
      })
      .catch((error) => alrtError(error.message));

    resetField("name");
    resetField("mobile");
    resetField("email");
    resetField("companyName");
    resetField("file");
    resetField("message");
  };

  return (
    <Form onSubmit={onSubmit}>
      <h6>Kindly fill-u form to connect with us.</h6>
      <label htmlFor="name">Name</label>
      <input
        {...register("name", { required: true })}
        type="text"
        id="name"
        onBlur={(e) => setName(e.target.value)}
        placeholder="Name"
      />

      <label htmlFor="phone-number">Phone Number</label>
      <input
        {...register("mobile", { required: true })}
        type="text"
        id="phone-number"
        placeholder="Phone Number"
        onBlur={(e) => setMobile(e.target.value)}
      />

      <label htmlFor="email">Email</label>
      <input
        {...register("email", { required: true })}
        type="text"
        id="name"
        placeholder="Email"
        onBlur={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="companyName">Company Name</label>
      <input
        {...register("companyName", { required: true })}
        type="text"
        id="companyName"
        placeholder="Company Name"
        onBlur={(e) => setCompanyName(e.target.value)}
      />

      <label htmlFor="file">Upload File [Max 1MB]</label>
      <input
        {...register("file", { required: true })}
        type="file"
        id="file"
        accept="image/png, image/jpeg, image/webp"
        onBlur={(e) => setFile(e.target.files[0])}
      />
      <label htmlFor="message">Message</label>
      <textarea
        {...register("message", { required: true })}
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
