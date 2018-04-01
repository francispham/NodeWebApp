import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="StMedi Spa"
        description="$1000 for 10 Treatment"
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <a>Add Credits</a>
      </StripeCheckout>

    );
  }
}

export default connect(null, actions) (Payments);
