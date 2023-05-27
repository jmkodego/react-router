import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/jsx/Home";
import ProductsPage from "./pages/jsx/Products";
import ProductDetailPage from "./pages/jsx/ProductDetail";
import RootLayout from "./pages/jsx/Root";
import ErrorPage from "./pages/jsx/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
      { path: "/products/:id", element: <ProductDetailPage /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
