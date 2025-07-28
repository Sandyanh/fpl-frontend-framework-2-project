import { useRoutes } from "react-router";
import ClientLayout from "./layouts/ClientLayout";
import AdminLayout from "./layouts/AdminLayout";

import ListProduct from "./pages/products/list";
import Homepage from "./pages/home";
import CreateProduct from "./pages/products/create";
import ProductList from "./pages/client/ProductList";

function App() {
  const routes = useRoutes([
    {
      path: "",
      element: <ClientLayout />,
      children: [
        {
          path: "",
          element: <Homepage />,
        },
        {
          path: "san-pham",
          element: <ProductList />,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "products",
          element: <ListProduct />,
        },
        {
          path: "products/create",
          element: <CreateProduct />,
        },
      ],
    },
  ]);

  return <div style={{ width: "100vw" }}>{routes}</div>;
}

export default App;
