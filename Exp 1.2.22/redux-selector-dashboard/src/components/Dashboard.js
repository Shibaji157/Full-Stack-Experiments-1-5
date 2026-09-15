import { useState } from "react";
import { useSelector } from "react-redux";

import {
  selectPosts,
  totalPosts,
  shortPosts,
  longPosts,
} from "../selectors/selectors";

function Dashboard() {
  const posts = useSelector(selectPosts);

  const total = useSelector(totalPosts);
  const short = useSelector(shortPosts);
  const long = useSelector(longPosts);

  const [search, setSearch] = useState("");

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">

      <input
        type="text"
        placeholder="Search Posts"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="cards">

        <div className="card">
          <h3>Total Posts</h3>
          <p>{total}</p>
        </div>

        <div className="card">
          <h3>Short Posts</h3>
          <p>{short}</p>
        </div>

        <div className="card">
          <h3>Long Posts</h3>
          <p>{long}</p>
        </div>

      </div>

      <h2>Posts</h2>

      {filteredPosts.map((post) => (
        <div key={post.id} className="post">
          {post.title}
        </div>
      ))}

    </div>
  );
}

export default Dashboard;
