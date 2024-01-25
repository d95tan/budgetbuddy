import {getToken} from "./usersService"

const baseURL = "/api/logs"

const token = getToken();

const headers = {
  "Content-type": "application/json",
  "Authorization": `Bearer ${token}`
}

export async function getLogs() {
  const token = getToken(); 
  const headers = {
    "Content-type": "application/json",
    "Authorization": `Bearer ${token}` 
  };

  const options = {
    method: "GET",
    headers
  };

  const response = await fetch(baseURL, options);
  if (!response.ok) throw new Error('Network response was not ok.');
  return await response.json();
}

export async function updateLogs(body) {
  const token = getToken(); 
  const headers = {
    "Content-type": "application/json",
    "Authorization": `Bearer ${token}` 
  };

  const options = {
    method: "PUT",
    headers,
    body: JSON.stringify(body)
  };

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