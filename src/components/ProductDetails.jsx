import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import { useParams } from 'react-router-dom';
import Feature1 from '../assets/images/featureImage1.png';
import Feature2 from '../assets/images/featureImage2.png';
import Feature3 from '../assets/images/featureImage3.png';
import '../assets/sass/components/_productDetails.scss';
import Title from './Title';

function ProductDetails() {
  const [product, setProduct] = useState({});
  const { slug } = useParams();

  console.log(product);

  useEffect(() => {
    const data = async () => {
      await axios
        .get(`${process.env.REACT_APP_PROXY}/api/v1/products/${slug}`)
        .then((res) => setProduct(res.data));
    };
    data();
  }, [slug]);
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
                  <img
                    src="https://res.cloudinary.com/deacjoc4i/image/upload/v1667971289/product-view_fcp6ip.png"
                    alt="product"
                    loading="lazy"
                  />
                </div>
                <div className="img">
                  <img
                    src="https://res.cloudinary.com/deacjoc4i/image/upload/v1667977423/products/Maxxis-3.00-17-M6304-Tube-Type-Rear_pbbs0c.png"
                    alt="product"
                    loading="lazy"
                  />
                </div>
                <div className="img">
                  <img
                    src="https://res.cloudinary.com/deacjoc4i/image/upload/v1667968889/products/product_bgfofk.png"
                    alt="product"
                    loading="lazy"
                  />
                </div>
              </Carousel>
            </div>
          </Col>
          <Col>
            <div className="d-flex align-items-end mb-4">
              <img src={Feature1} alt="feature" loading="lazy" />
              <img src={Feature2} alt="feature" loading="lazy" />
              <img src={Feature3} alt="feature" loading="lazy" />
            </div>

            <h2>Extramaxx (M6234)</h2>
            <h6>BDT. Price: 500/-</h6>
            <h2>140/70-17</h2>
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
