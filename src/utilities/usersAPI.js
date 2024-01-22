const BASE_URL = '/api/users';

export async function signUp(userData) {

  //? 1. HTTP request
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });


  //? 2. Check if request was successful
  if (res.ok) {
    return res.json();
  }
  else {
    throw new Error('Invalid sign up details');
  }

}