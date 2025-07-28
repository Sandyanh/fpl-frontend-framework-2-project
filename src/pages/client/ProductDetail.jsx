import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Col, Flex, Row, Typography } from "antd";
import axios from "axios";
import { ShoppingCartOutlined } from "@ant-design/icons";

const cardStyle = {
  height: "calc(100vh - 150px)",
};

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchDetailProduct = async () => {
      await axios
        .get(`http://localhost:3000/products/${id}`)
        .then(({ data }) => setProduct(data));
    };
    fetchDetailProduct();
  }, []);

  return (
    <>
      <Card
        hoverable
        style={cardStyle}
        styles={{ body: { padding: 0, overflow: "hidden" } }}
      >
        <Row gutter={[24, 24]} style={{ margin: "30px" }}>
          <Col
            span={12}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              alt="avatar"
              src={product.image}
              style={{ objectFit: "contain" }}
              width={400}
              height={400}
            />
          </Col>
          <Col span={12}>
            <Typography.Title level={3}>{product.name}</Typography.Title>
            <Typography.Paragraph>{product.description}</Typography.Paragraph>
            <Button type="primary" icon={<ShoppingCartOutlined />} danger>
              Thêm vào giỏ hàng
            </Button>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default ProductDetail;
