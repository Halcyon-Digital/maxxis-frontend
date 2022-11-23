import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import '../assets/sass/components/_profile.scss';

export default function Profile() {
  const { user } = useSelector((state) => state.auth);

  return (
    <section className="profile">
      <Container>
        <div className="area">
          <h3>Name: {user.userName}</h3>
          <h4>Email: {user.email}</h4>
          <h4>Mobile: {user.mobile}</h4>
        </div>
      </Container>
    </section>
  );
}
