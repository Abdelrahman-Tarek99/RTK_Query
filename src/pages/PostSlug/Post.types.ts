export interface PostSlugParams {
  slug: string;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
