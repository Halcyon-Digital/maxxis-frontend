import React from "react";
import { Container, Row } from "react-bootstrap";
import CareerBanner from "./CareerBanner";
import JobCard from "./JobCard";
import Title from "./Title";
import "../assets/sass/components/_career.scss";

export default function Career() {
  return (
    <>
      <CareerBanner />
      <section className="career">
        <Container>
          <Title
            spanItem="Career"
            main=""
            classList="title__back"
            mainClass="black__border"
          />
          <Row className="mt-5" lg={4} xs={1}>
            {[...Array(8).keys()].map((job, i) => (
              <JobCard key={i} index={i} job={job} />
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
