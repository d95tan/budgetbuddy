import { Button, Form, Input } from "antd";
import { signUp } from "../../utilities/usersService";
import { useState } from "react";

export default function SignupForm({ setUser }) {
  
  //* signupform's data is a state 
  const [data, setData] = useState( {
    username: "",
    email: "",
    password: "",
    confirm: "",    
    error: "",
  } );
  // const [data, setData] = useState(null);
  
  //* TRY THEIR ANT COMPONENT CODE
  const onFinish = async ( values) => {
    // event.preventDefault();
    console.log("Success:", values);

    let dataObject = {
      username: values.username,
      email: values.email,
      birthday: values.birthday,
      password: values.password,
    };
    // console.log(dataObject);          // maybe working...?
    setData(dataObject);              // maybe working...?
    // console.log(data);
  
    const user = await signUp(dataObject);
    // console.log(' what is user', user);
    setUser(user);

  };
  
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

  
  //* METHOD 1: TRADITIONAL WAY OF HANDLES
  //* onChange=handleChange, to update state

  //? I THINK ERROR IS COMING FROM HERE
  function handleChange(event) {

    // const { name, value } = event.target;
    // setData((prevData) => ({
    //   ...prevData,
    //   [name]: value,
    //   error: '',
    // }));
    
    // setData({ ...data, [event.target.name]: event.target.value });

  // function handleChange(evt) {
  //   setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
  //   setError("");
  // }
    

  // console.log(data);
  // const { name, value } = event.target;
  // setData({
  //   [event.target.name]: event.target.value,
  //   error: "",
  // });
  // console.log(data);
}
    // this.setState({
    //   [evt.target.name]: evt.target.value,
    //   error: "",
    // });
  
  //* onSubmit-handleSubmit, to pass the data 
//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try { 
//       const { name, email, password } = data;
//       const formData = { name, email, password };
      
//       const user = await signUp(formData);
//       setUser(user);  
//       console.log(setData);
//       console.log(user);
//     }
//     catch { 
//       console.log("error", typeof error);
//       this.setState({ error: 'Sign up failed. Try again' });      // update the state property 'error', with a string. and using 'this.setState' for class components  
//     }
// }

  //? updates, to functions we are familiar with
  return (
    <>
      <h3> Sign Up - Join GA-SEI48's fastest-growing personal finance app!</h3>
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
          label="Username"
          name="username"
          // onChange={handleChange}
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
          // onChange={handleChange}
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
