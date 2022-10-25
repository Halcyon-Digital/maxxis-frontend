import axios from "axios";
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Container } from "react-bootstrap";

function GalleryContainer() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch("./fakeData.json");
      console.log(response);
    };
    loadData();
  }, []);

  console.log(images);
  return (
    <section>
      <Container>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry>
            {images.map((image) => (
              <LazyLoadImage src={image.src} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </Container>
    </section>
  );
}

export default GalleryContainer;
