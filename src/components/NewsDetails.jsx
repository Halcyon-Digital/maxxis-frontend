import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export default function NewsDetails() {
  const { id } = useParams();
  const [news, setNewsData] = useState({});

  useEffect(() => {
    const response = async () => {
      await axios
        .get(`${process.env.REACT_APP_PROXY}/api/v1/news/${id}`)
        .then((res) => setNewsData(res.data))
        .catch((error) => console.log(error.message));
    };
    response();
  }, [id]);

  return (
    <div className="news-details py-5">
      <Row>
        <Col xs={12} md={6} className="pe-3">
          <h5 className="my-3">{news.title}</h5>
          <p className="text-justify">{news.desc}</p>
        </Col>
        <Col xs={12} md={6}>
          <img
            className="w-100"
            src={`${process.env.REACT_APP_PROXY}/files/${news.image}`}
            alt="news"
          />
        </Col>
      </Row>
    </div>
  );
}
