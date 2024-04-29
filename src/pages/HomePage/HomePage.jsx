
import { useState, useEffect } from "react";
import './HomePage.css'
// import EventTicketMasterCard from '../../components/EventTicketMasterCard/EventTicketMasterCard'

export default function HomePage() {
    const [error, setError] = useState('');
    const [eventsFromTM, setEventsFromTM] = useState('');

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