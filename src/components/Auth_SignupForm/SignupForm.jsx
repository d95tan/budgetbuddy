import { Button, Form, Input } from "antd";
import { signUp } from "../../utilities/usersService";
import { useState } from "react";
// const onFinish = (values) => {
//   console.log("Success:", values);
// };
// const onFinishFailed = (errorInfo) => {
//   console.log("Failed:", errorInfo);
// };

export default function SignupForm({ setUser }) {
  
  //* signupform's data is a state 
  // const [data, setData] = useState( {
  //   username: "",
  //   email: "",
  //   password: "",
  //   confirm: "",    
  //   error: "",
  // } );
  const [data, setData] = useState( null );
  
  //* onChange=handleChange, to update state

  //? I THINK ERROR IS COMING FROM HERE
  const handleChange = (event) => {

    const { name, value } = event.target;
    
    setData((prevData) => ({
      ...prevData,
      [name]: value,
      error: '',
    }));

    console.log(data);
    // const { name, value } = event.target;
    // setData({
    //   [event.target.name]: event.target.value,
    //   error: "",
    // });
    // console.log(data);
  }; 
    // this.setState({
    //   [evt.target.name]: evt.target.value,
    //   error: "",
    // });
  
  //* onSubmit-handleSubmit, to pass the data 
  const handleSubmit = async (event) => {
    event.preventDefault();

    try { 
      const { name, email, password } = data;
      const formData = { name, email, password };
      
      const user = await signUp(formData);
      setUser(user);  
      console.log(setData);
      console.log(user);
    }
    catch { 
      console.log("error", typeof error);
      this.setState({ error: 'Sign up failed. Try again' });      // update the state property 'error', with a string. and using 'this.setState' for class components  
    }
}

  //? updates, to functions we are familiar with
  return (
    <>
      <h3> Sign Up </h3>
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
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        onSubmit={handleSubmit}   
        autoComplete="off" 
      >
        <Form.Item
          label="Username"
          name="username"
          onChange={handleChange}
          rules={[
            {
              required: true,
              message: "Please create your username",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          onChange={handleChange}
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
          label="Birthday"
          name="Birthday"
          onChange={handleChange}
          rules={[
            {
              required: true,
              message: "Please input your birthdate",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          onChange={handleChange}
          rules={[
            {
              required: true,
              message: "Please create a password",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Confirm"
          name="passwordconfirm"
          onChange={handleChange}
          rules={[
            {
              required: true,
              message: "Please confirm your password",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

//* old code
  /* <form>
        <h2>Signup Form</h2>
        <label>Name</label>
        <input required /> 
        <br />

        <label>Email</label>
        <input required /> 
        <br />

        <label>Password</label>
        <input required /> 
        <br />

        <label>Confirm</label>
        <input required /> 
        <br />

      </form>
     */
