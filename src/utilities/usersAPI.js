const BASE_URL = '/api/users';
import sendRequest from "./sendRequest";

export async function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}