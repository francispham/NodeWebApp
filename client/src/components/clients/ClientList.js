import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchClients} from '../../actions';
import {Link} from 'react-router-dom';


class ClientList extends Component {
  componentDidMount() {
    this.props.fetchClients();
  }

  renderClients() {
    return this.props.clients.map(client => {
      // console.log(client)
      return (
        <div className="clients"  key={client._id}>
         <div>
          <div>
            <Link to={`/clients/${client._id}`}>
              <span>{client.name}</span>
            </Link>
          </div>
          <div>
            <span>{client._id}</span>
          </div>
        </div>
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
