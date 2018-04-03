import  React from 'react';
import ServiceList from './services/ServiceList';
import { Button } from 'react-bootstrap'

const Services = () => {
  return (
    <div className="container-fluid" style={{padding:'60px'}}>
      <h3>Client List</h3>
      <div className="grid-list">
        <ServiceList />
      </div>
      <br/>
      <div style={{ textAlign: 'center' }}>
        <Button bsStyle="success" bsSize="small" href="/services/new">
        Add Client
        </Button>
      </div>
    </div>
  );
};

export default Services;
