import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CareerBanner from './CareerBanner';
import JobCard from './JobCard';
import Title from './Title';
import '../assets/sass/components/_career.scss';
import { allJobs } from '../api/fetchData';
import { useQuery } from 'react-query';

export default function Career() {
  const { data } = useQuery('jobs', () => allJobs());
  console.log(data);
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
            {data?.map((job, i) => (
              <JobCard key={i} index={i} job={job} />
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
