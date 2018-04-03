import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import ServiceForm from './ServiceForm';
import ServiceFormReview from './ServiceFormReview';

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
      return <ServiceFormReview
              onCancel={() => this.setState({ showFormReview: false })}
            />;
    }

    return <ServiceForm
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
  form: 'serviceForm'
})(ServiceNew);
