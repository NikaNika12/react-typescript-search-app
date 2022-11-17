import React from "react";
import MyButton from "./UI/Button/MyButton";
import { useNavigate } from "react-router-dom";

interface IPosts extends ItemProps {
  remove(post: any): unknown;
  post: any;
  id: number;
}

interface ItemProps {
  number: number;
}

const PostItem = (props: IPosts) => {
  const router = useNavigate();

  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.number}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => router(`/posts/${props.post.id}`)}>
          Open
        </MyButton>
        <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
