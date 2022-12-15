import React from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCustomerAddress,
  addCustomerCompanyName,
  addCustomerDistrict,
  addCustomerEmail,
  addCustomerMobile,
  addCustomerName,
  addCustomerNotes,
  addCustomerPostCode,
  addCustomerThana,
  addCustomerTown,
} from '../features/cart/cartSlice';

function OrderForm() {
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  const dispatch = useDispatch();
  return (
    <div>
      <Form>
        <input
          type="text"
          placeholder="Your Name"
          required={true}
          onBlur={(e) => dispatch(addCustomerName(e.target.value))}
        />
        <input
          type="text"
          placeholder="Company Name (optional)"
          onBlur={(e) => dispatch(addCustomerCompanyName(e.target.value))}
        />
        <input
          type="text"
          placeholder="Street address *"
          onBlur={(e) => dispatch(addCustomerAddress(e.target.value))}
        />
        <input
          type="text"
          placeholder="Apartment, Saite, Unit, etc (Optional)"
        />
        <input
          type="text"
          placeholder="Town / City *"
          onBlur={(e) => dispatch(addCustomerTown(e.target.value))}
        />

        <Form.Select
          name="district"
          onChange={(e) => dispatch(addCustomerDistrict(e.target.value))}
          required
        >
          <option>Dhaka</option>
          <option>Barisal</option>
          <option>Bhola</option>
          <option>Jhalokati</option>
          <option>Patuakhali </option>
          <option>Pirojpur</option>
          <option>Bandarban</option>
          <option>Brahmanbaria</option>
          <option>Chandpur</option>
          <option>Chittagong</option>
          <option>Comilla</option>
          <option>Cox's Bazar</option>
          <option>Feni</option>
          <option>Khagrachhari</option>
          <option>Lakshmipur</option>
          <option>Noakhali</option>
          <option>Rangamati </option>
          <option>Barguna</option>
          <option>Faridpur</option>
          <option>Gazipur</option>
          <option>Gopalganj</option>
          <option>Kishoreganj</option>
          <option>Madaripur</option>
          <option>Manikganj</option>
          <option>Munshiganj</option>
          <option>Narayanganj</option>
          <option>Narsingdi</option>
          <option>Rajbari</option>
          <option>Shariatpur </option>
          <option>Tangail</option>
          <option>Bagerhat</option>
          <option>Chuadanga</option>
          <option>Jessore</option>
          <option>Jhenaidah</option>
          <option>Khulna</option>
          <option>Kushtia</option>
          <option>Magura</option>
          <option>Meherpur</option>
          <option>Narail</option>
          <option>Satkhira</option>
          <option>Jamalpur </option>
          <option>Mymensingh</option>
          <option>Netrokona</option>
          <option>Sherpur</option>
          <option>Bogra</option>
          <option>Joypurhat</option>
          <option>Naogaon</option>
          <option>Natore</option>
          <option>Chapainawabganj</option>
          <option>Pabna</option>
          <option>Rajshahi</option>
          <option>Sirajganj</option>
          <option>Dinajpur </option>
          <option>Gaibandha</option>
          <option>Kurigram</option>
          <option>Lalmonirhat</option>
          <option>Nilphamari</option>
          <option>Panchagarh</option>
          <option>Rangpur</option>
          <option>Thakurgaon</option>
          <option>Habiganj</option>
          <option>Moulvibazar</option>
          <option>Sunamganj</option>
          <option>Sylhet</option>
        </Form.Select>
        <input
          onBlur={(e) => dispatch(addCustomerThana(e.target.value))}
          type="text"
          placeholder="Thana"
        />
        <input
          type="number"
          onBlur={(e) => dispatch(addCustomerPostCode(e.target.value))}
          placeholder="Postcode / ZIP (optional)"
        />
        <input
          type="number"
          onBlur={(e) => dispatch(addCustomerMobile(e.target.value))}
          placeholder="Mobile Number *"
          defaultValue={user?.mobile}
        />
        <input
          onBlur={(e) => dispatch(addCustomerEmail(e.target.value))}
          type="email"
          placeholder="Email *"
          defaultValue={user?.email}
        />
        <textarea
          name="ordernotes"
          id="ordernotes"
          cols="30"
          rows="4"
          placeholder="Message for delivery"
          onBlur={(e) => dispatch(addCustomerNotes(e.target.value))}
        ></textarea>
      </Form>
    </div>
  );
}

export default OrderForm;
