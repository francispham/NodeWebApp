// ClientNew shows ClientForm and ClientFormReview
import React, { Component } from 'react';
import ClientForm from './ClientForm';
import ClientFormReview from './ClientFormReview';

class ClientNew extends Component {
  state = { showFormReview: false };
/* Same as below: 👇
  constructor(props) {
    super(props);

    this.state = { new: true };
  }
*/
  renderContent() {
    if (this.state.showFormReview) {
      return <ClientFormReview />;
    }

    return <ClientForm
            onClientSubmit={() => this.setState({ showFormReview: true })}
          />
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default ClientNew;
