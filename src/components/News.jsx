import React from 'react';
import { Container, Row } from 'react-bootstrap';
import NewsCard from './NewsCard';
import Title from './Title';
import '../assets/sass/components/_news.scss';
import { allNews } from '../api/fetchData';
import { useQuery } from 'react-query';

function News() {
  const { data } = useQuery('category', () => allNews());
  return (
    <section className="news">
      <Container>
        <Title
          spanItem="News"
          main=""
          classList="title__back"
          mainClass="black__border"
        />
        <Row lg={3} xs={1} className="mt-5">
          {data?.map((news, i) => (
            <NewsCard key={i} news={news} />
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default News;
