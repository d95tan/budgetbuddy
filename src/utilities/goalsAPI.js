import { getToken } from "./usersService";

const baseURL = "/api/goals";

const token = getToken();

const headers = {
  "Content-type": "application/json",
  Authorization: `Bearer ${token}`,
};

export async function getGoals() {
  const options = {
    method: "GET",
    headers,
  };

  const response = await fetch(baseURL, options);
  if (!response.ok) throw new Error("Network response was not ok.");
  return await response.json();
}

export async function updateGoal(body) {
  const id = body.id;

  const options = {
    method: "PUT",
    headers,
  };

  const response = await fetch(`${baseURL}/${id}`, options);

  const json = await response.json();

  return json;
}
