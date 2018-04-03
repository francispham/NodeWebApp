import  axios from 'axios';
import { FETCH_USER, FETCH_CLIENTS, FETCH_SERVICES } from './types';

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
  // const formatedResult = {
  //   name: values.name,
  //   user: values.user,
  //   formDetails: {
  //     dateOfBirth: values.dateOfBirth,
  //     serviceName: values.serviceName,
  //   }
  // }

  history.push('/services');
  dispatch({type: FETCH_USER, payload: res.data });
};

export const fetchClients = () => async dispatch => {
  const res = await axios.get('/api/clients');

    dispatch({type: FETCH_CLIENTS, payload: res.data });
}
