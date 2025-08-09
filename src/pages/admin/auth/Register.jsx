import { useMutation } from "@tanstack/react-query";
import { Button, Checkbox, Form, Input, InputNumber } from "antd";
import { useNavigate } from "react-router-dom";
import { registerAPI } from "../../../providers/auth";

function Register() {
  const nav = useNavigate();

  const { mutate } = useMutation({
    mutationFn: (values) => registerAPI({ resource: "users", values }),
    onSuccess: () => {
      alert("Đăng ký thành công");
      nav("/login");
    },
    onError: () => {
      console.log("Đăng ký thất bại");
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
      <h1>Register</h1>
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

export default Register;
