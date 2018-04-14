import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
import validate from './validate';
import ClientField from './ClientField';
import formFields from './formFields';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

class GeneralPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handleSubmit: {}
     }
    this.renderFields = this.renderFields.bind(this);
  }
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
    const { handleSubmit } = this.props;
    return (
      <div className="box">

        <form onSubmit={handleSubmit}>
          <h3>Personal Information:</h3><br/>
          {this.renderFields()}
          <div className="buttons">
            <Button bsStyle="danger">
              <Link to="/clients">
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

export default reduxForm({
  validate,
  form: 'clientForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(GeneralPage);
