import { Container } from "react-bootstrap";
import Title from "./Title";
import "../assets/sass/components/_jobdetails.scss";
import { HashLink } from "react-router-hash-link";

export default function JobDetails() {
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
          <p>Sales Manager, Dhaka, 20 October</p>
          <p> 2022 Vacancy: 01 </p>
          <p>Experience: 02</p>
          <p> Deadline: 2022-10-26</p>
        </Container>
      </div>
      <div className="job-description">
        <Container>
          <h2>Job Description</h2>
          <h5>Job Purpose</h5>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </p>
          <h5>Key Accountabilities:</h5>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.
          </p>

          <h5>Educational Requirement:</h5>

          <h5>Dimension:</h5>

          <h5>Experience Requirement:</h5>

          <h5>Skills Requirement:</h5>

          <ul>
            <li>
              There are many variations of passages of Lorem Ipsum available.
            </li>
            <li>There are many variations</li>
            <li>There are many variationsThere are many variations</li>
            <li>There are many</li>
            <li>There are many variations of passages</li>
            <li>There are many variations of passages of lorem</li>
          </ul>

          <h5>Employment Status: </h5>

          <h5>Experience: </h5>
          <h5>Job Location: </h5>
          <h5>Salary: </h5>
          <h5>Reference Code: </h5>

          <HashLink className="button" to="/">
            Apply
          </HashLink>
        </Container>
      </div>
    </section>
  );
}
