export default function LoginForm() {
  return (
    <>
      <div className="form-container">
        {/* J: i want to import styles, ask tomorrow */}
        <form>
          <h2> Login</h2>
          <label>Email</label>
          <input type="email" required />
          <br />
          <br />

          <label>Password</label>
          <input type="password" required />
          <br />
          <br />

          <button type="login">Login</button>
          <p>
            <i>Don't have an account? Sign up now </i>
          </p>
          {/* J: potentially 'Sign up now' is hyperlink to Signup component */}
        </form>
      </div>
    </>
  );
}
