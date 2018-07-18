import React from 'react';
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

export default ({input, label, meta: { error, touched } }) => {
  return (
    <FormGroup controlId= {label}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...input} />
      <div>{touched && error}</div>
    </FormGroup>
  );
};
