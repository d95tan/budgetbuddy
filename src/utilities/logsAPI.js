import {getToken} from "./usersService"

const baseURL = "/api/logs"

const token = getToken();

const headers = {
  "Content-type": "application/json",
  "Authorization": `Bearer ${token}`
}

export async function getLogs() {

  const options = {
    method: "GET", 
    headers
  }

  const response = await fetch(baseURL, options);
  const json = await response.json();

  return json;
}

export async function updateLogs(body) {
  const options = {
    method: "PUT",
    headers,
    body: JSON.stringify(body)
  }

  const response = await fetch(baseURL, options);
  const json = await response.json();

  return json;
}

export async function createLog(body) {
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify(body)
  }

  const response = await fetch(baseURL, options)
  const json = await response.json();

  return json;
}