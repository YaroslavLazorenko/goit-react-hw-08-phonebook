import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export async function registerNewUser(credentials) {
  const { data } = await axios.post('/users/signup', credentials);
  return data;
}

export async function loginUser(credentials) {
  const { data } = await axios.post('/users/login', credentials);
  return data;
}

export async function fetchContacts() {
  const response = await axios.get('/contacts');
  return response.data;
}

export async function postContact(contact) {
  const response = await axios.post('/contacts', contact);
  return response.data.id;
}

export async function deleteContact(id) {
  await axios.delete(`/contacts/${id}`);
}
