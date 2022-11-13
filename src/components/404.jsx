import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../assets/images/404.png';
import '../assets/sass/components/_notFound.scss';
import CountImage from '../assets/images/counter.gif';

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 6000);
  }, [navigate]);

  return (
    <section className="not_found">
      <div className="area">
        <h5>oops..</h5>
        <img className="w-100" src={Image} alt="404" />
        <br />
        <button>Page Not Found</button>
        <p>Back to</p>
        <img style={{ width: '40px' }} src={CountImage} alt="counter gif" />
        <p>
          Your page request is not found. After 5s it will automatically
          redirect on home page. <br />
          Thanks from Maxxis
        </p>
      </div>
    </section>
  );
}

export default NotFound;
