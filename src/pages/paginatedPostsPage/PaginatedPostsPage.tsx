import { Card, Pagination } from "@/components";
import { useGetPostsDummyJsonQuery } from "@/services";
import { Post } from "../PostSlug/Post.types";
import { useState } from "react";

export const PaginatedPostsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const {
    data: PostsData,
    error,
    isLoading,
  } = useGetPostsDummyJsonQuery({
    limit: itemsPerPage,
    skip: (currentPage - 1) * itemsPerPage,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;

  return (
    <>
      <div className="grid grid-cols-4 gap-4 items-stretch place-items-center">
        {PostsData?.posts.map((post: Post) => (
          <Card
            title={post.title}
            body={post.body}
            className="flex flex-col h-[80%] items-center justify-between"
          />
        ))}
      </div>
      <div className="flex justify-center items-center py-8">
        <Pagination
          totalItems={70}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
          onItemsPerPageChange={setItemsPerPage}
        />
      </div>
    </>
  );
};
