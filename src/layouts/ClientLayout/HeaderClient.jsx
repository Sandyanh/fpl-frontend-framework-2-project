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

const HeaderClient = () => {
  const items = [
    {
      label: "Trang chủ",
      key: "trang-chu",
      icon: <HomeOutlined />,
    },
    {
      label: "Giới thiệu",
      key: "gioi-thieu",
      icon: <FileTextOutlined />,
    },
    {
      label: "Sản phẩm",
      key: "san-pham",
      icon: <BaiduOutlined />,
      children: [
        {
          type: "group",
          label: "Item 1",
          children: [
            { label: "Option 1", key: "setting:1" },
            { label: "Option 2", key: "setting:2" },
          ],
        },
        {
          type: "group",
          label: "Item 2",
          children: [
            { label: "Option 3", key: "setting:3" },
            { label: "Option 4", key: "setting:4" },
          ],
        },
      ],
    },
    {
      label: "Tin tức",
      key: "tin-tuc",
      icon: <MailOutlined />,
    },
    {
      label: "Liên hệ",
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
