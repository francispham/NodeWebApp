// ClientForm shows a form for a user to add input
import React, { Component } from 'react';
import { reduxForm } from 'redux-form'

class ClientForm extends Component {
  render() {
    return (
      <div>
        ClientForm!
      </div>
    );
  }
}

export default reduxForm({
  form: 'clientForm'
}) (ClientForm);
