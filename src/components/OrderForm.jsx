import React from "react";
import { Form } from "react-bootstrap";

function OrderForm() {
  return (
    <div>
      <Form>
        <input type="text" placeholder="Your Name" />
        <input type="text" placeholder="Company Name (optional)" />
        <input type="text" placeholder="Street address *" />
        <input
          type="text"
          placeholder="Apartment, Saite, Unit, etc (Optinal)"
        />
        <input type="text" placeholder="Town / City *" />

        <Form.Select name="district" required>
          <option value="1">Dhaka</option>
          <option value="2">Barisal</option>
          <option value="3">Bhola</option>
          <option value="4">Jhalokati</option>
          <option value="5">Patuakhali </option>
          <option value="6">Pirojpur</option>
          <option value="7">Bandarban</option>
          <option value="8">Brahmanbaria</option>
          <option value="9">Chandpur</option>
          <option value="10">Chittagong</option>
          <option value="11">Comilla</option>
          <option value="12">Cox's Bazar</option>
          <option value="13">Feni</option>
          <option value="14">Khagrachhari</option>
          <option value="15">Lakshmipur</option>
          <option value="16">Noakhali</option>
          <option value="17">Rangamati </option>
          <option value="18">Barguna</option>
          <option value="19">Faridpur</option>
          <option value="20">Gazipur</option>
          <option value="21">Gopalganj</option>
          <option value="22">Kishoreganj</option>
          <option value="23">Madaripur</option>
          <option value="24">Manikganj</option>
          <option value="25">Munshiganj</option>
          <option value="26">Narayanganj</option>
          <option value="27">Narsingdi</option>
          <option value="28">Rajbari</option>
          <option value="29">Shariatpur </option>
          <option value="30">Tangail</option>
          <option value="31">Bagerhat</option>
          <option value="32">Chuadanga</option>
          <option value="33">Jessore</option>
          <option value="34">Jhenaidah</option>
          <option value="35">Khulna</option>
          <option value="36">Kushtia</option>
          <option value="37">Magura</option>
          <option value="38">Meherpur</option>
          <option value="39">Narail</option>
          <option value="40">Satkhira</option>
          <option value="41">Jamalpur </option>
          <option value="42">Mymensingh</option>
          <option value="43">Netrokona</option>
          <option value="44">Sherpur</option>
          <option value="45">Bogra</option>
          <option value="46">Joypurhat</option>
          <option value="47">Naogaon</option>
          <option value="48">Natore</option>
          <option value="49">Chapainawabganj</option>
          <option value="50">Pabna</option>
          <option value="51">Rajshahi</option>
          <option value="52">Sirajganj</option>
          <option value="53">Dinajpur </option>
          <option value="54">Gaibandha</option>
          <option value="55">Kurigram</option>
          <option value="56">Lalmonirhat</option>
          <option value="57">Nilphamari</option>
          <option value="58">Panchagarh</option>
          <option value="59">Rangpur</option>
          <option value="60">Thakurgaon</option>
          <option value="61">Habiganj</option>
          <option value="62">Moulvibazar</option>
          <option value="63">Sunamganj</option>
          <option value="64">Sylhet</option>
        </Form.Select>
        <input type="text" placeholder="Postcode / ZIP (optional)" />
        <input type="text" placeholder="Billing Mobile Number *" />
        <input type="text" placeholder="Billing Email *" />
        <textarea
          name="ordernotes"
          id="ordernotes"
          cols="30"
          rows="4"
          placeholder="Notes about your order, e.g. special notes for delivery"
        ></textarea>
      </Form>
    </div>
  );
}

export default OrderForm;
