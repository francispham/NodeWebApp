import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchClients } from '../../actions';

class ClientList extends Component {
  componentDidMount() {
    this.props.fetchClients();
  }
  renderClients() {
    return this.props.clients.reverse().map(client => {
      return (
        <div className="card darken-1" key={client._id}>
          <div className="card-content">
            <span className="card-title">{client.name}</span>
            <p>
              {client.email}
            </p>
            <p className="right">
              Created by: {new Date(client.create_at).toLocaleDateString()}
            </p>
          </div>
        </div>
      )
    })
  }
  render() {
    return (
      <div className="box">
        {this.renderClients()}
      </div>
    );
  }
}

function mapStateTopProps({ clients }) {
  return { clients };
}

export default connect(mapStateTopProps, { fetchClients }) (ClientList);
