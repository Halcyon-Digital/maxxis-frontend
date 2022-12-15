import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function JobCard({ job }) {
  return (
    <Col className="mb-4">
      <div className="career-card">
        <p>{job.title}</p>
        <p>Vacancy:{job.vacancy}</p>
        <p>Experience: {job.experience}</p>
        <p>Deadline: {job.deadline}</p>
        <Link to={`/jobs/${job._id}`}>View Details</Link>
      </div>
    </Col>
  );
}
