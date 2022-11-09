import { HashLink } from "react-router-hash-link";
import Image1 from "../assets/images/tire-range1.png";
import "../assets/sass/components/_tire-range.scss";

export default function TireCard({ tire }) {
  return (
    <HashLink className="banner-item" to={`/tire/${tire.title}`}>
      <div className="tire__item">
        <img
          className="position-absolute w-100 h-100"
          src={`${process.env.REACT_APP_PROXY}/files/${tire.image}`}
          alt="tire"
          loading="lazy"
        />
        <div className="overlay position-absolute w-100 h-100" />
        <h3>{tire.title}</h3>
      </div>
    </HashLink>
  );
}

/*  <HashLink className="banner-item" to={`/tire/${tire.title}`}>
      <div className="tire__item">
        <img
          className="position-absolute w-100 h-100"
          src={`${process.env.REACT_APP_PROXY}/files/${tire.image}`}
          alt="tire"
          loading="lazy"
        />
        <div className="overlay position-absolute w-100 h-100" />
        <h3>{tire.title}</h3>
      </div>
    </HashLink> */
