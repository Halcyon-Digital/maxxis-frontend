import AdminLayout from "../../shared/AdminLayout";
import axios from "axios";
import { useState } from "react";
import { Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { alrtError, alrtSuccess } from "../../utils/common";
import { useQuery } from "react-query";
import { arrivals } from "../../api/fetchData";
import DashboardItemCard from "../../components/DashboardItemCard";
import "../../assets/sass/components/admin/_dashboardGallery.scss";

export default function DashboardArrivalsPage() {
  const [isAdd, setIsAdd] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const { data, isLoading } = useQuery("arrivals", () => arrivals());

  const [file, setFile] = useState(null);
  const formData = new FormData();

  const onSubmit = async (e) => {
    e.preventDefault();
    formData.append("file", file);
    formData.append("item", "new");

    await axios
      .post(`${process.env.REACT_APP_PROXY}/api/v1/arrivals`, formData, {
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

  const onDelete = async (id) => {
    const confirm = window.confirm("Do you really want to Delete?");
    if (confirm) {
      await axios
        .delete(`${process.env.REACT_APP_PROXY}/api/v1/arrivals/${id}`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((res) => alrtSuccess(res.data.message))
        .catch((error) => alrtError(error.message));
    }
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
          New Arrivals
        </button>

        {isLoading ? (
          <h3>Loading ...</h3>
        ) : (
          <Row lg={3}>
            {data.map((item, i) => (
              <DashboardItemCard item={item} key={i} onDelete={onDelete} />
            ))}
          </Row>
        )}
      </div>
    </AdminLayout>
  );
}
