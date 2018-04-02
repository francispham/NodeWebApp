import React from 'react';
import {Button, Modal} from 'react-bootstrap'

function ClientDetails (props) {
    const {client} = props
    console.log(props)
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
}

export default ClientDetails;
