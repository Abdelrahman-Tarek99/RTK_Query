import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { AppRouter } from "./routing/AppRouter.tsx";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { jsonPlaceholderApi } from "./services/jsonPlaceholderApi.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApiProvider api={jsonPlaceholderApi}>
      <RouterProvider router={AppRouter} />
    </ApiProvider>
  </StrictMode>
);
