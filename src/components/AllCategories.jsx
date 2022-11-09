import React from "react";
import { Table } from "react-bootstrap";
import { useQuery } from "react-query";
import { categoriesData } from "../api/fetchData";
import Loading from "./Loading";

export default function AllCategories() {
  const { data, isLoading } = useQuery("category", () => categoriesData());
  return (
    <div className="mt-5">
      {isLoading ? (
        <Loading />
      ) : (
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>SI NO</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {data.map((category, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{category.title}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}
