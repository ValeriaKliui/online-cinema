import React from "react";
import ReactDOM from "react-dom/client";
import { Theme } from "@providers/Theme/index.tsx";
import { GlobalStyles } from "./styles.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "@shared/Layout/index.tsx";
import { PATHS } from "@constants/paths.tsx";
import { Provider } from "react-redux";
import { store } from "@store/index.ts";

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
