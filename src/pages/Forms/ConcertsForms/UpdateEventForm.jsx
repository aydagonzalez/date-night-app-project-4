
import { useState } from "react";
import * as eventsAPI from '../../../utilities/events-api';
// import /"./Forms.css"


export default function UpdateEventForm({ idx, id, getEvents, event }) {
    // console.log("ID:",id)

    const [edit, setEdit] = useState(false);
    const [error, setError] = useState('');
    const [statusFormValues, setStatusFormValues] = useState('');

    function handleEdit() {
        setEdit(true);
    }

    function handleCancelEdit() {
        setEdit(false);
    }

    function handleChange(evt) {
        const { name, value } = evt.target;
        setStatusFormValues(prev => ({ ...prev, [name]: value }));
        setError('');
    }

    function handleClick(evt) {
        handleUpdateNote(evt)
    }


    async function handleUpdateNote(evt) {
        evt.preventDefault();
        try {
            console.log(statusFormValues)
            const statusUpdate = statusFormValues
            const updateEvent = await eventsAPI.updateEvent({ id, statusUpdate })
            console.log("updateEvent", updateEvent)
            getEvents()
            setEdit(false);

        } catch (error) {
            console.log(error)
            setError('Update Note Failed - Try Again');
        }
    }

    return (
        <div>
            <button style={{ visibility: !edit ? 'visible' : 'hidden' }} onClick={handleEdit} >Update Event</button>
            <div className=" UpdateNoteForm-forms">
                <form onSubmit={handleUpdateNote} >
                    <label style={{ visibility: edit ? 'visible' : 'hidden' }}>Status:</label>

                    <select name="status" value={statusFormValues} onChange={handleChange}
                        style={{ visibility: edit ? 'visible' : 'hidden' }}>

                        <option value="Not Yet Visited">Not Yet Visited</option>
                        <option value="Visited- Loved It">Visited- Loved It</option>
                        <option value="Visited- Never want to go again">Visited- Never want to go again</option>
                    </select>
                    <button className="btn" onClick={handleClick}
                        style={{ visibility: edit ? 'visible' : 'hidden' }}
                    >submit note</button>
                </form>
                <button
                    style={{ visibility: edit ? 'visible' : 'hidden' }}
                    onClick={handleCancelEdit} > Cancel</button>
                <p className="error-message">&nbsp;{error}</p>
            </div>
        </div>

    )
}

