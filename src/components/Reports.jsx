import React from "react";
import { Table } from "react-bootstrap";
import { useQuery } from "react-query";
import { reportsUser } from "../api/fetchData";
import Loading from "./Loading";
import ReportInfo from "./ReportInfo";

export default function Reports() {
  const { data, isLoading } = useQuery("contact", () => reportsUser());

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <Table striped>
          <thead>
            <tr className="bg-dark text-light">
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Subject</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <ReportInfo reporter={user} />
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}
