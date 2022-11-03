import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { AiOutlineDelete } from "react-icons/ai";
import { Col } from "react-bootstrap";

export default function DashboardItemCard({ item, onDelete }) {
  return (
    <Col>
      <div className="position-relative">
        <button
          title="Delete"
          onClick={() => onDelete(item._id)}
          className="position-absolute top-0 end-0 delete-btn"
        >
          <AiOutlineDelete />
        </button>
        <LazyLoadImage
          className="w-100"
          src={`${process.env.REACT_APP_PROXY}/files/${item.image}`}
          alt="Gallery"
        />
      </div>
    </Col>
  );
}
