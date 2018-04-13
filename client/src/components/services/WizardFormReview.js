// WizardFormReview shows users their form inputs for review
import React from 'react';
// import _ from 'lodash';
import {connect} from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import  * as actions from '../../actions';
import { Button} from 'react-bootstrap';

const WizardFormReview = ({onCancel, formValues, submitWizard, history}) => {
  return (<div className="form" >
    <h3>Please confirm your entries</h3>
    {JSON.stringify(formValues)}
    <div className="buttons" >
      <Button bsStyle="danger" onClick={onCancel}>
        Back
      </Button>
      <Button
        onClick={() => submitWizard(formValues, history)}
        type="submit" bsStyle="success">
        <Link to="/services">
          Submit
        </Link>
      </Button>
    </div>
  </div>);
};

function mapStateToProps(state) {
  return {formValues: state.form.wizardForm.values};
}

export default connect(mapStateToProps, actions)(withRouter(WizardFormReview));
