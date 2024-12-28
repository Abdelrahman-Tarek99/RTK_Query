import { useGetCommentsQuery } from "@/services";

export const Comments = () => {
  const { data, error, isLoading } = useGetCommentsQuery();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;
  return (
    <div className="space-y-4">
      {data?.map((comment) => (
        <div
          key={comment.id}
          className="p-4 border border-gray-300 rounded-md mx-2 hover:shadow-md
          transition duration-300 ease-in-out"
        >
          <h3 className="text-lg font-semibold text-gray-800">
            {comment.name}
          </h3>
          <p className="mt-2 text-gray-600">{comment.body}</p>
        </div>
      ))}
    </div>
  );
};
