import * as ticketMasterService from '../../utilities/users-service';
import { useState, useEffect } from "react";
import * as eventsAPI from '../../utilities/events-api';
import * as eventsService from '../../utilities/events-service';
import EventTicketMasterCard from '../../components/EventTicketMasterCard/EventTicketMasterCard'

export default function OrderHistoryPage() {
    const [error, setError] = useState('');
    const [eventsFromTM, setEventsFromTM] = useState('');

    useEffect(function () {
        async function fetchDataTM() {
            const token = eventsService.getToken();
            console.log("token:", token);
            const url = eventsService.getURLTM();
            console.log("token:", url);
            try {
                const response = await fetch(`${url}${token}`);
                console.log("fetch(url, options):", url);
                if (!response.ok) {
                    throw new Error('Bad request fetching');
                }
                const ticketMasterData = await response.json();
                console.log("RES", ticketMasterData);
                setEventsFromTM(ticketMasterData)
            } catch (error) {
                console.error('Request to Ticket Master failed:', error);
                throw error;
            }
        }
        fetchDataTM();
    }, []);


    async function handleSearch(evt) {
        evt.preventDefault();
        try {
            // addNote(newNote);
            OrderHistoryPage()
        } catch {
            setError('Add Note Failed - Try Again');
        }
    }

    return (
        <>
            <h1>OrderHistoryPage</h1>
            {/* <h1> HELLO: {JSON.stringify(eventsFromTM._embedded.events) } </h1> */}
            <h1> HELLO: 

            {eventsFromTM ? eventsFromTM._embedded.events.map((event, idx) => (
                    <EventTicketMasterCard key={idx} event={event} />
                )) : <p>Loading data...</p>}
                
             </h1>
     
    
            <div>
                {eventsFromTM ? <pre>{JSON.stringify(eventsFromTM, null, 2)}</pre> : <p>Loading data...</p>}
            </div>

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

