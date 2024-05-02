import { useState, useEffect } from "react";
import * as eventsService from '../../utilities/events-service';
import ConcertEventCard from '../../components/ConcertEventCard/ConcertEventCard'
import './ConcertPage.css'
import { states } from '../../data.js'

export default function ConcertPage({ getEvents }) {
    const [concertData, setConcertData] = useState('');
    const [error, setError] = useState('');
    const [parameters, setParameters] = useState({ keyword: '', state: '' })



    function handleChange(evt) {
        const { name, value } = evt.target;
        setParameters({ ...parameters, [name]: value });
        setError('');

    }

    function handleSubmit(evt) {
        evt.preventDefault()
        fetchConcertData()
    }

    async function fetchConcertData() {
        const token = eventsService.getConcertTokenCredentials();
        const keywordAnd = parameters.keyword ? "&keyword=" + parameters.keyword : ''
        const stateAnd = (parameters.state) ? "&stateCode=" + parameters.state : ''   
        const url = `https://app.ticketmaster.com/discovery/v2/events.json?${keywordAnd}${stateAnd}&apikey=`

        // console.log("token:", token, "url:", url);
        try {
            const concertDataRequest = await fetch(`${url}${token}`);
            // console.log("fetch(url, token) in Concert Data Request:", url, token);
            if (!concertDataRequest.ok) {
                throw new Error('Bad request fetching concert data');
            }
            const concertDataResponse = await concertDataRequest.json();
            // console.log("concertDataResponse", concertDataResponse);
            setConcertData(concertDataResponse)
            setParameters({ keyword: '', state: '' })
        } catch (error) {
            console.error('Ayda the Request to Concert Data failed:', error);
            throw error;
        }
    }


    return (
        <>
            <main className="concert-page-main">
                <h1> Concert PAge</h1>

                <form className="ConcertPageBtn" onSubmit={handleSubmit}>
                    <label >keyword:</label>
                    <input name='keyword' value={parameters.keyword} type="text" onChange={handleChange} />
                    <label >state:</label>
                    {/* <input name='state' value={parameters.state} type="text" onChange={handleChange} /> */}
                    <select name="state" id="stateDropdown" size="1" style={{ width: '10%' }} onChange={handleChange}>
                        {/* {console.log(states)} */}
                        {states.map((state) =>
                            <option key={state.code} value={state.code}>{state.name}</option>
                    //    console.log(state.name)
                        )}
                    </select>

                    <button>RELOAD API</button>
                </form>

                <div className="ConcertEventCardContainer">
                    {concertData && concertData._embedded ? (concertData._embedded.events.map((event, idx) =>

                        <ConcertEventCard getEvents={getEvents} key={idx} idx={idx} event={event} />
                    ))
                        : "No data available Ayda, need to press btn"}
                </div>
                <p className="error-message">&nbsp;{error}</p>
            </main >
        </>
    )
}



