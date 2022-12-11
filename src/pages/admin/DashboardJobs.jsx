import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import AdminLayout from '../../shared/AdminLayout';
import { alrtError, alrtSuccess } from '../../utils/common';

export default function DashboardJobs() {
  const [jobData, setJobData] = useState({});
  const onChange = (e) =>
    setJobData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(`${process.env.REACT_APP_PROXY}/api/v1/job`, jobData)
      .then((res) => {
        e.target.reset();
        alrtSuccess(res.data.message);
      })
      .catch((error) => alrtError(error.message));
  };

  return (
    <AdminLayout>
      <div className="dashboard-jobs">
        <Form onSubmit={onSubmit}>
          <input
            type="text"
            onBlur={onChange}
            name="title"
            placeholder="Title"
          />
          <input
            type="text"
            onBlur={onChange}
            name="vacancy"
            placeholder="Vacancy"
          />
          <input
            type="text"
            onBlur={onChange}
            name="experience"
            placeholder="Experience"
          />
          <input
            type="date"
            onBlur={onChange}
            name="deadline"
            placeholder="Experience"
          />
          <textarea
            name="desc"
            id="desc"
            onBlur={onChange}
            cols="30"
            rows="10"
            placeholder="Description"
          ></textarea>
          <input
            type="text"
            onBlur={onChange}
            name="skills"
            placeholder="Skills"
          />
          <input
            type="text"
            onBlur={onChange}
            name="accountabilities"
            placeholder="Accountabilities"
          />
          <input
            type="text"
            onBlur={onChange}
            name="eduReq"
            placeholder="Education Requirements"
          />
          <input
            type="text"
            onBlur={onChange}
            name="location"
            placeholder="Location"
          />
          <input
            type="text"
            onBlur={onChange}
            name="salary"
            placeholder="Salary"
          />
          <input
            type="text"
            onBlur={onChange}
            name="ref"
            placeholder="Reference"
          />
          <button type="submit">Create Job</button>
        </Form>
      </div>
    </AdminLayout>
  );
}
