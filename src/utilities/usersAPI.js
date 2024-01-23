const BASE_URL = '/api/users';
import sendRequest from "./sendRequest";

//* signup function
export async function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

//* login function
export async function logIn(credentials) {
  return sendRequest(BASE_URL + '/login', 'POST', credentials);
}
