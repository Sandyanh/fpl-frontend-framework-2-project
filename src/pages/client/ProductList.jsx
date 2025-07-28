import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Card, Col, Flex, Row, Typography } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const { Paragraph } = Typography;

  useEffect(() => {
    const fetchData = async () => {
      await axios.get("http://localhost:3000/products").then(({ data }) => {
        setProducts(data);
      });
    };
    fetchData();
  }, []);

  return (
    <Row gutter={[16, 24]} style={{margin: "40px 0"}}>
      {products.map((product) => (
        <Col key={product.id} className="gutter-row" span={6}>
          <Card
            cover={
              <img
                src={product.image}
                height={215}
                style={{ objectFit: "contain", padding: 20 }}
              />
            }
          >
            <Paragraph ellipsis={{ rows: 2 }} style={{fontWeight: "bold"}}>{product.name}</Paragraph>
            <Paragraph ellipsis={{ rows: 2 }}>{product.description}</Paragraph>
            <Flex vertical gap="small" style={{ width: "100%" }}>
              <Button type="primary" block icon={<ShoppingCartOutlined />}>
                Mua ngay
              </Button>
              <Button
                block
                icon={<EyeOutlined />}
                onClick={() => navigate(`/san-pham/${product.id}`)}
              >
                Xem chi tiết
              </Button>
            </Flex>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
