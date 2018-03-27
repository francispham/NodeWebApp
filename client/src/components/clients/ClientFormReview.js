// ClientFormReview shows users their form inputs for review
import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import  * as actions from '../../actions';

const ClientFormReview = ({onCancel, formValues, submitClient, history}) => {
  const reviewFields = _.map(formFields, ({name, label}) => {
    return (<div key={name}>
      <label>{label}</label>
      <div>
        {formValues[name]}
      </div>
    </div>);
  });

  return (<div className="container">
    <h5>Please confirm your entries</h5>
    {reviewFields}
    <div>

      <button className="red btn-flat white-text" onClick={onCancel}>
        Back
      </button>
      <button
        onClick={() => submitClient(formValues, history)}
        type="Services" className="red btn-flat right white-text">
        Submit
        <i className="material-icons right">arrow_forward</i>
      </button>
    </div>
  </div>);
};

function mapStateToProps(state) {
  return {formValues: state.form.clientForm.values};
}

export default connect(mapStateToProps, actions)(withRouter(ClientFormReview));
