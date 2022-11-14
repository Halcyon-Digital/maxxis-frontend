import BkashImage from '../assets/images/Bkash.png';
import { AiOutlineClose } from 'react-icons/ai';
import { Container, Row, Col, Form } from 'react-bootstrap';
import OrderCard from './OrderCard';
import axios from 'axios';

export default function PopUp({ online }) {
  var data = {
    service_id: 'service_f1wxdsh',
    template_id: 'template_zkzji8s',
    user_id: 'user_BFbs1Zr1ntopcBjHwy90B',
    template_params: {
      id: '5611dffd',
      name: 'Jobair',
      email: 'talhajobair08@gmail.com',
    },
  };

  const setMail = async (e) => {
    e.preventDefault();
    await axios
      .post('https://api.emailjs.com/api/v1.0/email/send', data)
      .then((res) => alert(res.data))
      .catch((error) => console.log(error));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="popup">
      <div className="text-end">
        <button className="close-btn" onClick={online}>
          <AiOutlineClose className="icon" />
        </button>
      </div>
      <div className="position-relative">
        <Container className="bg-white p-4">
          <Row>
            <Col lg={9}>
              <div className="text-center">
                <img className="mb-3" src={BkashImage} alt="bkash logo" />
                <p>
                  1. From Your BKash choose{' '}
                  <span className="span-item">SENT MONEY</span>
                </p>
                <p>1. Type the Receiver number</p>
                <h2 className="span-item">01711-111111</h2>
                <p>3. Type amount of</p>
                <h4 className="span-item">Tk. 980</h4>
                <p>4. Use the given Reference ID at the reference section.</p>
                <p>
                  5. After completing the payment mention the Transaction ID
                  below-
                </p>

                <Form onSubmit={setMail}>
                  <input type="text" placeholder="Your Payment Number" />
                  <input type="text" placeholder="TextID" />
                  <button type="submit">PLACE ORDER</button>
                </Form>
              </div>
            </Col>
            <Col lg={3}>
              <OrderCard />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
