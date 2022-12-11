import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Title from './Title';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import '../assets/sass/components/_products.scss';
import ProductsCard from './ProductsCard';
import axios from 'axios';
import Loading from './Loading';
import { categoriesData } from '../api/fetchData';
import { useQuery } from 'react-query';

function AllProducts() {
  const [isLoading, setIsLoading] = useState(false);
  const { data } = useQuery('category', () => categoriesData());
  const [page, setPage] = useState(0);
  let size = 8;
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState('all');
  useEffect(() => {
    const data = async () => {
      setIsLoading(true);
      await axios
        .get(
          `${process.env.REACT_APP_PROXY}/api/v1/products/pagination?page=${page}&size=${size}&categories=${categories}`
        )
        .then((res) => {
          setProducts(res.data);
          setIsLoading(false);
        });
    };
    data();
  }, [page, size, categories]);

  const backPage = () => {
    if (page === 0) {
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
                <select
                  onChange={(e) => setCategories(e.target.value)}
                  style={{ width: '80px' }}
                  className="px-3"
                >
                  <option value="all" selected>
                    All
                  </option>
                  {data?.map((item) => (
                    <option value={item?.title}>{item?.title}</option>
                  ))}
                  {/*  <option value="motorcycle">motorcycle</option>
                <option value="LTB">LTB</option>
                <option value="LLR">LLR</option>
                <option value="TBB">TBB </option>
                <option value="TBR">TBR </option>
                <option value="Industrial">Industrial </option>
                <option value="	Passenger Car"> Passenger Car </option> */}
                </select>

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
                <div>
                  {products.length > 0 ? (
                    <Row lg={4} xs={1}>
                      {products.map((product, i) => (
                        <ProductsCard key={i} index={i} product={product} />
                      ))}
                    </Row>
                  ) : (
                    <h3>No Search Product.</h3>
                  )}
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AllProducts;
