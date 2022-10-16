import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import Product from "../assets/images/product-view.png";
import Feature1 from "../assets/images/featureImage1.png";
import Feature2 from "../assets/images/featureImage2.png";
import Feature3 from "../assets/images/featureImage3.png";
import "../assets/sass/components/_productDetails.scss";
import Title from "./Title";

function ProductDetails() {
  return (
    <section className="product-details">
      <Container>
        <Title
          spanItem="Product"
          main="Details"
          classList="title__back"
          mainClass="black__border"
        />

        <Row className="mt-5">
          <Col lg>
            <div>
              <Carousel autoPlay={true} showStatus={false}>
                <div className="img">
                  <img src={Product} alt="product" />
                </div>
                <div className="img">
                  <img src={Product} alt="product" />
                </div>
                <div className="img">
                  <img src={Product} alt="product" />
                </div>
              </Carousel>
            </div>
          </Col>
          <Col>
            <div className="d-flex align-items-end mb-4">
              <img src={Feature1} alt="" />
              <img src={Feature2} alt="" />
              <img src={Feature3} alt="" />
            </div>

            <h2>Extramaxx (M6234)</h2>
            <h2>140/70-17</h2>
            <h6>BDT. Price: 500/-</h6>
            <p className="content-title">Specifications</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida.
            </p>
            <p className="content-title">Features</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida.
            </p>

            <div className="button">
              <button>Buy Now</button>
              <button>Add To Cart</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ProductDetails;
