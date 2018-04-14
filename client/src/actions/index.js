import  axios from 'axios';
import { FETCH_USER, FETCH_CLIENTS, FETCH_CLIENT } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({type: FETCH_USER, payload: res.data });
};

export const submitClient = (values, history) => async dispatch => {
  const res = await axios.post('/api/clients', values);
  history.push('/services');
  dispatch({type: FETCH_USER, payload: res.data });
};

export const fetchClients = () => async dispatch => {
  const res = await axios.get('/api/clients');

  dispatch({type: FETCH_CLIENTS, payload: res.data });
}

export const fetchClient = () => async dispatch => {
  const res = await axios.get('/api/clients/:id');
  console.log(res.data)

  dispatch({type: FETCH_CLIENT, payload: res.data });
}

/*
export const submitWizard = (formValues, history) => async dispatch => {
  const res = await axios.post('/api/services', {formValues});
  history.push('/clients');
  dispatch({type: FETCH_CLIENT, payload: res.data });
};

export const fetchServices = () => async dispatch => {
  const res = await axios.get('/api/services');
  dispatch({type: FETCH_SERVICES, payload: res.data });
}

*/
