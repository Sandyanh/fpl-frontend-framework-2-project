import { useRoutes } from "react-router";
import ClientLayout from "./layouts/ClientLayout";
import AdminLayout from "./layouts/AdminLayout";
import ProductList from "./pages/client/ProductList";
import ProductDetail from "./pages/client/ProductDetail";
import NotFound from "./pages/client/NotFound";
import HomePage from "./pages/client/HomePage";
import ListProduct from "./pages/admin/ProductManager.jsx/ListProduct";
import AddProduct from "./pages/admin/ProductManager.jsx/AddProduct";
import EditProduct from "./pages/admin/ProductManager.jsx/EditProduct";
import Register from "./pages/admin/auth/Register";
import Login from "./pages/admin/auth/Login";

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
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
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
          path: "products/add",
          element: <AddProduct />,
        },
        {
          path: "products/edit/:id",
          element: <EditProduct />,
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
