import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useQuery } from "react-query";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { allGallery } from "../api/fetchData";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";
import { alrtError, alrtSuccess } from "../utils/common";
import { useSelector } from "react-redux";

export default function DashboardGallery() {
  const { user } = useSelector((state) => state.auth);
  const { data, isLoading } = useQuery("gallery", () => allGallery());

  const onDelete = async (id) => {
    const confirm = window.confirm("Do you really want to Delete?");
    if (confirm) {
      await axios
        .delete(`${process.env.REACT_APP_PROXY}/api/v1/gallery/${id}`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((res) => alrtSuccess(res.data.message))
        .catch((error) => alrtError(error.message));
    }
  };

  if (isLoading) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry>
        {data.map((image, index) => (
          <div key={index} className="position-relative">
            <button
              title="Delete"
              onClick={() => onDelete(image._id)}
              className="position-absolute top-0 end-0 delete-btn"
            >
              <AiOutlineDelete />
            </button>
            <LazyLoadImage
              className="w-100"
              src={`${process.env.REACT_APP_PROXY}/files/${image.image}`}
              alt="Gallery"
            />
          </div>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
}
