import CashOnDeliveryImage from '../assets/images/cashOnDelivery.png';
import { AiOutlineClose } from 'react-icons/ai';
import { Container, Row, Col, Form } from 'react-bootstrap';
import OrderCard from './OrderCard';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addOrderNumber, addTrxID } from '../features/cart/cartSlice';
import { alrtError, alrtSuccess } from '../utils/common';
import { useState } from 'react';
import { Oval } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getMobile } from '../api/fetchData';

export default function PopUpDelivery({ cash }) {
  const { data } = useQuery('mobile', () => getMobile());
  const navigate = useNavigate();
  const [isLoader, setIsLoader] = useState(false);
  const orderInfo = useSelector((state) => state.cart);
  const cart = useSelector((state) => state.cart.cart);
  const { mobileNumber, email } = useSelector((state) => state.cart.customer);
  const dispatch = useDispatch();

  const shippingDhaka = cart.reduce(
    (previousValue, currentValue) =>
      previousValue +
      Number(currentValue.shippingInDhaka * currentValue.quantity),
    0
  );
  const shippingDhakaOut = cart.reduce(
    (previousValue, currentValue) =>
      previousValue +
      Number(currentValue.shippingOutDhaka * currentValue.quantity),
    0
  );

  const setMail = (orderInfo) => {
    const data = {
      service_id: 'service_tsg2umr',
      template_id: 'template_ha1g1a8',
      user_id: 'bIHUBBAnE4aUuSs5g',
      template_params: {
        id: orderInfo._id,
        name: orderInfo.customerInfo.name,
        mobile: orderInfo.customerInfo.mobileNumber,
        email: orderInfo.customerInfo.email,
        town: orderInfo.customerInfo.town,
        district: orderInfo.customerInfo.district,
        trxId: orderInfo.customerInfo.mobileNumber,
        paymentType: orderInfo.shippingType,
      },
    };
    axios
      .post('https://api.emailjs.com/api/v1.0/email/send', data)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if ((email, mobileNumber)) {
      setIsLoader(true);

      const response = await axios.post(
        `${process.env.REACT_APP_PROXY}/api/v1/orders`,
        orderInfo
      );
      if (response.data) {
        await setMail(response.data.order);
        setIsLoader(false);
        alrtSuccess('Your Order send Successfully!');

        setTimeout(() => {
          navigate('/success');
        }, 1000);
      }
    } else {
      alrtError('Please Fill up the all form info');
    }
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
                  <span className="span-item">SEND MONEY</span>
                </p>
                <p>1. Type the Receiver number</p>
                <h2 className="span-item">{data?.mobile}</h2>
                <p>3. Type amount of</p>
                <h4 className="span-item">
                  Tk.{' '}
                  {orderInfo.customer.district === 'Dhaka'
                    ? shippingDhaka
                    : shippingDhakaOut}
                </h4>
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
        {isLoader && (
          <div className="overlay">
            <Oval
              height={80}
              width={80}
              color="#4fa94d"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#4fa94d"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </div>
        )}
      </div>
    </div>
  );
}
