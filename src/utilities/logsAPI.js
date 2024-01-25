import { getToken } from "./usersService"; 

const baseURL = "/api/logs";

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
  if (!response.ok) throw new Error('Network response was not ok.');
  return await response.json();
}