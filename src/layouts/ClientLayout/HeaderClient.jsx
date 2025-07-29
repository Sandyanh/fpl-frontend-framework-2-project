import { Menu } from "antd";
import logoPCV from "@assets/images/pcv-logo.png";
import styles from "./index.module.css";

import {
  BaiduOutlined,
  FileTextOutlined,
  HomeOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const HeaderClient = () => {
  const navigate = useNavigate();
  const items = [
    {
      label: <span onClick={() => navigate("/")}>Home</span>,
      key: "trang-chu",
      icon: <HomeOutlined />,
    },
    {
      label: <span onClick={() => navigate("/gioi-thieu")}>About Us</span>,
      key: "gioi-thieu",
      icon: <FileTextOutlined />,
    },
    {
      label: <span onClick={() => navigate("/san-pham")}>Product</span>,
      key: "san-pham",
      icon: <BaiduOutlined />,
    },
    {
      label: "News",
      key: "tin-tuc",
      icon: <MailOutlined />,
    },
    {
      label: "Contact Us",
      key: "lien-he",
      icon: <PhoneOutlined />,
    },
  ];

  return (
    <>
      <div>
        <a href="/">
          <img src={logoPCV} alt="PCV Logo" width={97} height={45} />
        </a>
      </div>
      <Menu mode="horizontal" items={items} className={styles.menuClient} />
    </>
  );
};

export default HeaderClient;
