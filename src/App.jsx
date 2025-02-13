import { createBrowserRouter, RouterProvider } from "react-router";

// Layouts
import DashboardLayout from "./layouts/Dashboard";

// Pages
import HomePage from "./pages/Home";
import InventoryPage from "./pages/Inventory";
import AccountPage from "./pages/Account";
import WalletPage from "./pages/Wallet";
import RolesPage from "./pages/Roles";
import MintPage from "./pages/Mint";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    index: true,
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <InventoryPage /> },
      { path: "account", element: <AccountPage /> },
      { path: "wallet", element: <WalletPage /> },
      { path: "roles", element: <RolesPage /> },
      { path: "mint", element: <MintPage /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
