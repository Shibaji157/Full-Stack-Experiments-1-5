import { useState, useMemo, useCallback } from "react";
import Calendar from "./components/Calendar";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  const events = [
    { id: 1, title: "React Workshop" },
    { id: 2, title: "Redux Seminar" },
    { id: 3, title: "Machine Learning" },
    { id: 4, title: "JavaScript Basics" },
  ];

  const filteredEvents = useMemo(() => {
    return events.filter((event) =>
      event.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const handleEventClick = useCallback((event) => {
    alert(event.title);
  }, []);

  return (
  <div className="App">

    {/* Student Details */}
    <div className="student-info">
      <h3>Name: Shibaji Biswas</h3>
      <h3>UID: 24BAI71018</h3>
    </div>

    <h1>🚀 Calendar Performance Optimizer</h1>

    <input
      type="text"
      placeholder="Search Event..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />

    <Calendar
      events={filteredEvents}
      onEventClick={handleEventClick}
    />
  </div>
  );
  }

  export default App;