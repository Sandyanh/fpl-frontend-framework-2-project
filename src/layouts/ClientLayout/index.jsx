import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import HeaderClient from "./HeaderClient";
import FooterClient from "./FooterClient";
const { Footer, Content } = Layout;
import styles from "./index.module.css";

const ClientLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <header className={styles.headerClient}>
        <HeaderClient />
      </header>
      <Content style={{ margin: "16px", padding: 24, background: "#fff" }}>
        <Outlet />
      </Content>
      <Footer
        style={{ background: "#fff", padding: "0 20px", textAlign: "center" }}
      >
        <FooterClient />
      </Footer>
    </Layout>
  );
};

export default ClientLayout;
