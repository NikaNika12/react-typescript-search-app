import React from "react";
import { IPosts } from "../pages/Posts";
import PostItem from "./PostItem";

interface ListProps {
  posts: any;
  title: string;
  remove: any;
}

const PostList = ({ posts, title, remove }: ListProps) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>Posts are not found!</h1>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <div>
        {posts.map((post: any, index: number) => (
          <div key={post.id} className="post">
            <PostItem remove={remove} number={index + 1} post={post} id={0} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
