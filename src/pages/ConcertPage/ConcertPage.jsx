import { useState, useEffect } from "react";
import * as eventsService from '../../utilities/events-service';
import ConcertEventCard from '../../components/ConcertEventCard/ConcertEventCard'
import { states } from '../../data.js'
import { useLocation } from "react-router-dom";

import SearchIcon from '@mui/icons-material/Search';
import './ConcertPage.css'


export default function ConcertPage({ getEvents, user }) {
    const [concertData, setConcertData] = useState('');
    const [error, setError] = useState('');
    const [parameters, setParameters] = useState({ keyword: '', state: '' })
    const location = useLocation()
    const { category } = location.state || {};


    function handleChange(evt) {
        const { name, value } = evt.target;
        // console.log(name, value)
        setParameters({ ...parameters, [name]: value });
        // console.log(name, value)
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
        // console.log("url:", url);

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
            // console.log("STATE:", parameters.keyword, parameters.state)
        } catch (error) {
            console.error('the Request to Data failed:', error);
            throw error;
        }
    }

    async function fetchOptionalConcertData({ keyword, state }) {
        // console.log("keyword, state", keyword, state)
        const token = eventsService.getConcertTokenCredentials();
        const keywordAnd = keyword ? "&keyword=" + keyword : ''
        const stateAnd = (state) ? "&stateCode=" + state : ''
        const url = `https://app.ticketmaster.com/discovery/v2/events.json?${keywordAnd}${stateAnd}&apikey=`

        // console.log("url:", url);
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
        // console.log(cat)
        fetchOptionalConcertData(cat)
        // setParameters({ keyword: '', state: ""})
        setError('');
    }

    async function fetchOptionalConcertData(cat) {
        const token = eventsService.getConcertTokenCredentials();
        const keywordAnd = cat ? "&keyword=" + cat : ''
        const stateAnd = "&stateCode=ny"
        const url = `https://app.ticketmaster.com/discovery/v2/events.json?${keywordAnd}${stateAnd}&apikey=`

        // console.log("url:", url);
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

                    <form className="search-forms" onSubmit={handleSubmit} key={235} >
                        <SearchIcon />
                        <input require className="search-input-form" name='keyword' value={parameters.keyword} type="text" onChange={handleChange} placeholder="Search Concert..." />
                        <select name="state" className="stateDropdown" onChange={handleChange}   value={parameters.state} >
                            <option key="none" value="" >Select State</option>
                            {states.map((state) =>
                                <option key={state.code} value={state.code}>{state.name}</option>
                            )}
                        </select>
                        <button className="search-form-btn" type="submit">Search</button>
                    </form>
                </div>

                <div className="yelpPage-search-options">
                    <p onClick={() => handleOptionalConcertSearch('concerts')} className="whitespace-pre ">Concerts</p>
                    <p onClick={() => handleOptionalConcertSearch('musicals')} className="whitespace-pre ">Musicals</p>
                    <p onClick={() => handleOptionalConcertSearch('sports')} className="whitespace-pre ">Sports</p>
                    <p onClick={() => handleOptionalConcertSearch('art%20and%20theater')} className="whitespace-pre ">Art and Theater</p>
                    <p onClick={() => handleOptionalConcertSearch('family')} className="whitespace-pre ">Family</p>

                </div>

                <div className="EventCardContainer">
                    {concertData && concertData._embedded ? (concertData._embedded.events.map((event, idx) =>

                        <ConcertEventCard  user={user} getEvents={getEvents} key={idx} idx={idx} event={event} />
                    ))
                        : "What are you interested in viewing today?"}
                </div>
                <p className="error-message">&nbsp;{error}</p>
            </main >
        </>
    )
}
