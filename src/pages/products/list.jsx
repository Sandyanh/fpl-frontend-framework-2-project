import { Table, Image, Button, Popconfirm } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";

function ListProduct() {
  //dữ liệu hiển thị trong bảng
  // const data = [
  //   {
  //     id: 1,
  //     name: "Product 1",
  //     image: "https://picsum.photos/200/300",
  //     price: 1000000,
  //   },
  //   {
  //     id: 2,
  //     name: "Product 2",
  //     image: "https://picsum.photos/200/300",
  //     price: 2000000,
  //   },
  //   {
  //     id: 3,
  //     name: "Product 3",
  //     image: "https://picsum.photos/200/300",
  //     price: 3000000,
  //   },
  // ];

  //Lưu trữ biến products vào trong state
  const [products, setProducts] = useState([]);

  //Khai báo hàm lấy danh sách sản phẩm
  const getList = async () => {
    try {
      //Call api để lấy dữ liệu
      const { data } = await axios.get(`http://localhost:3000/products`);
      //Gán dữ liệu cho biến product
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  //
  const handleDelete = (id) => {
    const newProducts = products.filter((product) => product.id != id);
    setProducts(newProducts);
  };
  useEffect(() => {
    getList(); //gọi hàm getList
  }, [products]);
  //khai báo cột xuất hiện trong bảng
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) => {
        return <Image src={image} />;
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Action",
      render: (product) => {
        return (
          <>
            <Button>Edit</Button>
            <Popconfirm
              title="Delete the task"
              description="Are you sure to delete this task?"
              onConfirm={() => handleDelete(product.id)}
              okText="Yes"
              cancelText="No"
            >
              <Button danger>Delete</Button>
            </Popconfirm>
          </>
        );
      },
    },
  ];

  return (
    <div>
      <h1>Đây là trang danh sách</h1>
      <Table dataSource={products} columns={columns} key="id" />
    </div>
  );
}

export default ListProduct;
