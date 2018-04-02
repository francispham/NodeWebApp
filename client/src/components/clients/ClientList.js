import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchClients } from '../../actions';
import ClientDetails from './ClientDetails'
import { Modal, Button, ButtonToolbar } from 'react-bootstrap'

class ClientList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      lgShow: false,
      client: []
    };
    this.renderClients = this.renderClients.bind(this)
  }

  componentDidMount() {
    this.props.fetchClients();
    const {client} = this.state
  }

  renderClients() {
    const {client} = this.state
    let lgClose = () => this.setState({ lgShow: false, client: client });
    return this.props.clients.reverse().map(client => {
      return (
        <ButtonToolbar>
          <Button

            bsStyle="primary"
            onClick={() => this.setState({ lgShow: true })}
          >
            {client.name}
          </Button>
            {/* <ClientDetails show={this.state.lgShow} onHide={lgClose} /> */}
          </ButtonToolbar>
      )
    })
  };


  render() {
    return (
      <div className='grid-list'>
        {this.renderClients()}
      </div>
    );
  };
};

function mapStateTopProps({ clients }) {
  return { clients };
};

export default connect(mapStateTopProps, { fetchClients }) (ClientList);
