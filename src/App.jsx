import { useRoutes } from "react-router";
import ClientLayout from "./layouts/ClientLayout";
import AdminLayout from "./layouts/AdminLayout";

import ListProduct from "./pages/products/list";
import CreateProduct from "./pages/products/create";
import ProductList from "./pages/client/ProductList";
import ProductDetail from "./pages/client/ProductDetail";
import NotFound from "./pages/client/NotFound";
import HomePage from "./pages/client/HomePage";

function App() {
  const routes = useRoutes([
    {
      path: "",
      element: <ClientLayout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "san-pham",
          element: <ProductList />,
        },
        {
          path: "san-pham/:id",
          element: <ProductDetail />,
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
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <>{routes}</>;
}

export default App;
