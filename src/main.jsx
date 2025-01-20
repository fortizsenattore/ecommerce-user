import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./components/Home.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "../redux/configStore.js";
import { PersistGate } from "redux-persist/integration/react";
import ErrorPage from "./components/ErrorPage.jsx";
import Signup from "./components/Signup.jsx";
import About from "./components/About.jsx";
import Product from "./components/Product.jsx";
import ProductList from "./components/ProductList.jsx";
import Checkout from "./components/Checkout.jsx";
import EmailCheck from "./components/EmailCheck.jsx";
import ChangePassword from "./components/ChangePassword.jsx";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";
import ThankYou from "./components/ThankYou.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RestoreWelcomeModal from "./components/RestoreWelcomeModal.jsx";

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/emailcheck",
    element: <EmailCheck />,
  },
  {
    path: "/new-password",
    element: <ChangePassword />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/thank-you",
    element: <ThankYou />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <ProductList />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
          <RestoreWelcomeModal/>
        </PersistGate>
      </Provider>
    </StrictMode>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={true}
      closeOnClick={true}
      pauseOnHover={false}
      draggable={true}
      progress={undefined}
      theme="dark"
    />
  </>,
);
