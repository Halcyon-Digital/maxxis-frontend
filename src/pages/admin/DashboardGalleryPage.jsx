import axios from "axios";
import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import DashboardGallery from "../../components/DashboardGallery";
import AdminLayout from "../../shared/AdminLayout";
import { alrtError, alrtSuccess } from "../../utils/common";
import "../../assets/sass/components/admin/_dashboardGallery.scss";

export default function DashboardGalleryPage() {
  const [isAdd, setIsAdd] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const [file, setFile] = useState(null);
  const formData = new FormData();

  const onSubmit = async (e) => {
    e.preventDefault();
    formData.append("file", file);

    await axios
      .post(`${process.env.REACT_APP_PROXY}/api/v1/gallery/create`, formData, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        alrtSuccess(res.data.message);
        e.target.reset();
      })
      .catch((error) => alrtError(error.message));
  };

  return (
    <AdminLayout>
      <div className="dashboard-gallery">
        {isAdd && (
          <Form className=" py-3" onSubmit={onSubmit}>
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              name="file"
              id="file"
            />
            <button type="submit">Create</button>
          </Form>
        )}
        <button className="mb-3 new-gallery" onClick={() => setIsAdd(true)}>
          New Gallery
        </button>
        <DashboardGallery />
      </div>
    </AdminLayout>
  );
}
