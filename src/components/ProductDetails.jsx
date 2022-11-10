import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import { useParams } from 'react-router-dom';
import Loading from './Loading';
import '../assets/sass/components/_productDetails.scss';
import Title from './Title';

function ProductDetails() {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { slug } = useParams();

  useEffect(() => {
    const data = async () => {
      setIsLoading(true);
      await axios
        .get(`${process.env.REACT_APP_PROXY}/api/v1/products/${slug}`)
        .then((res) => setProduct(res.data));
      setIsLoading(false);
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

        {isLoading ? (
          <Loading />
        ) : (
          <Row className="mt-5">
            <Col lg>
              <div>
                <Carousel autoPlay={true} showStatus={false}>
                  {product.images &&
                    product?.images.map((imageSrc, i) => (
                      <div className="img" key={i}>
                        <img src={imageSrc} alt="product" loading="lazy" />
                      </div>
                    ))}
                </Carousel>
              </div>
            </Col>
            <Col>
              <div className="d-flex align-items-end mb-4">
                {product.features &&
                  product.features.map((imageSrc, i) => (
                    <img key={i} src={imageSrc} alt="feature" loading="lazy" />
                  ))}
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
        )}
      </Container>
    </section>
  );
}

export default ProductDetails;
