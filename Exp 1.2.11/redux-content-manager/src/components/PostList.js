import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addPost,
  updatePost,
  deletePost,
} from "../store/postsSlice";

function PostList() {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);

  const handleSubmit = () => {
    if (text.trim() === "") return;

    if (editId) {
      dispatch(
        updatePost({
          id: editId,
          title: text,
        })
      );
      setEditId(null);
    } else {
      dispatch(
        addPost({
          id: Date.now(),
          title: text,
        })
      );
    }

    setText("");
  };

  const handleEdit = (post) => {
    setText(post.title);
    setEditId(post.id);
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Enter Post Title"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleSubmit}>
        {editId ? "Update Post" : "Add Post"}
      </button>

      {posts.map((post) => (
        <div key={post.id} className="card">
          <h3>{post.title}</h3>

          <button onClick={() => handleEdit(post)}>
            Edit
          </button>

          <button
            onClick={() =>
              dispatch(deletePost(post.id))
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default PostList;
