import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchClients } from '../../actions';
import { Modal, Button, ButtonToolbar } from 'react-bootstrap'

class ClientList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      lgShow: false,
      client: []
    };
    this.renderClient = this.renderClient.bind(this)
  }

  componentDidMount() {
    this.props.fetchClients().then(clients => {
      this.setState({clients: clients, lgShow:false})
    });

  }

  renderClient() {
    const {client} = this.state
    return (
      <Modal
        {...this.props}
        bsSize="large"
        aria-labelledby="contained-modal-title-lg"
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
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  };


  render() {
    const {client} = this.state
    let lgClose = () => this.setState({ lgShow: false, client: client });
    return this.props.clients.reverse().map(client => {
      return (
        <ButtonToolbar  key={client._id}>
          <Button
            key={client.name}
            bsStyle="primary"
            onClick={() => this.setState({ lgShow: true })}
          >
            {client.name}
          </Button>
            <div show={this.state.lgShow} onHide={lgClose}>
              {this.renderClient()}
            </div>
        </ButtonToolbar>
      )
    })
  };
};

function mapStateTopProps({ clients }) {
  return { clients };
};

export default connect(mapStateTopProps, { fetchClients }) (ClientList);
