import React from 'react';
import { allNews } from '../../api/fetchData';
import AdminLayout from '../../shared/AdminLayout';
import { useQuery } from 'react-query';
import { Button, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { alrtError, alrtSuccess } from '../../utils/common';
import { Link } from 'react-router-dom';

export default function DashboardNews() {
  const { data } = useQuery('category', () => allNews());
  const { token } = useSelector((state) => state.auth.user);

  const deleteNews = async (id) => {
    await axios
      .delete(`${process.env.REACT_APP_PROXY}/api/v1/news/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => alrtSuccess(res.data.message))
      .catch((error) => alrtError(error.message));
  };

  return (
    <AdminLayout>
      <Link to="/dashboard/news/create">Make News</Link>
      <Row lg={3}>
        {data?.length > 0 &&
          data.map((news) => (
            <Col className="mb-4">
              <div className="news-card">
                <img
                  className="w-100"
                  src={`${process.env.REACT_APP_PROXY}/files/${news.image}`}
                  alt="news"
                  loading="lazy"
                />
                <div className="px-2 py-3">
                  <h3 className="card-title">{news.title}</h3>
                  <p>{news.desc}</p>
                  <Button
                    variant="secondary"
                    onClick={() => deleteNews(news._id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </Col>
          ))}
      </Row>
    </AdminLayout>
  );
}
