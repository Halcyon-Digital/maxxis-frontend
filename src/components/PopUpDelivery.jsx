import CashOnDeliveryImage from '../assets/images/cashOnDelivery.png';
import { AiOutlineClose } from 'react-icons/ai';
import { Container, Row, Col, Form } from 'react-bootstrap';
import OrderCard from './OrderCard';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addOrderNumber, addTrxID } from '../features/cart/cartSlice';

export default function PopUpDelivery({ cash }) {
  const orderInfo = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { customer, order } = useSelector((state) => state.cart);
  const data = {
    service_id: 'service_f1wxdsh',
    template_id: 'template_zkzji8s',
    user_id: 'user_BFbs1Zr1ntopcBjHwy90B',
    template_params: {
      id: '5611dffd',
      name: customer.name,
      mobile: customer.mobile,
      email: customer.email,
      town: customer.town,
      district: customer.district,
      trxId: order.mobileNumber,
      paymentType: order.paymentType,
    },
  };

  const setMail = (e) => {
    axios
      .post('https://api.emailjs.com/api/v1.0/email/send', data)
      .then((res) => alert(res.data))
      .catch((error) => console.log(error));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      `${process.env.REACT_APP_PROXY}/api/v1/orders`,
      orderInfo
    );
    console.log(response.data);
  };
  return (
    <div className="popup">
      <div className="text-end">
        <button className="close-btn" onClick={cash}>
          <AiOutlineClose className="icon" />
        </button>
      </div>
      <div className="position-relative">
        <Container className="bg-white p-4">
          <Row>
            <Col lg={9}>
              <div className="text-center">
                <img
                  className="mb-3"
                  src={CashOnDeliveryImage}
                  alt="bkash logo"
                />
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
                <h5 className="span-item mt-2">REFERENCE NO.</h5>
                <Form onSubmit={onSubmit}>
                  <input
                    type="text"
                    placeholder="Your Payment Number"
                    required
                    onBlur={(e) => dispatch(addOrderNumber(e.target.value))}
                  />
                  <input
                    type="text"
                    placeholder="TrxID"
                    required
                    onBlur={(e) => dispatch(addTrxID(e.target.value))}
                  />
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
