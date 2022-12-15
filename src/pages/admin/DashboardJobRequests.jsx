import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { jobRequests } from '../../api/fetchData';
import AdminLayout from '../../shared/AdminLayout';

export default function DashboardJobRequests() {
  const { data } = useQuery('request', () => jobRequests());

  return (
    <AdminLayout>
      <Row lg={4} className="mt-3">
        {data &&
          data?.map((job) => (
            <Col>
              <h5>{job.jobInfo.title}</h5>
              <iframe
                title="e"
                src={`${process.env.REACT_APP_PROXY}/files/${job.cv}`}
                frameborder="0"
              ></iframe>
              <br />
              <a
                className="link"
                href={`${process.env.REACT_APP_PROXY}/files/${job.cv}`}
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </a>
            </Col>
          ))}
      </Row>
    </AdminLayout>
  );
}
