import { createBrowserRouter } from "react-router";
import { Comments, Home, Layout, PaginatedPostsPage, PostSlug } from "@/pages";
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

      {
        path: AppRoutes.pagination,
        element: <PaginatedPostsPage />,
      },

      {
        path: "*",
        element: <div>404</div>,
      },
    ],
  },
]);
