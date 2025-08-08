import React from "react";
import ProductList from "./ProductList";
import bannerPCV from "@assets/images/banner-pcv.jpg";
import bannerDog from "@assets/images/banner-website-10-1.png.webp";
import bannerCat from "@assets/images/banner-website-11.png.webp";
import { Button, Card, Col, Row, Typography } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

const cardStyle = {
  height: "calc(100vh - 150px)",
};

const HomePage = () => {
  return (
    <>
      <div
        style={{
          maxWidth: "100vw",
        }}
      >
        <img src={bannerPCV} alt="Banner PCV" width={"100%"} />
      </div>
      <Card
        hoverable
        style={cardStyle}
        styles={{
          body: { padding: 0, overflow: "hidden", background: "#d3daff" },
        }}
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
              src={bannerDog}
              style={{ objectFit: "contain" }}
              width={400}
              height={400}
            />
          </Col>
          <Col span={12}>
            <Typography.Title level={3}>DOG FOOD</Typography.Title>
            <Typography.Paragraph>
              Every dog deserves to be nourished with high-quality food. They
              are loyal companions and a source of motivation that helps us
              become better every day. Nutritious and delicious meals, along
              with a loving home, provide the best foundation for a dog’s
              overall development.
            </Typography.Paragraph>
            <Button type="primary" danger>
              View All
            </Button>
          </Col>
        </Row>
      </Card>
      <Card
        hoverable
        style={cardStyle}
        styles={{
          body: { padding: 0, overflow: "hidden", background: "#fbe32fff" },
        }}
      >
        <Row gutter={[24, 24]} style={{ margin: "30px" }}>
          <Col span={12}>
            <Typography.Title level={3}>CAT FOOD</Typography.Title>
            <Typography.Paragraph>
              The “royal highness” or “little princess” meow-meow may be quiet,
              but they silently bring positive energy and soothe the soul of
              those who care for them. These fur babies love to be petted,
              cuddled, and are passionate about flavorful, nutritious, and
              delicious meals. As a wise pet parent, choose the right dishes
              your cat loves so that every mealtime is exciting and never
              boring.
            </Typography.Paragraph>
            <Button type="primary" danger>
              View All
            </Button>
          </Col>
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
              src={bannerCat}
              style={{ objectFit: "contain" }}
              width={400}
              height={400}
            />
          </Col>
        </Row>
      </Card>
      {/* <ProductList /> */}
    </>
  );
};

export default HomePage;
