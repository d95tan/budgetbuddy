// Add this import if you have a helper function to get the token
import { getToken } from "./usersService";

export async function getGoals() {
  // Existing getGoals function
  const response = await fetch('http://localhost:5173/api/goals');
  const goals = await response.json();
  return goals;
}

export async function updateGoals(goalData) {
  const token = getToken(); 
  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
  };

  const options = {
    method: goalData._id ? 'PUT' : 'POST', 
    headers: headers,
    body: JSON.stringify(goalData)
  };


  const url = `http://localhost:5173/user/goals${goalData._id ? `/${goalData._id}` : ''}`;
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('Network response was not ok.');
  }
  const updatedGoal = await response.json();
  return updatedGoal;
}