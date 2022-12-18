import { Button, Container, Form } from 'react-bootstrap';
import Title from './Title';
import '../assets/sass/components/_jobdetails.scss';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { alrtSuccess } from '../utils/common';
import { format, compareAsc } from 'date-fns';

export default function JobDetails() {
  const [jobDec, setJobDec] = useState({});
  const [file, setFile] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const { slug } = useParams();

  const formData = new FormData();
  const onSubmit = async (e) => {
    formData.append('file', file);
    formData.append('jobInfo', slug);
    e.preventDefault();

    await axios
      .post(`${process.env.REACT_APP_PROXY}/api/v1/job/apply`, formData)
      .then((res) => {
        e.target.reset();
        alrtSuccess(res.data.message);
        setIsOpen(false);
      })
      .catch((error) => console.log(error.message));
  };

  const openForm = () => {
    window.scroll(0, 0);
    setIsOpen(true);
  };
  const closeForm = () => setIsOpen(false);

  useEffect(() => {
    const data = async () => {
      axios
        .get(`${process.env.REACT_APP_PROXY}/api/v1/job/${slug}`)
        .then((res) => setJobDec(res.data));
    };
    data();
  }, [slug]);

  return (
    <section className="job-details">
      <Container>
        <Title
          spanItem="Career"
          main=""
          classList="title__back"
          mainClass="black__border"
        />
      </Container>
      <div className="job-content">
        <Container>
          <p>{jobDec.title}</p>
          <p> Vacancy: {jobDec.vacancy} </p>
          <p>Experience: {jobDec.experience}</p>
          <p>
            {' '}
            Deadline: {jobDec.deadline?.split('-')[2]} -{' '}
            {jobDec.deadline?.split('-')[1]} -{jobDec.deadline?.split('-')[0]}
          </p>
        </Container>
      </div>
      <div className="job-description">
        <Container>
          <h2>Job Description</h2>
          <h5>Job Purpose</h5>
          <p>{jobDec.desc}</p>
          <h5>Key Accountabilities:</h5>
          <p>{jobDec.accountabilities}</p>

          <h5>Educational Requirement: {jobDec.eduReq}</h5>

          {/* <h5>Dimension:</h5> */}

          <h5>Skills Requirement:</h5>

          <ul>
            {jobDec.skills?.split(',').map((skill, i) => (
              <li key={1}>{skill}</li>
            ))}
          </ul>

          <h5>Job Location: {jobDec.location}</h5>
          <h5>Salary: {jobDec.salary}</h5>
          <h5>Reference Code: {jobDec.ref}</h5>

          <button onClick={openForm} className="button">
            Apply
          </button>
          {isOpen && (
            <div className="p-3 position-absolute top-50 start-50 translate-middle bg-light">
              <div className="text-end">
                <Button onClick={closeForm} variant="secondary">
                  X
                </Button>
              </div>
              <h3 className="text-center mb-4">Apply Form</h3>

              <Form onSubmit={onSubmit}>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Please attach your CV here</Form.Label>
                  <Form.Control
                    onChange={(e) => setFile(e.target.files[0])}
                    required
                    type="file"
                  />
                  <Form.Text className="text-muted">
                    File will be Maximum 5 MB [Only .pdf file allowed]
                  </Form.Text>
                </Form.Group>
                <Button variant="secondary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          )}
        </Container>
      </div>
    </section>
  );
}
