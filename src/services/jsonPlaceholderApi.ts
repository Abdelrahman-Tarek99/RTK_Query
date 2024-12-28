import { CommentsInterface } from "@/pages";
import { Post } from "@/pages/PostSlug/Post.types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jsonPlaceholderApi = createApi({
  reducerPath: "jsonPlaceholderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  refetchOnFocus: true,
  endpoints: (builder) => ({
    // Query to fetch posts
    getPosts: builder.query<Post[], void>({ query: () => `posts/` }),
    getPostsById: builder.query({
      query: (id: number) => `posts/${id}`,
    }),
    getComments: builder.query<CommentsInterface[], void>({
      query: () => `comments`,
    }),
    createPosts: builder.mutation({
      query: (newPost) => ({
        url: "posts",
        method: "POST",
        body: newPost,
      }),
    }),
  }),
});

export const {
  useGetPostsQuery,
  useCreatePostsMutation,
  useGetPostsByIdQuery,
  useGetCommentsQuery,
} = jsonPlaceholderApi;
