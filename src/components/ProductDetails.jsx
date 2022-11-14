import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from './Loading';
import '../assets/sass/components/_productDetails.scss';
import Title from './Title';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import { alrtSuccess } from '../utils/common';

function ProductDetails() {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { slug } = useParams();
  const dispatch = useDispatch((state) => state.cart);
  const navigate = useNavigate();

  const addCart = (data) => {
    dispatch(addToCart(data));
    alrtSuccess('Product Added to Cart');
  };

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
                    product.images.split(',').map((imageSrc, i) => (
                      <div className="img" key={i}>
                        <img src={imageSrc} alt="product" loading="lazy" />
                      </div>
                    ))}
                </Carousel>
              </div>
            </Col>
            <Col>
              <h2>{product.title}</h2>
              <h6>BDT. Price: {product.price}/-</h6>
              <h2>{product.size}</h2>
              <p className="content-title">Specifications</p>
              <p>{product.description}</p>
              <p className="content-title">Features and Benefits</p>
              <ul>
                {product.featuresDetails &&
                  product.featuresDetails
                    .split(',')
                    .map((feature) => <li>{feature}</li>)}
              </ul>

              <div className="d-flex align-items-end mb-4">
                {product.features &&
                  product.features
                    .split(',')
                    .map((imageSrc, i) => (
                      <img
                        key={i}
                        src={imageSrc}
                        alt="feature"
                        loading="lazy"
                      />
                    ))}
              </div>

              <div className="button">
                <button
                  onClick={() => {
                    addCart(product);
                    navigate('/cart');
                  }}
                >
                  Buy Now
                </button>
                <button onClick={() => addCart(product)}>Add To Cart</button>
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
}

export default ProductDetails;
