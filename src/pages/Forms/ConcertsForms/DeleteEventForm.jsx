
import { useState } from "react";
import * as eventsAPI from '../../../utilities/events-api';

export default function DeleteEventForm({ idx, id, getEvents }) {
    // console.log("ID:",id)git remo
    const [deleteEvent, setDeleteEvent] = useState('');
    const [error, setError] = useState('');

    async function handleDeleteEvent(evt) {
        evt.preventDefault();
        try {
            const deleteEvent = await eventsAPI.deleteYelpEvent(id)
            console.log('Delete response:', deleteEvent);
            getEvents()
        } catch {
            setError('Delete Event Failed - Ayda Try Again');
        }
    }

    return (
        <div className='DeleteEventForm'>
            <form className="DeleteEventForm" onSubmit={handleDeleteEvent}>
                <button>Delete Event</button>
            </form>
            <p className="error-message">&nbsp;{error}</p>
        </div>

    )
}

