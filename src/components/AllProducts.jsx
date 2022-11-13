import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Title from './Title';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import '../assets/sass/components/_products.scss';
import ProductsCard from './ProductsCard';
import axios from 'axios';
import Loading from './Loading';

function AllProducts() {
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  let size = 8;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = async () => {
      setIsLoading(true);
      await axios
        .get(
          `${process.env.REACT_APP_PROXY}/api/v1/products/pagination?page=${page}&size=${size}`
        )
        .then((res) => {
          setProducts(res.data);
          setIsLoading(false);
        });
    };
    data();
  }, [page, size]);

  const backPage = () => {
    if (page == 0) {
      return setPage(0);
    }
    setPage((prevState) => prevState - 1);
  };

  return (
    <section className="products">
      <Container>
        <Row>
          <Col>
            <div className="d-flex justify-content-between">
              <Title
                spanItem="Products"
                main=""
                classList="title__back"
                mainClass="black__border"
              />
              <div>
                <IoIosArrowBack onClick={backPage} className="change__button" />
                <IoIosArrowForward
                  onClick={() => setPage((prevState) => prevState + 1)}
                  className="change__button"
                />
              </div>
            </div>

            <div className="mt-5">
              {isLoading ? (
                <Loading />
              ) : (
                <Row lg={4} xs={1}>
                  {products.map((product, i) => (
                    <ProductsCard key={i} index={i} product={product} />
                  ))}
                </Row>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AllProducts;
