import * as ticketMasterService from '../../utilities/users-service';
import { useState } from "react";
import * as eventsAPI from '../../utilities/events-api';

export default function OrderHistoryPage() {
    const [newNote, setNewNote] = useState('');
    const [error, setError] = useState('');

    function handleChange(evt) {
        const { name, value } = evt.target;
        setNewNote({ ...newNote, [name]: value });
        setError('');
    }

    async function handleSearch(evt) {
        evt.preventDefault();
        try {
            // addNote(newNote);
            const search = await eventsAPI.searchEvent()
            // const indexNotes = await notesAPI.indexNotes(newNote)
            // setNewNote({ text: "" });
        } catch {
            setError('Add Note Failed - Try Again');
        }
    }

    return (
        <>
            <h1>OrderHistoryPage</h1>
            <main>
                <div className='NotesPage'>
                    <form className="NewNoteForm" onSubmit={handleSearch}>
                        {/* <label htmlFor="">Note:</label> */}
                        {/* <input name="text" value={newNote.text} onChange={handleChange} type="text" /> */}
                        <button>submit note</button>
                    </form>
                    <p className="error-message">&nbsp;{error}</p>
                </div>
        </main >


        </>

    )
}

