import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Card, Col, Flex, Input, Row, Typography } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const { Paragraph } = Typography;
  const { Search } = Input;

  const [search, setSearch] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (value) => {
    setSearchQuery(value);
  };

  useEffect(() => {
    let urlProducts = `http://localhost:3000/products`;

    if (searchQuery) urlProducts += `?name_like=${searchQuery}`;

    const fetchData = async () => {
      await axios.get(urlProducts).then(({ data }) => {
        setProducts(data);
      });
    };
    fetchData();
  }, [searchQuery]);

  return (
    <>
      <div>
        <Search
          placeholder="Search by name..."
          onSearch={handleSearch}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: 200 }}
        />
      </div>

      <Row gutter={[16, 24]} style={{ margin: "40px 0" }}>
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
              <Paragraph ellipsis={{ rows: 2 }} style={{ fontWeight: "bold" }}>
                {product.name}
              </Paragraph>
              <Paragraph ellipsis={{ rows: 2 }}>
                {product.description}
              </Paragraph>
              <Flex vertical gap="small" style={{ width: "100%" }}>
                <Button type="primary" block icon={<ShoppingCartOutlined />}>
                  Buy Now
                </Button>
                <Button
                  block
                  icon={<EyeOutlined />}
                  onClick={() => navigate(`/san-pham/${product.id}`)}
                >
                  View All
                </Button>
              </Flex>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ProductList;
