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
      <Navbar fixedTop collapseOnSelect className="nav" id="myNav">
        <Navbar.Header >
            <Link
              to="/"
              className="left brand-logo"
            >
              <img className="logo" src="/images/logo.png"/>
            </Link>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} className="page-scroll" href="#contact">
              Contact
            </NavItem>
            <NavItem eventKey={2} className="page-scroll" href="#services">
              Services
            </NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}><Link
                to={this.props.auth ? '/clients' : '/'}
              >
                Client List
              </Link></MenuItem>
              <MenuItem eventKey={3.2}>
                <Link to={this.props.auth ? '/services' : '/'}> Service List</Link>
              </MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>
                <Link to={this.props.auth ? '/clients/new' : '/'}>New Client</Link>
              </MenuItem>
              <MenuItem eventKey={3.4}>
                <Link to={this.props.auth ? '/services/new' : '/'}>New Service</Link>
              </MenuItem>
            </NavDropdown>
          </Nav>
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
