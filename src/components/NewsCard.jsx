import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NewImage from '../assets/images/news-img.png';
import { IoIosArrowForward } from 'react-icons/io';

function NewsCard({ news }) {
  return (
    <Col className="mb-4">
      <div className="news-card">
        <img
          className="w-100"
          src={`${process.env.REACT_APP_PROXY}/files/${news.image}`}
          alt="news"
          loading="lazy"
        />
        <div className="px-2 py-3">
          <h3 className="card-title">{news.title}</h3>
          <p className="text-justify">{news.desc?.slice(0, 100)}</p>
          <Link to={`/news/${news._id}`} className="readmore">
            Read More{' '}
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
