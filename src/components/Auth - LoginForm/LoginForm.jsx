export default function LoginForm() {
  
  return (
    <>
      <h2> Login</h2>
      <label>Email</label>
      <input type='email' required />

      <label>Password</label>
      <input type='password' required />

      <button type='login'>Login</button>
      <p><i>Don't have an account? Sign up now </i></p>     
      {/* J: potentially 'Sign up now' is hyperlink to Signup component */}
    </>
);
}