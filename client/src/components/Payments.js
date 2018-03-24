import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="StMedi Spa"
        description="$1000 for 10 services"
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn" style={{ 'backgroundColor': 'maroon' }}>
          Add Credits
        </button>
      </StripeCheckout>

    );
  }
}

export default connect(null, actions) (Payments);
