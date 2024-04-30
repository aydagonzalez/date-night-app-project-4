import * as eventsAPI from '../../utilities/events-api';
import DeleteEventForm from "../../pages/Forms/DeleteEventForm";
import UpdateEventForm from "../../pages/Forms/UpdateEventForm";
import { useState, useEffect } from "react";

export default function SavedEvents({ getEvents, events, setEvents }) {
    const event = events.map((e, idx) =>
        <div className="NoteListItem-note" key={idx * 5} >
            <h3>
                {e.name}
                {e.imageUrl}
                {e.venue}
                {e.venueLocation}
                {new Date(e.eventDate).toLocaleDateString()}&nbsp;
                {new Date(e.eventDate).toLocaleTimeString()} <br />
                {e.timezone} <br />
                {e.accessibility} <br />
                {e.status}
            </h3>

            <div className="Update-DeleteNoteForms">
                <DeleteEventForm id={e._id} key={idx+11} getEvents={getEvents}  />
                <UpdateEventForm id={e._id} key={idx+12}  getEvents={getEvents} setEvents={setEvents} event={e} />
            </div>

        </div>
    );
    return (
        <div>
            <h1>Saved Page</h1>
            {event}

        </div>
    )
}