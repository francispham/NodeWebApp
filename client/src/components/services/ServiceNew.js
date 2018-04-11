import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
// import ServiceForm from './ServiceForm';
import WizardForm from './WizardForm';
// import ServiceFormReview from './ServiceFormReview';
import WizardFormReview from './WizardFormReview';

class ServiceNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return <WizardFormReview
              onCancel={() => this.setState({ showFormReview: false })}
            />;
    }

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
  form: 'wizardForm'
})(ServiceNew);
