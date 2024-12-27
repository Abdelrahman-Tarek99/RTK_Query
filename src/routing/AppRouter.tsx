import { createBrowserRouter } from "react-router";
import { Comments, Home, Layout, PostSlug } from "@/pages";
import { AppRoutes } from "./AppRoutes";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: AppRoutes.home,
        element: <Home />,
      },
      {
        path: AppRoutes.comments,
        element: <Comments />,
      },
      {
        path: AppRoutes.postSlug,
        element: <PostSlug />,
      },
    ],
  },
]);
