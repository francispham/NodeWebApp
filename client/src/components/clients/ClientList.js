import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchClients } from '../../actions';
import { Modal, Button } from 'react-bootstrap'

class ClientList extends Component {
  componentDidMount() {
    this.props.fetchClients();
  }
  renderClients() {
    return this.props.clients.reverse().map(client => {
      return (
        <Modal
          className="box"
          {...this.props}
          key={client._id}
          bsSize="large"
          aria-labelledby="contained-modal-title-lg">

          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">{client.name}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>{client.email}</p>
            <p>{client.phone}</p>
            <p>{client.address}</p>
            <p>Created by: {new Date(client.create_at).toLocaleDateString()}</p>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>

      )
    })
  };

  render() {
    return (
      <div className="box">
        {this.renderClients()}
      </div>
    );
  };
};

function mapStateTopProps({ clients }) {
  return { clients };
};

export default connect(mapStateTopProps, { fetchClients }) (ClientList);
