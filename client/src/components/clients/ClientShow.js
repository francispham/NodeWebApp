import React, { Component } from 'react';
import ClientDetails from './ClientDetails';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { fetchClient } from '../../actions';

class ClientShow extends Component {
  state = { client: [] }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     client: []
  //   }
  //   // console.log(props)
  // }

  componentDidMount() {
    this.props.fetchClient(this.props.match.params);
  }

  render() {
    const {client} = this.props
    console.log(client)

    return(
      <div>
        <ClientDetails {...client}/>
      </div>
    )
  };
}

function  mapStateTopProps({client}) {
  return {client};
}

export default connect(mapStateTopProps, {fetchClient})(ClientShow);
