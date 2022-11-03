import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import BannerImage from "../assets/images/career-banner.png";

export default function CareerBanner() {
  return (
    <div>
      <LazyLoadImage
        className="w-100"
        src={BannerImage}
        alt="banner"
        loading="lazy"
      />
    </div>
  );
}
