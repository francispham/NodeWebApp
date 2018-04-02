import  React from 'react';
import ClientList from './clients/ClientList';
import { Button } from 'react-bootstrap'

const Dashboard = () => {
  return (
    <div className="container-fluid" style={{padding:'60px'}}>
      <h3>Client List</h3>
      <ClientList />
      <br/>
      <div style={{ textAlign: 'center' }}>
        <Button bsStyle="success" bsSize="small" href="/clients/new">
        Add Client
        </Button>
      </div>
    </div>
  );
};

/*
class Dashboard extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      lgShow: false
    };
  }
  render() {
    let lgClose = () => this.setState({ lgShow: false });
    return (
      <div className="container-fluid" style={{padding:'60px'}}>
        <h3>Client List</h3>
        <ClientList />
        <ButtonToolbar >
          <Button
            bsStyle="primary"
            onClick={() => this.setState({ lgShow: true })}
          >
            Launch large demo modal
          </Button>
            <ClientList show={this.state.lgShow} onHide={lgClose} />
          </ButtonToolbar>
          <div style={{ textAlign: 'center' }}>
            <Button bsStyle="success" bsSize="small" href="/clients/new">
            Add Client
            </Button>
          </div>
      </div>
    );
  }
}
*/
export default Dashboard;












//
