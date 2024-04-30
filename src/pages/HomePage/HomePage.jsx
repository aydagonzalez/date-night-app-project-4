import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import * as eventsAPI from '../../utilities/events-api';
import './HomePage.css'
// import EventTicketMasterCard from '../../components/EventTicketMasterCard/EventTicketMasterCard'

export default function HomePage({ getEvents }) {
    const [error, setError] = useState('');
    // const [events, setEvents] = useState([]);

    // async function getEvents() {
    //     const allEventsIndex = await eventsAPI.indexEvents()
    //     console.log("ALL Events:", allEventsIndex)
    //     // notesRef.current = [(newNote.map(note => note.text))];
    //     setEvents(allEventsIndex)
    // }



    return (
        <main className="MainHomePage" >
            <div className="">
            <Link to="/events/restaurants"><h1>REST</h1></Link>
            </div>
            <div className="">
                <h1>Div 2</h1>
            </div>
            <div className="">
            <Link to="/events/concerts"><h1>CON</h1></Link>
            </div>
        </main>


    )
}