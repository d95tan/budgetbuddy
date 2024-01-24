import { Button, Checkbox, Form, Input } from 'antd';
import * as usersService from "../../utilities/usersService";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

// const onFinish = (values) => {
//   console.log('Success:', values);
// };
// const onFinishFailed = (errorInfo) => {
//   console.log('Failed:', errorInfo);
// };

export default function LoginForm({ setUser }) {
//* so there are 2 states: 'credentials' and 'error'
const [credentials, setCredentials] = useState({
  email: "",
  password: "",
});
const [error, setError] = useState("");
  const navigate = useNavigate();
  
  
  const onFinish = async (values) => {
    console.log('Success:', values);
    
    // const storeValues = values;
    setCredentials(values);       // maybe working...?
    console.log(credentials);     // maybe working...?

    // setCredentials(storeValues);  // maybe working...?
    // console.log(credentials);     // maybe working...?

    //? from notes
    const user = await usersService.logIn(credentials);
    setUser(user);      // become that user
    navigate('/');

};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
  setError('The email and password you specified are invalid. Please try again.')

};
  
  
  
// function handleChange(evt) {
//   setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
//   console.log(credentials);     // why cannot?
//   setError("");
//   }
  
//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const user = await usersService.logIn(credentials);
//       setUser(user);      // become that user
//     }
//     catch {
//       setError('The email and password you specified are invalid. Please try again.') }
//   };
  
  return (
    <>
      <h3> Login </h3>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        // onSubmit={handleSubmit}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          // value={credentials.email}
          // onChange={handleChange}

          rules={[
            {
              required: true,
              message: "Please input your email address",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          // onChange={handleChange}
          // value= {credentials.password}

          rules={[
            {
              required: true,
              message: "Please input your password",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Login
          </Button>
          
        </Form.Item>
      </Form>
    </>
  );
}

//* old code 
/* <div className="form-container">
         J: i want to import styles, ask tomorrow 
        <form>
          {/* <h2> Login</h2>
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
          {/* J: potentially 'Sign up now' is hyperlink to Signup component 
        //? try AUI code
      
        </form>
      </div> */