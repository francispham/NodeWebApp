// ClientFormReview shows users their form inputs for review
import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import formFields from './formFields';
import { withRouter, Link } from 'react-router-dom';
import  * as actions from '../../actions';
import { Button} from 'react-bootstrap';

const ClientFormReview = ({onCancel, formValues, submitClient, history}) => {
  const reviewFields = _.map(formFields, ({name, label}) => {
    return (
      <div className="buttons" key={name}>
        <label>{label}</label>
        <div>
          {formValues[name]}
        </div>
      </div>
    );
  });

  return (<div className="form">
    <h3>Please confirm your entries</h3>
    {reviewFields}
    <div className="buttons" >
      <Button bsStyle="danger" onClick={onCancel}>
        Back
      </Button>
      <Button
        onClick={() => submitClient(formValues, history)}
        type="submit" bsStyle="success">
        <Link to="/clients">
          Add Services
        </Link>
      </Button>
    </div>
  </div>);
};

function mapStateToProps(state) {
  return {formValues: state.form.clientForm.values};
}

export default connect(mapStateToProps, actions)(withRouter(ClientFormReview));
