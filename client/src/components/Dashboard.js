import  React from 'react';
import ClientList from './clients/ClientList';
// import ClientShow from './clients/ClientShow';
import { Button } from 'react-bootstrap'

const Dashboard = () => {
  return (
    <div className="container-fluid" style={{padding:'60px'}}>
      <h3>Client List</h3>
      <div>
        <ClientList />
      </div>
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
  state = { showList: false };

  renderContent() {
    if (this.state.showList) {
      return <ClientList
          />
  }

    return <ClientShow
            noReturn={() => this.setState({ showList: true})}
          />
  }

  render() {
    return (
      <div className="box" style={{padding:'60px'}}>
        {this.renderContent()}
      </div>
    );
  }
}
*/
export default Dashboard;












//
