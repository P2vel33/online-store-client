import AdminPanel from "./pages/AdminPanel";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import Device from "./pages/Device";
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  DEVICE_ROUTE,
  SHOP_ROUTE,
  SIGNIN_ROUTE,
  SIGNUP_ROUTE,
} from "./utils/consts";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    element: <AdminPanel />,
  },
  {
    path: BASKET_ROUTE,
    element: <Basket />,
  },
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    element: <Shop />,
  },
  {
    path: SIGNIN_ROUTE,
    element: <Auth />,
  },
  {
    path: SIGNUP_ROUTE,
    element: <Auth />,
  },
  {
    path: DEVICE_ROUTE + "/:id",
    element: <Device />,
  },
];
