import { Container } from 'react-bootstrap';
import Title from './Title';
import '../assets/sass/components/_jobdetails.scss';
import { HashLink } from 'react-router-hash-link';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

export default function JobDetails() {
  const [jobDec, setJobDec] = useState({});
  const { slug } = useParams();

  useEffect(() => {
    const data = async () => {
      axios
        .get(`${process.env.REACT_APP_PROXY}/api/v1/job/${slug}`)
        .then((res) => setJobDec(res.data));
    };
    data();
  }, [slug]);

  console.log(jobDec);

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
          <p> Deadline: {jobDec.deadline}</p>
        </Container>
      </div>
      <div className="job-description">
        <Container>
          <h2>Job Description</h2>
          <h5>Job Purpose</h5>
          <p>{jobDec.desc}</p>
          <h5>Key Accountabilities:</h5>
          <p>{jobDec.accountabilities}</p>

          <h5>Educational Requirement:{jobDec.eduReq}</h5>

          {/* <h5>Dimension:</h5> */}

          <h5>Experience Requirement:{jobDec.experience}</h5>

          <h5>Skills Requirement:</h5>

          <ul>
            {jobDec.skills?.split(',').map((skill) => (
              <li>{skill}</li>
            ))}
          </ul>

          <h5>Employment Status: </h5>

          <h5>Experience: {jobDec.experience}</h5>
          <h5>Job Location: {jobDec.location}</h5>
          <h5>Salary: {jobDec.salary}</h5>
          <h5>Reference Code: {jobDec.ref}</h5>

          <HashLink className="button" to="/">
            Apply
          </HashLink>
        </Container>
      </div>
    </section>
  );
}
