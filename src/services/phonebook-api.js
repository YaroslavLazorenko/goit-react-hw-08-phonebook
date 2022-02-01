import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
// axios.defaults.headers.common.accept = 'application/json';

export async function registerNewUser(credentials) {
  console.log('credentials', credentials);
  const response = await axios.post('/users/signup', credentials);
  console.log('response', response);
  return response.data;
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
