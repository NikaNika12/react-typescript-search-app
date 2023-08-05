import React, { useEffect, useRef, useState } from "react";
import PostService from "../API/PostService";
import { usePosts } from "../hooks/usePosts";
import { useFetching } from "../hooks/useFetching";
import { getPageCount, getPagesArray } from "../utils/pages";
import MyButton from "../components/UI/Button/MyButton";
import PostForm from "../components/PostForm";
import MyModal from "../components/UI/MyModal/MyModal";
import PostFilter from "../components/PostFilter";
import PostList from "../components/PostList";
import Loader from "../components/UI/Loader/Loader";
import Pagination from "../components/UI/Pagination/Pagination";
import MySelect from "../components/UI/Select/MySelect";

export interface IPosts {
  id: number;
  title: string;
  body: string;
}

function Posts() {
  const [posts, setPosts] = useState<IPosts[]>([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async (limit: string, page: string) => {
      const response = await PostService.getAll(limit, page);
      setPosts(response);
      setTotalPages(getPageCount(+limit));
    }
  );

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

  const createPost = (newPost: IPosts) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post: { id: number }) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page: React.SetStateAction<number>) => {
    setPage(page);
  };

  return (
    <div className="App">
      <MyButton onClick={() => setModal(true)}>Create post</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <MySelect
        value={limit}
        onChange={(value) => setLimit(+value)}
        defaultValue="Posts by page"
        options={[
          { value: 5, name: "5" },
          { value: 10, name: "10" },
          { value: 25, name: "25" },
          { value: -1, name: "Show all" },
        ]}
      />
      {postError && <h1>Произошла ошибка ${postError}</h1>}
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Posts"
      />
      <div/>
      {isPostsLoading && (
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
        >
          <Loader />
        </div>
      )}
      <Pagination 
        page={page} 
        changePage={changePage} 
        totalPages={totalPages} 
      />
    </div>
  );
}

export default Posts;
