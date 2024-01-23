const BASE_URL = '/api/users';
import sendRequest from "./sendRequest";

//* signup function
export async function signUp(userData) {
  // console.log('usersAPI: does it sound here');

  return sendRequest(BASE_URL + '/signup', 'POST', userData);
  
}

//* login function
export async function logIn(credentials) {
  return sendRequest(BASE_URL + '/login', 'POST', credentials);
}

//* checktoken function
export async function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}
