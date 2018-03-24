// ClientForm shows a form for a user to add input
import _ from 'lodash';
import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {Link} from 'react-router-dom';
import ClientField from './ClientField';
import formFields from './formFields';




class ClientForm extends Component {

  renderFields() {
    return _.map(formFields, ({ label, type, name }) => {
      return (
        <Field
          key={name}
          component={ClientField}
          type={type}
          label={label}
          name={name}
        />
      )
    })
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.props.handleSubmit(this.props.onClientSubmit)}>
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
  form: 'clientForm',
  destroyOnUnmount: false
})(ClientForm);
