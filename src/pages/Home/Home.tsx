import { Card } from "@/components";
import { useGetPostsQuery } from "@/services/jsonPlaceholderApi";
import { Post } from "../PostSlug/Post.types";

export const Home = () => {
  const { data: PostsData, error, isLoading } = useGetPostsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;

  console.log(PostsData);

  return (
    <div className="grid grid-cols-3 gap-4">
      {PostsData?.map((post: Post) => (
        <Card key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
};
