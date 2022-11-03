import { LazyLoadImage } from "react-lazy-load-image-component";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Container } from "react-bootstrap";
import "../assets/sass/components/_gallery.scss";
import Title from "./Title";

function GalleryContainer() {
  // const [images, setImages] = useState([]);

  /*   useEffect(() => {
    const loadData = async () => {
      const data = fetch("./fakeData.json").then((res) => console.log(res));
    };
    loadData();
  }, []); */

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
            <LazyLoadImage src="https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg" />
            <LazyLoadImage src="https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg" />
            <LazyLoadImage src="https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg" />
            <LazyLoadImage src="https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_b.jpg" />
            <LazyLoadImage src="https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg" />
            <LazyLoadImage src="https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg" />
            <LazyLoadImage src="https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg" />
            <LazyLoadImage src="https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg" />
            <LazyLoadImage src="https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg" />
            <LazyLoadImage src="https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_b.jpg" />
            <LazyLoadImage src="https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg" />
            <LazyLoadImage src="https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg" />
            <LazyLoadImage src="https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg" />
            <LazyLoadImage src="https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg" />
            <LazyLoadImage src="https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg" />
            <LazyLoadImage src="https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_b.jpg" />
            <LazyLoadImage src="https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg" />
            <LazyLoadImage src="https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg" />
            <LazyLoadImage src="https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg" />
            <LazyLoadImage src="https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg" />
            <LazyLoadImage src="https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg" />
            <LazyLoadImage src="https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_b.jpg" />
            <LazyLoadImage src="https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg" />
          </Masonry>
        </ResponsiveMasonry>
      </Container>
    </section>
  );
}

export default GalleryContainer;
