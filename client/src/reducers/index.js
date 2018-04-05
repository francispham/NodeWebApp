import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import clientsReducer from './clientsReducer';
import clientReducer from './clientReducer';
import servicesReducer from './servicesReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  clients: clientsReducer,
  client: clientReducer,
  services: servicesReducer
});
