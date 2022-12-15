import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import AdminLayout from '../../shared/AdminLayout';
import { alrtError, alrtSuccess } from '../../utils/common';

export default function DashboardUpdateJobs() {
  const [jobData, setJobData] = useState({});
  const { slug } = useParams();

  const onChange = (e) =>
    setJobData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios
      .put(`${process.env.REACT_APP_PROXY}/api/v1/job/${slug}`, jobData)
      .then((res) => {
        e.target.reset();
        alrtSuccess(res.data.message);
      })
      .catch((error) => alrtError(error.message));
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_PROXY}/api/v1/job/${slug}`)
      .then((res) => setJobData(res.data))
      .catch((error) => console.log(error));
  }, [slug]);

  return (
    <AdminLayout>
      <div className="dashboard-jobs">
        <Form onSubmit={onSubmit}>
          <input
            type="text"
            onChange={onChange}
            name="title"
            placeholder="Title"
            value={jobData.title}
          />
          <input
            type="text"
            onChange={onChange}
            name="vacancy"
            placeholder="Vacancy"
            value={jobData.vacancy}
          />
          <input
            type="text"
            onChange={onChange}
            name="experience"
            placeholder="Experience"
            value={jobData.experience}
          />
          <input
            type="date"
            onChange={onChange}
            name="deadline"
            placeholder="Experience"
            value={jobData.deadline}
          />
          <textarea
            name="desc"
            id="desc"
            onChange={onChange}
            cols="30"
            rows="10"
            placeholder="Description"
            value={jobData.desc}
          ></textarea>
          <input
            type="text"
            onChange={onChange}
            name="skills"
            placeholder="Skills"
            value={jobData.skills}
          />
          <input
            type="text"
            onChange={onChange}
            name="accountabilities"
            placeholder="Accountabilities"
            value={jobData.accountabilities}
          />
          <input
            type="text"
            onChange={onChange}
            name="eduReq"
            placeholder="Education Requirements"
            value={jobData.eduReq}
          />
          <input
            type="text"
            onChange={onChange}
            name="location"
            placeholder="Location"
            value={jobData.location}
          />
          <input
            type="text"
            onChange={onChange}
            name="salary"
            placeholder="Salary"
            value={jobData.salary}
          />
          <input
            type="text"
            onChange={onChange}
            name="ref"
            placeholder="Reference"
            value={jobData.ref}
          />
          <button type="submit">Create Job</button>
        </Form>
      </div>
    </AdminLayout>
  );
}
