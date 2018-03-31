import  React from 'react';
import { Link } from 'react-router-dom';
import ClientList from './clients/ClientList';

const Dashboard = () => {
  return (
    <div>
      <ClientList />
      <div className="fixed-action-btn" >
        <Link to="/clients/new" className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
