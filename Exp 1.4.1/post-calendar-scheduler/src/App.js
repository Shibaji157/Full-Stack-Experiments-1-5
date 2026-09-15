import "./App.css";
import CalendarView from "./components/CalendarView";

function App() {
  return (
    <div className="App">

      {/* Student Details */}
      <div className="student-info">
        <h3>Name: Shibaji Biswas</h3>
        <h3>UID: 24BAI71018</h3>
      </div>

      <h1>📅 Interactive Calendar Scheduler</h1>

      <CalendarView />

    </div>
  );
}

export default App;