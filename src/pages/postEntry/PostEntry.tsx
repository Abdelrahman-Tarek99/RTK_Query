import { useCreatePostsMutation } from "@/services";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export const PostEntry = () => {
  const [createPost, { isSuccess, isError }] = useCreatePostsMutation();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !body) {
      toast.error("Please fill in all the fields");
      return;
    }
    await createPost(PostEntry);
  };
  useEffect(() => {
    if (isSuccess) {
      toast.success("Post created successfully");
    }
    if (isError) {
      toast.error("Failed to create post");
    }
  }, [isSuccess, isError]);
  return (
    <div className="p-4">
      <ToastContainer />
      <form onSubmit={handleCreatePost} className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="body"
            className="block text-sm font-medium text-gray-700"
          >
            Body
          </label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            rows={4}
          />
        </div>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
