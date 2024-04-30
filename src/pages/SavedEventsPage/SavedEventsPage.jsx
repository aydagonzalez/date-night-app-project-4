import * as eventsAPI from '../../utilities/events-api';
import DeleteEventForm from "../../pages/Forms/DeleteEventForm";
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
                {e.timezone}
                {e.accessibility}
            </h3>

            <div className="Update-DeleteNoteForms">
                <DeleteEventForm id={e._id} key={idx+11} getEvents={getEvents}  />
                {/* <UpdateNoteForm note={note} key={idx+12} id={note._id} addNote={addNote} setNotes={setNotes} getNotes={getNotes} /> */}
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