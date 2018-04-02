import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments'
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';

class Naving extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <NavItem key={1} href="/auth/google">
            Login with Google
          </NavItem>
        )
      default:
        return [
          <NavItem key={1}>
            <Payments />
          </NavItem>,
          <NavItem key={2}>
            Treatments: {this.props.auth.treatments}
          </NavItem>,
          <NavItem key={3} href="/api/logout">
            Loggout
          </NavItem>
        ]
    }
  }

  render () {
    return (
      <Navbar fixedTop collapseOnSelect className="nav">
        <Navbar.Header>
            <Link
              to={this.props.auth ? '/clients' : '/'}
              className="left brand-logo"
            >
              <img className="logo" src="/images/logo.png"/>
            </Link>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          {/* <Nav>
            <NavItem eventKey={1} href="#">
              Link
            </NavItem>
            <NavItem eventKey={2} href="#">
              Link
            </NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav> */}
          <Nav pullRight>
            {this.renderContent()}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Naving);
