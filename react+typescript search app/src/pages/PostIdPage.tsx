import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

interface PostProps {
  id?: number;
  title: string;
}

const PostIdPage = () => {
  const params = useParams<"id">();
  const [post, setPost] = useState({} as PostProps);
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading] = useFetching(async (id: number) => {
    const response = await PostService.getById(id);
    setPost(response);
  });
  const [fetchComments, isComLoading] = useFetching(async (id: number) => {
    const response = await PostService.getCommentsByPostId(id);
    setComments(response);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, []);

  return (
    <div>
      <h1>Post page</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {post.id}. {post.title}
        </div>
      )}
      <h1>Comments</h1>
      {isComLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map((comm: any) => (
            <div key={comm.id} style={{ marginTop: 15 }}>
              <h5>{comm.email}</h5>
              <div>{comm.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostIdPage;
