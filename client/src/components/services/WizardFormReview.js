// WizardFormReview shows users their form inputs for review
import React from 'react';
// import _ from 'lodash';
import {connect} from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import  * as actions from '../../actions';
import { Button} from 'react-bootstrap';

const WizardFormReview = ({onCancel, formValues, submitWizard, history}) => {

  // const reviewFields = _.map(formValues, ({name, value}) => {
  //   return (
  //     <div className="buttons" key={1}>
  //       <div>
  //         {formValues[name]}
  //       </div>
  //       <div>
  //         {formValues[value]}
  //       </div>
  //     </div>
  //   );
  // });

  return (<div className="form" >
    <h3>Please confirm your entries</h3>
    {/* {reviewFields} */}
    {JSON.stringify(formValues)}
    <div className="buttons" >
      <Button bsStyle="danger" onClick={onCancel}>
        Back
      </Button>
      <Button
        onClick={() => submitWizard(formValues, history)}
        type="submit" bsStyle="success">
        <Link to="/clients">
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
