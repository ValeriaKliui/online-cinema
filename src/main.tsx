import React from "react";
import ReactDOM from "react-dom/client";
import { Theme } from "@providers/Theme/index";
import { GlobalStyles } from "./styles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "@shared/Layout";
import { PATHS } from "@constants/paths";
import { Provider } from "react-redux";
import { store } from "@store";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: PATHS,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Theme>
        <GlobalStyles />
        <RouterProvider router={router} />
      </Theme>
    </Provider>
  </React.StrictMode>,
);
