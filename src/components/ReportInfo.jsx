import React from "react";

export default function ReportInfo({ reporter }) {
  return (
    <tr>
      <td>{reporter.name}</td>
      <td>{reporter.email}</td>
      <td>{reporter.mobile}</td>
      <td>{reporter.subject}</td>
      <td>{reporter.message}</td>
    </tr>
  );
}
