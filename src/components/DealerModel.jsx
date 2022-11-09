import React from "react";
import { Modal } from "react-bootstrap";

export default function DealerModel(props) {
  const { name, mobile, companyName, email, file, message } = props.dealer;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h4>Name: {name}</h4>
        <h4>Mobile No. {mobile}</h4>
        <h4>Shop : {companyName}</h4>
        <h4>Email: {email}</h4>
        <p>Notice: {message}</p>
        <img
          className="w-100"
          src={`${process.env.REACT_APP_PROXY}/files/${file}`}
          alt="document"
        />
      </Modal.Body>
    </Modal>
  );
}
