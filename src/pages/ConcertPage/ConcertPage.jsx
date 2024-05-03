import { useState, useEffect } from "react";
import * as eventsService from '../../utilities/events-service';
import ConcertEventCard from '../../components/ConcertEventCard/ConcertEventCard'
import { states } from '../../data.js'
import Box from '@mui/joy/Box';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel'
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
            console.error('the Request to Concert Data failed:', error);
            throw error;
        }
    }


    return (
        <>
            <main className="event-page-main">
                <h1> Concert PAge</h1>
                <form className="search-forms" onSubmit={handleSubmit}  >
                        <input require className="search-input-form" name='keyword' value={parameters.keyword} type="text" onChange={handleChange} placeholder="Search Concert..."  />
                        <select name="state" className="stateDropdown" onChange={handleChange} >
                            <option key="none" value="" >State</option>
                            {states.map((state) =>
                                <option key={state.code} value={state.code}>{state.name}</option>
                            )}
                        </select>
                    <button className="search-form-btn" type="submit">Search</button>
                </form>

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
