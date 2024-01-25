const BASE_URL = '/api/userpreferences';
import { getToken } from "./usersService";
import debug from "debug";

//* create birthday function
export async function createBirthday(inputData) {
  return sendRequest(BASE_URL + '/birthday', 'POST', inputData);
}


//* template function 
export async function sendRequest(url, method = 'GET', payload = null) {

  const options = { method };
  if (payload) {
    options.headers = { "Content-Type": "application/json" };
    options.body = JSON.stringify(payload);
    debug(payload);
    debug(options.body);
  }

  const token = getToken();

  if (token) {
    options.headers ||= {};
    options.headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(url, options);
  debug(res.json());

  if (res.ok) return res.json();
  throw new Error("Bad Request");
}