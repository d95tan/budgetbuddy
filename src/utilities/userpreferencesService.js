import * as userpreferencesAPI from "./userpreferencesAPI";
import { getUser } from "./usersService";


export async function createBirthday(inputData) {
  const token = await userpreferencesAPI.createBirthday(inputData);

  localStorage.setItem('token', token);

  return getUser();
}

export async function indexBirthday() {
  const token = await userpreferencesAPI.indexBirthday();

  localStorage.setItem('token', token);

  return getUser();
}