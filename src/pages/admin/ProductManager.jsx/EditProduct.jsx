import { Button, Form, Input, InputNumber } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getDetail, updateProduct } from "../../../providers/product";

function EditProduct() {
  const { id } = useParams();
  const [form] = Form.useForm();

  const { data: product } = useQuery({
    queryKey: ["product"],
    queryFn: () => getDetail({ resource: "products", id }),
  });

  useEffect(() => {
    if (!product) return;
    form.setFieldsValue(product);
  }, [product]);

  const { mutate } = useMutation({
    mutationFn: (values) => updateProduct({ resource: "products", id, values }),
    onSuccess: () => {
      alert("Cập nhật thành công");
      nav("/admin/products");
    },
    onError: () => {
      console.log("Lỗi rồi T.T");
    },
  });

  function onFinish(values) {
    mutate(values);
  }

  const nav = useNavigate();
  return (
    <div>
      <h1>Đây là trang edit</h1>
      <Form
        name="basic"
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{
          price: {
            Number: 0,
          },
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            { required: true, message: "Name is required!" },
            { min: 3, message: "Name is longer than 3 characters" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Image"
          name="image"
          rules={[{ required: true, message: "Image is required!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Price"
          name="price"
          rules={[
            { required: true, message: "Price is required" },
            { type: "number", min: 0, message: "Price is greater than 0" },
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
    </div>
  );
}

export default EditProduct;
