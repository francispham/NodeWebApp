import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Naving from './Naving';
import Landing from './Landing';
import Dashboard from './Dashboard';
import Services from './Services';
import ClientNew from './clients/ClientNew';


class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Naving/>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/clients" component={Dashboard}/>
            <Route path="/services/" component={Services}/>
            <Route path="/clients/new" component={ClientNew}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null, actions) (App);
