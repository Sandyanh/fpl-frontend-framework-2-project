import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getList } from "../../../providers/product";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Image, Popconfirm, Table } from "antd";

const ListProduct = () => {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: () => getList({ resource: "products" }),
  });

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/products/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

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
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Action",
      render: (product) => {
        return (
          <>
            <Button>
              <Link to={`/admin/products/edit/${product.id}`}>Edit</Link>
            </Button>
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
      <h1>Product List</h1>
      <Button>
        <Link to={`/admin/products/add`}>Create</Link>
      </Button>
      <Table dataSource={data} columns={columns} />
    </div>
  );
};

export default ListProduct;
