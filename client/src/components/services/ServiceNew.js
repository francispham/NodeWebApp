import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
// import ServiceForm from './ServiceForm';
import WizardForm from './WizardForm';
// import ServiceFormReview from './ServiceFormReview';
import WizardFormReview from './WizardFormReview';

class ServiceNew extends Component {
  state = { showFormReview: false };
/* Same as below: 👇
  constructor(props) {
    super(props);

    this.state = { new: true };
  }
*/
  renderContent() {
    if (this.state.showFormReview) {
      // return <ServiceFormReview
      return <WizardFormReview
              onCancel={() => this.setState({ showFormReview: false })}
            />;
    }

    // return <ServiceForm
    return <WizardForm
            onServiceSubmit={() => this.setState({ showFormReview: true })}
          />
  }

  render() {
    return (
      <div className="box" style={{padding:'60px'}}>
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  // form: 'serviceForm'
  form: 'wizardForm'
})(ServiceNew);
