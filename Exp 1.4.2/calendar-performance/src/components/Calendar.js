import React, { memo } from "react";

function Calendar({ events, onEventClick }) {
  return (
    <div className="calendar">
      <h2>📅 Post Calendar</h2>

      {events.length === 0 ? (
        <p>No events found.</p>
      ) : (
        events.map((event) => (
          <div
            className="event-card"
            key={event.id}
            onClick={() => onEventClick(event)}
          >
            {event.title}
          </div>
        ))
      )}
    </div>
  );
}

export default memo(Calendar);