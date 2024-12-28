import { Card } from "@/components";
import { useGetPostsByIdQuery } from "@/services";
import { useParams } from "react-router";

export const PostSlug = () => {
  const { slug } = useParams();
  const { data: post, error, isLoading } = useGetPostsByIdQuery(Number(slug));
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;
  return <Card title={post?.title} body={post?.body} />;
};
