import React from "react";
import { Container, Row } from "react-bootstrap";
import NewsCard from "./NewsCard";
import Title from "./Title";
import "../assets/sass/components/_news.scss";

function News() {
  return (
    <section className="news">
      <Container>
        <Title
          spanItem="News"
          main=""
          classList="title__back"
          mainClass="black__border"
        />
        <Row lg={3} className="mt-5">
          {[...Array(6).keys()].map(() => (
            <NewsCard />
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default News;
