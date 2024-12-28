// src/components/Navbar.tsx
import { AppRoutes } from "@/routing/AppRoutes";
import React from "react";
import { Link, Outlet } from "react-router";

export const Layout: React.FC = () => {
  return (
    <>
      <nav className="bg-gray-800 text-white p-4 fixed top-0 left-0 right-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-4">
            <Link
              to={AppRoutes.home}
              className="px-4 py-2 hover:bg-gray-700 rounded"
            >
              Home
            </Link>
            <Link
              to={AppRoutes.comments}
              className="px-4 py-2 hover:bg-gray-700 rounded"
            >
              Comments
            </Link>
            <Link
              to={AppRoutes.pagination}
              className="px-4 py-2 hover:bg-gray-700 rounded"
            >
              Paginated Posts
            </Link>
            <Link
              to={AppRoutes.postEntry}
              className="px-4 py-2 hover:bg-gray-700 rounded"
            >
              Enter Posts
            </Link>
          </div>
        </div>
      </nav>
      <div className=" container mx-auto mt-20">
        <Outlet />
      </div>
    </>
  );
};
