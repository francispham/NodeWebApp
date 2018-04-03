service// ServiceForm shows a form for a user to add input
import _ from 'lodash';
import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {Link} from 'react-router-dom';
import ServiceField from './ServiceField';
import formFields from './formFields';
import { Button } from 'react-bootstrap';



class ServiceForm extends Component {

  renderFields() {
    return _.map(formFields, ({ label, type, name }) => {
      return (
        <Field
          key={name}
          component={ServiceField}
          type={type}
          label={label}
          name={name}
        />
      )
    })
  }

  render() {
    return (
      <div className="box">

        <form onSubmit={this.props.handleSubmit(this.props.onServiceSubmit)}>
          <h3>Personal Information:</h3><br/>
          {this.renderFields()}
          <div className="buttons">
            <Button bsStyle="danger">
              <Link to="/services">
              Cancel
              </Link>
            </Button>

            <Button bsStyle="success" type="submit">
              Next
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'Field can not be blank!';
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'serviceForm',
  destroyOnUnmount: false
})(ServiceForm);
