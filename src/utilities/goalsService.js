// Add this import if you have a helper function to get the token
import { getToken } from "./usersService";
import * as goalsAPI from "./goalsAPI"

export async function getGoals() {
  // Existing getGoals function
  const goals = await goalsAPI.getGoals()
  return goals;
}

export async function updateGoal(goal) {
  console.log(goal)

  const body = {
    id: goal._id,
    userId: goal.userId,
    name: goal.name,
    description: goal.description,
    endDate: goal.endDate,
    targetAmount: goal.targetAmount,
    currentAmount: goal.currentAmount,
    dateUpdate: new Date(),
  }

  const updatedGoal = await goalsAPI.updateGoal(body)
  console.log(updatedGoal)
  return updatedGoal;

  // const token = getToken(); 
  // const headers = {
  //   "Content-Type": "application/json",
  //   "Authorization": `Bearer ${token}`
  // };

  // const options = {
  //   method: goalData._id ? 'PUT' : 'POST', 
  //   headers: headers,
  //   body: JSON.stringify(goalData)
  // };


  // const url = `http://localhost:5173/user/goals${goalData._id ? `/${goalData._id}` : ''}`;
  // const response = await fetch(url, options);
  // if (!response.ok) {
  //   throw new Error('Network response was not ok.');
  // }
  // const updatedGoal = await response.json();
  // return true
}