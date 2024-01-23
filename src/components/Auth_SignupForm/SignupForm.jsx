import { Button, Checkbox, Form, Input } from "antd";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default function SignupForm() {
  return (
    <>
      <h3> Sign Up </h3>
      <p><i>Todo: please insert route on landing page </i></p>
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
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your first name",
            },
          ]}
        >
          <Input />
        </Form.Item>

        {/* <Form.Item
          label="Family name"
          name="2name"
          rules={[
            {
              required: true,
              message: "Please input your family name",
            },
          ]}
        >
          <Input />
        </Form.Item> */}

        <Form.Item
          label="Email"
          name="email"
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
{
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
}
