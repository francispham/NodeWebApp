import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import NavBar from './NavBar';
import Landing from './Landing';
import Dashboard from './Dashboard';
import ClientNew from './clients/ClientNew';


const ServicesPage = () => <h2>Services Page</h2>

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <NavBar/>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/clients" component={Dashboard}/>
            <Route path="/services/" component={ServicesPage}/>
            <Route path="/clients/new" component={ClientNew}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null, actions) (App);
