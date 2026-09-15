import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import events from "../data/events";

function CalendarView() {
  const handleEventClick = (info) => {
    alert("Selected Event: " + info.event.title);
  };

  const handleEventDrop = (info) => {
    alert(
      info.event.title +
        " moved to " +
        info.event.start.toDateString()
    );
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      editable={true}
      selectable={true}
      events={events}
      eventClick={handleEventClick}
      eventDrop={handleEventDrop}
      height="auto"
    />
  );
}

export default CalendarView;