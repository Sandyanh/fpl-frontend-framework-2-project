import { useMutation } from "@tanstack/react-query";
import { Button, Checkbox, Form, Input, InputNumber } from "antd";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "../../../providers/auth";

function Login() {
  const nav = useNavigate();

  const { mutate } = useMutation({
    mutationFn: (values) => loginAPI({ resource: "login", values }),
    onSuccess: () => {
      alert("Đăng nhập thành công");
      nav("/");
    },
    onError: () => {
      console.log("Đăng nhập thất bại");
    },
  });

  const onFinish = (values) => {
    mutate(values);
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ price: { Number: 0 } }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <h1>Login</h1>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          { required: true, message: "Please input your password!" },
          { min: 6, message: "Password must be longer than 6 characters" },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Login;
