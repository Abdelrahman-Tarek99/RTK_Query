import { Card } from "@/components";
import { useGetPostsQuery } from "@/services/jsonPlaceholderApi";
import { Post } from "../PostSlug/Post.types";
import { Link } from "react-router";

export const Home = () => {
  const { data: PostsData, error, isLoading } = useGetPostsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;

  return (
    <div className="grid grid-cols-3 gap-4">
      {PostsData?.map((post: Post) => (
        <Link key={post.id} to={`${post.id}`}>
          <Card title={post.title} body={post.body} />
        </Link>
      ))}
    </div>
  );
};
