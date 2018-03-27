import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import clientsReducer from './clientsReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  clients: clientsReducer
});
