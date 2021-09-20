import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../Post/Post";
import { morePosts } from "../../Slices/rootSlice";
import "./PostList.css";

const PostList = () => {
  const posts = useSelector((state) => state.posts);
  const numOfPosts = useSelector((state) => state.numOfPosts);
  const searchValue = useSelector((state) => state.searchValue);
  const dispatch = useDispatch();
  console.log(searchValue);

  return (
    <div>
      {posts
        .filter((post) => {
          return post.name.toLowerCase().includes(searchValue.toLowerCase());
        })
        .map((post, index) => {
          if (index < numOfPosts) {
            return <Post post={post} />;
          } else {
            return null;
          }
        })}
      <div className="moreBtn">
        <button
          onClick={() => {
            dispatch(morePosts());
          }}
          type="button"
          class="btn btn-info"
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default PostList;
