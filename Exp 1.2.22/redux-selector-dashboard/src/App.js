import "./App.css";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">

      {/* Student Details */}
      <div className="student-info">
        <h3>Shibaji Biswas</h3>
        <p>UID: 24BAI71018</p>
      </div>

      <h1>Redux Selector Dashboard</h1>

      <Dashboard />

    </div>
  );
}

export default App;