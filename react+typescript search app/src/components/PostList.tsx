import React from "react";
import { IPosts } from "../pages/Posts";
import PostItem from "./PostItem";
import { CSSTransition, TransitionGroup, } from 'react-transition-group';

interface ListProps {
  posts: IPosts[];
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
      <TransitionGroup>
        {posts.map((post: IPosts, index: number) => (
          <CSSTransition
            key={post.id}
            timeout={500}
            className="post"
          >
            <PostItem 
              remove={remove} 
              number={index + 1} 
              post={post} 
              id={0} 
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
