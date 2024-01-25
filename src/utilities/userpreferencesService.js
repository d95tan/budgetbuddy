import * as userpreferencesAPI from "./userpreferencesAPI";
import { getUser } from "./usersService";


//* create birthday function
export async function createBirthday(inputData) {
  const token = await userpreferencesAPI.createBirthday(inputData);

  localStorage.setItem('token', token);

  return getUser();
}

// export async function indexBirthday() {
//   const token = await userpreferencesAPI.indexBirthday();

//   localStorage.setItem('token', token);

//   return getUser();
// }

//* getOne birthday function
export async function getOneBirthday() {
  const token = await userpreferencesAPI.getOneBirthday();

  localStorage.setItem('token', token);

  return getUser();
}

//* update birthday function

export async function updateBirthday(updateData) {
  const token = await userpreferencesAPI.updateBirthday(updateData);

  localStorage.setItem('token', token);

  return getUser();
}