import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchClients } from '../../actions';
import { Modal, Button, ButtonToolbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';

class ClientList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
      client: []
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  componentDidMount() {
    this.props.fetchClients().then(clients => {
      this.setState({clients: clients, show:false})
    });

  }

  handleShow() {
      this.setState({ show: true });
    }

    handleHide() {
      this.setState({ show: false });
    }

  render() {
    const {client} = this.state
    return this.props.clients.reverse().map(client => {
      return (
        <ButtonToolbar  key={client._id}>
          <Button
            key={client.name}
            bsStyle="primary"
            onClick={this.handleShow}>
          {client.name}
          </Button>
          <Modal
            {...this.props}
            bsSize="large"
            show={this.state.show}
            onHide={this.handleHide}
            dialogClassName="custom-modal"
          >
            <Modal.Header closeButton="closeButton">
              <Modal.Title id="contained-modal-title-lg">{client.name}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>{client.email}</p>
              <p>{client.phone}</p>
              <p>{client.address}</p>
              <p>Created by: {new Date(client.create_at).toLocaleDateString()}</p>
            </Modal.Body>

            <Modal.Footer>
              <Button onClick={this.handleHide}>Close</Button>
              <Button>
                <Link to="/services">
                  Add Services
                </Link>
             </Button>
            </Modal.Footer>
          </Modal>
        </ButtonToolbar>
      )
    })
  };
};

function mapStateTopProps({ clients }) {
  return { clients };
};

export default connect(mapStateTopProps, { fetchClients }) (ClientList);
