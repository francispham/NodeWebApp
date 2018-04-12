import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchClients} from '../../actions';
// import {Modal, Button, ButtonToolbar} from 'react-bootstrap'
import {Link} from 'react-router-dom';
// import ClientDetails from './ClientDetails'

class ClientList extends Component {
  componentDidMount() {
    this.props.fetchClients();
  }

  renderClients() {
    return this.props.clients.map(client => {
      return (
        <div className="clients"  key={client._id}>
         <div>
          <div>
            <span>{client.name}</span>
          </div>
          <div>
            <span>{client.email}</span>
          </div>
          <div>
            <span>{client.phone}</span>
          </div>
          <div>
            <span>{client.age}</span>
          </div>
          <div>
            <span>{client.address}</span>
          </div>
          <div>
            <span>{client.postalCode}</span>
          </div>
        </div>
          <Link to="/services">
            Check Services
          </Link>
      </div>)
    })
  }

  render() {
    return (<div className="box">
      {this.renderClients()}
    </div>)
  }
}

function mapStateTopProps({clients}) {
  return {clients};
};

export default connect(mapStateTopProps, {fetchClients})(ClientList);
