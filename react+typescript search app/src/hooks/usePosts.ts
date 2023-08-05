import { useMemo } from "react";
import { IPosts } from "../types/types";

export const useSortedPosts = (posts: any, sort: string) => {
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [sort, posts]);

  return sortedPosts;
};

export const usePosts = (posts: IPosts[], sort: string, query: string) => {
  const sortedPosts = useSortedPosts(posts, sort);

  const sortedAndSearchedPosts = useMemo(
    () =>
      sortedPosts.filter((post: { title: string }) =>
        post.title.toLowerCase().includes(query.toLowerCase())
      ),
    [query, sortedPosts]
  );

  return sortedAndSearchedPosts;
};
