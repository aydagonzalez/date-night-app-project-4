import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import * as eventsAPI from '../../utilities/events-api';
import './HomePage.css'
import CarouselYelp from '../../components/CarouselYelp/CarouselYelp'



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
            <div className="yelp-container-home-page">
            <Link to="/yelp"><h1>YELP</h1></Link>
            {/* <CarouselYelp /> */}
            </div>
            {/* <div className="">
                <h1>Div 2</h1>
            </div> */}
            <div className="concert-container-home-page">
            <Link to="/events/concerts"><h1>CON</h1></Link>
            </div>
        </main>


    )
}