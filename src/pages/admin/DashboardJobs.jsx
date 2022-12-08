import React from 'react';
import { Form } from 'react-bootstrap';
import AdminLayout from '../../shared/AdminLayout';

export default function DashboardJobs() {
  return (
    <AdminLayout>
      <div className="dashboard-jobs">
        <Form>
          <input type="text" name="title" placeholder="Title" />
          <input type="text" name="vacancy" placeholder="Vacancy" />
          <input type="text" name="experience" placeholder="Experience" />
          <textarea
            name="desc"
            id="desc"
            cols="30"
            rows="10"
            placeholder="Description"
          ></textarea>
          <input type="text" name="skills" placeholder="Skills" />
          <input
            type="text"
            name="accountabilities"
            placeholder="Accountabilities"
          />
          <input
            type="text"
            name="eduReq"
            placeholder="Education Requirements"
          />
          <input type="text" name="location" placeholder="Location" />
          <input type="text" name="salary" placeholder="Salary" />
          <input type="text" name="ref" placeholder="Reference" />
          <button type="submit">Create Job</button>
        </Form>
      </div>
    </AdminLayout>
  );
}
