import { Button, Col, Row } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";

const FooterClient = () => {
  return (
    <>
      <Row>
        <Col span={8}>
          <div style={{ fontWeight: "bolder" }}>PERFECT COMPANION VIETNAM</div>
          <div>Head Office:</div>
          <div>
            3rd Floor, No. 92 Yen The Street, Tan Son Hoa Ward, Ho Chi Minh City
          </div>
          <div>infor@perfectcompanion.com.vn</div>
          <div>Tel: 028.3844.7470</div>
        </Col>
        <Col span={8}>
          <div style={{ fontWeight: "bolder" }}>Policies & Regulations</div>
          <div>Payment Methods</div>
          <div>Privacy Policy</div>
          <div>Return & Exchange Policy</div>
        </Col>
        <Col span={8}>
          <div style={{ fontWeight: "bolder" }}>
            Sign up to get the latest updates and exclusive offers from PERFECT
            COMPANION VIETNAM.
          </div>
          <TextArea
            placeholder="Email"
            autoSize
          />
          <Button type="primary" style={{background: "#ffa201", fontWeight: "bolder"}}>Send Now</Button>
        </Col>
      </Row>
    </>
  );
};

export default FooterClient;
