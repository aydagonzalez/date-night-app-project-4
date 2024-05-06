import { useState, useEffect } from "react";
import * as eventsService from '../../utilities/events-service';
import ConcertEventCard from '../../components/ConcertEventCard/ConcertEventCard'
import { states } from '../../data.js'

import SearchIcon from '@mui/icons-material/Search';
import './ConcertPage.css'


export default function ConcertPage({ getEvents }) {
    const [concertData, setConcertData] = useState('');
    const [error, setError] = useState('');
    const [parameters, setParameters] = useState({ keyword: '', state: '' })



    function handleChange(evt) {
        const { name, value } = evt.target;
        console.log(name, value)
        setParameters({ ...parameters, [name]: value });
        console.log(name, value)
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

        console.log("url:", url);
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
            console.error('the Request to Data failed:', error);
            throw error;
        }
    }

    function handleOptionalConcertSearch(cat) {
        // const newParams = { keyword: cat}
        console.log(cat)
        // console.log(parameters.keyword, parameters.state)
        fetchOptionalConcertData(cat)
        // setParameters({ keyword: '', state: ""})
        setError('');
    }


    async function fetchOptionalConcertData(cat ) {
        const token = eventsService.getConcertTokenCredentials();
        const keywordAnd = cat ? "&keyword=" + cat : ''
        const stateAnd = "&stateCode=ny"
        const url = `https://app.ticketmaster.com/discovery/v2/events.json?${keywordAnd}${stateAnd}&apikey=`

        console.log("url:", url);
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
            console.error('the Request to Data failed:', error);
            throw error;
        }
    }

    return (
        <>
            <main className="event-page-main">
     
                <div className="search-btn-form-container">

                    <form className="search-forms" onSubmit={handleSubmit}  >
                    <SearchIcon />
                        <input require className="search-input-form" name='keyword' value={parameters.keyword} type="text" onChange={handleChange} placeholder="Search Concert..." />
                        <select name="state" className="stateDropdown" onChange={handleChange} >
                            <option key="none" value="" >State</option>
                            {states.map((state) =>
                                <option key={state.code} value={state.code}>{state.name}</option>
                            )}
                        </select>
                        <button className="search-form-btn" type="submit">Search</button>
                    </form>
                </div>

                <div className="yelpPage-search-options">
                    {/* <form className="search-forms" onSubmit={handleSubmit}> */}
                        <p onClick={() => handleOptionalConcertSearch('concerts')} class="whitespace-pre ">Concerts</p>
                        <p onClick={() => handleOptionalConcertSearch('musicals')} class="whitespace-pre ">Musicals</p>
                        <p onClick={() => handleOptionalConcertSearch('sports')} class="whitespace-pre ">Sports</p>
                        <p onClick={() => handleOptionalConcertSearch('art%20and%20theater')} class="whitespace-pre ">Art and Theater</p>
                        <p onClick={() => handleOptionalConcertSearch('family')} class="whitespace-pre ">Family</p>
                        {/* <p onClick={() => handleOptionalConcertSear ch('Technology')} class="whitespace-pre ">Technology</p> */}
                        {/* <p onClick={() => handleOptionalConcertSearch('Art and Culture')} class="whitespace-pre ">Art and Culture</p> */}
                    {/* </form> */}
                </div>

                <div className="EventCardContainer">
                    {concertData && concertData._embedded ? (concertData._embedded.events.map((event, idx) =>

                        <ConcertEventCard getEvents={getEvents} key={idx} idx={idx} event={event} />
                    ))
                        : "What are you interested in viewing today?"}
                </div>
                <p className="error-message">&nbsp;{error}</p>
            </main >
        </>
    )
}
