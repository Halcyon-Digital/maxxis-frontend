import { LazyLoadImage } from 'react-lazy-load-image-component';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { Container } from 'react-bootstrap';
import '../assets/sass/components/_gallery.scss';
import Title from './Title';
import { useQuery } from 'react-query';
import { allGallery } from '../api/fetchData';

function GalleryContainer() {
  const { data, isLoading } = useQuery('gallery', () => allGallery());

  return (
    <section className="gallery">
      <Container>
        <Title
          spanItem="Gallery"
          main=""
          classList="title__back"
          mainClass="black__border"
        />
        <div className="mb-4"></div>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry>
            {data &&
              data.map((image) => (
                <LazyLoadImage
                  key={image._id}
                  src={`${process.env.REACT_APP_PROXY}/files/${image.image}`}
                />
              ))}
          </Masonry>
        </ResponsiveMasonry>
      </Container>
    </section>
  );
}

export default GalleryContainer;
