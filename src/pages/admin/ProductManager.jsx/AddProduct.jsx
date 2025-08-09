import { useMutation } from "@tanstack/react-query";
import { Button, Checkbox, Form, Input, InputNumber } from "antd";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../../providers/product";

function AddProduct() {
  const nav = useNavigate();

  const { mutate } = useMutation({
    mutationFn: (values) => addProduct({ resource: "products", values }),
    onSuccess: () => {
      alert("Thêm mới thành công");
      nav("/admin/products");
    },
    onError: () => {
      console.log("Thêm mới thất bại");
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
      <h1>Create Product</h1>
      <Form.Item
        label="Name"
        name="name"
        rules={[
          { required: true, message: "Please input your name!" },
          { min: 3, message: "Name must be longer than 3 characters" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Image"
        name="image"
        rules={[{ required: true, message: "Please input your image!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Price"
        name="price"
        rules={[
          { required: true, message: "Please input your price!" },
          { type: "number", min: 0, message: "Price must be greater than 0" },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        label="Category"
        name="category"
        rules={[
          { required: true, message: "Please input category!" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Description"
        name="description"
        rules={[
          { required: true, message: "Please input description!" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default AddProduct;
