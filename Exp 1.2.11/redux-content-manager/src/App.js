import "./App.css";
import PostList from "./components/PostList";

function App() {
  return (
    <div className="App">

      {/* Student Information */}
      <div className="student-info">
        <h3>Name: Shibaji Biswas</h3>
        <h4>UID: 24BAI71018</h4>
      </div>

      <h1>Redux Content Manager</h1>

      <PostList />

    </div>
  );
}

export default App;