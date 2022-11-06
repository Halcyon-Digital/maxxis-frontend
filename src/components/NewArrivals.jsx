import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "./Title";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "../assets/sass/components/_newArrivals.scss";
import Loading from "./Loading";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function NewArrivals() {
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  let size = 8;
  const [arrivals, setArrivals] = useState([]);

  useEffect(() => {
    const data = async () => {
      setIsLoading(true);
      await axios
        .get(
          `${process.env.REACT_APP_PROXY}/api/v1/arrivals?page=${page}&size=${size}`
        )
        .then((res) => {
          setArrivals(res.data);
          setIsLoading(false);
        });
    };
    data();
  }, [page, size]);

  return (
    <section className="arrivals">
      <Container>
        <div className="d-flex justify-content-between">
          <Title
            spanItem="New"
            main="Arrivals"
            classList="title__back"
            mainClass="black__border"
          />
          <div>
            <IoIosArrowBack
              className="change__button"
              onClick={() => setPage((prevState) => prevState - 1)}
            />
            <IoIosArrowForward
              className="change__button"
              onClick={() => setPage((prevState) => prevState + 1)}
            />
          </div>
        </div>

        <div className="arrivals__items">
          {isLoading ? (
            <Loading />
          ) : (
            <Row xs={1} sm={2} md={3} lg={4}>
              {arrivals.map((item, i) => (
                <Col key={i}>
                  <div className="item">
                    <LazyLoadImage
                      src={`${process.env.REACT_APP_PROXY}/files/${item.image}`}
                      alt="arrivals"
                      loading="lazy"
                    />
                  </div>
                </Col>
              ))}
            </Row>
          )}
        </div>
      </Container>
    </section>
  );
}

export default NewArrivals;
