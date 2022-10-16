import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "./Title";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "../assets/sass/components/_products.scss";
import ProductsCard from "./ProductsCard";

function AllProducts() {
  console.log(Array(8));
  return (
    <section className="products">
      <Container>
        <Row>
          <Col lg={3}></Col>
          <Col lg={9}>
            <div className="d-flex justify-content-between">
              <Title
                spanItem="Products"
                main=""
                classList="title__back"
                mainClass="white__border"
              />
              <div>
                <IoIosArrowBack className="change__button" />
                <IoIosArrowForward className="change__button" />
              </div>
            </div>

            <div className="mt-5">
              <Row lg={3} xs={1}>
                {[...Array(9).keys()].map((product) => (
                  <ProductsCard product={product} />
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AllProducts;
