import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import NewImage from "../assets/images/news-img.png";
import { IoIosArrowForward } from "react-icons/io";

function NewsCard() {
  return (
    <Col className="mb-4">
      <div className="news-card">
        <img className="w-100" src={NewImage} alt="news" loading="lazy" />
        <div className="px-2 py-3">
          <h3 className="card-title">What is lorem ipsum?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            sapiente autem amet voluptatum perspiciatis soluta, odio quibusdam
            ipsa. Non vero id ullam adipisci eius eum autem quaerat eveniet
            natus nulla?
          </p>
          <Link to="/" className="readmore">
            Read More{" "}
            <span>
              <IoIosArrowForward />
              <IoIosArrowForward />
            </span>
          </Link>
        </div>
      </div>
    </Col>
  );
}

export default NewsCard;
