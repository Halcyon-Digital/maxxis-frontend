import axios from 'axios';
import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { allJobs } from '../../api/fetchData';
import AdminLayout from '../../shared/AdminLayout';
import { alrtError, alrtSuccess } from '../../utils/common';

export default function DashboardCareerPage() {
  const { data } = useQuery('jobs', () => allJobs());
  const navigate = useNavigate();

  const deleteJob = async (key) => {
    const confirm = window.confirm('Are you sure want to delete?');

    if (confirm) {
      await axios
        .delete(`${process.env.REACT_APP_PROXY}/api/v1/job/${key}`)
        .then((res) => {
          alrtSuccess(res.data.message);
        })
        .catch((error) => alrtError(error.message));
    }
  };
  return (
    <AdminLayout>
      <Link className="link" to="/dashboard/jobs/create">
        Make Job
      </Link>

      <div>
        <Table hover striped>
          <thead>
            <tr className="bg-dark text-light">
              <th>SI NO</th>
              <th>Job Title</th>
              <th>Deadline</th>
              <th>Salary</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((job, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{job.title}</td>
                  <td>{job.deadline}</td>
                  <td>{job.salary}</td>
                  <td className="text-center">
                    <Button
                      className="p-1 mx-1"
                      variant="outline-secondary"
                      onClick={() =>
                        navigate(`/dashboard/jobs/edit/${job._id}`)
                      }
                    >
                      Edit
                    </Button>
                    <Button
                      className="p-1 mx-1"
                      variant="outline-secondary"
                      onClick={() => navigate(`/jobs/${job._id}`)}
                    >
                      Show
                    </Button>
                    <Button
                      className="p-1 mx-1"
                      variant="outline-secondary"
                      onClick={() => deleteJob(job._id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </AdminLayout>
  );
}
