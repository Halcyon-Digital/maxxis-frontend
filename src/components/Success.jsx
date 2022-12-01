import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/sass/components/_success.scss';

function Success() {
  return (
    <div className="success">
      <h2>Successfully. </h2>
      <h3>Your order created successfully. We will contact with you soon.</h3>
      <Link to="/">Back To Home</Link>
    </div>
  );
}

export default Success;
