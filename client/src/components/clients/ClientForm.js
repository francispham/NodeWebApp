// ClientForm shows a form for a user to add input
import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import { Link } from 'react-router-dom';
import ClientField from './ClientField';

/* Can use this later, see lecture 150:
const FIELD = [
  {},
  {},
  {},
  {},
]
*/

class ClientForm extends Component {

  renderFields()  {
    return (
      <div>
        <Field label="How did you hear about us?" type="text" name="marketing" component={ClientField}/>
        <Field label="Client Name" type="text" name="name" placeholder="Name" component={ClientField}/>
        <Field label="Client Email" type="email" name="email" placeholder="email@gmail.com" component={ClientField}/>
        <Field label="Phone Number" type="number" name="phone" placeholder="Phone Number" component={ClientField}/>
        <Field label="Age" type="number" name="age" component={ClientField}/>
        <Field label="Client Address" type="text" name="address" placeholder="Address" component={ClientField}/>
        <Field label="City" type="text" name="City" placeholder="city" component={ClientField}/>
        <Field label="Postal Code" type="text" name="postalCode" placeholder="Postal Code" component={ClientField}/>
      </div>
    );
  }

  render() {
    return (<div className="container">
      <form onSubmit={
        this.props.handleSubmit(
          values => console.log(values)
        )
      }>
        {this.renderFields()}
        <div>
          <Link to="/clients" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="red btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </div>
      </form>
    </div>);
  }
}
/* // TODO: Add validation after creating the FIELD (lecture 154 - 156)
function  validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = 'You must provide your name';
  }
  return errors;
}
*/
export default reduxForm({
  validate,
  form: 'clientForm'
})(ClientForm);













//
