import * as usersAPI from "./usersAPI";

export async function signUp(userData) {

  const token = await usersAPI.signUp(userData);
  localStorage.setItem('token', token);

  return getUser(); 
}


export function getUser() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split(".")[1])).user : null;
}

export function getToken() {
  const token = localStorage.getItem("token");
  if (!token) return null;
  
  // if have token, obtain the payload of the token
  const payload = JSON.parse(atob(token.split(".")[1]));
  
  // A JWT's exp is expressed in seconds, not milliseconds, so convert
  if (payload.exp < Date.now() / 1000) {
    // Token has expired - remove it from localStorage
    localStorage.removeItem("token");
    return null;
  }
  return token;
}

export function logOut() {
  localStorage.removeItem('token');
}


export async function logIn(credentials) {
  // goes to a GET request for 1 ID
  // so that is in the users-api 
  const token = await usersAPI.logIn(credentials);
  localStorage.setItem('token', token);
  return getUser();
}