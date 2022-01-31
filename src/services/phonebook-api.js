import axios from 'axios';

axios.defaults.baseURL = 'https://61ef03d0d593d20017dbb281.mockapi.io/api/';

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
