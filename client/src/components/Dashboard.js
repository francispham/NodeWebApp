import  React from 'react';
import { Link } from 'react-router-dom';
import ClientList from './clients/ClientList';
import { Button } from 'react-bootstrap'

const Dashboard = () => {
  return (
    <div className="container-fluid" style={{padding:'60px'}}>
      <h3>Client List</h3>
      <ClientList />
      <div style={{ textAlign: 'center' }}>
        <Button bsStyle="success" bsSize="small" href="/clients/new">
        Add Client
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
