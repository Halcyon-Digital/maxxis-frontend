import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function JobCard() {
  return (
    <Col className="mb-4">
      <div className="career-card">
        <p>Sales Manager, Dhaka, 20 October, 2022</p>
        <p>Vacancy: 01</p>
        <p>Experience: 02</p>
        <p>Deadline: 2022-10-26</p>
        <Link to="/jobs/1">View Details</Link>
      </div>
    </Col>
  );
}
