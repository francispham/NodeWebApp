// ClientForm shows a form for a user to add input
import _ from 'lodash';
import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import PropTypes from 'prop-types';
// import {Link} from 'react-router-dom';
// import { Button } from 'react-bootstrap';
import GeneralPage from './formPages/GeneralPage';
import SkinPage from './formPages/SkinPage';
import formFields from './formFields';



class ClientForm extends Component {

  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1,
    };
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;
    return (
      <div>
        {page === 1 && <GeneralPage onSubmit={this.nextPage} />}
        {page === 2 &&
          <SkinPage
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />}
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

ClientForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};


export default reduxForm({
  validate,
  form: 'clientForm',
  destroyOnUnmount: false
})(ClientForm);
