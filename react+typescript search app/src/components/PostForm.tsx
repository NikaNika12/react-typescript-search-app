import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/Button/MyButton";
import { IPosts } from "../types/types";

interface CreateProductProps {
  create: (product: IPosts) => void;
}

const PostForm = ({ create }: CreateProductProps) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  const titleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, title: event.target.value });
  };

  const bodyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, body: event.target.value });
  };

  return (
    <form>
      <MyInput
        value={post.title}
        onChange={titleChange}
        type="text"
        placeholder="Post name"
      />
      <MyInput
        value={post.body}
        onChange={bodyChange}
        type="text"
        placeholder="Post description"
      />
      <MyButton onClick={addNewPost}>Create post</MyButton>
    </form>
  );
};

export default PostForm;
