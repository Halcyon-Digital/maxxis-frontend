import { Container } from 'react-bootstrap';
import NewsDetails from '../components/NewsDetails';
import Layout from '../shared/Layout';

export default function NewsDetailsPage() {
  return (
    <Layout>
      <Container>
        <NewsDetails />
      </Container>
    </Layout>
  );
}
