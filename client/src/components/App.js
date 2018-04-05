import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Naving from './Naving';
import Landing from './Landing';
import Dashboard from './Dashboard';
import Services from './Services';
import ClientNew from './clients/ClientNew';
import ServiceNew from './services/ServiceNew';


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
            <Route exact path="/services/" component={Services}/>
            <Route exact path="/clients/new" component={ClientNew}/>
            <Route path="/services/new" component={ServiceNew}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null, actions) (App);
