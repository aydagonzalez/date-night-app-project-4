import { useState, useEffect } from "react";
import * as eventsService from '../../utilities/events-service';
import ConcertEventCard from '../../components/ConcertEventCard/ConcertEventCard'
import './ConcertPage.css'

export default function ConcertPage({ getEvents }) {
    const [concertData, setConcertData] = useState('');
    const [error, setError] = useState('');

    function handleSubmit(evt) {
        evt.preventDefault()
        fetchConcertData()
    }
    async function fetchConcertData() {
        const token = eventsService.getConcertTokenCredentials();
        const url = eventsService.getConcertURLCredentials();
        console.log("token:", token, "url:", url);
        try {
            const concertDataRequest = await fetch(`${url}${token}`);
            console.log("fetch(url, token):", url, token);
            if (!concertDataRequest.ok) {
                throw new Error('Bad request fetching concert data');
            }
            const concertDataResponse = await concertDataRequest.json();
            console.log("concertDataResponse", concertDataResponse);
            setConcertData(concertDataResponse)
        } catch (error) {
            console.error('Ayda the Request to Concert Data failed:', error);
            throw error;
        }
    }


    return (
        <>
            <main className="concert-page-main">
                <h1> Concert PAge</h1>
                <form className="ConcertPageBtnForm" onSubmit={handleSubmit}>
                    <button>RELOAD API</button>
                </form>
                <div className="ConcertEventCardContainer">
                    {concertData ? (concertData._embedded.events.map((event, idx) =>

                        <ConcertEventCard getEvents={getEvents} key={idx} idx={idx} event={event} />
                    ))
                        : "No data available Ayda, need to press btn"}
                </div>
                <p className="error-message">&nbsp;{error}</p>
            </main >
        </>
    )
}