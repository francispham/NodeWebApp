import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchServices } from '../../actions';
import { Modal, Button, ButtonToolbar } from 'react-bootstrap'

/*NEEDS:
  - List of services*/
class ServiceList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
      service: []
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  componentDidMount() {
    this.props.fetchServices().then(services => {
      this.setState({services: services, show:false})
    });

  }

  handleShow() {
      this.setState({ show: true });
    }

    handleHide() {
      this.setState({ show: false });
    }

  render() {
    const {service} = this.state
    return this.props.services.reverse().map(service => {
      return (
        <ButtonToolbar  key={service._id}>
          <Button
            key={service.name}
            bsStyle="primary"
            onClick={this.handleShow}>
          {service.name}
          </Button>
          <Modal
            {...this.props}
            bsSize="large"
            show={this.state.show}
            onHide={this.handleHide}
            dialogClassName="custom-modal"
          >
            <Modal.Header closeButton="closeButton">
              <Modal.Title id="contained-modal-title-lg">{service.name}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>{service.email}</p>
              <p>{service.phone}</p>
              <p>{service.address}</p>
              <p>Created by: {new Date(service.create_at).toLocaleDateString()}</p>
            </Modal.Body>

            <Modal.Footer>
              <Button onClick={this.handleHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        </ButtonToolbar>
      )
    })
  };
};

function mapStateTopProps({ services }) {
  return { services };
};

export default connect(mapStateTopProps, { fetchServices }) (ServiceList);
