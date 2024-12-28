import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Reaction {
  likes: number;
  dislikes: number;
}

interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: Reaction;
  views: number;
  userId: number;
}

interface PostsResponse {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}
export const dummyJsonApi = createApi({
  reducerPath: "dummyJsonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),
  refetchOnFocus: true,
  endpoints: (builder) => ({
    getPostsDummyJson: builder.query<
      PostsResponse,
      { limit: number; skip: number }
    >({
      query: ({ limit, skip }) => `posts?limit=${limit}&skip=${skip}`,
    }),
  }),
});
export const { useGetPostsDummyJsonQuery } = dummyJsonApi;
