import React from 'react';
import { Button } from 'react-bootstrap';
function ClientDetails (props) {
  const {
    name, email, phone, age, address, create_at
  } = props

  return (
    <div className="box" style={{padding:'60px'}}>
      <h3>Client Name: {name}</h3>
      <p>Email Address: {email}</p>
      <p>Phone Number: {phone}</p>
      <p>Age: {age}</p>
      <p>Address: {address}</p>
      <p>Signed up date: {create_at}</p>
      <Button
        onClick={console.log("Add Service Button Working")}
      > Add a Service
      </Button>
    </div>
  );
}

export default ClientDetails;
