import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchServices } from '../../actions';
// import { Modal, Button, ButtonToolbar } from 'react-bootstrap';
// import {Link} from 'react-router-dom';

class ServiceList extends Component {
  componentDidMount() {
    this.props.fetchServices();
  }

  renderServices() {
    console.log(this.props)
    return this.props.services.map(service => {
      return (
        <div className="services"  key={service._id}>
         <div>
          <div>
            <span>{service._id}</span>
          </div>
          <div>
            <span>{service._user}</span>
          </div>
          <div>
            <p>This is form</p> <br/>
            {/* <span>{service}</span> */}
          </div>
          <div>
            <span>-----------------------</span>
          </div>
        </div>
      </div>)
    })
  }

  render() {
    return (<div className="box">
      {this.renderServices()}
    </div>)
  }
}

function mapStateTopProps({ services }) {
  return { services };
};

export default connect(mapStateTopProps, { fetchServices }) (ServiceList);
