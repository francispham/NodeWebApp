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
      console.log(service)
      return (
        <div className="services"  key={service._id}>
         <div>
          <div>
            <label>ID:</label>
            <span>{service._id}</span>
          </div>
          <div>
            <label>User ID:</label>
            <span>{service._user}</span>
          </div>
          <div className="box">
            <label>Condition:</label>
            <span>{service.formValues.Condition}</span>
            <label>Skin Type:</label>
            <span>{service.formValues.SkinType}</span>
            <label>Tan:</label>
            <span>{service.formValues.Tan}</span>
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
